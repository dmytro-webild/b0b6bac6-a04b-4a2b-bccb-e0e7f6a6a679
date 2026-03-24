"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Moon, HelpCircle } from "lucide-react";

export default function ProductsPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Produtos", id: "products" },
    { name: "Serviços", id: "services" },
    { name: "Sobre", id: "about" },
    { name: "Contato", id: "contact" },
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
        <NavbarStyleApple brandName="Arcana Mística" navItems={navItems} />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Produtos Esotéricos Sagrados"
          description="Coleção cuidadosamente selecionada de itens mágicos para amplificar sua energia espiritual"
          tag="Loja Mística"
          tagIcon={Moon}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Ver Todos",
              href: "#",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          carouselMode="buttons"
          products={[
            {
              id: "crystal-1",
              name: "Cristal de Quartzo Rosa",
              price: "R$ 89,90",
              variant: "Amor e Compaixão",
              imageSrc: "http://img.b2bpic.net/free-photo/homemade-decorative-ice-cubes-with-flowers_23-2148216277.jpg",
              imageAlt: "Cristal de quartzo rosa polido",
            },
            {
              id: "crystal-2",
              name: "Ametista Roxa Bruta",
              price: "R$ 129,90",
              variant: "Proteção Espiritual",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-colorful-small-stone-collection_23-2148874556.jpg",
              imageAlt: "Geodo de ametista roxa natural",
            },
            {
              id: "candle-1",
              name: "Vela Roxo-Dourada",
              price: "R$ 45,90",
              variant: "Magia e Abundância",
              imageSrc: "http://img.b2bpic.net/free-photo/diwali-festival-lights-tradition_23-2148688419.jpg",
              imageAlt: "Vela roxa com brilho dourado",
            },
            {
              id: "tarot-1",
              name: "Baralho Tarot Arcanos",
              price: "R$ 199,90",
              variant: "78 Cartas Completas",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-fortune-teller-with-tarot-cards_23-2150006216.jpg",
              imageAlt: "Baralho tarot com ilustrações místicas",
            },
            {
              id: "incense-1",
              name: "Incenso Sagrado Premium",
              price: "R$ 34,90",
              variant: "Lavanda e Alecrim",
              imageSrc: "http://img.b2bpic.net/free-photo/wet-daisies-close-up_23-2148151447.jpg",
              imageAlt: "Varinhas de incenso e cone de madeira",
            },
            {
              id: "amulet-1",
              name: "Amuleto Protetor",
              price: "R$ 159,90",
              variant: "Pentáculo Sagrado",
              imageSrc: "http://img.b2bpic.net/free-vector/collection-decorative-golden-monogram_23-2147658272.jpg",
              imageAlt: "Amuleto com símbolo pentáculo",
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Perguntas sobre Produtos"
          description="Dúvidas frequentes sobre nossos produtos esotéricos"
          tag="Dúvidas?"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "Como sé se um cristal é autêntico?",
              content: "Todos os nossos cristais são certificados e vêm com garantia de autenticidade. Procuramos diretamente com mineradores confiáveis. Você receberá um certificado de autenticidade com cada compra.",
            },
            {
              id: "2",
              title: "Vocês fazem frete para todo Brasil?",
              content: "Sim! Fazemos envios para todo o território nacional. Os produtos chegam bem embalados em caixas especiais que preservam a energia dos cristais e rituais.",
            },
            {
              id: "3",
              title: "Como cuidar dos meus cristais?",
              content: "Mantenha seus cristais em local limpo e seguro. Você pode limpá-los com água ou luz solar mensalmente. Sempre trate-os com respeito e gratidão para manter sua energia ativa.",
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Dúvidas sobre um Produto?

Entre em contato com nosso time de especialistas. Estamos aqui para ajudar você a encontrar o produto perfeito para sua jornada espiritual."
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
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774384867551-h92y3a9n.avif"
          imageAlt="Noite céu lua estrelas fundo místico"
          logoText="Arcana Mística"
          copyrightText="© 2024 Arcana Mística | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={[
            {
              title: "Navegação",
              items: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Produtos",
                  href: "/produtos",
                },
                {
                  label: "Serviços",
                  href: "/",
                },
                {
                  label: "Sobre",
                  href: "/",
                },
              ],
            },
            {
              title: "Contato",
              items: [
                {
                  label: "WhatsApp",
                  href: "https://wa.me/5511999999999",
                },
                {
                  label: "Email",
                  href: "mailto:contato@arcanamistica.com.br",
                },
                {
                  label: "Telefone",
                  href: "tel:+5511988888888",
                },
                {
                  label: "Localização",
                  href: "#",
                },
              ],
            },
            {
              title: "Redes Sociais",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com/arcanamistica",
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com/arcanamistica",
                },
                {
                  label: "TikTok",
                  href: "https://tiktok.com/@arcanamistica",
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com/@arcanamistica",
                },
              ],
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Política de Privacidade",
                  href: "#",
                },
                {
                  label: "Termos de Serviço",
                  href: "#",
                },
                {
                  label: "Troca e Devolução",
                  href: "#",
                },
                {
                  label: "FAQ",
                  href: "#faq",
                },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}