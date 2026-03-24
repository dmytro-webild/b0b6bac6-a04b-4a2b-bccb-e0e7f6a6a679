"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" }
  ];

  const footerColumns = (currentPageId) => {
    const faqHref = "/#faq"; // Default to home page FAQ

    return [
      {
        title: "Navegação",        items: [
          { label: "Home", href: "/" },
          { label: "Produtos", href: "/produtos" },
          { label: "Serviços", href: "/servicos" },
          { label: "Sobre", href: "/sobre" },
          { label: "Contato", href: "/contato" }
        ]
      },
      {
        title: "Contato",        items: [
          { label: "WhatsApp", href: "https://wa.me/5511984516698" },
          { label: "Email", href: "mailto:contato@magiadobrilho.com.br" },
          { label: "Telefone", href: "tel:+5511984516698" },
          { label: "Localização", href: "#" }
        ]
      },
      {
        title: "Informações Legais",        items: [
          { label: "Política de Privacidade", href: "#" },
          { label: "Termos de Serviço", href: "#" },
          { label: "Troca e Devolução", href: "#" },
          { label: "FAQ", href: faqHref }
        ]
      }
    ];
  };

  const [formData, setFormData] = useState({
    name: "",    email: "",    phone: "",    subject: "",    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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

      <div id="contact-form" data-section="contact-form" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-var(--accent) bg-var(--card) hover:shadow-lg transition">
              <div className="mb-4 p-4 rounded-full bg-var(--primary-cta) bg-opacity-10">
                <MessageCircle className="w-8 h-8 text-var(--primary-cta)" />
              </div>
              <h3 className="text-lg font-semibold text-var(--foreground) mb-2">WhatsApp</h3>
              <p className="text-sm text-var(--foreground) opacity-70 mb-4">Mensagens rápidas e diretas</p>
              <a
                href="https://wa.me/5511984516698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-var(--primary-cta) text-white font-medium hover:opacity-90 transition"
              >
                Abrir Chat
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-var(--accent) bg-var(--card) hover:shadow-lg transition">
              <div className="mb-4 p-4 rounded-full bg-var(--primary-cta) bg-opacity-10">
                <Mail className="w-8 h-8 text-var(--primary-cta)" />
              </div>
              <h3 className="text-lg font-semibold text-var(--foreground) mb-2">Email</h3>
              <p className="text-sm text-var(--foreground) opacity-70 mb-4">Responderemos em até 24h</p>
              <a
                href="mailto:contato@magiadobrilho.com.br"
                className="inline-block px-4 py-2 rounded-full bg-var(--primary-cta) text-white font-medium hover:opacity-90 transition"
              >
                Enviar Email
              </a>
            </div>

            {/* Telefone */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-var(--accent) bg-var(--card) hover:shadow-lg transition">
              <div className="mb-4 p-4 rounded-full bg-var(--primary-cta) bg-opacity-10">
                <Phone className="w-8 h-8 text-var(--primary-cta)" />
              </div>
              <h3 className="text-lg font-semibold text-var(--foreground) mb-2">Telefone</h3>
              <p className="text-sm text-var(--foreground) opacity-70 mb-4">Ligamos de segunda a sexta</p>
              <a
                href="tel:+5511984516698"
                className="inline-block px-4 py-2 rounded-full bg-var(--primary-cta) text-white font-medium hover:opacity-90 transition"
              >
                (11) 98451-6698
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-var(--card) border border-var(--accent) rounded-lg p-8">
            <h2 className="text-2xl font-bold text-var(--foreground) mb-2">Formulário de Contato</h2>
            <p className="text-var(--foreground) opacity-70 mb-6">Preencha o formulário abaixo e entraremos em contato com você em breve.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-var(--accent) bg-var(--background) text-var(--foreground) placeholder-var(--foreground) placeholder-opacity-50 focus:outline-none focus:border-var(--primary-cta) focus:ring-1 focus:ring-var(--primary-cta)"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu Email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-var(--accent) bg-var(--background) text-var(--foreground) placeholder-var(--foreground) placeholder-opacity-50 focus:outline-none focus:border-var(--primary-cta) focus:ring-1 focus:ring-var(--primary-cta)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Seu Telefone (Opcional)"
                  className="w-full px-4 py-2 rounded-lg border border-var(--accent) bg-var(--background) text-var(--foreground) placeholder-var(--foreground) placeholder-opacity-50 focus:outline-none focus:border-var(--primary-cta) focus:ring-1 focus:ring-var(--primary-cta)"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-var(--accent) bg-var(--background) text-var(--foreground) focus:outline-none focus:border-var(--primary-cta) focus:ring-1 focus:ring-var(--primary-cta)"
                >
                  <option value="" disabled>
                    Selecione um Assunto
                  </option>
                  <option value="consultation">Agendar Consulta</option>
                  <option value="product">Dúvida sobre Produtos</option>
                  <option value="service">Dúvida sobre Serviços</option>
                  <option value="other">Outro Assunto</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua Mensagem"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-var(--accent) bg-var(--background) text-var(--foreground) placeholder-var(--foreground) placeholder-opacity-50 focus:outline-none focus:border-var(--primary-cta) focus:ring-1 focus:ring-var(--primary-cta) resize-none"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-var(--primary-cta) text-white font-semibold hover:opacity-90 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Media Links removed as requested */}

      {/* CTA Section */}
      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Próximo Passo"
          title="Pronto para Sua Jornada Espiritual?"
          description="Entre em contato conosco agora e descubra como a magia do brilho pode transformar sua vida. Nossa equipe está pronta para acolhê-lo."
          buttons={[
            {
              text: "Agendar Consulta",              href: "https://wa.me/5511984516698"
            },
            {
              text: "Explorar Produtos",              href: "/produtos"
            }
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "sparkles-gradient"
          }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://images.unsplash.com/photo-1594770648818-b80c3e7d6b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Noite céu lua estrelas fundo místico"
          logoText="Magia do Brilho"
          copyrightText="© 2024 Magia do Brilho | Todos os direitos reservados"
          columns={footerColumns("contato")}
        />
      </div>
    </ThemeProvider>
  );
}
