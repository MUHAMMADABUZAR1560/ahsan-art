"use client"

import { Menu, Bell, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { User } from "@supabase/supabase-js"
import Link from "next/link"

interface AdminHeaderProps {
  user: User
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const openMobileSidebar = () => {
    const button = document.getElementById("mobile-menu-button")
    if (button) button.click()
  }

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={openMobileSidebar}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
          <h1 className="text-lg font-semibold font-serif">
            Ahsan Art Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/" target="_blank">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2 bg-transparent">
              <ExternalLink className="h-4 w-4" />
              View Site
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
            {user.email?.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  )
}
