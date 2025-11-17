"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "./ui/Button";

const banners = [
  {
    id: 1,
    title: "Ivy Engenharia Geoespacial entre as Top 100 Empresas de Engenharia do Brasil",
    subtitle: "Agradecemos à nossa equipe e clientes por 13 anos consecutivos de reconhecimento!",
    link: "#",
  },
  {
    id: 2,
    title: "Novo Projeto de Mapeamento Aéreo com LiDAR",
    subtitle: "Tecnologia de ponta para projetos de infraestrutura de grande escala.",
    link: "#",
  },
];

export default function BannerDestaque() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative bg-dark py-12 lg:py-20 mb-[20px] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 topographic-pattern"></div>
      </div>

      {/* Seta Esquerda - Fixa a 20px da borda esquerda da seção */}
      <button
        onClick={prevBanner}
        className="absolute left-[20px] top-1/2 -translate-y-1/2 text-orange hover:text-white transition-colors p-2 z-20"
        aria-label="Banner anterior"
      >
        <FiChevronLeft className="w-8 h-8" />
      </button>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Conteúdo: Título + Descrição + Botão - Animado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-6 lg:gap-8"
            >
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-white mb-2">
                  {banners[currentIndex].title}
                </h3>
                <p className="text-[18px] text-white/90">
                  {banners[currentIndex].subtitle}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button variant="outline" size="lg" className="uppercase">
                  Saiba Mais
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Seta Direita - Fixa a 20px da borda direita da seção */}
      <button
        onClick={nextBanner}
        className="absolute right-[20px] top-1/2 -translate-y-1/2 text-orange hover:text-white transition-colors p-2 z-20"
        aria-label="Próximo banner"
      >
        <FiChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
}

