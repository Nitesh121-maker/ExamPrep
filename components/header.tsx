"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X, Home, BarChart3, HelpCircle, User, LogIn } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-1.5 text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="hidden font-bold text-xl text-purple-700 md:inline-block">ExamPrep</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/about") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/contact") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/help"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/help") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            Help
          </Link>
          <Link
            href="/practice-sets"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/practice-sets") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            Practice Sets
          </Link>
          <Link
            href="/exams"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/exams") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            Exams
          </Link>
          <Link
            href="/faq"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/faq") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/support"
            className={`text-sm font-medium transition-colors hover:text-purple-700 ${
              isActive("/support") ? "text-purple-700" : "text-gray-600"
            }`}
          >
            Support Us
          </Link>
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-700" asChild>
            <Link href="/sign-in">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-gray-500 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 h-[calc(100vh-4rem)] w-full overflow-y-auto bg-white p-6 md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Contact
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-5 w-5" />
              Help
            </Link>
            <Link
              href="/practice-sets"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              Practice Sets
            </Link>
            <Link
              href="/exams"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              Exams
            </Link>
            <Link
              href="/faq"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-5 w-5" />
              FAQ
            </Link>
            <Link
              href="/support"
              className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-purple-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Support Us
            </Link>

            <div className="mt-6 flex flex-col gap-4">
              <Button variant="outline" className="w-full justify-center" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button className="w-full justify-center bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
