"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-12">
        <div className="size-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-4">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} size={32} className="text-terracotta" />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-2">Pesan Terkirim!</h3>
        <p className="text-sm text-muted-foreground">Tim kami akan menghubungi Anda dalam 1-2 hari kerja.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-medium text-charcoal/60">
          Nama Lengkap
        </label>
        <Input
          id="name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="bg-cream border-charcoal/10 h-10 px-4 rounded-xl"
          placeholder="Masukkan nama Anda"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium text-charcoal/60">
          Email
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="bg-cream border-charcoal/10 h-10 px-4 rounded-xl"
          placeholder="Masukkan email Anda"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-charcoal/60">
          Pesan
        </label>
        <Textarea
          id="message"
          required
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="bg-cream border-charcoal/10 px-4 py-3 rounded-xl min-h-24"
          placeholder="Tulis pesan Anda di sini..."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full h-11 w-full"
      >
        Kirim Pesan
        <HugeiconsIcon icon={ArrowRight01Icon} size={16} data-icon="inline-end" />
      </Button>
    </form>
  )
}
