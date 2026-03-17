"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import type { User } from "@supabase/supabase-js"
import {
  LayoutDashboard,
  Images,
  Briefcase,
  MessageSquare,
  Mail,
  Film,
  Settings,
  LogOut,
  X,
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Portfolio", href: "/admin/portfolio", icon: Images },
  { name: "Services", href: "/admin/services", icon: Briefcase },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { name: "Contact Submissions", href: "/admin/contacts", icon: Mail },
  { name: "BTS Content", href: "/admin/bts", icon: Film },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

interface AdminSidebarProps {
  user: User
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border">
        <Logo variant="light" size="sm" />
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden text-sidebar-foreground/70 hover:text-sidebar-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== "/admin" && pathname.startsWith(item.href))
          
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="px-3 py-2 mb-2">
          <p className="text-sm font-medium text-sidebar-foreground truncate">
            {user.email}
          </p>
          <p className="text-xs text-sidebar-foreground/50">Administrator</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <SidebarContent />
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:bg-sidebar">
        <div className="flex flex-col h-full">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile menu button - exposed via window for header to use */}
      <button
        id="mobile-menu-button"
        className="hidden"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open menu"
      />
    </>
  )
}

// Export a hook to open the mobile sidebar
export function useMobileSidebar() {
  return {
    open: () => {
      const button = document.getElementById("mobile-menu-button")
      if (button) button.click()
    },
  }
}
