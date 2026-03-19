import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcana Mística - Loja Esotérica e Serviços de Bruxaria",
  description: "Descubra cristais, tarot e serviços espirituais autênticos. Leitura de tarot, consultas espirituais e rituais de magia ancestral. Transforme sua vida com Arcana Mística.",
  keywords: "loja esotérica, tarot, cristais, bruxaria, serviços espirituais, magia, energia cósmica, consultoria espiritual",
  metadataBase: new URL("https://arcanamistica.com.br"),
  alternates: {
    canonical: "https://arcanamistica.com.br",
  },
  openGraph: {
    title: "Arcana Mística - Desperte Sua Magia Interior",
    description: "Produtos esotéricos e serviços espirituais autênticos para sua transformação. Cristais, tarot, rituais e consultoria mágica.",
    url: "https://arcanamistica.com.br",
    siteName: "Arcana Mística",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/view-hand-rocks-arrangement_23-2149324173.jpg",
        alt: "Cristais esotéricos roxos e dourados brilhando com energia mágica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcana Mística - Magia e Espiritualidade",
    description: "Explore o mundo místico. Cristais sagrados, tarot e serviços espirituais transformadores.",
    images: ["http://img.b2bpic.net/free-photo/view-hand-rocks-arrangement_23-2149324173.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${openSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}