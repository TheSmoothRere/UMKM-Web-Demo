"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12">
        <div className="size-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-4">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} size={32} className="text-terracotta" />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-2">Pesan Terkirim!</h3>
        <p className="text-sm text-charcoal/60">Tim kami akan menghubungi Anda dalam 1-2 hari kerja.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-xs font-medium text-charcoal/60 mb-1.5 block">
          Nama Lengkap
        </label>
        <input
          id="name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full h-10 px-4 rounded-xl bg-cream border border-charcoal/10 text-sm outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all"
          placeholder="Masukkan nama Anda"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-medium text-charcoal/60 mb-1.5 block">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full h-10 px-4 rounded-xl bg-cream border border-charcoal/10 text-sm outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all"
          placeholder="Masukkan email Anda"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-medium text-charcoal/60 mb-1.5 block">
          Pesan
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-cream border border-charcoal/10 text-sm outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all resize-none"
          placeholder="Tulis pesan Anda di sini..."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 h-11 w-full text-sm"
      >
        Kirim Pesan
        <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-1" />
      </Button>
    </form>
  )
}
