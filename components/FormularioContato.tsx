"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function FormularioContato() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    state: "",
    projectLocation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no actual submission
    alert("Formulário enviado com sucesso! (Apenas demonstração)");
  };

  return (
    <section id="contato" className="min-h-[85vh] flex items-center bg-dark relative overflow-hidden py-8 lg:py-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 topographic-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase">
              Serviços Geoespaciais Gerenciados™
            </h2>
            <div className="w-24 h-1 bg-orange mb-4"></div>
            <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
              Acelere sua fase de descoberta com dados geoespaciais abrangentes
              para tomar decisões de negócios informadas e acelerar o
              desenvolvimento de infraestrutura planejada. Explore como nossos
              Serviços Geoespaciais Gerenciados™ podem abordar todo o ciclo de
              vida de seus ativos.
            </p>
            <div className="space-y-2 text-white/80 text-sm md:text-base">
              <p>
                <strong className="text-white">Endereço:</strong> Av. Bezerra de
                Menezes, 1200, Parque Araxá, Fortaleza - CE, CEP 60123-456
              </p>
              <p>
                <strong className="text-white">Telefone:</strong> +55 84 9
                9938-5618
              </p>
              <p>
                <strong className="text-white">E-mail:</strong>{" "}
                contato@ivyenggeo.com
              </p>
              <p>
                <strong className="text-white">Site:</strong> www.ivyenggeo.com
              </p>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-6 lg:p-8 max-h-[85vh] overflow-y-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-dark font-medium mb-1 text-sm"
                  >
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-dark font-medium mb-1 text-sm"
                  >
                    Sobrenome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-dark font-medium mb-1 text-sm"
                  >
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-dark font-medium mb-1 text-sm"
                  >
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-dark font-medium mb-1 text-sm"
                >
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-dark font-medium mb-1 text-sm"
                  >
                    Cidade <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-dark font-medium mb-1 text-sm"
                  >
                    Estado/Região <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectLocation"
                  className="block text-dark font-medium mb-1 text-sm"
                >
                  Localização do Projeto <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  required
                  value={formData.projectLocation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-dark font-medium mb-1 text-sm"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="sm"
                className="w-[30%] uppercase tracking-wider"
              >
                Enviar
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

