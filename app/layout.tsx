import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SortingProvider } from "@/components/Viz";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cesqua",
  description: "sorting algortithm for array data structures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SortingProvider>
          {children}
        </SortingProvider>
      </body>
    </html>
  );
}
