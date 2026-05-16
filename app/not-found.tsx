import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Store04Icon } from "@hugeicons/core-free-icons"

export default function NotFound() {
  return (
    <div className="bg-cream text-charcoal min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="size-16 rounded-2xl bg-terracotta/10 flex items-center justify-center mb-6">
        <HugeiconsIcon icon={Store04Icon} size={32} className="text-terracotta" />
      </div>
      <h1 className="font-heading text-7xl sm:text-8xl leading-none tracking-tight text-terracotta mb-4">404</h1>
      <p className="text-lg text-charcoal/60 mb-8 max-w-md">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-11 gap-1 px-8 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-sm font-medium transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
