export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Faculty Advisor" | "Executive Board" | "Technical Leads" | "Research Division" | "Operations & Events";
  department: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "faculty-advisor",
    name: "Dr. Jonathan Hayes",
    role: "Faculty Advisor & Research Director",
    category: "Faculty Advisor",
    department: "Department of Robotics & Mechatronics",
    bio: "Associate Professor specializing in autonomous mobile robotics, multi-agent control systems, and ROS 2 spatial architecture.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "j.hayes@university.edu"
  },
  {
    id: "chair",
    name: "Alex Morgan",
    role: "Chapter Chair",
    category: "Executive Board",
    department: "Robotics Engineering (Senior)",
    bio: "Leading chapter strategy, industrial outreach, and multi-robot autonomous systems research. Project lead for AURA-1 rover.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "alex.m@ieee-ras.org"
  },
  {
    id: "vice-chair",
    name: "Elena Rostova",
    role: "Vice Chair & AI Lead",
    category: "Executive Board",
    department: "Computer Science & AI (Senior)",
    bio: "Focusing on reinforcement learning for quadruped locomotion and Sim-to-Real policy transfer in Isaac Sim.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "elena.r@ieee-ras.org"
  },
  {
    id: "tech-lead",
    name: "Marcus Vance",
    role: "Technical Lead (Hardware & Controls)",
    category: "Technical Leads",
    department: "Mechanical & Mechatronics (Junior)",
    bio: "Architecting high-frequency actuator joint drives, harmonic gearing mechanics, and embedded CAN bus control loops.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "marcus.v@ieee-ras.org"
  },
  {
    id: "vision-lead",
    name: "Kavya Patel",
    role: "Perception & Vision Lead",
    category: "Technical Leads",
    department: "Electrical & Computer Engineering (Junior)",
    bio: "Developing 3D LiDAR point cloud processing, CUDA accelerated feature matching, and real-time object segmentation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "kavya.p@ieee-ras.org"
  },
  {
    id: "research-lead",
    name: "David Chen",
    role: "Research Division Lead",
    category: "Research Division",
    department: "Aerospace & Autonomous Systems (Senior)",
    bio: "Researching decentralized quadcopter swarm dynamics, UWB positioning mesh networks, and PX4 flight stack customization.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "david.c@ieee-ras.org"
  },
  {
    id: "bionics-lead",
    name: "Sophia Lin",
    role: "Bionics & Embedded Lead",
    category: "Research Division",
    department: "Biomedical & Embedded Systems (Junior)",
    bio: "Specializing in surface EMG pattern recognition, micro-ROS firmware on STM32, and prosthetic gripper kinematics.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "sophia.l@ieee-ras.org"
  },
  {
    id: "ops-lead",
    name: "Rohan Sharma",
    role: "Operations & Events Manager",
    category: "Operations & Events",
    department: "Industrial & Systems Engineering (Junior)",
    bio: "Coordinating chapter hackathons, workshop logistics, corporate sponsorships, and IEEE RAS member engagement.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    email: "rohan.s@ieee-ras.org"
  }
];
