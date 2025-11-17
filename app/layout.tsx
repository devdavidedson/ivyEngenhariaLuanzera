import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivy Engenharia Geoespacial",
  description: "Serviços profissionais que impulsionam decisões. Dados geoespaciais estratégicos para projetos públicos e privados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

