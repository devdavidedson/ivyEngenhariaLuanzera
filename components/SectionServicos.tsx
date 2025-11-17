"use client";

import { motion } from "framer-motion";
import { Servico } from "@/types";

const servicos: Servico[] = [
  {
    id: "1",
    title: "Mapeamento e Coleta de Dados",
    description:
      "Aproveite a expertise geoespacial da Ivy para aprimorar a precisão dos dados e resultados de projetos com tecnologias de mapeamento e levantamento de última geração.",
    backgroundType: "topographic",
  },
  {
    id: "2",
    title: "Inspeção",
    description:
      "Aprimore a segurança e conformidade do projeto com os serviços de inspeção especializados da Ivy, oferecendo supervisão meticulosa para garantir a integridade de seus projetos de infraestrutura críticos.",
    services: [
      "Prevenção de Danos",
      "Inspeção de Construção 3D",
      "Inspeção de Engenharia",
      "Inspeção de Linhas de Energia",
      "Soluções FAC-008",
    ],
    backgroundType: "orange",
  },
  {
    id: "3",
    title: "Soluções Digitais e de Dados",
    description:
      "Estenda suas capacidades estratégicas com os dados geoespaciais precisos da Ivy e soluções empresariais integradas, impulsionando a inovação em cada projeto.",
    backgroundType: "blue",
  },
  {
    id: "4",
    title: "Localização de Utilidades",
    description:
      "Minimize riscos e descubra dados críticos de infraestrutura com a engenharia de utilidades subterrâneas precisa da Ivy.",
    backgroundType: "technical",
  },
];

const getBackgroundClass = (type: string) => {
  switch (type) {
    case "topographic":
      return "bg-gradient-to-br from-dark via-dark to-blue/20 relative overflow-hidden";
    case "orange":
      return "bg-gradient-to-br from-orange via-orange/80 to-yellow-500 relative overflow-hidden";
    case "blue":
      return "bg-gradient-to-br from-dark via-blue to-blue/50 relative overflow-hidden";
    case "technical":
      return "bg-gradient-to-br from-dark via-blue/30 to-dark relative overflow-hidden";
    default:
      return "bg-dark";
  }
};

export default function SectionServicos() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-2 uppercase">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-orange"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getBackgroundClass(
                servico.backgroundType
              )} rounded-lg p-4 md:p-6 text-white min-h-[350px] md:min-h-[400px] flex flex-col hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300`}
            >
              {/* Decorative line */}
              <div className="w-12 h-0.5 bg-white/50 mb-4"></div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {servico.title}
              </h3>
              <p className="text-white/90 mb-4 flex-grow text-sm leading-relaxed">
                {servico.description}
              </p>

              {servico.services && (
                <ul className="space-y-2 mt-auto">
                  {servico.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="text-white/80 text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              )}

              {/* Background patterns */}
              {servico.backgroundType === "topographic" && (
                <div className="absolute inset-0 topographic-pattern opacity-10"></div>
              )}
              {servico.backgroundType === "blue" && (
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="20" cy="20" r="2" fill="white" />
                    <circle cx="40" cy="30" r="2" fill="white" />
                    <circle cx="60" cy="20" r="2" fill="white" />
                    <circle cx="80" cy="40" r="2" fill="white" />
                    <line
                      x1="20"
                      y1="20"
                      x2="40"
                      y2="30"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="40"
                      y1="30"
                      x2="60"
                      y2="20"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="60"
                      y1="20"
                      x2="80"
                      y2="40"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

