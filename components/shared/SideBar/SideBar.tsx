"use client"

import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {

  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="flex flex-col items-center">
          {/* <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            width={180}
            height={28}
          /> */}
          <div className="text-indigo-700">
            <div className="text-[26px] font-bold">
              AI-Image-Editor
            </div>
            <div className="text-[21px]">
              AI tool to edit images
            </div>
          </div>
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {
                navLinks.slice(0, 6).map(link => {
                  const isActive = link.route === pathname
                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}
                    >
                      <Link href={link.route} className="sidebar-link">
                        <Image
                          src={link.icon}
                          alt="Logo"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>

            <ul>
              {
                navLinks.slice(6).map(link => {
                  const isActive = link.route === pathname
                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}
                    >
                      <Link href={link.route} className="sidebar-link">
                        <Image
                          src={link.icon}
                          alt="Logo"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  )
                })
              }
              <li className="cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}
