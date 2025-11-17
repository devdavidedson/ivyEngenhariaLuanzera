"use client";

import { motion } from "framer-motion";

export default function SectionDiferencial() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            A Diferencial Ivy
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">
            As respostas para seus maiores desafios estão nos seus dados.
          </h3>
          <p className="text-lg md:text-xl text-dark/80 leading-relaxed max-w-3xl mx-auto">
            Coletamos e entregamos dados geoespaciais, e então os arquitetamos
            de forma a desbloquear os insights necessários hoje e estruturamos
            para responder às questões de amanhã.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

