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
    <section className="relative bg-dark py-16 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 topographic-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
            >
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {banners[currentIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-6">
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

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevBanner}
              className="text-orange hover:text-white transition-colors p-2"
              aria-label="Banner anterior"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>
            <div className="flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-orange w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir para banner ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextBanner}
              className="text-orange hover:text-white transition-colors p-2"
              aria-label="Próximo banner"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

