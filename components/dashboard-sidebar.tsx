"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar" // Using the shadcn sidebar component [^1]
import {
  BookOpen,
  Home,
  BarChart2,
  FileText,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  Bookmark,
  Award,
  Clock,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r border-gray-200">
        <SidebarHeader className="py-4">
          <div className="flex items-center gap-2 px-4">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-1.5 text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-purple-700">ExamPrep</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* User Profile */}
          <div className="px-4 py-2 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Rahul Sharma</p>
                <p className="text-xs text-gray-500">rahul.sharma@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                Premium
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                UPSC Aspirant
              </Badge>
            </div>
          </div>

          {/* Main Navigation */}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/exams")}>
                <Link href="/dashboard/exams">
                  <FileText className="h-4 w-4" />
                  <span>My Exams</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/practice")}>
                <Link href="/dashboard/practice">
                  <Clock className="h-4 w-4" />
                  <span>Practice Sets</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/schedule")}>
                <Link href="/dashboard/schedule">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/analytics")}>
                <Link href="/dashboard/analytics">
                  <BarChart2 className="h-4 w-4" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/bookmarks")}>
                <Link href="/dashboard/bookmarks">
                  <Bookmark className="h-4 w-4" />
                  <span>Bookmarks</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/achievements")}>
                <Link href="/dashboard/achievements">
                  <Award className="h-4 w-4" />
                  <span>Achievements</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/profile")}>
                <Link href="/dashboard/profile">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                <Link href="/dashboard/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/help")}>
                <Link href="/help">
                  <HelpCircle className="h-4 w-4" />
                  <span>Help & Support</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button className="w-full text-left">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
