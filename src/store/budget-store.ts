import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type BudgetStrategy = "50-30-20" | "zero-based" | "custom";

export interface BudgetCategory {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  percentage: number; // e.g., 50, 30, 20 for 50/30/20 rule
  allocatedAmount: number;
  spentAmount: number;
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

export interface BudgetState {
  budgets: Budget[];
  currentBudget: Budget | null;
  monthlyIncome: number | null;
  strategy: BudgetStrategy | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setIncome: (income: number) => void;
  setBudgets: (budgets: Budget[]) => void;
  setCurrentBudget: (budget: Budget | null) => void;
  addBudget: (budget: Budget) => void;
  updateBudget: (budget: Budget) => void;
  deleteBudget: (budgetId: string) => void;
  addCategory: (budgetId: string, category: BudgetCategory) => void;
  updateCategory: (budgetId: string, category: BudgetCategory) => void;
  deleteCategory: (budgetId: string, categoryId: string) => void;
  updateCategorySpent: (
    budgetId: string,
    categoryId: string,
    amount: number,
  ) => void;
  setStrategy: (strategy: BudgetStrategy | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearBudgets: () => void;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set) => ({
      budgets: [],
      currentBudget: null,
      monthlyIncome: null,
      strategy: null,
      isLoading: false,
      error: null,

      setIncome: (income) => set({ monthlyIncome: income }),

      setBudgets: (budgets) => set({ budgets }),

      setCurrentBudget: (budget) => set({ currentBudget: budget }),

      addBudget: (budget) =>
        set((state) => ({
          budgets: [...state.budgets, budget],
          currentBudget: budget,
        })),

      updateBudget: (budget) =>
        set((state) => ({
          budgets: state.budgets.map((b) => (b.id === budget.id ? budget : b)),
          currentBudget:
            state.currentBudget?.id === budget.id
              ? budget
              : state.currentBudget,
        })),

      deleteBudget: (budgetId) =>
        set((state) => ({
          budgets: state.budgets.filter((b) => b.id !== budgetId),
          currentBudget:
            state.currentBudget?.id === budgetId ? null : state.currentBudget,
        })),

      addCategory: (budgetId, category) =>
        set((state) => ({
          budgets: state.budgets.map((b) =>
            b.id === budgetId
              ? { ...b, categories: [...b.categories, category] }
              : b,
          ),
          currentBudget:
            state.currentBudget?.id === budgetId
              ? {
                  ...state.currentBudget,
                  categories: [...state.currentBudget.categories, category],
                }
              : state.currentBudget,
        })),

      updateCategory: (budgetId, category) =>
        set((state) => ({
          budgets: state.budgets.map((b) =>
            b.id === budgetId
              ? {
                  ...b,
                  categories: b.categories.map((c) =>
                    c.id === category.id ? category : c,
                  ),
                }
              : b,
          ),
          currentBudget:
            state.currentBudget?.id === budgetId
              ? {
                  ...state.currentBudget,
                  categories: state.currentBudget.categories.map((c) =>
                    c.id === category.id ? category : c,
                  ),
                }
              : state.currentBudget,
        })),

      deleteCategory: (budgetId, categoryId) =>
        set((state) => ({
          budgets: state.budgets.map((b) =>
            b.id === budgetId
              ? {
                  ...b,
                  categories: b.categories.filter((c) => c.id !== categoryId),
                }
              : b,
          ),
          currentBudget:
            state.currentBudget?.id === budgetId
              ? {
                  ...state.currentBudget,
                  categories: state.currentBudget.categories.filter(
                    (c) => c.id !== categoryId,
                  ),
                }
              : state.currentBudget,
        })),

      updateCategorySpent: (budgetId, categoryId, amount) =>
        set((state) => ({
          budgets: state.budgets.map((b) =>
            b.id === budgetId
              ? {
                  ...b,
                  categories: b.categories.map((c) =>
                    c.id === categoryId ? { ...c, spentAmount: amount } : c,
                  ),
                }
              : b,
          ),
          currentBudget:
            state.currentBudget?.id === budgetId
              ? {
                  ...state.currentBudget,
                  categories: state.currentBudget.categories.map((c) =>
                    c.id === categoryId ? { ...c, spentAmount: amount } : c,
                  ),
                }
              : state.currentBudget,
        })),

      setStrategy: (strategy) => set({ strategy }),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error }),

      clearBudgets: () =>
        set({ budgets: [], currentBudget: null, monthlyIncome: null, error: null }),
    }),
    {
      name: "budget-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
