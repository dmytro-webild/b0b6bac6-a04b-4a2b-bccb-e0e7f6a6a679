"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Gem } from "lucide-react";

export default function ProdutosPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Produtos", id: "/produtos" },
    { name: "Serviços", id: "/servicos" },
    { name: "Sobre", id: "/sobre" },
    { name: "Contato", id: "/contato" }
  ];

  const footerColumns = [
    {
      title: "Navegação",              items: [
        {
          label: "Home",                  href: "/"
        },
        {
          label: "Produtos",                  href: "/produtos"
        },
        {
          label: "Serviços",                  href: "/servicos"
        },
        {
          label: "Sobre",                  href: "/sobre"
        },
        {
          label: "Contato",                  href: "/contato"
        }
      ]
    },
    {
      title: "Contato",              items: [
        {
          label: "WhatsApp",                  href: "https://wa.me/5511984516698"
        },
        {
          label: "Email",                  href: "mailto:contato@magiadobrilho.com.br"
        },
        {
          label: "Telefone",                  href: "tel:+5511984516698"
        },
        {
          label: "Localização",                  href: "#"
        }
      ]
    },
    {
      title: "Redes Sociais",              items: [
        {
          label: "Instagram",                  href: "https://instagram.com/magiadobrilho"
        },
        {
          label: "Facebook",                  href: "https://facebook.com/magiadobrilho"
        },
        {
          label: "TikTok",                  href: "https://tiktok.com/@magiadobrilho"
        },
        {
          label: "YouTube",                  href: "https://youtube.com/@magiadobrilho"
        }
      ]
    },
    {
      title: "Legal",              items: [
        {
          label: "Política de Privacidade",                  href: "#"
        },
        {
          label: "Termos de Serviço",                  href: "#"
        },
        {
          label: "Troca e Devolução",                  href: "#"
        },
        {
          label: "FAQ",                  href: "/#faq"
        }
      ]
    }
  ];

  const productsData = [
    {
      id: "1",      name: "Kit Cristais de Proteção",      price: "R$ 120,00",      imageSrc: "http://img.b2bpic.net/free-photo/view-hand-rocks-arrangement_23-2149324173.jpg?_wi=2",      imageAlt: "Kit de cristais de proteção"},
    {
      id: "2",      name: "Tarot Marselha Clássico",      price: "R$ 95,00",      imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-reading-tarot_23-2150273168.jpg?_wi=2",      imageAlt: "Tarot de Marselha"},
    {
      id: "3",      name: "Incensos Naturais Artesanais",      price: "R$ 45,00",      imageSrc: "http://img.b2bpic.net/free-photo/incense-sticks-stones-table_23-2149021422.jpg?_wi=1",      imageAlt: "Incensos artesanais"},
    {
      id: "4",      name: "Amuleto da Prosperidade",      price: "R$ 70,00",      imageSrc: "http://img.b2bpic.net/free-photo/beautiful-gemstones-jewelry_23-2149021385.jpg?_wi=1",      imageAlt: "Amuleto de prosperidade"},
    {
      id: "5",      name: "Vela Aromática Esotérica",      price: "R$ 60,00",      imageSrc: "http://img.b2bpic.net/free-photo/close-up-candle-rain_23-2147785889.jpg?_wi=2",      imageAlt: "Vela aromática"},
    {
      id: "6",      name: "Pêndulo de Radiestesia",      price: "R$ 80,00",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774384170242-d3z2ni04.avif",      imageAlt: "Pêndulo para radiestesia"}
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumLarge"
      background="aurora"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Magia Do Brilho" navItems={navItems} />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Nossos Produtos Esotéricos"
          description="Explore nossa vasta coleção de cristais, tarots, incensos e artefatos mágicos para sua jornada espiritual."
          tag="Loja Mística"
          tagIcon={Gem}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={productsData}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774384170242-d3z2ni04.avif"
          imageAlt="Noite céu lua estrelas fundo místico"
          logoText="Magia do Brilho"
          copyrightText="© 2024 Magia do Brilho | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
