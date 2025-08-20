# 🌸 Soft Stride Flow

A mental health-friendly to-do app designed specifically for neurodivergent and overwhelmed users. Built with love, understanding, and gentle encouragement.

## ✨ What's Been Built

### 🎨 Beautiful UI/UX
- **Weird-Beautiful Design**: Soft gradients, organic blob shapes, and gentle animations
- **Day/Night Mode**: Soothing color palettes that adapt to your preference
- **Panic-to-Calm Toggle**: Instantly simplify the interface when overwhelmed
- **Responsive Design**: Works beautifully on all devices

### 🧠 Core Features
- **5-Task Limit**: Never more than 5 active "tiny wins" to prevent overwhelm
- **Smart Task Capture**: Quick add with text input (voice recognition ready)
- **Context Cues**: Tag tasks with energy level, mood, and time of day
- **Gentle Streaks**: Motivation without punishment
- **XP System**: Earn points for completing tasks
- **Grace Days**: Keep your streak even on tough days

### 📱 Complete Pages
1. **Landing Page**: Beautiful introduction to the app's philosophy
2. **Auth Page**: Sign up/sign in with Supabase
3. **Onboarding**: Set your name, energy level, and mood
4. **Dashboard**: Main interface with all core features
5. **Settings**: Customize appearance, privacy, and accessibility

### 🗄️ Database Schema (Ready to Deploy)
- User profiles with preferences and stats
- Tasks with full context and tracking
- Daily check-ins for mood and energy
- Streak history with grace days
- Achievement system
- Global leaderboard

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 What Needs Supabase Connection

1. **Run the migration** in `/supabase/migrations/`
2. **Connect components** to real data (currently using mock data)
3. **Enable real-time** for leaderboard updates
4. **Implement streak logic** with grace days
5. **Add offline support** with service workers

## 💜 Design Philosophy

- **No shame, only support**
- **Progress over perfection**
- **Your pace is the right pace**
- **Rest is productive too**

## 🎯 Key Features

### Tiny Wins System
- Maximum 5 active tasks
- Each task is a small, achievable goal
- Context-aware suggestions based on energy/mood

### Adaptive Experience
- Cooldown mode for missed tasks
- Panic-to-calm instant simplification
- Energy and mood-based task filtering

### Community & Motivation
- Optional global leaderboard
- Anonymous participation available
- Gentle achievement system
- Celebration without pressure

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **State**: React hooks + Context API

## 🌈 For Developers

The app is built with modularity in mind. All components are:
- Fully typed with TypeScript
- Accessible by default
- Responsive and mobile-first
- Ready for Supabase integration

See `IMPLEMENTATION_NOTES.md` for detailed integration instructions.

---

Made with 💜 for neurodivergent minds everywhere
