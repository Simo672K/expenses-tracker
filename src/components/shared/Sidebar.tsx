import {
  Banknote,
  LogOut,
  Settings,
  TableProperties,
  Telescope,
} from "lucide-react";
import Link from "next/link";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const BASE_ROUTE = "#";
  const links = [
    {
      label: "Overview",
      href: BASE_ROUTE,
      icon: <Telescope />,
    },
    {
      label: "Expenses",
      href: BASE_ROUTE + "",
      icon: <Banknote />,
    },
    {
      label: "Categories",
      href: BASE_ROUTE + "",
      icon: <TableProperties />,
    },
    {
      label: "Settings",
      href: BASE_ROUTE + "",
      icon: <Settings />,
    },
  ];
  return (
    <aside className="w-72 bg-white p-6 flex flex-col">
      <h5 className="text-xl font-medium px-2">MyExpenses</h5>

      <div className="mt-5 pt-7 flex-grow border-t">
        <nav className="h-full">
          <ul className="h-full flex flex-col">
            {links.map((link, index) => (
              <li key={index} className="mt-1">
                <SidebarLink {...link} selected={index === 0} />
              </li>
            ))}
            <li className="mt-auto">
              <SidebarLink href="#" icon={<LogOut />} label="Sign out" />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
