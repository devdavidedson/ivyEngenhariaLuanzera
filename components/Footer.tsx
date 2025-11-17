"use client";

import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const socialLinks = [
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

const footerLinks = [
  { label: "Biblioteca Digital", href: "#" },
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-dark/90 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/80 hover:text-orange transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © 2025 IVY ENGENHARIA GEOESPACIAL. Todos os direitos reservados.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 hover:text-orange text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/60 text-xs text-center">
            Serviços de Topografia no Ceará são conduzidos sob nossa empresa
            afiliada, IVY ENGENHARIA GEOESPACIAL.
          </p>
        </div>
      </div>
    </footer>
  );
}

