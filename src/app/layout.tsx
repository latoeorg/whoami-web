import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-providers";
import { SiteFooter, SiteHeader } from "@/components/app";

import "./globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Whoami",
  description: "a Personal API for your digital identity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whoami.lazlanrafar.com",
    siteName: "Whoami",
    images: [
      {
        url: "https://iili.io/JIDNu0N.png",
        width: 1200,
        height: 630,
        alt: "Whoami",
      },
    ],
  },
  twitter: {
    title: "Whoami",
    site: "@lazlanrafar",
    description: "a Personal API for your digital identity",
    images: [
      {
        url: "https://iili.io/JIDNu0N.png",
        width: 1200,
        height: 620,
        alt: "Whoami",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", jetBrains.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 flex flex-col">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
