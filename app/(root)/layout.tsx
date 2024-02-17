import MobileNav from "@/components/share/MobileNav/MobileNav";
import SideBar from "@/components/share/SideBar/SideBar";

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
    </main>
  )
}
