import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-sidebar-accent h-full flex">
      <Sidebar />
      <main className="flex-grow">
        <Navbar />
        <div className="px-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
