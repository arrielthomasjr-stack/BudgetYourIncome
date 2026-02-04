// ============================================
// TYPE DEFINITIONS
// ============================================
// This folder contains all TypeScript interfaces and types
// used throughout the application. Centralizing types here:
// - Ensures consistency across the app
// - Makes refactoring easier
// - Provides a single source of truth for data shapes

// --------------------------------------------
// User Types
// --------------------------------------------
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

// --------------------------------------------
// Post Types (example domain entity)
// --------------------------------------------
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: User;
  createdAt: string;
  updatedAt: string;
  likes: number;
}

export interface CreatePostInput {
  title: string;
  content: string;
}

// --------------------------------------------
// API Response Types
// --------------------------------------------
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

// --------------------------------------------
// Navigation Types
// --------------------------------------------
export type RootStackParamList = {
  Home: undefined;
  Details: { postId: string };
  Profile: { userId: string };
  CreatePost: undefined;
};

// --------------------------------------------
// Component Prop Types
// --------------------------------------------
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type InputVariant = "default" | "filled" | "underline";
export type CardVariant = "elevated" | "outlined" | "filled";

// --------------------------------------------
// App State Types
// --------------------------------------------
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  theme: "light" | "dark";
}
export type BudgetStrategy = "50-30-20" | "zero-based" | "custom";

export interface BudgetCategory {
  id: string;
  name: string;
  percentage: number;
  amount: number;
  subcategories?: BudgetSubCategory[];
}

export interface Budget {
  id: string;
  userId: string;
  monthYear: string; // e.g., "2026-01"
  totalIncome: number;
  categories: BudgetCategory[];
  createdAt: string;
  updatedAt: string;
}
export interface BudgetSubCategory {
  id: string;
  name: string;
  percentage: number;
  amount: number;
  parentId: string;
}
