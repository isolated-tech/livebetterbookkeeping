"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Calculator, Menu } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services & Pricing" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden bg-transparent">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between pb-6 border-b">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900">Live Better</h2>
                <p className="text-sm text-gray-600">Bookkeeping</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-6">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t pt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Call us directly</p>
              <p className="font-semibold text-gray-900">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
