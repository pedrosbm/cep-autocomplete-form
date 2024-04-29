import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'normalize.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cep autocomplete",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
