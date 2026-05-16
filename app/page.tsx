import { HugeiconsIcon } from "@hugeicons/react"
import {
  Store04Icon,
  Award01Icon,
  ShoppingBag01Icon,
  UserGroupIcon,
  StarIcon,
  QuoteUpIcon,
  Mail01Icon,
  CallIcon,
  Location01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons"
import SiteHeader from "@/components/site-header"
import AnimatedReveal from "@/components/animated-reveal"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    icon: ShoppingBag01Icon,
    title: "Produk Berkualitas",
    desc: "Menyediakan produk UMKM pilihan dengan standar mutu terbaik dan harga terjangkau.",
  },
  {
    icon: UserGroupIcon,
    title: "Pendampingan Bisnis",
    desc: "Konsultasi dan pendampingan usaha dari hulu ke hilir untuk pengembangan bisnis Anda.",
  },
  {
    icon: Award01Icon,
    title: "Garansi Kepuasan",
    desc: "Komitmen layanan purna jual yang responsif dan solutif untuk setiap pelanggan.",
  },
  {
    icon: StarIcon,
    title: "Inovasi Berkelanjutan",
    desc: "Terus beradaptasi dengan tren dan teknologi terkini untuk hasil yang optimal.",
  },
]

const products = [
  {
    title: "Koleksi Batik Cirebon",
    desc: "Kain batik tulis motif mega mendung, dikerjakan oleh perajin lokal berpengalaman.",
    tag: "Fesyen",
  },
  {
    title: "Keripik Pisang Aroma",
    desc: "Camilan renyah rasa original dan pedas manis, tanpa pengawet buatan.",
    tag: "Kuliner",
  },
  {
    title: "Furnitur Rotan Alam",
    desc: "Kursi dan meja rotan anyaman tangan, desain modern dengan sentuhan tradisional.",
    tag: "Kerajinan",
  },
]

const testimonials = [
  {
    name: "Sari Dewi",
    role: "Pemilik Butik Sari",
    quote: "Pendampingan dari tim benar-benar membantu mengembangkan usaha saya. Omset naik 3x lipat dalam 6 bulan!",
    rating: 5,
  },
  {
    name: "Ahmad Rizki",
    role: "Founder Rizki Food",
    quote: "Produk kami semakin dikenal luas setelah bermitra. Distribusi jadi lebih terstruktur dan profesional.",
    rating: 5,
  },
  {
    name: "Ratna Kusuma",
    role: "Pengrajin Rotan Cirebon",
    quote: "Senang sekali bisa bergabung dan memasarkan produk ke pasar yang lebih luas. Terima kasih tim!",
    rating: 5,
  },
]

const contactInfo = [
  { icon: CallIcon, label: "Telepon", value: "+62 812-3456-7890" },
  { icon: Mail01Icon, label: "Email", value: "hello@umkmkita.co.id" },
  { icon: Location01Icon, label: "Alamat", value: "Jl. Karamat No. 123, Cirebon, Jawa Barat" },
]

function StatCard({ value, label, icon }: { value: string; label: string; icon: typeof Store04Icon }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-charcoal/5 flex items-center gap-4">
      <div className="size-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
        <HugeiconsIcon icon={icon} size={20} className="text-terracotta" />
      </div>
      <div>
        <div className="font-heading text-2xl font-bold text-charcoal">{value}</div>
        <div className="text-xs text-charcoal/50">{label}</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-cream text-charcoal overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section id="beranda" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-terracotta/30 animate-pulse-soft" />
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse-soft animation-delay-700" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="bg-terracotta/10 text-terracotta border-terracotta/20 mb-6 h-auto px-4 py-1.5 text-xs font-medium tracking-wide rounded-full">
                #BanggaBuatanIndonesia
              </Badge>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Merek Lokal
              <br />
              <span className="text-terracotta">Naik Kelas</span>
            </h1>
            <p className="text-base sm:text-lg text-charcoal/60 max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
              Platform pemberdayaan UMKM Indonesia — dari produsen lokal ke pasar global.{" "}
              Bersama kita bangun ekonomi yang lebih kuat dari akar rumput.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
              <a
                href="#produk"
                className="inline-flex items-center justify-center h-11 gap-1 px-8 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-sm font-medium whitespace-nowrap transition-all"
              >
                Jelajahi Produk
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-1" />
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center justify-center h-11 gap-1 px-8 rounded-full ring-1 ring-charcoal/20 text-charcoal/80 hover:bg-charcoal/5 text-sm font-medium whitespace-nowrap transition-all"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          <div className="hidden lg:block mt-16 animate-fade-in-up animation-delay-500">
            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
              <StatCard value="500+" label="UMKM Binaan" icon={Store04Icon} />
              <StatCard value="50rb+" label="Produk Terjual" icon={ShoppingBag01Icon} />
              <StatCard value="4.9" label="Rating Kepuasan" icon={StarIcon} />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      {/* TENTANG */}
      <AnimatedReveal id="tentang">
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Tentang Kami</span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mt-3 mb-6">
                  Memberdayakan{" "}
                  <span className="text-terracotta">Ekonomi Lokal</span>{" "}
                  Indonesia
                </h2>
                <div className="flex flex-col gap-4 text-charcoal/60 leading-relaxed">
                  <p>
                    UMKMKita adalah platform kolaboratif yang menghubungkan pelaku usaha mikro, kecil, dan menengah
                    di Indonesia dengan pasar yang lebih luas — baik domestik maupun internasional.
                  </p>
                  <p>
                    Berdiri sejak 2020, kami telah membina lebih dari 500 UMKM di seluruh Jawa Barat, membantu mereka
                    mengoptimalkan produksi, memperkuat merek, dan memperluas jangkauan pemasaran melalui pendekatan
                    yang humanis dan berkelanjutan.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    { text: "Terdaftar Resmi Kemenkop UKM" },
                    { text: "Sertifikasi Halal & BPOM" },
                    { text: "Jaringan 50+ Kota di Indonesia" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-charcoal/70">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} className="text-terracotta shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-terracotta/20 to-gold/20 ring-1 ring-charcoal/5 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="size-20 rounded-2xl bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                      <HugeiconsIcon icon={Store04Icon} size={36} className="text-terracotta" />
                    </div>
                    <p className="text-charcoal/40 text-sm italic">Foto perusahaan akan tampil di sini</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gold/10 ring-1 ring-gold/20 flex items-center justify-center backdrop-blur-sm max-lg:hidden">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">4+</div>
                    <div className="text-[10px] text-charcoal/50">Tahun Berkiprah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedReveal>

      <Separator className="bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      {/* LAYANAN */}
      <AnimatedReveal id="layanan">
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Layanan</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mt-3">
                Apa yang <span className="text-terracotta">Kami</span> Tawarkan
              </h2>
              <p className="mt-4 text-charcoal/60 leading-relaxed">
                Solusi lengkap untuk mengembangkan usaha Anda, dari produksi hingga pemasaran.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc) => (
                <Card
                  key={svc.title}
                  className="group ring-0 bg-white rounded-2xl border border-charcoal/5 hover:border-terracotta/20 transition-all duration-300 hover:shadow-lg hover:shadow-terracotta/5"
                >
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="size-12 rounded-xl bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/15 transition-colors">
                      <HugeiconsIcon icon={svc.icon} size={24} className="text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">{svc.title}</h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{svc.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      <Separator className="bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      {/* PRODUK */}
      <AnimatedReveal id="produk">
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Produk Unggulan</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mt-3">
                Karya Anak <span className="text-terracotta">Bangsa</span>
              </h2>
              <p className="mt-4 text-charcoal/60 leading-relaxed">
                Produk-produk pilihan dari UMKM binaan kami dengan kualitas terbaik.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.title}
                  className="group ring-0 bg-white rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-lg hover:shadow-terracotta/5 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-terracotta/10 to-gold/10 flex items-center justify-center relative overflow-hidden rounded-t-lg">
                    <div className="size-16 rounded-xl bg-terracotta/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <HugeiconsIcon icon={ShoppingBag01Icon} size={28} className="text-terracotta" />
                    </div>
                    <Badge
                      variant="outline"
                      className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm border-charcoal/10 text-charcoal/70 text-[11px] font-medium"
                    >
                      {product.tag}
                    </Badge>
                  </div>
                  <CardContent className="flex flex-col gap-2 p-6">
                    <h3 className="font-heading text-lg font-semibold text-charcoal">{product.title}</h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{product.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      <Separator className="bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      {/* TESTIMONI */}
      <AnimatedReveal id="testimoni">
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Testimoni</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mt-3">
                Kata <span className="text-terracotta">Mereka</span>
              </h2>
              <p className="mt-4 text-charcoal/60 leading-relaxed">
                Pengalaman nyata dari para pelaku UMKM yang telah bermitra dengan kami.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="ring-0 bg-white rounded-2xl border border-charcoal/5 relative"
                >
                  <CardContent className="flex flex-col gap-4 p-7">
                    <HugeiconsIcon
                      icon={QuoteUpIcon}
                      size={24}
                      className="text-terracotta/15 absolute top-5 right-6"
                    />
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <HugeiconsIcon key={i} icon={StarIcon} size={14} className="text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-charcoal/70 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-heading text-sm font-semibold text-charcoal">{t.name}</div>
                      <div className="text-xs text-charcoal/40 mt-0.5">{t.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      <Separator className="bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      {/* KONTAK */}
      <AnimatedReveal id="kontak">
        <section className="py-24 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-terracotta text-sm font-medium tracking-widest uppercase">Hubungi Kami</span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mt-3 mb-6">
                  Mari <span className="text-terracotta">Berkolaborasi</span>
                </h2>
                <p className="text-charcoal/60 leading-relaxed mb-10">
                  Punya pertanyaan atau ingin bergabung? Tim kami siap membantu Anda.
                </p>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="size-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                        <HugeiconsIcon icon={item.icon} size={18} className="text-terracotta" />
                      </div>
                      <div>
                        <div className="text-xs text-charcoal/40">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="ring-0 bg-white rounded-2xl border border-charcoal/5">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedReveal>

      <Separator className="bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      {/* FOOTER */}
      <footer className="py-12 lg:py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <a href="#beranda" className="flex items-center gap-2 mb-4">
                <div className="size-8 rounded-lg bg-terracotta flex items-center justify-center">
                  <HugeiconsIcon icon={Store04Icon} size={16} color="white" />
                </div>
                <span className="font-heading text-lg font-semibold tracking-tight">
                  UMKM<span className="text-terracotta">Kita</span>
                </span>
              </a>
              <p className="text-sm text-charcoal/50 leading-relaxed max-w-sm">
                Memberdayakan UMKM Indonesia melalui kolaborasi, inovasi, dan akses pasar yang lebih luas.
                Bersama kita wujudkan ekonomi lokal yang mandiri dan berdaya saing global.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-4">Tautan</h4>
              <div className="flex flex-col gap-2.5">
                {["Beranda","Tentang","Layanan","Produk","Testimoni","Kontak"].map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-sm text-charcoal/60 hover:text-terracotta transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-4">Ikuti Kami</h4>
              <div className="flex flex-col gap-2.5 text-sm text-charcoal/60">
                <span>Instagram</span>
                <span>Facebook</span>
                <span>TikTok</span>
                <span>YouTube</span>
              </div>
            </div>
          </div>
          <Separator className="bg-charcoal/5 mb-8" />
          <div className="text-center text-xs text-charcoal/40">
            &copy; {new Date().getFullYear()} UMKMKita. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
