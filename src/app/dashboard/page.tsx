"use client";
import LastPurchasedItemsCard from "@/components/card/LastPushesedItemsCard";
import OverviewCard from "@/components/card/OverviewCard";
import SpendingsBehaviorMetricsReport from "@/components/card/SpendingsBehaviorMetricsReport";
import PerformanceChartCard from "@/components/charts/PerformanceChartCard";
import SpendingsCategoriesCard from "@/components/charts/SpendingsCategories";
import Heading from "@/components/typography/Heading";
import {
  Activity,
  BanknoteArrowDown,
  BanknoteArrowUp,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

interface OverviewData {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
  color: string;
  sign: string;
  suffixIcon?: React.ReactNode;
}

const overviewCards: Array<OverviewData> = [
  {
    id: 1,
    icon: <Wallet />,
    title: "Total Balance",
    content: "150.98",
    color: "text-gray-800",
    sign: "€",
  },
  {
    id: 2,
    icon: <BanknoteArrowUp />,
    title: "Earnings",
    content: "+0",
    color: "text-green-700",
    sign: "€",
    suffixIcon: <TrendingUp />,
  },
  {
    id: 3,
    icon: <BanknoteArrowDown />,
    title: "Spending",
    content: "-150.98",
    color: "text-red-400",
    sign: "€",
    suffixIcon: <TrendingDown />,
  },
  {
    id: 4,
    icon: <Activity />,
    title: "Performance",
    content: "-150",
    color: "text-red-400",
    sign: "%",
    suffixIcon: <TrendingDown />,
  },
];
// TODO: Spendings by category in a douhgnut chart
// TODO: list of the last items bougth with thier priority in a data table
// TODO: Spending habits report
const OverviewDashboardPage = () => {
  return (
    <div>
      <Heading>Overview</Heading>
      <section className="grid grid-cols-4 gap-8 mb-8">
        {overviewCards.map((card) => (
          <OverviewCard {...card} key={card.id} />
        ))}
      </section>
      <section className="grid grid-cols-3 gap-8 mb-8">
        <PerformanceChartCard className="col-span-2" />
        <SpendingsCategoriesCard />
      </section>
      <section className="grid grid-cols-3 gap-8">
        <LastPurchasedItemsCard className="col-span-2" />
        <SpendingsBehaviorMetricsReport />
      </section>
    </div>
  );
};
export default OverviewDashboardPage;
