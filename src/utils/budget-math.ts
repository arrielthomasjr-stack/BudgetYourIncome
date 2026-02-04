import { BudgetCategory, BudgetSubCategory } from "@/src/types/interfaces";

const NEEDS_BREAKDOWN = [
  { id: "rent", name: "Rent / Mortgage", percentage: 30 },
  { id: "utilities", name: "Utilities", percentage: 10 },
  { id: "food", name: "Food", percentage: 10 },
];

const WANTS_BREAKDOWN = [
  { id: "entertainment", name: "Entertainment", percentage: 10 },
  { id: "dining", name: "Dining Out", percentage: 10 },
  { id: "shopping", name: "Shopping", percentage: 10 },
];

const SAVINGS_BREAKDOWN = [
  { id: "emergency", name: "Emergency Fund", percentage: 10 },
  { id: "retirement", name: "Retirement", percentage: 10 },
];

/**
 * Convert percentage to dollar amount
 */
export function calculateAmount(income: number, percentage: number): number {
  return Math.round((income * percentage) / 100);
}

function buildSubcategories(
  income: number,
  parentId: string,
  items: { id: string; name: string; percentage: number }[],
): BudgetSubCategory[] {
  return items.map((item) => ({
    ...item,
    parentId,
    amount: calculateAmount(income, item.percentage),
  }));
}

export function generateBudget(
  income: number,
  strategy: "50-30-20" | "zero-based" | "custom",
): BudgetCategory[] {
  if (strategy === "50-30-20") {
    return [
      {
        id: "needs",
        name: "Needs",
        percentage: 50,
        amount: calculateAmount(income, 50),
        subcategories: buildSubcategories(income, "needs", NEEDS_BREAKDOWN),
      },
      {
        id: "wants",
        name: "Wants",
        percentage: 30,
        amount: calculateAmount(income, 30),
        subcategories: buildSubcategories(income, "wants", WANTS_BREAKDOWN),
      },
      {
        id: "savings",
        name: "Savings",
        percentage: 20,
        amount: calculateAmount(income, 20),
        subcategories: buildSubcategories(income, "savings", SAVINGS_BREAKDOWN),
      },
    ];
  }

  if (strategy === "zero-based") {
    return [
      {
        id: "unassigned",
        name: "Unassigned",
        percentage: 100,
        amount: income,
      },
    ];
  }

  return [];
}

/**
 * Validate category percentages
 */
export function validatePercentages(
  categories: Pick<BudgetCategory, "percentage">[],
): boolean {
  const total = categories.reduce((sum, c) => sum + c.percentage, 0);
  return total === 100;
}

export function roundToNearestTen(amount: number): number {
  return Math.round(amount / 10) * 10;
}

export function validateTotalPercentage(
  categories: { percentage: number }[],
): boolean {
  const total = categories.reduce((sum, c) => sum + c.percentage, 0);
  return total === 100;
}
