"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles, Heart, Star, Lightbulb } from "lucide-react";

export default function AboutPage() {
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
        <NavbarStyleApple brandName="Magia Do Brilho " navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Nossa História Mágica"
          description="Conheça a jornada de Arcana Mística e descubra como começou nossa dedicação à preservação da magia ancestral e ao serviço espiritual genuíno."
          tag="Sobre Nós"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Voltar ao Início",              href: "/"},
            {
              text: "Agendar Consulta",              href: "/contato"},
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "sparkles-gradient"}}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/reiki-symbols-concept-with-crystals_23-2149324229.jpg?_wi=1",              imageAlt: "Altar sagrado com cristais e símbolos esotéricos"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-meditation-guide-with-singing-bowls_23-2149386437.jpg?_wi=1",              imageAlt: "Ritual de purificação com taças de som"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-constellations-seaside_23-2149988816.jpg?_wi=1",              imageAlt: "Céu noturno com constelações e energia mística"},
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Arcana Mística - 15 Anos de Dedicação Espiritual"
          description="Fundada em 2009, Arcana Mística nasceu de uma visão: criar um espaço sagrado onde a magia ancestral pudesse ser praticada com autenticidade e respeito. O que começou como um pequeno altar em uma sala tornou-se um santuário espiritual reconhecido por sua integridade e compromisso com a verdade mágica. Nossa equipe de mestres e praticantes trabalha diariamente para honrar a sabedoria antiga e trazê-la para o mundo moderno. Cada cristal, cada carta, cada ritual é escolhido com cuidado e dedicação. Acreditamos que a magia não é apenas um conjunto de técnicas, mas uma forma de estar no mundo com consciência, respeito e amor pelas energias universais."
          tag="Nossa Missão"
          tagIcon={Heart}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-woman-standing-universe-texture-projection_23-2149512139.jpg?_wi=1"
          imageAlt="Mulher conectada com a energia do universo"
          useInvertedBackground={true}
        />
      </div>

      <div id="values" data-section="values">
        <FeatureCardSix
          title="Nossos Valores Místicos"
          description="Os princípios que guiam cada ação e decisão em Arcana Mística"
          tag="Princípios"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Explorar Produtos",              href: "/"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Autenticidade Mágica",              description: "Cada produto e serviço é genuíno e certificado. Não acreditamos em atalhos espirituais. A magia verdadeira exige dedicação, sinceridade e respeito às tradições ancestrais.",              imageSrc: "http://img.b2bpic.net/free-photo/view-hand-rocks-arrangement_23-2149324173.jpg?_wi=3"},
            {
              id: 2,
              title: "Ética e Responsabilidade",              description: "Praticamos a magia com responsabilidade consciente. Nossos serviços sempre respeitam o livre arbítrio. Trabalhamos apenas com intenções positivas e energias construtivas.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-candle-rain_23-2147785889.jpg?_wi=3"},
            {
              id: 3,
              title: "Acolhimento e Respeito",              description: "Acolhemos todos os buscadores espirituais com respeito e sem julgamento. Cada pessoa está em sua própria jornada. Nosso papel é guiar, nunca impor.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-man-woman-outdoors_23-2148316073.jpg?_wi=1"},
            {
              id: 4,
              title: "Conhecimento Contínuo",              description: "A magia é viva e em constante evolução. Nossa equipe estuda continuamente, participando de retiros, rituais e aprendendo com mestres de tradições diversas ao redor do mundo.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-book-club_23-2150062147.jpg?_wi=1"},
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="O Que Nossos Clientes Dizem"
          description="Histórias reais de transformação e conexão espiritual através dos nossos serviços"
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
              id: "1",              name: "Marina Silva",              handle: "@marina.mistica",              testimonial: "A leitura de tarot mudou minha vida! Consegui clareza sobre meu caminho profissional. Recomendo muito!",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-brunette-girl-posing-with-coat_23-2148135998.jpg?_wi=1",              icon: Star,
            },
            {
              id: "2",              name: "Carlos Mendes",              handle: "@carlos.energia",              testimonial: "Os cristais que comprei aqui realmente funcionam. Sinto a energia diferente no meu espaço.",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-beige-turtleneck-looking-front-with-hand-his-chin-thinking-standing-lilac-wall_141793-53759.jpg?_wi=1",              icon: Star,
            },
            {
              id: "3",              name: "Juliana Santos",              handle: "@juliana.luz",              testimonial: "A consulta espiritual foi profunda e transformadora. Consegui identificar meus bloqueios e agora consigo avançar.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-standing-universe-texture-projection_23-2149512139.jpg?_wi=1",              icon: Star,
            },
            {
              id: "4",              name: "Amanda Costa",              handle: "@amanda.ritual",              testimonial: "A limpeza energética despertou novamente meu entusiasmo pela vida. Sinto-me renovada e conectada.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-adult-woman-digital-art-style_23-2151122703.jpg?_wi=1",              icon: Star,
            },
            {
              id: "5",              name: "Bruno Oliveira",              handle: "@bruno.magia",              testimonial: "Produto de qualidade excepcional! Os incensos fragrância divina e a energia é pura.",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-clenching-fists-happy-excited-standing-pink-wall_141793-53277.jpg?_wi=1",              icon: Star,
            },
            {
              id: "6",              name: "Fernanda Rocha",              handle: "@fernanda.espirito",              testimonial: "Equipe atenciosa e conhecedora. Senti-me acolhida e orientada desde o primeiro contato.",              imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-leaning-wall_23-2147611441.jpg?_wi=1",              icon: Star,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774385178995-ing5t0li.avif"
          imageAlt="Noite céu lua estrelas fundo místico"
          logoText="Magia Do Brilho"
          copyrightText="© 2024 Arcana Mística | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={[
            {
              title: "Navegação",              items: [
                {
                  label: "Home",                  href: "/"},
                {
                  label: "Produtos",                  href: "/produtos"},
                {
                  label: "Serviços",                  href: "/"},
                {
                  label: "Sobre",                  href: "/sobre"},
                {
                  label: "Contato",                  href: "/contato"},
              ],
            },
            {
              title: "Contato",              items: [
                {
                  label: "WhatsApp",                  href: "https://wa.me/5511999999999"},
                {
                  label: "Email",                  href: "mailto:contato@arcanamistica.com.br"},
                {
                  label: "Telefone",                  href: "tel:+5511988888888"},
                {
                  label: "Localização",                  href: "#"},
              ],
            },
            {
              title: "Redes Sociais",              items: [
                {
                  label: "Instagram",                  href: "https://instagram.com/arcanamistica"},
                {
                  label: "Facebook",                  href: "https://facebook.com/arcanamistica"},
                {
                  label: "TikTok",                  href: "https://tiktok.com/@arcanamistica"},
                {
                  label: "YouTube",                  href: "https://youtube.com/@arcanamistica"},
              ],
            },
            {
              title: "Legal",              items: [
                {
                  label: "Política de Privacidade",                  href: "#"},
                {
                  label: "Termos de Serviço",                  href: "#"},
                {
                  label: "Troca e Devolução",                  href: "#"},
                {
                  label: "FAQ",                  href: "#faq"},
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}