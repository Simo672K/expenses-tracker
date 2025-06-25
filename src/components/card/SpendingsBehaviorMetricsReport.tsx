import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { poppins } from "@/lib/fonts";

const SpendingsBehaviorMetricsReport = () => {
  return (
    <Card className="shadow-none border border-gray-300">
      <CardHeader>
        <CardTitle
          className={cn("text-2xl flex items-center gap-3", poppins.className)}
        >
          Spendings behavior report
        </CardTitle>
      </CardHeader>
      <CardContent>LastPushesedItemsCard</CardContent>
    </Card>
  );
};
export default SpendingsBehaviorMetricsReport;
