import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harshita Bisht | Software Developer",
  description:
    "Frontend developer portfolio built with Next.js, Tailwind CSS, and modern UI engineering principles.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col {inter.className}"> <PageLoader>
    {children}
  </PageLoader></body>
    </html>
  );
}
