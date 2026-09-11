# IEEE RAS Student Chapter Website 🤖⚡

> **"Build. Automate. Innovate."**
>
> Official web platform for the **IEEE Robotics and Automation Society (IEEE RAS)** Student Chapter. Engineered with a futuristic dark blood red & electric crimson HUD visual identity, dynamic 3D WebGL hero canvas, modular TypeScript data structures, full accessibility, and responsive page design.

---

## 🌟 Key Features

- **🔴 High-Tech Visual System**: Dark blood red (`#8B0000`) and electric crimson (`#FF2A2A`) HUD aesthetic with real-time telemetry bars, monospaced metadata, and corner frames.
- **🌌 Interactive 3D Hero Visual**: HTML5 Canvas WebGL 3D kinematic robotic arm wireframe and coordinate grid responding dynamically to mouse movement.
- **📄 Complete 10-Page Architecture**:
  - `Home`: 3D hero canvas, live telemetry status, executive vision, domain carousel, featured projects, upcoming events, and CTAs.
  - `About`: IEEE & IEEE RAS global mission, chapter structure, and `LEARN ➔ BUILD ➔ COMPETE ➔ RESEARCH ➔ INNOVATE` execution pipeline.
  - `Research`: Deep dive into 10 research frontiers (SLAM, Reinforcement Learning, Swarm Robotics, Perception, HRI).
  - `Projects`: Filterable project grid with **Interactive Project Inspection Modals** (architecture, tech stack, CAD & GitHub repos).
  - `Events`: Event discovery by category with **Event Registration Modals**.
  - `Team`: Structured directory covering Faculty Advisors, Chairs, Tech Leads, and Sub-committees.
  - `Achievements`: Chronological timeline of competition victories, hackathon awards, and research papers.
  - `Gallery`: Filterable masonry visual gallery with a full-screen **Image Lightbox Modal**.
  - `Resources`: Student resource hub for ROS 2, Gazebo/Webots, OpenCV, hardware, and papers.
  - `Contact`: Direct communication interface with subject selector, form feedback states, and chapter location details.
- **📂 Decoupled Content Layer (`src/data/`)**: Update projects, events, team members, achievements, and resources by modifying TypeScript data arrays without altering UI components.
- **📱 100% Responsive & Accessible**: Optimized across mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px+) with zero horizontal overflow.

---

## 🛠️ Tech Stack & Dependencies

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Vanilla CSS Design Tokens
- **Icons**: Lucide React
- **Graphics**: HTML5 2D/3D Canvas Context API
- **Utilities**: `clsx`, `tailwind-merge`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) installed on your system.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ieee-ras-chapter.git
   cd ieee-ras-chapter
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The compiled production output will be generated in the `dist/` directory.

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Architecture

```
ieee-ras-chapter/
├── public/                 # Static assets & public media
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Sticky header with backdrop blur & mobile drawer
│   │   ├── Footer.tsx      # Chapter footer with navigation & copyright
│   │   ├── HeroCanvas.tsx  # Interactive 3D robotic arm canvas
│   │   ├── TelemetryBar.tsx # HUD system status bar
│   │   ├── SectionHeader.tsx # Standardized section title header
│   │   ├── ProjectModal.tsx # Full project inspector modal
│   │   ├── EventModal.tsx   # Event registration modal
│   │   ├── LightboxModal.tsx# Gallery image preview modal
│   │   └── JoinModal.tsx    # Chapter membership application modal
│   ├── data/               # Decoupled TypeScript content arrays
│   │   ├── domains.ts      # Research & technical domains
│   │   ├── projects.ts     # Project portfolio & specifications
│   │   ├── events.ts       # Chapter workshops, hackathons & seminars
│   │   ├── team.ts         # Member directory & faculty advisors
│   │   ├── achievements.ts # Awards & competition achievements
│   │   ├── gallery.ts      # Visual gallery media & categories
│   │   └── resources.ts    # Tools, ROS 2 packages & research links
│   ├── pages/              # Page view components (10 pages)
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Research.tsx
│   │   ├── Projects.tsx
│   │   ├── Events.tsx
│   │   ├── Team.tsx
│   │   ├── Achievements.tsx
│   │   ├── Gallery.tsx
│   │   ├── Resources.tsx
│   │   └── Contact.tsx
│   ├── App.tsx             # Client-side routing & modal controller
│   ├── index.css           # Design tokens, HUD styles & custom scrollbars
│   └── main.tsx            # Application entry point
├── .gitignore              # Ignored files & build directories
├── LICENSE                 # MIT License
├── package.json            # Scripts & project dependencies
├── tailwind.config.js      # Color system & custom theme rules
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🔧 Updating Website Content

To update projects, team members, or events, simply edit the corresponding file in `src/data/`:

- **Add a new Project**: Edit `src/data/projects.ts`
- **Add an Event**: Edit `src/data/events.ts`
- **Add a Team Member**: Edit `src/data/team.ts`
- **Add a Resource**: Edit `src/data/resources.ts`

No changes to TSX or CSS logic are required!

---

## 🌐 Deploying to GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```

2. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

Alternatively, push to GitHub and deploy automatically via **Vercel**, **Netlify**, or **GitHub Actions**.

---

## 📜 Disclaimer & License

- **IEEE Disclaimer**: This repository is created for an IEEE Student Chapter. IEEE and IEEE Robotics and Automation Society are registered trademarks of the Institute of Electrical and Electronics Engineers.
- **License**: Distributed under the [MIT License](LICENSE).
