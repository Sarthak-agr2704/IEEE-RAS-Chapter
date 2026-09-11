export interface Project {
  id: string;
  number: string;
  title: string;
  category: "Robotics" | "AI" | "Vision" | "Automation" | "Research" | "Drones" | "ROS";
  shortDesc: string;
  fullDesc: string;
  problem: string;
  approach: string;
  architecture: string[];
  techStack: string[];
  hardwareBOM: string[];
  status: "Completed" | "Active Research" | "In Development" | "Field Testing";
  featured: boolean;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  teamMembers: string[];
  dateCompleted: string;
}

export const projectsData: Project[] = [
  {
    id: "project-ras-rover-v2",
    number: "PROJECT 01",
    title: "AURA-1: Autonomous Terrestrial Inspection Rover",
    category: "Robotics",
    shortDesc: "An intelligent 6-wheeled rocker-bogie robotic platform designed for autonomous navigation, 3D mapping, and hazardous environment sensing.",
    fullDesc: "AURA-1 is the chapter's flagship autonomous mobile robot. Equipped with a custom 6-wheel rocker-bogie suspension mechanism, 3D LiDAR, and micro-ROS hardware node architecture, it navigates unstructured indoor and outdoor terrain without human teleoperation.",
    problem: "Navigating GPS-denied unstructured environments poses severe localization drift and mobility obstacles for conventional four-wheeled mobile robots.",
    approach: "Combined a custom 3D printed rocker-bogie chassis with multi-sensor fusion (LiDAR odometry + 9-DOF IMU + Wheel Encoders) running ROS 2 Nav2 stack on an NVIDIA Jetson Orin Nano.",
    architecture: [
      "Perception Layer: Ouster 32-channel 3D LiDAR + Stereo Depth Camera",
      "Compute Layer: NVIDIA Jetson Orin Nano (64GB) + STM32 Custom Micro-ROS Board",
      "Control Layer: Adaptive Velocity Profiler with TEB Local Planner",
      "Actuation: High-Torque Brushless Planetary Gear Motors with Encoder Feedback"
    ],
    techStack: ["ROS 2 Humble", "C++20", "Python", "Cartographer", "Nav2", "OpenCV", "Micro-ROS"],
    hardwareBOM: ["NVIDIA Jetson Orin Nano", "Ouster OS1 LiDAR", "ZED 2i Stereo Camera", "STM32F407 MCU", "Rocker-Bogie 6WD Frame"],
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ieee-ras-chapter/aura-1-rover",
    teamMembers: ["Alex Morgan", "Elena Rostova", "Kavya Patel", "David Chen"],
    dateCompleted: "March 2026"
  },
  {
    id: "project-manipulator-arm",
    number: "PROJECT 02",
    title: "KINETIX-5: 5-DOF Tactile Robotic Manipulator",
    category: "Automation",
    shortDesc: "A high-precision desktop robotic arm featuring compliant force feedback and neural grasping policy deployment.",
    fullDesc: "KINETIX-5 is an open-hardware 5-axis articulated manipulator engineered for pick-and-place precision under 0.5mm tolerance. Features custom magnetic encoder joints and strain-gauge tactile fingertip arrays.",
    problem: "Industrial robotic arms are rigid and lack low-cost adaptive force sensitivity when handling delicate or unknown geometric objects.",
    approach: "Designed modular harmonic-drive joints with strain gauge force sensing, combined with a lightweight PyTorch vision-guided grasping network.",
    architecture: [
      "Vision Pipeline: Overhead RealSense D435 camera computing 6D object pose",
      "Kinematic Controller: MoveIt 2 MoveGroup interface with custom IKFast solver",
      "Joint Actuation: Field-Oriented Control (FOC) motor drivers over CAN bus"
    ],
    techStack: ["MoveIt 2", "PyTorch", "ROS 2 Control", "C++", "SolidWorks", "CANopen"],
    hardwareBOM: ["Custom Harmonic Gears", "Brushless BLDC Motors", "Intel RealSense D435", "Teensy 4.1 Controllers"],
    status: "Active Research",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ieee-ras-chapter/kinetix-5-arm",
    teamMembers: ["Marcus Vance", "Sophia Lin", "Rohan Sharma"],
    dateCompleted: "February 2026"
  },
  {
    id: "project-swarm-uav",
    number: "PROJECT 03",
    title: "AERO-SWARM: Distributed Autonomous Quadcopter Fleet",
    category: "Drones",
    shortDesc: "A multi-agent aerial swarm system executing coordinated search and rescue patterns in GPS-denied indoor spaces.",
    fullDesc: "AERO-SWARM demonstrates decentralized multi-robot coordination. Using ultra-wideband (UWB) positioning anchors and mesh radio networking, 4 micro-quadcopters maintain dynamic formation flight without external motion capture cameras.",
    problem: "Single-drone aerial inspections are limited in range and prone to single-point failure in large collapsed structural environments.",
    approach: "Implemented consensus-based distributed trajectory generation where quadcopters continuously exchange state vectors over ESP-NOW radio mesh.",
    architecture: [
      "Localization: Decawave DWM1000 UWB real-time spatial positioning mesh",
      "Flight Controller: PX4 Autopilot running custom MAVROS onboard node",
      "Swarm Logic: Consensus protocol with collision avoidance potential fields"
    ],
    techStack: ["PX4 Autopilot", "MAVROS", "ROS 2", "Python", "Gazebo Swarm Sim", "C++"],
    hardwareBOM: ["Crazyflie 2.1 Micro Quadcopters", "DWM1000 UWB Modules", "Raspberry Pi Zero 2 W", "Optical Flow Board"],
    status: "Field Testing",
    featured: true,
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ieee-ras-chapter/aero-swarm",
    teamMembers: ["David Chen", "Sarah Jenkins", "Liam O'Connor"],
    dateCompleted: "January 2026"
  },
  {
    id: "project-neural-locomotion",
    number: "PROJECT 04",
    title: "HYDRA-QUAD: Quadruped Neural Locomotion",
    category: "AI",
    shortDesc: "Sim-to-Real reinforcement learning policy deployment on a custom 12-DOF quadruped robot.",
    fullDesc: "HYDRA-QUAD explores dynamic legged locomotion over slippery, uneven, and stepped terrain. The locomotion policy is trained inside Isaac Sim using Proximal Policy Optimization (PPO) and deployed directly onto an Onboard Jetson platform.",
    problem: "Hand-crafted state machines for quadruped gait generation fail when confronted with unpredictable surface friction and step impacts.",
    approach: "Trained an end-to-end neural policy with domain randomization (varying mass, friction, motor latency) for robust zero-shot hardware execution.",
    architecture: [
      "Simulation: Isaac Sim GPU parallel physics environment with 4096 parallel quadrupeds",
      "Policy Network: 3-layer MLP outputting joint target angles at 50Hz",
      "Hardware Controller: Custom high-frequency PD control loop at 500Hz"
    ],
    techStack: ["NVIDIA Isaac Sim", "PyTorch", "CUDA", "ROS 2", "C++"],
    hardwareBOM: ["Custom Direct-Drive Actuators", "Jetson Orin NX", "Custom Aluminum Frame", "IMU BNO085"],
    status: "Active Research",
    featured: false,
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ieee-ras-chapter/hydra-quad",
    teamMembers: ["Elena Rostova", "Marcus Vance"],
    dateCompleted: "December 2025"
  },
  {
    id: "project-vision-inspection",
    number: "PROJECT 05",
    title: "SPECTRA-EYE: Edge AI Industrial Defect Detector",
    category: "Vision",
    shortDesc: "Real-time micro-crack and surface defect inspection system for automated manufacturing lines.",
    fullDesc: "SPECTRA-EYE is a high-speed optical quality control system. Combining high-resolution macro cameras with TensorRT optimized deep learning models, it identifies microscopic manufacturing flaws in under 15 milliseconds.",
    problem: "Manual industrial inspection is slow, subjective, and causes bottlenecking in automated assembly lines.",
    approach: "Engineered a custom lighting chamber with stroboscopic LEDs synchronized to camera shutter speed, paired with a lightweight U-Net segmentation network.",
    architecture: [
      "Optics: Industrial GigE Vision camera with telecentric lens",
      "Model Pipeline: TensorRT INT8 optimized segmentation network",
      "PLC Interface: MODBUS TCP communication to industrial conveyor belt"
    ],
    techStack: ["OpenCV", "TensorRT", "Python", "PyTorch", "C++", "Qt"],
    hardwareBOM: ["Basler Industrial GigE Camera", "Jetson Xavier NX", "Telecentric Lens", "Strobe LED Ring"],
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ieee-ras-chapter/spectra-eye",
    teamMembers: ["Kavya Patel", "Alex Morgan"],
    dateCompleted: "November 2025"
  },
  {
    id: "project-bionic-hand",
    number: "PROJECT 06",
    title: "NEURO-GRIP: EMG-Controlled Bionic Prosthetic",
    category: "Research",
    shortDesc: "Myoelectric prosthetic hand using surface EMG sensors and machine learning pattern recognition.",
    fullDesc: "NEURO-GRIP reads forearm muscle electrical impulses via surface EMG electrodes, classifying user gesture intentions in real-time to actuate 5 independent motorized digits with proportional grip force.",
    problem: "Commercial myoelectric prosthetics are cost-prohibitive and limited to basic binary open/close motion patterns.",
    approach: "Designed a 3D printable mechanical hand with tendon routing and a wearable 8-channel EMG armband running a lightweight SVM gesture classifier.",
    architecture: [
      "Signal Processing: 8-channel analog EMG signal amplification and bandpass filtering (20-450Hz)",
      "Classification: On-chip random forest model mapping muscle activations to 12 hand gestures",
      "Mechanical Actuation: Micro linear actuators with flex sensor position feedback"
    ],
    techStack: ["Embedded C++", "Scikit-Learn", "Python", "KiCAD PCB", "Fusion 360"],
    hardwareBOM: ["Myoware EMG Sensors", "ESP32-S3 Microcontroller", "Micro Linear Actuators", "Flexible TPU Finger Joints"],
    status: "In Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ieee-ras-chapter/neuro-grip",
    teamMembers: ["Sophia Lin", "Rohan Sharma"],
    dateCompleted: "October 2025"
  }
];
