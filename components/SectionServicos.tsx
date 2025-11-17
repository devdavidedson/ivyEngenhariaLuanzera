"use client";

import { motion } from "framer-motion";
import { Servico } from "@/types";

const servicos: Servico[] = [
  {
    id: "1",
    title: "Mapeamento e Coleta de Dados",
    description:
      "Aproveite a expertise geoespacial da Ivy para aprimorar a precisão dos dados e resultados de projetos com tecnologias de mapeamento e levantamento de última geração.",
    services: [
      "Levantamentos Topográficos",
      "Mapeamento Aéreo",
      "GIS",
      "Varredura a Laser BIM/3D",
      "Monitoramento de Obras e Construção",
    ],
    backgroundType: "topographic",
    hoverImage: "/image/card-1.jpeg",
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
    hoverImage: "/image/card-2.jpeg",
  },
  {
    id: "3",
    title: "Soluções Digitais e de Dados",
    description:
      "Estenda suas capacidades estratégicas com os dados geoespaciais precisos da Ivy e soluções empresariais integradas, impulsionando a inovação em cada projeto.",
    services: [
      "Estratégia e Arquitetura de Gestão",
      "Business Intelligence e Analytics",
      "Integração de Sistemas e Dados",
      "Consultoria de Negócios e Tecnologia",
      "Consultoria GIS Estratégica",
    ],
    backgroundType: "blue",
    hoverImage: "/image/card-3.jpeg",
  },
  {
    id: "4",
    title: "Localização de Utilidades",
    description:
      "Minimize riscos e descubra dados críticos de infraestrutura com a engenharia de utilidades subterrâneas precisa da Ivy.",
    services: [
      "Engenharia de Utilidades Subterrâneas (SUE)",
      "Coordenação de Utilidades",
    ],
    backgroundType: "technical",
    hoverImage: "/image/card-4.jpeg",
  },
];

const getBackgroundClass = (type: string) => {
  switch (type) {
    case "topographic":
      return "bg-[#042742] relative overflow-hidden";
    case "orange":
      return "bg-[#064c7a] relative overflow-hidden";
    case "blue":
      return "bg-[#064c7a] relative overflow-hidden";
    case "technical":
      return "bg-[#064c7a] relative overflow-hidden";
    default:
      return "bg-dark";
  }
};

export default function SectionServicos() {
  return (
    <section className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getBackgroundClass(
                servico.backgroundType
              )} group p-4 md:p-6 text-white min-h-[400px] md:min-h-[460px] flex flex-col hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 overflow-hidden`}
            >
              {/* Fundo base com bgc-2 */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url(/image/bgc-2.jpeg)" }}
              />

              {/* Fundo em hover com imagem específica do card */}
              {servico.hoverImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                  style={{ backgroundImage: `url(${servico.hoverImage})` }}
                />
              )}

              {/* Overlay escuro para deixar o fundo mais fosco */}
              <div className="absolute inset-0 bg-dark/80 group-hover:bg-dark/60 transition-colors duration-500 pointer-events-none z-[1]" />

              {/* Padrões de fundo (acima do overlay e abaixo do conteúdo) */}
              {servico.backgroundType === "topographic" && (
                <div className="absolute inset-0 topographic-pattern opacity-10 pointer-events-none z-[2]"></div>
              )}
              {servico.backgroundType === "blue" && (
                <div className="absolute inset-0 topographic-pattern opacity-5 pointer-events-none z-[2]"></div>
              )}
              {servico.backgroundType === "technical" && (
                <div className="absolute inset-0 topographic-pattern opacity-5 pointer-events-none z-[2]"></div>
              )}

              {/* Conteúdo */}
              <div className="relative z-[3] flex flex-col h-full">
                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-white mb-4"></div>

                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {servico.title}
                </h3>
                <p className="text-white/90 mb-4 flex-grow text-sm leading-relaxed">
                  {servico.description}
                </p>

                {/* Lista de serviços - aparece suavemente no hover */}
                {servico.services && (
                  <ul className="mt-2 space-y-2 text-sm text-white/90 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {servico.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

