"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Star } from "lucide-react";

export default function ServicesPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Produtos", id: "products" },
    { name: "Serviços", id: "services" },
    { name: "Sobre", id: "about" },
    { name: "Contato", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Navegação",
      items: [
        { label: "Home", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Serviços", href: "/servicos" },
        { label: "Sobre", href: "/sobre" },
      ],
    },
    {
      title: "Contato",
      items: [
        { label: "WhatsApp", href: "https://wa.me/5511999999999" },
        { label: "Email", href: "mailto:contato@arcanamistica.com.br" },
        { label: "Telefone", href: "tel:+5511988888888" },
        { label: "Localização", href: "#" },
      ],
    },
    {
      title: "Redes Sociais",
      items: [
        { label: "Instagram", href: "https://instagram.com/arcanamistica" },
        { label: "Facebook", href: "https://facebook.com/arcanamistica" },
        { label: "TikTok", href: "https://tiktok.com/@arcanamistica" },
        { label: "YouTube", href: "https://youtube.com/@arcanamistica" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Política de Privacidade", href: "#" },
        { label: "Termos de Serviço", href: "#" },
        { label: "Troca e Devolução", href: "#" },
        { label: "FAQ", href: "#faq" },
      ],
    },
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
        <NavbarStyleApple
          brandName="Arcana Mística"
          navItems={navItems}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Serviços Espirituais Transformadores"
          description="Descubra nossos serviços exclusivos de bruxaria e espiritualidade, conduzidos por mestres experientes"
          tag="Magia Antiga"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Agendar Agora",
              href: "/contato",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Leitura de Tarot",
              description: "Descubra os segredos do passado, presente e futuro através das cartas sagradas. Interpretação profunda e orientação espiritual.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774387788928-5e4jdzoa.jpg",
            },
            {
              id: 2,
              title: "Consultas Espirituais",
              description: "Conexão direta com sua energia vital. Identificamos bloqueios, orientamos caminhos e ativamos seu poder interior.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-book-club_23-2150062147.jpg?_wi=2",
            },
            {
              id: 3,
              title: "Limpeza Energética",
              description: "Rituais de purificação para limpar sua aura. Remove energias negativas e restaura seu bem-estar espiritual.",
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-meditation-guide-with-singing-bowls_23-2149386437.jpg?_wi=2",
            },
            {
              id: 4,
              title: "Baralho Cigano",
              description: "leitura de cartas para orientação sobre amor, trabalho, decisões, etc.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774388115189-ay740he4.jpg",
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Entre em contato Tem dúvidas sobre nossos produtos e serviços? Quer agendar uma consulta espiritual? Entre em contato através de WhatsApp, telefone ou preencha o formulário abaixo. Responderemos com a maior brevidade."
          animationType="entrance-slide"
          buttons={[
            {
              text: "WhatsApp",
              href: "https://wa.me/5511999999999",
            },
            {
              text: "Email",
              href: "mailto:contato@arcanamistica.com.br",
            },
          ]}
          background={{
            variant: "sparkles-gradient",
          }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774384774249-q72u25f1.avif"
          imageAlt="noite céu lua estrelas fundo místico"
          logoText="Arcana Mística"
          copyrightText="© 2024 Arcana Mística | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}