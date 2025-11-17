"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Insight } from "@/types";

const insights: Insight[] = [
  {
    id: "1",
    title: "Projeto Brigadoon: Avançando o Design de Subdivisão com Tecnologia Aérea LiDAR e Civil 3D da Ivy",
    description: "Tecnologia de ponta aplicada em projetos urbanísticos.",
    image: "/images/insight-1.jpg",
    category: "MAPEAMENTO",
  },
  {
    id: "2",
    title: "Reabilitação da Ponte do Rio Susquehanna",
    description: "Projeto de infraestrutura de grande escala com precisão geoespacial.",
    image: "/images/insight-2.jpg",
    category: "INFRAESTRUTURA",
  },
  {
    id: "3",
    title: "Inspeção Proativa de Linhas de Energia",
    description: "Soluções inovadoras para manutenção preventiva.",
    image: "/images/insight-3.jpg",
    category: "INSPEÇÃO",
  },
  {
    id: "4",
    title: "Mapeamento de Utilidades Subterrâneas",
    description: "Tecnologia avançada para localização precisa de infraestrutura.",
    image: "/images/insight-4.jpg",
    category: "UTILIDADES",
  },
];

export default function CarrosselInsights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextInsight = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length);
  };

  const prevInsight = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase">
            Insights em Destaque
          </h2>
          <div className="w-24 h-1 bg-orange"></div>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(() => {
                  const visibleCount = 3;
                  const start = currentIndex;
                  const end = Math.min(start + visibleCount, insights.length);
                  const visible = insights.slice(start, end);
                  const remaining = visibleCount - visible.length;
                  const wrapped = remaining > 0 ? insights.slice(0, remaining) : [];
                  return [...visible, ...wrapped].slice(0, visibleCount);
                })().map((insight, idx) => (
                    <motion.div
                      key={insight.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-dark/50 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue/50 to-dark relative">
                        {/* Placeholder image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/20 text-4xl font-bold">
                            {insight.category}
                          </div>
                        </div>
                        {insight.category && (
                          <div className="absolute top-4 right-4 bg-blue px-3 py-1 rounded">
                            <span className="text-white text-xs font-bold uppercase">
                              {insight.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                          {insight.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2">
                          {insight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevInsight}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 text-orange hover:text-white transition-colors p-2 bg-dark/50 rounded-full backdrop-blur-sm"
            aria-label="Insight anterior"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextInsight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 text-orange hover:text-white transition-colors p-2 bg-dark/50 rounded-full backdrop-blur-sm"
            aria-label="Próximo insight"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {insights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-orange w-8"
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
              aria-label={`Ir para insight ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

