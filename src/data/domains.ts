export interface Domain {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  technologies: string[];
  metrics: string;
}

export const domainsData: Domain[] = [
  {
    id: "robotics",
    number: "01",
    title: "ROBOTICS & KINEMATICS",
    shortDesc: "Kinematic modeling, manipulator dynamics, spatial transformations, and mechanical actuation design.",
    fullDesc: "Designing rigid and soft robotic manipulators, mobile bases, and linkage mechanisms. Focused on precise position control, multi-DOF trajectory execution, dynamic load calculation, and physical prototype assembly.",
    iconName: "Bot",
    technologies: ["ROS 2", "SolidWorks", "Forward/Inverse Kinematics", "URDF", "Actuator Control"],
    metrics: "12 Actuator Platforms Built"
  },
  {
    id: "autonomous-systems",
    number: "02",
    title: "AUTONOMOUS NAVIGATION & SLAM",
    shortDesc: "Simultaneous Localization and Mapping, path planning algorithms, and obstacle avoidance systems.",
    fullDesc: "Developing navigation stacks for wheeled and tracked autonomous mobile robots (AMRs). Incorporating 2D/3D LiDAR, wheel odometry, and IMU sensor fusion using extended Kalman filters (EKF) and Nav2.",
    iconName: "Compass",
    technologies: ["ROS 2 Nav2", "Cartographer", "AMCL", "LiDAR Sensor Fusion", "A* / TEB Planner"],
    metrics: "99.2% Mapping Precision"
  },
  {
    id: "artificial-intelligence",
    number: "03",
    title: "ARTIFICIAL INTELLIGENCE & RL",
    shortDesc: "Deep reinforcement learning, neural motion planning, and adaptive control policy deployment.",
    fullDesc: "Training neural controllers for adaptive locomotion and target tracking. Applying reinforcement learning algorithms (PPO, SAC) in Isaac Sim and transferring trained policies directly onto physical robotic hardware.",
    iconName: "BrainCircuit",
    technologies: ["PyTorch", "NVIDIA Isaac Sim", "Reinforcement Learning", "ONNX", "Edge AI"],
    metrics: "Zero-Shot Sim-to-Real Transfer"
  },
  {
    id: "computer-vision",
    number: "04",
    title: "COMPUTER VISION & PERCEPTION",
    shortDesc: "Real-time object recognition, 3D point cloud processing, stereo visual odometry, and semantic segmentation.",
    fullDesc: "Equipping mobile robots and drones with visual awareness. Utilizing depth sensors (Intel RealSense, Stereolabs ZED) to compute spatial maps, detect obstacles in real-time, and execute object pick-and-place routines.",
    iconName: "Eye",
    technologies: ["OpenCV", "YOLOv8", "PCL (Point Cloud Library)", "CUDA", "TensorRT"],
    metrics: "60 FPS Stereo Pipeline"
  },
  {
    id: "embedded-systems",
    number: "05",
    title: "EMBEDDED SYSTEMS & FIRMWARE",
    shortDesc: "Real-time operating systems (FreeRTOS), microcontrollers, CAN bus architecture, and low-latency motor control.",
    fullDesc: "Building the neural network of hardware hardware. Engineering microsecond-precise firmware on STM32 and ESP32 platforms, managing high-throughput CAN bus communications, and power management circuits.",
    iconName: "Cpu",
    technologies: ["STM32 / ARM Cortex", "FreeRTOS", "Micro-ROS", "CAN Bus", "Embedded C++"],
    metrics: "< 1ms Control Loop Latency"
  },
  {
    id: "control-systems",
    number: "06",
    title: "CONTROL SYSTEMS & DYNAMICS",
    shortDesc: "Feedback loops, Model Predictive Control (MPC), PID optimization, and state space modeling.",
    fullDesc: "Ensuring dynamic stability in balance-critical robots such as inverted pendulum systems, quadrupeds, and high-speed drones. Implementing non-linear control strategies and Kalman filtering.",
    iconName: "Gauge",
    technologies: ["MATLAB / Simulink", "Model Predictive Control", "PID Controllers", "State Estimators"],
    metrics: "100Hz Frequency Loop"
  },
  {
    id: "drones-uavs",
    number: "07",
    title: "DRONES & UAV SYSTEMS",
    shortDesc: "Aerial robotics, PX4 flight stack, GPS-denied indoor navigation, and swarm formation control.",
    fullDesc: "Designing autonomous aerial vehicles capable of inspecting confined structures and carrying sensors into challenging environments. Integrated with optical flow sensors and visual-inertial odometry (VIO).",
    iconName: "Zap",
    technologies: ["PX4 Autopilot", "MAVLink", "Gazebo Simulator", "Visual-Inertial Odometry"],
    metrics: "GPS-Denied Autonomous Flight"
  },
  {
    id: "humanoid-robotics",
    number: "08",
    title: "HUMANOID & BIONICS",
    shortDesc: "Bipedal walking mechanics, prosthetic hands, compliant joint actuation, and human-robot interaction.",
    fullDesc: "Exploring natural human-machine interaction and bipedal dynamic walking. Developing tendon-driven prosthetic grippers and tactile force feedback sensors for delicate manipulation.",
    iconName: "UserCheck",
    technologies: ["Compliant Actuation", "Force/Torque Sensing", "Zero Moment Point (ZMP)", "CAD"],
    metrics: "12-DOF Bipedal Prototype"
  }
];
