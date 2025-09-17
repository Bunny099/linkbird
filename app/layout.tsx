import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkfly",
  description:
    "Linkfly helps you craft a professional LinkedIn profile, attract recruiters, and grow your network with ease.",
  keywords: ["Linkfly", "LinkedIn optimizer", "profile enhancer", "post generator"],
  authors: [{ name: "Jayesh Khuman (Linkfly)" }],
  openGraph: {
    title: "Linkfly – Optimize Your LinkedIn Profile",
    description:
      "Boost your LinkedIn presence with AI-powered profile optimization and content generation.",
    url: "https://linkfly-three.vercel.app",
    siteName: "Linkfly",
    images: [
      {
        url: "https://linkfly-three.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Linkfly Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkfly – Optimize Your LinkedIn Profile",
    description:
      "AI-powered LinkedIn profile optimization to stand out to recruiters.",
    images: ["https://linkfly-three.vercel.app/og-image.png"],
   
  },
  icons: {
    icon: "/fly.ico", 
  },
  metadataBase: new URL("https://linkfly-three.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >     
          {children}
        
      </body>
    </html>
  );
}
