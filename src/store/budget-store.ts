import { BudgetSubCategory } from "@/src/types/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BudgetState {
  monthlyIncome: number | null;
  strategy: "50-30-20" | "zero-based" | "custom";
  customCategories: BudgetSubCategory[];

  setIncome: (income: number) => void;
  setStrategy: (strategy: BudgetState["strategy"]) => void;
  updateCategory: (id: string, percentage: number) => void;
}

export const useBudgetStore = create(
  persist<BudgetState>(
    (set) => ({
      monthlyIncome: null,
      strategy: "50-30-20",
      customCategories: [],

      setIncome: (monthlyIncome) => set({ monthlyIncome }),
      setStrategy: (strategy) => set({ strategy }),

      updateCategory: (id, percentage) =>
        set((state) => ({
          customCategories: state.customCategories.map((c) =>
            c.id === id ? { ...c, percentage } : c,
          ),
        })),
    }),
    { name: "budget-store", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
