"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles, Moon, Star, Heart, Lightbulb, HelpCircle } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Produtos", id: "/produtos" },
    { name: "Serviços", id: "/servicos" },
    { name: "Sobre", id: "/sobre" },
    { name: "Contato", id: "/contato" }
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
        <NavbarStyleApple brandName="Magia do Brilho" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Desperte Sua Magia Interior"
          description="Explore os mistérios do universo através de cristais sagrados, tarot ancestral e serviços espirituais. Conecte-se com a energia cósmica e transforme sua vida."
          tag="Espiritualidade & Magia"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Explorar Produtos",              href: "/produtos"
            },
            {
              text: "Agendar Consulta",              href: "/contato"
            }
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "sparkles-gradient"
          }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-hand-rocks-arrangement_23-2149324173.jpg?_wi=2",              imageAlt: "Cristais esotéricos brilhando com energia mágica"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-reading-tarot_23-2150273168.jpg?_wi=2",              imageAlt: "Cartas de tarot dispostas em círculo sagrado"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-candle-rain_23-2147785889.jpg?_wi=2",              imageAlt: "Velas roxas e douradas em altar espiritual"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Magia do Brilho - Guardiãs da Magia Ancestral"
          description="Somos uma comunidade de praticantes experientes dedicadas a preservar e compartilhar a sabedoria mágica ancestral. Há mais de 15 anos, guiamos buscadores espirituais em sua jornada de auto-conhecimento e transformação. Nossa missão é democratizar o acesso à magia verdadeira, oferecendo produtos autênticos e serviços espirituais genuínos. Acreditamos que cada pessoa carrega em si um poder mágico infinito, esperando apenas ser despertado."
          tag="Nossa História"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Conhecer Nossa Equipe",              href: "/sobre"
            }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/reiki-symbols-concept-with-crystals_23-2149324229.jpg?_wi=1"
          imageAlt="Altar sagrado com cristais e símbolos esotéricos"
          useInvertedBackground={true}
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
              text: "Agendar Agora",              href: "/contato"
            }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Leitura de Tarot",              description: "Descubra os segredos do passado, presente e futuro através das cartas sagradas. Interpretação profunda e orientação espiritual.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774387698998-6sngroon.jpg",              buttons: [{ text: "Agendar Serviço", href: "/contato" }]
            },
            {
              id: 2,
              title: "Consultas Espirituais",              description: "Conexão direta com sua energia vital. Identificamos bloqueios, orientamos caminhos e ativamos seu poder interior.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-book-club_23-2150062147.jpg?_wi=1",              buttons: [{ text: "Agendar Serviço", href: "/contato" }]
            },
            {
              id: 3,
              title: "Limpeza Energética",              description: "Rituais de purificação para limpar sua aura. Remove energias negativas e restaura seu bem-estar espiritual.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-meditation-guide-with-singing-bowls_23-2149386437.jpg?_wi=1",              buttons: [{ text: "Agendar Serviço", href: "/contato" }]
            },
            {
              id: 4,
              title: "Rituais de Prosperidade",              description: "Rituais ancestrais para atrair abundância, sucesso e remover bloqueios financeiros, promovendo a riqueza em todas as áreas da vida.",              imageSrc: "http://img.b2bpic.net/free-photo/golden-coin-gem-ring_23-2149512130.jpg?_wi=1",              buttons: [{ text: "Agendar Serviço", href: "/contato" }]
            }
          ]}
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
              id: "1",              name: "Marina Silva",              handle: "@marina.mistica",              testimonial: "A leitura de tarot mudou minha vida! Consegui clareza sobre meu caminho profissional. Recomendo muito!",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-brunette-girl-posing-with-coat_23-2148135998.jpg?_wi=1",              icon: Star
            },
            {
              id: "2",              name: "Carlos Mendes",              handle: "@carlos.energia",              testimonial: "Os cristais que comprei aqui realmente funcionam. Sinto a energia diferente no meu espaço.",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-beige-turtleneck-looking-front-with-hand-his-chin-thinking-standing-lilac-wall_141793-53759.jpg?_wi=1",              icon: Star
            },
            {
              id: "3",              name: "Juliana Santos",              handle: "@juliana.luz",              testimonial: "A consulta espiritual foi profunda e transformadora. Consegui identificar meus bloqueios e agora consigo avançar.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-standing-universe-texture-projection_23-2149512139.jpg?_wi=1",              icon: Star
            },
            {
              id: "4",              name: "Amanda Costa",              handle: "@amanda.ritual",              testimonial: "A limpeza energética despertou novamente meu entusiasmo pela vida. Sinto-me renovada e conectada.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-adult-woman-digital-art-style_23-2151122703.jpg?_wi=1",              icon: Star
            },
            {
              id: "5",              name: "Bruno Oliveira",              handle: "@bruno.magia",              testimonial: "Produto de qualidade excepcional! Os incensos fragrância divina e a energia é pura.",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-clenching-fists-happy-excited-standing-pink-wall_141793-53277.jpg?_wi=1",              icon: Star
            },
            {
              id: "6",              name: "Fernanda Rocha",              handle: "@fernanda.espirito",              testimonial: "Equipe atenciosa e conhecedora. Senti-me acolhida e orientada desde o primeiro contato.",              imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-leaning-wall_23-2147611441.jpg?_wi=1",              icon: Star
            }
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
              id: "1",              title: "Como sé se um cristal é autêntico?",              content: "Todos os nossos cristais são certificados e vêm com garantia de autenticidade. Procuramos diretamente com mineradores confiáveis. Você receberá um certificado de autenticidade com cada compra."
            },
            {
              id: "2",              title: "Posso fazer consulta espiritual online?",              content: "Sim! Oferecemos consultas presenciais e online. A energia funciona igualmente bem através de videoconferência. Você pode escolher a modalidade que preferir ao agendar."
            },
            {
              id: "3",              title: "Quanto tempo leva para a magia funcionar?",              content: "A magia trabalha de formas diferentes para cada pessoa. Alguns veem resultados imediatos, outros precisam de paciência e dedicação. O importante é manter a fé e a energia positiva."
            },
            {
              id: "4",              title: "Vocês fazem frete para todo Brasil?",              content: "Sim! Fazemos envios para todo o território nacional. Os produtos chegam bem embalados em caixas especiais que preservam a energia dos cristais e rituais."
            },
            {
              id: "5",              title: "Os serviços têm garantia de resultado?",              content: "Nossos serviços operam com energia genuína, mas cada pessoa tem livre arbítrio. Garantimos dedicação, conhecimento e sinceridade. Os resultados dependem da receptividade e ação de cada um."
            },
            {
              id: "6",              title: "Como cuidar dos meus cristais?",              content: "Mantenha seus cristais em local limpo e seguro. Você pode limpá-los com água ou luz solar mensalmente. Sempre trate-os com respeito e gratidão para manter sua energia ativa."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Entre em Contato Tem dúvidas sobre nossos produtos e serviços? Quer agendar uma consulta espiritual? Entre em contato através de WhatsApp, telefone ou preencha o formulário abaixo. Responderemos com a maior brevidade."
          animationType="entrance-slide"
          buttons={[
            {
              text: "WhatsApp",              href: "https://wa.me/5511984516698"
            },
            {
              text: "Email",              href: "mailto:contato@magiadobrilho.com.br"
            }
          ]}
          background={{
            variant: "sparkles-gradient"
          }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAz702DYgWn4ffNIK3qljhXzck/uploaded-1774387653310-e23iaf6p.avif"
          imageAlt="Noite céu lua estrelas fundo místico"
          logoText="Magia do Brilho"
          copyrightText="© 2024 Magia do Brilho | Guardiãs da Magia Ancestral | Todos os direitos reservados"
          columns={[
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
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
