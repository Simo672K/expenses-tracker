import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-sidebar-accent h-full flex relative">
      <Sidebar />
      <main className="flex-grow overflow-auto">
        <Navbar />
        <div className="px-8">{children}</div>
        <footer className="text-center mt-6 mb-2">
          <p className="text-gray-400 text-sm">Made by @Simo672k - 2025</p>
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
