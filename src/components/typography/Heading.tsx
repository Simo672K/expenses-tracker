import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: Props) => {
  return (
    <h2 className={cn(poppins.className, "text-3xl font-bold mb-8", className)}>
      {children}
    </h2>
  );
};
export default Heading;
