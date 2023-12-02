"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface SidebarProps {
  items?: NavItem[]
}

export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname()
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-72 bg-primary h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary ">
          <div className="mt-6">
            <Link href="/home" className="mx-auto mb-5 flex items-center">
              <Icons.logo />
            </Link>
          </div>
          <div className="h-7" />
          <nav>
            {items?.length ? (
              <ul>
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.isDivider ? (
                      <hr className="my-4 border-white" />
                    ) : (
                      item.href && (
                        <li>
                          <Link
                            href={item.href}
                            className={cn`sidebar-item ${
                              pathname === item.href ? "active" : ""
                            }`}
                          >
                            {item.icon}
                            {item.title}
                          </Link>
                        </li>
                      )
                    )}
                  </React.Fragment>
                ))}
              </ul>
            ) : null}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
