import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive rotation & tilt
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Kinematic Robot Structure Nodes
    interface Node3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      radius: number;
      label?: string;
    }

    const nodes: Node3D[] = [];
    const numNodes = 36;
    const radius = Math.min(width, height) * 0.28;

    // Create a 3D Robotic Arm / Kinetic Hexagon Cage
    for (let i = 0; i < numNodes; i++) {
      const theta = (i / numNodes) * Math.PI * 2;
      const phi = (i % 6) * (Math.PI / 3);
      const ringR = radius * (0.4 + (i % 3) * 0.3);
      const bx = Math.cos(theta) * ringR;
      const by = Math.sin(theta) * ringR;
      const bz = (i - numNodes / 2) * 8;

      nodes.push({
        x: bx,
        y: by,
        z: bz,
        baseX: bx,
        baseY: by,
        baseZ: bz,
        radius: 3 + (i % 3),
        label: i % 4 === 0 ? `NODE_0${i}` : undefined,
      });
    }

    let angleY = 0;
    let angleX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const rotY = ((mouseX - width / 2) / width) * 0.6;
      const rotX = ((mouseY - height / 2) / height) * 0.6;

      angleY += 0.005;
      angleX = rotX;

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D nodes to 2D screen space
      const projectedNodes = nodes.map((node) => {
        // Rotate around Y
        let x1 = node.baseX * Math.cos(angleY + rotY) - node.baseZ * Math.sin(angleY + rotY);
        let z1 = node.baseX * Math.sin(angleY + rotY) + node.baseZ * Math.cos(angleY + rotY);

        // Rotate around X
        let y2 = node.baseY * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = node.baseY * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Perspective scale
        const fov = 400;
        const scale = fov / (fov + z2 + 200);

        return {
          sx: centerX + x1 * scale,
          sy: centerY + y2 * scale,
          scale,
          z: z2,
          radius: node.radius * scale,
          label: node.label,
        };
      });

      // Draw connections / kinematic struts
      ctx.lineWidth = 1;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dist = Math.hypot(n1.sx - n2.sx, n1.sy - n2.sy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35 * Math.min(n1.scale, n2.scale);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 42, 42, ${alpha})`;
            ctx.moveTo(n1.sx, n1.sy);
            ctx.lineTo(n2.sx, n2.sy);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and telemetry labels
      projectedNodes.forEach((n) => {
        // Outer glow
        const glowRadius = Math.max(1, n.radius * 2.5);
        const grad = ctx.createRadialGradient(n.sx, n.sy, 0, n.sx, n.sy, glowRadius);
        grad.addColorStop(0, 'rgba(255, 42, 42, 0.9)');
        grad.addColorStop(0.5, 'rgba(139, 0, 0, 0.5)');
        grad.addColorStop(1, 'rgba(255, 42, 42, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.sx, n.sy, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node center core
        ctx.fillStyle = n.label ? '#FFFFFF' : '#FF2A2A';
        ctx.beginPath();
        ctx.arc(n.sx, n.sy, Math.max(1, n.radius), 0, Math.PI * 2);
        ctx.fill();

        // HUD Labels for key joints
        if (n.label && n.scale > 0.8) {
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(167, 176, 190, 0.7)';
          ctx.fillText(`[${n.label}]`, n.sx + 8, n.sy + 3);
        }
      });

      // Draw subtle spatial crosshair targeting mouse
      ctx.strokeStyle = 'rgba(255, 42, 42, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(mouseX - 20, mouseY);
      ctx.lineTo(mouseX + 20, mouseY);
      ctx.moveTo(mouseX, mouseY - 20);
      ctx.lineTo(mouseX, mouseY + 20);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-75">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
