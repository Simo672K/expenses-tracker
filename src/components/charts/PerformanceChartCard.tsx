"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

const data = [
  {
    day: "Mon",
    balance: 150,
    spendings: 20,
  },
  {
    day: "Tue",
    balance: 130,
    spendings: 10,
  },
  {
    day: "Wed",
    balance: 120 + 150,
    spendings: 16,
  },
  {
    day: "Thu",
    balance: 104,
    spendings: 1,
  },
  {
    day: "Fri",
    balance: 86,
    spendings: 18,
  },
  {
    day: "Sat",
    balance: 68,
    spendings: 18,
  },
  {
    day: "Sun",
    balance: 40,
    spendings: 18,
  },
];

const PerformanceChartCard = () => {
  return (
    <Card className="mt-4 shadow-none border border-gray-300">
      <CardHeader>
        <CardTitle className={cn("text-2xl", poppins.className)}>
          Finance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            {/* <YAxis axisLine={false} /> */}
            <Tooltip />
            <Legend verticalAlign="top" radius={5} />
            <Bar dataKey="balance" fill="#155dfc" radius={[15, 15, 15, 15]} />
            <Bar dataKey="spendings" fill="#e53935" radius={[15, 15, 15, 15]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
export default PerformanceChartCard;
