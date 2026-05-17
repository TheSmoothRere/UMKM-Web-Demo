import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions && repoName ? `/${repoName}` : "";
const iconPath = `${basePath}/icon.svg`;

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UMKMKita — Naik Kelas Bareng UMKM Indonesia",
    template: "%s | UMKMKita",
  },
  description:
    "Platform pemberdayaan UMKM Indonesia. Dari produsen lokal ke pasar global — bersama kita bangun ekonomi yang lebih kuat dari akar rumput.",
  keywords: [
    "UMKM",
    "UMKM Indonesia",
    "pemberdayaan UMKM",
    "produk lokal",
    "usaha mikro kecil menengah",
    "platform UMKM",
    "Indonesia",
    "Cirebon",
  ],
  authors: [{ name: "UMKMKita" }],
  creator: "UMKMKita",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "UMKMKita",
    title: "UMKMKita — Naik Kelas Bareng UMKM Indonesia",
    description:
      "Platform pemberdayaan UMKM Indonesia. Dari produsen lokal ke pasar global.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMKMKita — Naik Kelas Bareng UMKM Indonesia",
    description:
      "Platform pemberdayaan UMKM Indonesia. Dari produsen lokal ke pasar global.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: iconPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, playfairDisplay.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
