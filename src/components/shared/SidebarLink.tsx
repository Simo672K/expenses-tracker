"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink = ({ href, icon, label }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "hover:border-l-blue-400 hover:text-blue-600 border-l-4 border-transparent p-2 flex items-center gap-2",
        path === href && "border-l-blue-400 text-blue-600"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
export default SidebarLink;
