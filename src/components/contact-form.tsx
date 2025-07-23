"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. I'll get back to you within 24 hours to discuss your bookkeeping
            needs.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Your Free Consultation</CardTitle>
        <p className="text-gray-600 text-center">
          Tell me about your business and I'll provide a customized bookkeeping solution
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" required placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" required placeholder="Doe" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input id="company" required placeholder="Your Business Name" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="service">Service-based</SelectItem>
                  <SelectItem value="restaurant">Restaurant/Food</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Just me</SelectItem>
                  <SelectItem value="2-5">2-5 employees</SelectItem>
                  <SelectItem value="6-10">6-10 employees</SelectItem>
                  <SelectItem value="11-25">11-25 employees</SelectItem>
                  <SelectItem value="25+">25+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Services Needed (check all that apply)</Label>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Daily bookkeeping",
                "Financial reporting",
                "Payroll processing",
                "Tax preparation support",
                "QuickBooks setup",
                "Monthly consultations",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox id={service} />
                  <Label htmlFor={service} className="text-sm font-normal">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell me about your bookkeeping needs</Label>
            <Textarea
              id="message"
              placeholder="Describe your current bookkeeping situation, challenges, and what you're looking for..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">When do you need to get started?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediately">Immediately</SelectItem>
                <SelectItem value="1-2weeks">Within 1-2 weeks</SelectItem>
                <SelectItem value="1month">Within 1 month</SelectItem>
                <SelectItem value="3months">Within 3 months</SelectItem>
                <SelectItem value="exploring">Just exploring options</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send My Request
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to receive communications from Live Better Bookkeeping LLC. We respect
            your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
