# 💰 Advanced MUI Finance Tracker Dashboard

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![MUI](https://img.shields.io/badge/Material--UI-v5.0.0-blue?logo=mui)
![Recharts](https://img.shields.io/badge/Recharts-2.12.0-blue)

A modern, highly interactive, and responsive personal finance dashboard built with **React**, **TypeScript**, and **Material UI (MUI)**. 

This project goes beyond a static UI layer—it demonstrates a robust, production-ready architecture with **Global State Management**, **Dark Mode**, and **Real-time Data Visualizations**. It serves as a comprehensive portfolio piece showcasing advanced frontend development patterns.

---

## ✨ Features & Capabilities

### 1. 🌍 Dynamic Global State (React Context API)
The dashboard operates on a single source of truth (`FinanceContext`). 
* **Real-time Reactivity:** Adding a new transaction via the floating action button instantly recalculates your Total Balance, Income, Expenses, updates the Area Chart, adjusts the Donut Chart, and pushes the new record to the Recent Transactions list.
* **Smart Computations:** Uses `useMemo` to optimally compute stats and group expenses by category on the fly.

### 2. 🌓 Dark / Light Mode Theming (`AppThemeProvider`)
* Deeply integrated theme toggling using MUI's `ThemeContext` and `createTheme`.
* Seamlessly switches between a clean white layout and a premium deep-blue `(#0a1929)` dark mode aesthetic, often seen in top-tier fintech apps and crypto exchanges.
* UI components (Cards, Sidebars, AppBars, text colors) auto-adapt to the selected theme seamlessly.

### 3. 📊 Advanced Data Visualization (`Recharts`)
* **Dual-Line Area Chart:** Displays monthly Income vs. Expenses over time `(FinanceOverview.tsx)`.
* **Dynamic Donut Chart:** Groups user expenses by category (Food, Transport, Groceries) and dynamically renders a beautiful `PieChart` with a centered total value `(ExpenseCategories.tsx)`.

### 4. 🧩 Interactive Widgets & Components
* **FAB Transaction Manager:** A floating action button that opens a categorized Dialog for logging new Income or Expenses.
* **Quick Transfer:** Simulated form to send money to contacts, instantly dispatching an 'Expense' into the global state.
* **Subscription Manager:** A clean widget monitoring recurring payments, pricing, and active status.
* **Recent Transactions:** A live feed of the newest financial activities, auto-assigning distinct icons and colors based on transaction type (Income vs. Expense). 
* **Responsive 8/4 Grid Layout:** Adapts beautifully from wide desktop screens (8-column main content, 4-column side widgets) down to single-column mobile views.

---

## 🛠 Tech Stack

* **Framework:** [React 18](https://reactjs.org/) (via Vite)
* **Language:** [TypeScript](https://www.typescriptlang.org/) for robust type safety.
* **UI Library:** [Material UI (MUI v5)](https://mui.com/)
* **Charts:** [Recharts](https://recharts.org/)
* **Icons:** `@mui/icons-material`

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Finance-Tracker-MUI.git
   cd Finance-Tracker-MUI/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` (or the port provided by Vite) in your browser.

---

## 📂 Architecture & Project Structure

The project is structured logically to separate concerns (State vs. Presentation):

```text
src/
├── context/
│   ├── FinanceContext.tsx    # Global state for transactions, stats, and charts
│   └── ThemeContext.tsx      # Global Light/Dark mode toggling logic
├── data/
│   └── dashBoardData.ts      # Seed data loaded initially into the Context
├── App_components/
│   ├── ContentOfSite/
│   │   ├── Site_components/
│   │   │   ├── Main_components/  # All Dashboard Widgets
│   │   │   │   ├── StatCard.tsx
│   │   │   │   ├── ExpenseCategories.tsx  # Recharts Donut Chart
│   │   │   │   ├── FinanceOverview.tsx    # Recharts Area Chart
│   │   │   │   ├── FloatingAddButton.tsx  # Add Transaction Logic
│   │   │   │   ├── QuickTransfer.tsx
│   │   │   │   ├── RecentTransactionsList.tsx
│   │   │   │   └── SubscriptionManager.tsx
│   │   │   ├── Main.tsx          # 8/4 Grid Layout composer
│   │   │   └── Header.tsx        # Top App Bar with Dark Mode Switch
│   │   └── EntireSite.tsx        # Content Wrapper
│   └── SideBarOfSite/            # Left Navigation Drawer
│       ├── SideBar.tsx
│       └── SideBar_components/   # Nav buttons, user profile logic
├── App.tsx                       # Root component wrapping Providers
└── index.css                     # Global resets
```

---

## 💡 How It Works Under The Hood
When a user submits a new transaction through the `FloatingAddButton`:
1. It calls `addTransaction()` exposed by the `FinanceContext`.
2. The context pushes the new object to its `transactions` array.
3. React's `useMemo` hooks instantly recalculate `totalBalance`, `totalIncome`, `totalExpenses`, and `expenseCategoriesData`.
4. All child components (Stat Cards, Charts, Lists) reading from the Context automatically re-render to reflect the new state synchronously.

---

> Designed & developed with a focus on clean modular UI, complex component state management, and modern React best practices.
