"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiDatabase, FiLayers, FiTrendingUp } from "react-icons/fi";
import Button from "./ui/Button";

const servicos = [
  {
    id: "coleta",
    icon: FiMapPin,
    title: "COLETA DE DADOS",
    subtitle: "COLETAR DADOS GEOESPACIAIS PRECISOS:",
    items: [
      "TOPOGRAFIA & MAPEAMENTO",
      "LIDAR AÉREO",
      "GEOMÁTICA",
      "BIM",
      "ENGENHARIA DE UTILIDADES",
      "INSPEÇÃO DE ENGENHARIA",
    ],
  },
  {
    id: "entrega",
    icon: FiDatabase,
    title: "ENTREGA DE DADOS",
    subtitle: "DADOS ENTREGUES COMO VOCÊ PRECISA:",
    items: [
      "ESTRUTURADOS/NÃO ESTRUTURADOS",
      "CONTEXTUALIZADOS",
      "TAGGEADOS CONFORME NECESSÁRIO",
      "DISPONIBILIDADE BASEADA EM NUVEM",
    ],
  },
  {
    id: "arquitetura",
    icon: FiLayers,
    title: "ARQUITETURA DE DADOS",
    subtitle: "CONECTAR DADOS GEOESPACIAIS COM DADOS EMPRESARIAIS:",
    items: [
      "ARQUITETURA DE PADRÃO DA INDÚSTRIA",
      "FRAMEWORK ABERTO E ESCALÁVEL",
    ],
  },
  {
    id: "insight",
    icon: FiTrendingUp,
    title: "INSIGHT DE DADOS",
    subtitle: "ORGANIZAÇÕES GANHAM O INSIGHT NECESSÁRIO PARA AVANÇAR:",
    items: ["CONSULTORIA", "FUSÃO DE PROJETOS"],
  },
];

export default function SectionAlcance() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-dark via-dark to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 topographic-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Panel - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase">
              Alcance Nacional.
              <br />
              Equipes Locais.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              As equipes da Ivy podem ser implantadas em 24 horas para começar
              a coletar seus dados – desde levantamentos topográficos até dados
              digitais ricos em informações. Com tecnologias avançadas e equipes
              de consultoria especializadas, transformamos seus dados no seu
              maior ativo.
            </p>
            <Button variant="outline" size="lg" className="uppercase">
              Localizações Ivy
            </Button>
          </motion.div>

          {/* Right Panel - Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Central Logo Box */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue/20 blur-3xl"></div>
              <div className="relative bg-blue/30 border-2 border-blue rounded-lg p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-16 h-16">
                        <svg
                          viewBox="0 0 60 60"
                          className="w-full h-full"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 5 L50 55 L40 55 L30 30 L20 55 L10 55 Z"
                            fill="#FF9933"
                          />
                          <path
                            d="M30 8 L47 52 L40 52 L30 28 L20 52 L13 52 Z"
                            fill="#1987D9"
                          />
                        </svg>
                      </div>
                      <span className="text-white font-bold text-2xl">
                        IVY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Cards around diagram */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {servicos.map((servico, index) => {
                const Icon = servico.icon;
                return (
                  <motion.div
                    key={servico.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark/50 border border-blue/30 rounded-lg p-4 backdrop-blur-sm hover:border-orange transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-orange w-5 h-5" />
                      <h4 className="text-orange font-bold text-sm uppercase">
                        {servico.title}
                      </h4>
                    </div>
                    <p className="text-white/80 text-xs mb-2 font-medium">
                      {servico.subtitle}
                    </p>
                    <ul className="space-y-1">
                      {servico.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-white/70 text-xs flex items-start"
                        >
                          <span className="text-orange mr-2">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

