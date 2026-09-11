export interface EventItem {
  id: string;
  title: string;
  category: "Workshop" | "Hackathon" | "Technical Talk" | "Robotics Competition" | "Research Seminar" | "Hands-on Session";
  date: string;
  time: string;
  location: string;
  status: "Upcoming" | "Past";
  featured: boolean;
  shortDesc: string;
  fullDesc: string;
  speaker?: string;
  registrationOpen: boolean;
  registrationUrl?: string;
  image: string;
  agenda?: string[];
  prerequisites?: string[];
}

export const eventsData: EventItem[] = [
  {
    id: "event-ros2-bootcamp",
    title: "ROS 2 Humble & Nav2 Hands-On Masterclass",
    category: "Workshop",
    date: "October 18, 2026",
    time: "10:00 AM - 04:00 PM EST",
    location: "IEEE Robotics Lab // Hall B",
    status: "Upcoming",
    featured: true,
    shortDesc: "Comprehensive 6-hour intensive workshop covering ROS 2 nodes, publisher/subscriber architecture, URDF modeling, and Nav2 autonomous mapping.",
    fullDesc: "Join IEEE RAS for a deep-dive technical boot camp on ROS 2 Humble. Participants will configure micro-ROS nodes on STM32 microcontrollers, simulate a differential drive robot in Gazebo Ignition, and execute SLAM autonomous navigation missions.",
    speaker: "Dr. Jonathan Hayes (Robotics Research Lab Lead)",
    registrationOpen: true,
    registrationUrl: "#register",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    agenda: [
      "10:00 AM - Introduction to ROS 2 Computational Graph & CLI",
      "11:30 AM - Building Custom URDF & Gazebo Physics Simulation",
      "01:30 PM - LiDAR SLAM & Cartographer Point Cloud Mapping",
      "03:00 PM - Deploying Nav2 Stack on Real Hardware Rovers"
    ],
    prerequisites: ["Basic C++ or Python experience", "Laptop with Ubuntu 22.04 or Docker installed"]
  },
  {
    id: "event-bot-hackathon-2026",
    title: "ROBO-HACK 2026: 36-Hour Autonomous Challenge",
    category: "Hackathon",
    date: "November 06-08, 2026",
    time: "Starts 06:00 PM Friday",
    location: "Innovation Hub & Robotics Arena",
    status: "Upcoming",
    featured: true,
    shortDesc: "Annual chapter hackathon where student teams design, assemble, and program autonomous obstacle-clearing robots from raw components.",
    fullDesc: "ROBO-HACK 2026 brings together 150+ student engineers, coders, and makers. Teams will be supplied with hardware starter kits (microcontrollers, sensors, motors, structural extrusions) and challenged to build an autonomous rover capable of locating and sorting hazard canisters.",
    speaker: "IEEE RAS Executive Panel",
    registrationOpen: true,
    registrationUrl: "#register",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    agenda: [
      "Fri 06:00 PM - Problem Reveal & Hardware Kit Distribution",
      "Sat 12:00 PM - Mid-Hackathon Kinematic Checkpoint & Mentorship",
      "Sun 10:00 AM - Arena Qualifying Trials",
      "Sun 02:00 PM - Final Championship Arena Demonstration & Awards"
    ],
    prerequisites: ["Open to all undergraduate and graduate student teams (2-4 members)"]
  },
  {
    id: "event-ai-robotics-seminar",
    title: "Research Symposium: Sim-to-Real Transfer in Legged Robotics",
    category: "Research Seminar",
    date: "December 02, 2026",
    time: "02:00 PM - 04:00 PM EST",
    location: "Auditorium 101 & Virtual Stream",
    status: "Upcoming",
    featured: false,
    shortDesc: "Keynote presentation on GPU-accelerated physics simulation and domain randomization for quadruped locomotion.",
    fullDesc: "Guest research lecture highlighting recent breakthroughs in reinforcement learning policies deployed on dynamic quadrupeds and humanoid robots. Hosted in partnership with university robotics laboratories.",
    speaker: "Prof. Aris Thorne (Autonomous Systems Institute)",
    registrationOpen: true,
    registrationUrl: "#register",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    agenda: [
      "02:00 PM - Keynote: GPU Accelerated Physics in Isaac Sim",
      "02:45 PM - Hardware Constraints and Sim-to-Real Gap Mitigation",
      "03:30 PM - Open Q&A Session & Networking"
    ],
    prerequisites: ["General interest in Machine Learning & Robotics Dynamics"]
  },
  {
    id: "event-drone-racing-2025",
    title: "Autonomous UAV Indoor Navigation Challenge",
    category: "Robotics Competition",
    date: "April 12, 2025",
    time: "09:00 AM - 05:00 PM EST",
    location: "Campus Indoor Athletics Arena",
    status: "Past",
    featured: false,
    shortDesc: "Competition featuring autonomous micro-drones navigating an indoor obstacle course without pilot intervention.",
    fullDesc: "Student teams deployed vision-guided autonomous flight algorithms to navigate quadcopters through dynamic hoops and narrow tunnels using onboard cameras.",
    speaker: "IEEE RAS Flight Committee",
    registrationOpen: false,
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80",
    agenda: [
      "09:00 AM - Drone Inspection & Safety Verification",
      "11:00 AM - Time-Trial Qualification Heat",
      "03:00 PM - Head-to-Head Autonomous Obstacle Finals"
    ]
  },
  {
    id: "event-opencv-workshop-2025",
    title: "Real-Time Computer Vision & CUDA Acceleration",
    category: "Workshop",
    date: "February 20, 2025",
    time: "01:00 PM - 05:00 PM EST",
    location: "Computer Science Lab 3",
    status: "Past",
    featured: false,
    shortDesc: "Hands-on tutorial on OpenCV matrix operations, YOLOv8 object detection, and TensorRT GPU deployment.",
    fullDesc: "Participants constructed real-time tracking pipelines on NVIDIA Jetson developer boards, learning image filtering, feature extraction, and neural model quantization.",
    speaker: "Kavya Patel (IEEE RAS Vision Lead)",
    registrationOpen: false,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
  }
];
