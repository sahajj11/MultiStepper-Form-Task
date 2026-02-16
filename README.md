# 🏎️ F1 Drive Registration | Multi-Step Glassmorphism Portal

A high-performance, multi-step registration form built with **React**, **TypeScript**, and **Tailwind CSS**. This project features a custom-themed Ferrari dashboard UI, real-time telemetry simulations, and robust data persistence.

---

## 🚀 Key Features

* **Custom F1 Stepper:** A unique racing-line progress indicator with a moving Ferrari F1 car that tracks form progression across three sectors.
* **Persistent State:** Leverages **LocalStorage** with lazy initialization. Your progress and input data survive page refreshes.
* **Glassmorphism UI:** A sleek, modern "Command Center" aesthetic using backdrop blurs and Ferrari Red accents.
* **Real-time Telemetry:** A dynamic dashboard widget that updates "Entry Phase" and "Progress Percentage" based on the active step.
* **Validation Engine:** Real-time field validation with haptic-feedback buttons and visual error states.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Frontend Library |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling & Animations |
| **LocalStorage** | Data Persistence |
| **Phone Input** | International Number Validation |

---

## 📂 Project Structure

```bash
src/
├── assets/             # Branding assets (Ferrari logos, car sprites)
├── components/
│   ├── multiStepForm/  # Step 1, 2, 3 and Success components
│   └── ui/             # Reusable UI (Stepper, Dashboard widgets)
├── types/              # TypeScript interfaces
├── App.tsx             # Main layout & background livery
└── FormContainer.tsx   # State, persistence & logic
