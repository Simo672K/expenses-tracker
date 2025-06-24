import { poppins } from "@/lib/fonts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
  color: string;
  sign: string;
  suffixIcon?: React.ReactNode;
}

const OverviewCard = ({
  title,
  content,
  icon,
  sign,
  color,
  suffixIcon,
}: Props) => {
  return (
    <Card className="py-4 gap-2 shadow-none border border-gray-300">
      <CardHeader>
        <CardTitle className={"flex gap-3 items-center text-gray-500"}>
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 flex items-center">
        <h4
          className={cn(
            "text-2xl font-medium text-gray-800",
            poppins.className,
            color
          )}
        >
          {content} {sign}
        </h4>
        <div className={cn("ms-auto", color)}>{suffixIcon}</div>
      </CardContent>
    </Card>
  );
};
export default OverviewCard;
