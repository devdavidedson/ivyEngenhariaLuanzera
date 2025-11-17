"use client";

import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import Button from "./ui/Button";

export default function SectionCultura() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-gradient-to-br from-blue to-dark rounded-lg overflow-hidden"
          >
            {/* Placeholder for video/image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
                <FiPlay className="w-10 h-10 text-white ml-1" />
              </div>
            </div>
            {/* Name banner */}
            <div className="absolute bottom-0 left-0 bg-orange px-6 py-3">
              <p className="text-white font-bold text-lg">Luan Monteiro</p>
              <p className="text-white/90 text-sm">Gestor Comercial</p>
            </div>
          </motion.div>

          {/* Right Panel - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-dark"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase">
              Uma Cultura de
              <br />
              Colaboração e Crescimento
            </h2>
            <div className="w-24 h-1 bg-orange mb-6"></div>
            <p className="text-lg md:text-xl text-dark/80 mb-8 leading-relaxed">
              A vida na Ivy é sobre fazer contribuições impactantes em um
              ambiente de trabalho de primeira linha. Nossas portas estão
              abertas para novas ideias e perspectivas diversas, garantindo que
              todos os dias você faça parte de algo significativo—onde sua
              carreira e contribuições para a comunidade realmente importam.
            </p>
            <Button size="lg" className="uppercase">
              Vida na Ivy
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

