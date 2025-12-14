"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

interface LeadFormProps {
  variant?: "full" | "short"
  className?: string
}

export function LeadForm({ variant = "short", className }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We&apos;ve received your information and will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" required placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" required placeholder="Smith" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" required placeholder="(416) 555-0123" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>

      {variant === "full" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="city">City (Ontario) *</Label>
            <Input id="city" required placeholder="Toronto" />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="goal">Mortgage Goal *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select your goal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first-time">First-Time Home Buyer</SelectItem>
            <SelectItem value="refinance">Refinancing</SelectItem>
            <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
            <SelectItem value="reverse">Reverse Mortgage</SelectItem>
            <SelectItem value="second">Second Mortgage</SelectItem>
            <SelectItem value="self-employed">Self-Employed Mortgage</SelectItem>
            <SelectItem value="investment">Investment Property</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {variant === "full" && (
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea id="notes" placeholder="Tell us more about your situation..." rows={4} />
        </div>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Get Started"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to be contacted about mortgage services.
      </p>
    </form>
  )
}
