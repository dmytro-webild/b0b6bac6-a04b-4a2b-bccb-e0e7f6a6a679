"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Heart, Lightbulb, HelpCircle } from "lucide-react";

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <MediaAbout
          title="Arcana Mística - Guardiãs da Magia Ancestral"
          description="Somos uma comunidade de praticantes experientes dedicadas a preservar e compartilhar a sabedoria mágica ancestral. Há mais de 15 anos, guiamos buscadores espirituais em sua jornada de auto-conhecimento e transformação. Nossa missão é democratizar o acesso à magia verdadeira, oferecendo produtos autênticos e serviços espirituais genuínos. Acreditamos que cada pessoa carrega em si um poder mágico infinito, esperando apenas ser despertado."
          tag="Nossa História"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Conhecer Nossa Equipe",
              href: "#",
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/reiki-symbols-concept-with-crystals_23-2149324229.jpg"
          imageAlt="altar sagrado cristais velas símbolo esotéricos"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Histórias de Transformação"
          description="Veja como nossos serviços e produtos transformaram vidas e abriram caminhos para o sucesso espiritual"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Depoimentos"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          animationType="scale-rotate"
          speed={40}
          topMarqueeDirection="left"
          testimonials={[
            {
              id: "1",
              name: "Marina Silva",
              handle: "@marina.mistica",
              testimonial: "A leitura de tarot mudou minha vida! Consegui clareza sobre meu caminho profissional. Recomendo muito!",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-brunette-girl-posing-with-coat_23-2148135998.jpg",
              icon: Heart,
            },
            {
              id: "2",
              name: "Carlos Mendes",
              handle: "@carlos.energia",
              testimonial: "Os cristais que comprei aqui realmente funcionam. Sinto a energia diferente no meu espaço.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-beige-turtleneck-looking-front-with-hand-his-chin-thinking-standing-lilac-wall_141793-53759.jpg",
              icon: Heart,
            },
            {
              id: "3",
              name: "Juliana Santos",
              handle: "@juliana.luz",
              testimonial: "A consulta espiritual foi profunda e transformadora. Consegui identificar meus bloqueios e agora consigo avançar.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-standing-universe-texture-projection_23-2149512139.jpg",
              icon: Heart,
            },
            {
              id: "4",
              name: "Amanda Costa",
              handle: "@amanda.ritual",
              testimonial: "A limpeza energética despertou novamente meu entusiasmo pela vida. Sinto-me renovada e conectada.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-adult-woman-digital-art-style_23-2151122703.jpg",
              icon: Heart,
            },
            {
              id: "5",
              name: "Bruno Oliveira",
              handle: "@bruno.magia",
              testimonial: "Produto de qualidade excepcional! Os incensos fragrância divina e a energia é pura.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-clenching-fists-happy-excited-standing-pink-wall_141793-53277.jpg",
              icon: Heart,
            },
            {
              id: "6",
              name: "Fernanda Rocha",
              handle: "@fernanda.espirito",
              testimonial: "Equipe atenciosa e conhecedora. Senti-me acolhida e orientada desde o primeiro contato.",
              imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-leaning-wall_23-2147611441.jpg",
              icon: Heart,
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Perguntas Frequentes"
          description="Respostas às dúvidas mais comuns sobre nossos produtos, serviços e práticas espirituais"
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
              title: "Posso fazer consulta espiritual online?",
              content: "Sim! Oferecemos consultas presenciais e online. A energia funciona igualmente bem através de videoconferência. Você pode escolher a modalidade que preferir ao agendar.",
            },
            {
              id: "3",
              title: "Quanto tempo leva para a magia funcionar?",
              content: "A magia trabalha de formas diferentes para cada pessoa. Alguns veem resultados imediatos, outros precisam de paciência e dedicação. O importante é manter a fé e a energia positiva.",
            },
            {
              id: "4",
              title: "Vocês fazem frete para todo Brasil?",
              content: "Sim! Fazemos envios para todo o território nacional. Os produtos chegam bem embalados em caixas especiais que preservam a energia dos cristais e rituais.",
            },
            {
              id: "5",
              title: "Os serviços têm garantia de resultado?",
              content: "Nossos serviços operam com energia genuína, mas cada pessoa tem livre arbítrio. Garantimos dedicação, conhecimento e sinceridade. Os resultados dependem da receptividade e ação de cada um.",
            },
            {
              id: "6",
              title: "Como cuidar dos meus cristais?",
              content: "Mantenha seus cristais em local limpo e seguro. Você pode limpá-los com água ou luz solar mensalmente. Sempre trate-os com respeito e gratidão para manter sua energia ativa.",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-constellations-seaside_23-2149988816.jpg"
          imageAlt="noite céu lua estrelas fundo místico"
          logoText="Arcana Mística"
          copyrightText="© 2024 Arcana Mística | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}