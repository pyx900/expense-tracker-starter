# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Starter project for the [Claude Code course](https://codewithmosh.com/p/claude-code) by Mosh Hamedani. A React expense tracker that intentionally has bugs, poor UI, and messy code — meant to be improved throughout the course.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

No test framework is configured.

## Architecture

Single-page React 19 app built with Vite. No routing, no backend, no persistence — all data lives in component state and is lost on refresh.

**Entry path:** `index.html` → `src/main.jsx` → `src/App.jsx`

`App.jsx` owns the `transactions` state and composes four child components:

| Component | File | Responsibility |
|---|---|---|
| `Header` | `src/components/Header.jsx` | Static title and subtitle |
| `Summary` | `src/components/Summary.jsx` | Computes and displays income, expenses, and balance from `transactions` prop |
| `AddTransaction` | `src/components/AddTransaction.jsx` | Form with local state; calls `onAddTransaction` callback to add entries |
| `TransactionList` | `src/components/TransactionList.jsx` | Filter controls and transaction table; owns filter state locally |

Shared constants (e.g. `categories` array) live in `src/constants.js`.

No custom hooks, context providers, or routing.

**Styling:** Plain CSS in two files (`index.css` for globals, `App.css` for component styles). No CSS framework.

## Known Intentional Issues

- Transaction `amount` is stored as a string, causing the summary totals to concatenate instead of sum (the main bug)
- "Freelance Work" sample transaction is marked as `"expense"` with category `"salary"` — should be `"income"`
- No input validation beyond empty-field checks
- No delete/edit functionality for transactions
