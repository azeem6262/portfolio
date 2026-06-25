import type { Metadata } from "next";
import { Share_Tech, JetBrains_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const shareTech = Share_Tech({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azeem | Software Engineer",
  description: "Mohammed Azeem — Software Engineer and founder of Flickstat. Building scalable, user-centric products from Rajasthan, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${shareTech.variable} ${jetbrainsMono.variable} ${dmSerifDisplay.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
