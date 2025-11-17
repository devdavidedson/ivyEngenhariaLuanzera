"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "SOBRE", hasDropdown: true },
    { label: "SERVIÇOS", hasDropdown: true },
    { label: "MERCADOS", hasDropdown: true },
    { label: "CASES DE SUCESSO" },
    { label: "FUSÕES & AQUISIÇÕES" },
    { label: "CARREIRAS", hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Logo Symbol - V estilizado */}
              <div className="relative w-12 h-12">
                <svg
                  viewBox="0 0 60 60"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* V estilizado com faixas */}
                  <path
                    d="M30 5 L50 55 L40 55 L30 30 L20 55 L10 55 Z"
                    fill="#FF9933"
                  />
                  <path
                    d="M30 8 L47 52 L40 52 L30 28 L20 52 L13 52 Z"
                    fill="#1987D9"
                  />
                  <path
                    d="M30 12 L44 48 L38 48 L30 26 L22 48 L16 48 Z"
                    fill="#141A26"
                  />
                </svg>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-dark font-bold text-lg leading-tight">
                  ENGENHARIA
                </span>
                <span className="text-dark font-light text-sm leading-tight -mt-1">
                  GEOESPACIAL
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-dark font-medium text-xs xl:text-sm uppercase hover:text-orange transition-colors flex items-center whitespace-nowrap"
              >
                {item.label}
                {item.hasDropdown && (
                  <span className="ml-1 text-xs">▼</span>
                )}
              </a>
            ))}
            <a
              href="#"
              className="text-dark font-medium text-sm uppercase hover:text-orange transition-colors"
            >
              INSIGHTS
            </a>
            <a
              href="#"
              className="text-dark font-medium text-sm uppercase hover:text-orange transition-colors"
            >
              PORTAL DO CLIENTE
            </a>
            <a
              href="#contato"
              className="text-dark font-medium text-sm uppercase hover:text-orange transition-colors"
            >
              CONTATO
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-25 mt-4 pt-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-dark font-medium text-sm uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                className="text-dark font-medium text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTATO
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

