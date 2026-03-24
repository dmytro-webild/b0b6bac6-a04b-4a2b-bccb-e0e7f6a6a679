"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Produtos", id: "/produtos" },
    { name: "Serviços", id: "/servicos" },
    { name: "Sobre", id: "/sobre" },
    { name: "Contato", id: "/contato" }
  ];

  const baseFooterColumns = [
    {
      title: "Navegação",      items: [
        { label: "Home", href: "/" },
        { label: "Produtos", href: "/produtos" },
        { label: "Serviços", href: "/servicos" },
        { label: "Sobre", href: "/sobre" },
        { label: "Contato", href: "/contato" }
      ]
    },
    {
      title: "Contato",      items: [
        { label: "WhatsApp", href: "https://wa.me/5511984516698" },
        { label: "Email", href: "mailto:contato@magiadobrilho.com.br" },
        { label: "Telefone", href: "tel:+5511984516698" },
        { label: "Localização", href: "#" }
      ]
    },
    {
      title: "Redes Sociais",      items: [
        { label: "Instagram", href: "https://instagram.com/magiadobrilho" },
        { label: "Facebook", href: "https://facebook.com/magiadobrilho" },
        { label: "TikTok", href: "https://tiktok.com/@magiadobrilho" },
        { label: "YouTube", href: "https://youtube.com/@magiadobrilho" }
      ]
    },
    {
      title: "Informações Legais",      items: [
        { label: "Política de Privacidade", href: "#" },
        { label: "Termos de Serviço", href: "#" },
        { label: "Troca e Devolução", href: "#" },
        { label: "FAQ", href: "/#faq" }
      ]
    }
  ];

  const handleContactSubmit = (data: Record<string, string>) => {
    console.log("Form submitted:", data);
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
  };

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
        <NavbarStyleApple brandName="Magia do Brilho" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Entre em Contato com a Magia do Brilho"
          description="Tem dúvidas sobre nossos produtos e serviços? Deseja agendar uma consulta espiritual? Estamos aqui para orientá-lo em sua jornada mágica. Escolha o melhor meio de comunicação para você."
          tag="Contato Direto"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "WhatsApp",              href: "https://wa.me/5511984516698"
            },
            {
              text: "Voltar ao Início",              href: "/"
            }
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "sparkles-gradient"
          }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-reading-tarot_23-2150273168.jpg?_wi=1",              imageAlt: "Cartas de tarot dispostas em círculo sagrado"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-candle-rain_23-2147785889.jpg?_wi=1",              imageAlt: "Velas roxas e douradas em altar espiritual"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-hand-rocks-arrangement_23-2149324173.jpg?_wi=1",              imageAlt: "Cristais esotéricos brilhando com energia mágica"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          mediaAnimation="slide-up"
          title="Fale Conosco"
          description="Preencha o formulário abaixo para enviar uma mensagem. Nossa equipe responderá o mais breve possível."
          inputs={[
            { name: "name", type: "text", placeholder: "Seu Nome", required: true },
            { name: "email", type: "email", placeholder: "Seu Email", required: true },
            { name: "phone", type: "tel", placeholder: "Seu Telefone (Opcional)" },
            { name: "subject", type: "text", placeholder: "Assunto" }
          ]}
          textarea={{ name: "message", placeholder: "Sua Mensagem", rows: 6, required: true }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/reiki-symbols-concept-with-crystals_23-2149324229.jpg?_wi=1"
          imageAlt="Altar sagrado com cristais e símbolos esotéricos"
          mediaPosition="left"
          buttonText="Enviar Mensagem"
          onSubmit={handleContactSubmit}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://images.unsplash.com/photo-1594770648818-b80c3e7d6b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Noite céu lua estrelas fundo místico"
          logoText="Magia do Brilho"
          copyrightText="© 2024 Magia do Brilho | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={baseFooterColumns}
        />
      </div>
    </ThemeProvider>
  );
}