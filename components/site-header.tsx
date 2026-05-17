"use client";

import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { LogoIcon } from "@/components/ui/logo-icon";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <a href="#beranda" className="flex items-center gap-2">
          <LogoIcon size={32} />
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

        <Sheet>
          <SheetTrigger
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <a href="#beranda" className="flex items-center gap-2">
                <LogoIcon size={32} />
                <span className="font-heading text-lg font-semibold tracking-tight">
                  UMKM<span className="text-terracotta">Kita</span>
                </span>
              </a>
            </SheetHeader>
            <div className="flex flex-col gap-3 px-6 mt-8">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="text-sm text-charcoal/70 hover:text-terracotta transition-colors py-1"
                    >
                      {link.label}
                    </a>
                  }
                />
              ))}
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href="#kontak"
                    className="inline-flex items-center justify-center h-8 gap-1 px-5 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-xs/relaxed font-medium whitespace-nowrap transition-all mt-2 self-start"
                  >
                    Hubungi Kami
                  </a>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
