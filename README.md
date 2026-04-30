<div align="center">
<h1>Task Manager 📐</h1>
<h3>A modern, flat-design project management dashboard optimized for speed and clarity.</h3>

**[Live Demo / Production](https://taskeye.xyz)**
</div>

---

## 🎨 The Flat Design Transformation
This application has been fully redesigned to embrace a **Confident Flat Design** philosophy:
- **Zero Artificial Depth**: No drop shadows, bevels, or gradients. Hierarchy is established entirely through pure color blocks, massive typography, and scale.
- **Snappy Interactions**: Hover states utilize smooth CSS `scale()` transformations rather than depth effects, keeping the UI feeling alive and digital-native.
- **High-Contrast Typography**: Powered by the **Outfit** geometric font family, using extra-bold weights and tight tracking for a sharp, "poster-like" appearance.
- **Vibrant Color Palette**: Built on a highly legible foundation of Pure White, Gray 900, Action Blue, and Emerald Green.

## 🚀 Stability & Performance
Beyond aesthetics, the architecture has been reinforced for heavy workloads:
- **Database Connection Queuing**: Implemented graceful connection timeouts on the backend to prevent `500` crashes during peak traffic, allowing the system to naturally pace incoming load.
- **Frontend Request Staggering**: Optimized initial page loads by sequentially fetching critical data (projects first, metadata second) rather than spamming the backend concurrently.
- **Defensive Rendering**: Enhanced React components to render safely even when background data is delayed, preventing catastrophic UI failures.

## ⚙️ Tech Stack
| Layer | Technology |
|-------|-----------|
| **Frontend** | React + TypeScript + Tailwind CSS |
| **Backend** | Express.js + Node.js |
| **Database** | PostgreSQL + Supabase |

## 🛠️ Quick Start

**1. Install Dependencies**
```bash
cd taskeye-backend && npm install
cd ../taskeye-frontend && npm install
```

**2. Start Development Servers**
```bash
# In terminal 1
cd taskeye-backend
npm run dev:all

# In terminal 2
cd taskeye-frontend
npm run dev
```
