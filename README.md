# Modern Portfolio Website

A sleek, responsive, and interactive personal portfolio website built with **React**, **Vite**, and **Framer Motion**. This project features a dynamic particle background, dark/light mode toggle, and smooth scroll animations.

## 🚀 Features

- **Dynamic UI/UX**: Built with Framer Motion for smooth animations and transitions.
- **Particle Background**: Interactive background using `tsparticles`.
- **Dark/Light Mode**: Toggle between themes seamlessly.
- **Responsive Design**: Fully optimized for various screen sizes.
- **Sections**:
  - **Home**: Brief introduction.
  - **About**: Personal profile and experience.
  - **Tools**: Technical skills and tools.
  - **Projects**: Showcase of recent work.
  - **Certificates**: Academic and professional certifications.
  - **Contact**: Get in touch via a contact form.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Effects**: [TsParticles](https://particles.js.org/)

## 📂 Project Structure

```text
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components (Home, About, Navbar, etc.)
│   ├── data/            # Project, education, and experience data
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles and theme tokens
│   └── main.jsx         # Entry point
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### 🏗️ Build

Build the production-ready bundle:
```bash
npm run build
```

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds the app for production. |
| `npm run lint` | Runs ESLint to check for code quality. |
| `npm run preview` | Previews the production build locally. |

---

Developed with ❤️ by [Your Name]
