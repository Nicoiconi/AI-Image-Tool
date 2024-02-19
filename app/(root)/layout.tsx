import MobileNav from "@/components/shared/MobileNav/MobileNav";
import SideBar from "@/components/shared/SideBar/SideBar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <SideBar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>

      <Toaster />
    </main>
  )
}
