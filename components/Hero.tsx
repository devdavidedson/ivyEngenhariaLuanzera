"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bgc-1.jpeg"
          alt="Plano de fundo Ivy Engenharia"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Folha 01 - overlay diagonal (70%) acima do background */}
      <div className="absolute inset-0 z-[1]">
        <div
          className="absolute inset-0 bg-dark/70"
          style={{
            // recorte diagonal à esquerda, ocupando 100% do restante
            clipPath: "polygon(28% 0, 100% 0%, 100% 100%, 8% 100%)",
          }}
        ></div>
      </div>

      {/* Folha 02 - overlay diagonal maior (50%) com conteúdo */}
      <div className="absolute inset-0 z-[2]">
        <div
          className="absolute inset-0 bg-dark/50"
          style={{
            // recorte mais profundo para criar o segundo risco diagonal
            clipPath: "polygon(40% 0, 100% 0%, 100% 100%, 20% 100%)",
          }}
        >
          {/* Conteúdo dentro da folha 02 */}
          <div className="relative h-full flex items-center justify-end">
            {/* Wrapper com 50% de largura, alinhado à direita */}
            <div className="w-1/2 mr-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-left">
                  Serviços Profissionais que
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Impulsionam Decisões
                </h1>
                <p className="text-xl md:text-2xl text-white mb-4 font-medium text-left">
                  Dados Geoespaciais Estratégicos para Projetos Públicos:
                </p>
                <p className="text-lg md:text-xl text-white/90 mb-8 font-light text-left">
                  Obtenha os dados geoespaciais necessários para projetos
                  eficientes e eficazes.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-left"
                >
                  <Button size="lg" className="uppercase tracking-wider">
                    Saiba Mais
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

