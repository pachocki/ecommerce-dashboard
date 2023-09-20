import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import { ModalProvider } from "@/providers/modalProvider";

import "./globals.css";
import ToastProvider from "@/providers/toastProvider";
import { ThemeProvider } from "@/providers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Dashboard",
  description: "E-Commerce Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
