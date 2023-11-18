import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catálogo de Livros",
  description: "Catálogo de Livros Online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} h-100 d-flex flex-column`}>
        <Menu />
        <div className="container h-100 py-4">{children}</div>
      </body>
    </html>
  );
}
