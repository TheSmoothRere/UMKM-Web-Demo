import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Store04Icon } from "@hugeicons/core-free-icons"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/components/ui/empty"

export default function NotFound() {
  return (
    <Empty className="min-h-screen bg-cream">
      <EmptyMedia variant="icon" className="size-16 rounded-2xl bg-terracotta/10">
        <HugeiconsIcon icon={Store04Icon} size={32} className="text-terracotta" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle className="font-heading text-7xl sm:text-8xl leading-none tracking-tight text-terracotta">
          404
        </EmptyTitle>
        <EmptyDescription className="text-lg text-charcoal/60">
          Halaman yang Anda cari tidak ditemukan.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 gap-1 px-8 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-sm font-medium transition-all"
        >
          Kembali ke Beranda
        </Link>
      </EmptyContent>
    </Empty>
  )
}
