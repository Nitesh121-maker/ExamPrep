import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-purple-50 to-indigo-50 border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-1.5 text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl text-purple-700">ExamPrep</span>
            </div>
            <p className="text-gray-600 text-sm">
              A modern Computer Based Test platform designed to help students practice and excel in their exams.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-purple-700">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-purple-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-700 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-700 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/practice-sets" className="text-gray-600 hover:text-purple-700 text-sm">
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-gray-600 hover:text-purple-700 text-sm">
                  Exams
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-purple-700 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-700">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-purple-700 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-purple-700 text-sm">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="text-gray-600 hover:text-purple-700 text-sm">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="text-gray-600 hover:text-purple-700 text-sm">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Education Street, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600 text-sm">contact@examprep.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© {currentYear} ExamPrep CBT Platform. All rights reserved.</p>
            <p className="text-gray-600 text-sm mt-2 md:mt-0">
              Managed by <span className="font-medium text-purple-700">Nitesh Chauhan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
