import { z } from "zod";

const incomeSchema = z.object({
  amount: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
  type: z.union([
    z.literal("oneTime"),
    z.literal("weekly"),
    z.literal("monthly"),
  ]),
});

const purchasedItemSchema = z.object({
  name: z.string().min(3),
  price: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
  category: z.string(),
  priority: z.union([z.literal("high"), z.literal("medium"), z.literal("low")]),
});

const categorySchema = z.object({
  name: z.string().min(3),
});

type IncomeType = z.infer<typeof incomeSchema>;
type PurchasedItemType = z.infer<typeof purchasedItemSchema>;
type CategoryType = z.infer<typeof categorySchema>;

export { incomeSchema, purchasedItemSchema, categorySchema };
export type { IncomeType, PurchasedItemType, CategoryType };
