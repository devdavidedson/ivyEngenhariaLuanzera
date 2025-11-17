"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder background - será substituído por imagem real */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-[#1a2332]">
          {/* Pattern overlay */}
          <div className="absolute inset-0 topographic-pattern opacity-20"></div>
          {/* Simulated power lines silhouette */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full opacity-30"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Power line towers */}
              <line
                x1="100"
                y1="400"
                x2="300"
                y2="200"
                stroke="#1987D9"
                strokeWidth="2"
                opacity="0.3"
              />
              <line
                x1="300"
                y1="200"
                x2="500"
                y2="250"
                stroke="#1987D9"
                strokeWidth="2"
                opacity="0.3"
              />
              <line
                x1="500"
                y1="250"
                x2="700"
                y2="180"
                stroke="#1987D9"
                strokeWidth="2"
                opacity="0.3"
              />
              <line
                x1="700"
                y1="180"
                x2="900"
                y2="220"
                stroke="#1987D9"
                strokeWidth="2"
                opacity="0.3"
              />
              <line
                x1="900"
                y1="220"
                x2="1100"
                y2="300"
                stroke="#1987D9"
                strokeWidth="2"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight px-4">
            Serviços Profissionais que
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Impulsionam Decisões
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 font-medium">
            Dados Geoespaciais Estratégicos para Projetos Públicos:
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
            Obtenha os dados geoespaciais necessários para projetos eficientes
            e eficazes.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button size="lg" className="uppercase tracking-wider">
              Saiba Mais
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

