import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkThemeProvider } from "@/components/clerk-theme-provider";
import { SanityLive } from "@/lib/sanity/live";
import { Toaster } from "sonner";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipDash - Ship Chandling Dashboard",
  description: "Ship chandling operations, simplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkThemeProvider>{children}</ClerkThemeProvider>
        </ThemeProvider>
        <Toaster />
        <SanityLive />
      </body>
    </html>
  );
}
