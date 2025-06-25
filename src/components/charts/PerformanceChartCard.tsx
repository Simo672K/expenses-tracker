"use client";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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

const PerformanceChartCard = ({
  className,
}: {
  className?: React.ReactNode;
}) => {
  return (
    <Card className={cn("shadow-none border border-gray-300", className)}>
      <CardHeader className="mb-6">
        <CardTitle
          className={cn("text-2xl flex items-center gap-3", poppins.className)}
        >
          Finance Metrics
          <div className="ms-auto flex items-center">
            <p className="text-sm font-normal me-2 text-gray-500">filter by</p>
            {
              // TODO: filter by implimentation
            }
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="This Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">This week</SelectItem>
                <SelectItem value="2">This Month</SelectItem>
                <SelectItem value="3">This Year</SelectItem>
                <SelectItem value="4">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            {/* <YAxis axisLine={false} /> */}
            <Tooltip />
            <Legend verticalAlign="top" iconType="circle" />
            <Bar dataKey="balance" fill="#3B82F6" radius={[15, 15, 15, 15]} />
            <Bar dataKey="spendings" fill="#F43F5E" radius={[15, 15, 15, 15]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
export default PerformanceChartCard;
