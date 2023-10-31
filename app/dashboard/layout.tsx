import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto">{children}</div>
    </div>
  );
}
