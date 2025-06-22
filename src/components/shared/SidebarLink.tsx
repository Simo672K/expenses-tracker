import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
}

const SidebarLink = ({ href, icon, label, selected }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "hover:border-l-blue-400 hover:text-blue-600 border-l-4 border-transparent p-2 flex items-center gap-2",
        selected && "border-l-blue-400 text-blue-600"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
export default SidebarLink;
