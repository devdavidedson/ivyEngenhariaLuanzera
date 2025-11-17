import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDiferencial from "@/components/SectionDiferencial";
import BannerDestaque from "@/components/BannerDestaque";
import SectionAlcance from "@/components/SectionAlcance";
import SectionServicos from "@/components/SectionServicos";
import SectionCultura from "@/components/SectionCultura";
import CarrosselInsights from "@/components/CarrosselInsights";
import FormularioContato from "@/components/FormularioContato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionDiferencial />
      <BannerDestaque />
      <SectionAlcance />
      <SectionServicos />
      <SectionCultura />
      <CarrosselInsights />
      <FormularioContato />
      <Footer />
    </main>
  );
}

