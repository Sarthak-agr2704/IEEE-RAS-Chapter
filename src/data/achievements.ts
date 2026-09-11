export interface Achievement {
  id: string;
  year: string;
  title: string;
  category: "Competition Victory" | "Research Grant" | "IEEE Award" | "Publication";
  description: string;
  eventOrEntity: string;
  result: string;
  badge: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "achieve-2026-1",
    year: "2026",
    title: "1st Place Winner — International Autonomous Rover Grand Challenge",
    category: "Competition Victory",
    description: "Chapter rover team AURA-1 secured top honors out of 42 international university teams by achieving flawless GPS-denied autonomous waypoint navigation and terrain hazard clearance.",
    eventOrEntity: "Global Robotics Championship 2026",
    result: "1st Place (998/1000 Total Score)",
    badge: "GOLD TROPHY"
  },
  {
    id: "achieve-2026-2",
    year: "2026",
    title: "IEEE RAS Exemplary Student Branch Chapter Regional Award",
    category: "IEEE Award",
    description: "Awarded by IEEE Robotics and Automation Society Region 1-6 for outstanding technical workshops, research publications, and diversity in engineering outreach.",
    eventOrEntity: "IEEE RAS Global Committee",
    result: "Regional Chapter of the Year",
    badge: "IEEE REGIONAL HONORS"
  },
  {
    id: "achieve-2025-1",
    year: "2025",
    title: "Best Research Paper — IEEE International Conference on Robotics & Automation (ICRA Workshop)",
    category: "Publication",
    description: "Student research paper titled 'Sim-to-Real Reinforcement Learning for Compliant Quadrupedal Locomotion in Rough Terrains' accepted and presented at ICRA workshop.",
    eventOrEntity: "ICRA 2025 Workshop on Sim-to-Real",
    result: "Best Student Paper Award",
    badge: "RESEARCH PAPER"
  },
  {
    id: "achieve-2025-2",
    year: "2025",
    title: "$15,000 Autonomous Systems Equipment Research Grant",
    category: "Research Grant",
    description: "Secured competitive institutional equipment grant for acquiring 3D LiDAR sensors, high-performance edge compute platforms, and optical motion capture cameras.",
    eventOrEntity: "Engineering Innovation Fund",
    result: "$15,000 Awarded",
    badge: "EQUIPMENT GRANT"
  },
  {
    id: "achieve-2024-1",
    year: "2024",
    title: "2nd Runner Up — National Micro-UAV Swarm Flight Competition",
    category: "Competition Victory",
    description: "Recognized for decentralized UWB mesh formation control and collision avoidance in GPS-denied indoor stadium trial.",
    eventOrEntity: "National Aerial Robotics Expo",
    result: "3rd Place Podium Finish",
    badge: "BRONZE MEDAL"
  }
];
