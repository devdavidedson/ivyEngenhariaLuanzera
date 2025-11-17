export interface Insight {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
}

export interface Servico {
  id: string;
  title: string;
  description: string;
  services?: string[];
  backgroundType: "topographic" | "orange" | "blue" | "technical";
}

