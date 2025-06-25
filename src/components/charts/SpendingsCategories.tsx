import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";

const data = [
  {
    name: "Groceries",
    value: 7,
  },
  {
    name: "Utilities",
    value: 16,
  },
  {
    name: "Entertainement",
    value: 32,
  },
  {
    name: "Transport",
    value: 10,
  },
  {
    name: "Cloths",
    value: 32,
  },
  {
    name: "Others",
    value: 10,
  },
];

const COLORS = [
  "#3B82F6", // Base Blue
  "#F97316", // Vivid Orange (split complement)
  "#F43F5E", // Strong Pink/Red (warm contrast)
  "#14B8A6", // Teal (cool complement)
  "#9333EA", // Vivid Purple (analogous contrast)
  "#FACC15", // Bright Yellow (sharp contrast)
];

const SpendingsCategoriesCard = () => {
  const [activeIndex, setIndex] = useState<number | null>(null);
  return (
    <Card className="shadow-none border border-gray-300">
      <CardHeader>
        <CardTitle
          className={cn(
            "text-2xl flex items-center gap-3 mb-6",
            poppins.className
          )}
        >
          Spendings by category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={120}
              paddingAngle={1.5}
              cornerRadius={7}
              onMouseEnter={(_, i) => setIndex(i)}
              onMouseLeave={() => setIndex(null)}
            >
              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i % COLORS.length]}
                  radius={5}
                  fillOpacity={
                    activeIndex === null || activeIndex === i ? 1 : 0.3
                  }
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend align="left" verticalAlign="top" layout="centric" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
export default SpendingsCategoriesCard;
