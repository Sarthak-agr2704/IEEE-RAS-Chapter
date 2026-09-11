export interface ResourceItem {
  id: string;
  title: string;
  category: "ROS 2" | "Computer Vision" | "Hardware & Embedded" | "Simulation" | "IEEE Research Papers";
  type: "Documentation" | "GitHub Repository" | "Cheat Sheet" | "Video Course" | "Official Specs";
  description: string;
  link: string;
  recommendedFor: string;
  tags: string[];
}

export const resourcesData: ResourceItem[] = [
  {
    id: "res-1",
    title: "ROS 2 Humble Docs & Nav2 Tutorials",
    category: "ROS 2",
    type: "Documentation",
    description: "Official documentation for ROS 2 Humble Hawksbill LTS. Includes action servers, lifecycle nodes, TF2 transforms, and Nav2 costmap layers.",
    link: "https://docs.ros.org/en/humble/",
    recommendedFor: "All Autonomous Mobile Robot (AMR) Developers",
    tags: ["ROS 2", "Nav2", "Cartographer", "C++", "Python"]
  },
  {
    id: "res-2",
    title: "NVIDIA Isaac Sim & Gym Reinforcement Learning Setup Guide",
    category: "Simulation",
    type: "Documentation",
    description: "Step-by-step setup guide for GPU-accelerated photorealistic simulation, synthetic data generation, and domain randomization.",
    link: "https://developer.nvidia.com/isaac-sim",
    recommendedFor: "AI & Neural Locomotion Researchers",
    tags: ["Isaac Sim", "PyTorch", "Omniverse", "RL"]
  },
  {
    id: "res-3",
    title: "OpenCV 4.x CUDA Accelerated C++ API Reference",
    category: "Computer Vision",
    type: "Cheat Sheet",
    description: "Comprehensive guide for GpuMat matrix operations, feature extraction (ORB, SIFT), optical flow, and TensorRT model deployment.",
    link: "https://docs.opencv.org/4.x/",
    recommendedFor: "Perception & Stereo Camera Developers",
    tags: ["OpenCV", "CUDA", "C++", "TensorRT"]
  },
  {
    id: "res-4",
    title: "PX4 Autopilot Firmware & MAVROS Guide",
    category: "Hardware & Embedded",
    type: "GitHub Repository",
    description: "Open-source flight control software for drone swarms, optical flow positioning, and offboard MAVLink mission control.",
    link: "https://px4.io/",
    recommendedFor: "Aerial Robotics & Drone Engineers",
    tags: ["PX4", "MAVLink", "PX4 Autopilot", "Micro-ROS"]
  },
  {
    id: "res-5",
    title: "IEEE Xplore Open Access Robotics Papers Archive",
    category: "IEEE Research Papers",
    type: "Official Specs",
    description: "Direct link to IEEE Transactions on Robotics (T-RO) and ICRA open-access papers for state-of-the-art literature review.",
    link: "https://ieeexplore.ieee.org/",
    recommendedFor: "Research Students & Paper Authors",
    tags: ["IEEE T-RO", "ICRA", "IROS", "Literature Review"]
  },
  {
    id: "res-6",
    title: "Micro-ROS for STM32 & ESP32 Microcontrollers",
    category: "Hardware & Embedded",
    type: "GitHub Repository",
    description: "Bridge resource connecting low-power embedded microcontrollers directly into ROS 2 computational graphs via XRCE-DDS protocol.",
    link: "https://micro.ros.org/",
    recommendedFor: "Embedded Systems & Firmware Developers",
    tags: ["Micro-ROS", "STM32", "ESP32", "FreeRTOS", "CAN Bus"]
  }
];
