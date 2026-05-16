"use client"

import { useState, useEffect } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Store04Icon, Menu01Icon } from "@hugeicons/core-free-icons"

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <a href="#beranda" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-terracotta flex items-center justify-center">
            <HugeiconsIcon icon={Store04Icon} size={16} color="white" />
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight">
            UMKM<span className="text-terracotta">Kita</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/70 hover:text-terracotta transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="inline-flex items-center justify-center h-8 gap-1 px-5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-xs/relaxed font-medium whitespace-nowrap transition-all"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={Menu01Icon} size={24} />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-charcoal/70 hover:text-terracotta transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="inline-flex items-center justify-center h-8 gap-1 px-5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-xs/relaxed font-medium whitespace-nowrap transition-all mt-2 w-fit"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  )
}
