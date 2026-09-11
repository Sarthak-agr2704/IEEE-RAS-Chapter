export interface GalleryItem {
  id: string;
  title: string;
  category: "Events" | "Workshops" | "Projects" | "Competitions" | "Behind the Scenes";
  image: string;
  caption: string;
  date: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "AURA-1 Field Testing on Rocky Terrain",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    caption: "AURA-1 rover undergoing 3D point cloud mapping and obstacle navigation trials outdoor.",
    date: "March 2026"
  },
  {
    id: "gal-2",
    title: "ROBO-HACK Arena Trials",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    caption: "Student teams monitoring live autonomous navigation telemetries in the competition arena.",
    date: "November 2025"
  },
  {
    id: "gal-3",
    title: "ROS 2 Hardware Integration Session",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    caption: "Chapter members wiring micro-ROS CAN bus nodes and debugging STM32 motor controllers.",
    date: "October 2025"
  },
  {
    id: "gal-4",
    title: "KINETIX-5 Kinematic Joint Calibration",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    caption: "Precision joint encoder alignment and MoveIt 2 trajectory calibration in the lab.",
    date: "February 2026"
  },
  {
    id: "gal-5",
    title: "Autonomous Quadcopter Swarm Test",
    category: "Events",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80",
    caption: "Decentralized mesh formation flight inside the university athletics dome.",
    date: "January 2026"
  },
  {
    id: "gal-6",
    title: "Edge Vision Defect Inspector Bench",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    caption: "High-speed camera optics paired with NVIDIA Jetson Xavier processing manufacturing samples.",
    date: "November 2025"
  }
];
