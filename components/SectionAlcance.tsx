"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

export default function SectionAlcance() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[60vh] max-h-[85vh] flex items-center bg-gradient-to-b from-dark via-dark to-black relative overflow-hidden py-8 lg:py-12"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 topographic-pattern"></div>
      </div>

      <div className="relative z-10 w-full flex gap-[10px]">
        {/* Left Panel - Text - 30% */}
        <div
          className={`w-[30vw] text-white px-8 lg:px-12 flex flex-col justify-center items-center text-center transition-none ${
            isVisible ? "slide-left" : "opacity-0 -translate-x-[200px]"
          }`}
        >
          <h2 className="text-[22px] font-black mb-6 uppercase leading-tight tracking-wider">
            Alcance Nacional.
            <br />
            Equipes Locais.
          </h2>
          {/* Separator line */}
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <p className="text-[16px] text-white mb-8 leading-relaxed tracking-wide">
            As equipes da Ivy podem ser implantadas em 24 horas para começar
            a coletar seus dados – desde levantamentos topográficos até dados
            digitais ricos em informações. Com tecnologias avançadas e equipes
            de consultoria especializadas, transformamos seus dados no seu
            maior ativo.
          </p>
          <Button variant="outline" size="md" className="uppercase w-fit">
            Localizações Ivy
          </Button>
        </div>

        {/* Right Panel - GIF - 70% */}
        <div
          className={`w-[70vw] h-full relative flex items-center justify-center transition-none overflow-hidden ${
            isVisible ? "slide-right" : "opacity-0 translate-x-[200px]"
          }`}
        >
          <Image
            src="/image/gif-slide-2.gif"
            alt="Serviços Ivy Engenharia Geoespacial"
            width={800}
            height={600}
            className="w-full h-full max-h-[85vh] object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

