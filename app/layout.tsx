import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "Notepad app that enables you work better,faster and more convient to use",

  icons:{
   icon:[
      {
        media: "(prefers-color-scheme:light)",
        url: "/N no-background.png",
        href: "/N no-background.png"
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/N dark no-background.png",
        href: "/N dark no-background.png"
      },
  ]
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="notion-theme">
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
