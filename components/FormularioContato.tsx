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
    <section id="contato" className="py-20 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 topographic-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Panel - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase">
              Saiba Mais Sobre
              <br />
              Serviços Geoespaciais Gerenciados™
            </h2>
            <div className="w-24 h-1 bg-orange mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Acelere sua fase de descoberta com dados geoespaciais abrangentes
              para tomar decisões de negócios informadas e acelerar o
              desenvolvimento de infraestrutura planejada. Explore como nossos
              Serviços Geoespaciais Gerenciados™ podem abordar todo o ciclo de
              vida de seus ativos.
            </p>
            <div className="space-y-4 text-white/80">
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
            className="bg-white rounded-lg p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-dark font-medium mb-2"
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
                    className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-dark font-medium mb-2"
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
                    className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-dark font-medium mb-2"
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
                    className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-dark font-medium mb-2"
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
                    className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-dark font-medium mb-2"
                >
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-dark font-medium mb-2"
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
                    className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-dark font-medium mb-2"
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
                    className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectLocation"
                  className="block text-dark font-medium mb-2"
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
                  className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-dark font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-blue/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all resize-none"
                />
              </div>

              {/* reCAPTCHA Mock */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-25">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue rounded flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">
                      Protegido por reCAPTCHA
                    </p>
                    <p className="text-xs text-gray-50">
                      Privacidade - Termos
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full uppercase tracking-wider"
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

