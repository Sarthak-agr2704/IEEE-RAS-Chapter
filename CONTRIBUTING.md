# Contributing to IEEE RAS Student Chapter Website 🤖

Thank you for your interest in contributing to our IEEE Robotics & Automation Society Student Chapter website!

## 🚀 How to Contribute

### 1. Reporting Issues
If you find a bug, visual glitch, broken link, or accessibility issue, please open an Issue on GitHub with:
- A clear, descriptive title.
- Steps to reproduce the issue.
- Screen resolution / device details where applicable.

### 2. Updating Content
For updating team rosters, adding new projects, scheduling upcoming workshops, or listing achievements:
1. Navigate to `src/data/`.
2. Modify the relevant TypeScript file (`projects.ts`, `events.ts`, `team.ts`, `resources.ts`, etc.).
3. Test locally using `npm run dev`.
4. Open a Pull Request.

### 3. Code Contributions
- Maintain the **Dark Blood Red & Electric Crimson HUD Design System** (`#05070B`, `#8B0000`, `#FF2A2A`).
- Ensure all new UI components are responsive across 375px, 768px, 1024px, and 1440px breakpoints.
- Avoid introducing heavy third-party UI libraries without prior discussion.

---

## 🛠️ Pull Request Checklist

Before submitting a Pull Request, ensure:
- [ ] Code builds without errors: `npm run build`.
- [ ] TypeScript type checks pass cleanly without `any` overrides.
- [ ] No hardcoded personal or non-public official details are added.
- [ ] Responsive behavior is tested across mobile and desktop devices.
