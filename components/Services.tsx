import React from 'react';
import { PenTool, Layout, Monitor, Code } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="text-white" size={32} />,
      title: "UI & Web Design",
      description: "Criação visual completa. Pensamos na hierarquia das informações, cores, tipografia e imagens para transmitir autoridade imediata."
    },
    {
      icon: <PenTool className="text-white" size={32} />,
      title: "Copywriting Estratégico",
      description: "Não é apenas escrever, é persuadir. Estruturamos os textos da sua página focados em quebrar objeções e levar ao clique."
    },
    {
      icon: <Monitor className="text-white" size={32} />,
      title: "Otimização Responsiva",
      description: "Sua página perfeita em qualquer dispositivo. Focamos obsessivamente na experiência mobile, de onde vem a maioria das vendas."
    },
    {
      icon: <Code className="text-white" size={32} />,
      title: "Implementação",
      description: "Entregamos o arquivo JSON (Elementor) ou HTML pronto. Você só precisa subir no seu domínio. Sem dores de cabeça com código."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-pz-dark border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">O que fazemos</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">Design estratégico para performance.</h3>
          </div>
          <div className="mt-6 md:mt-0">
             <p className="text-zinc-500 max-w-xs text-sm">Atuamos em todas as etapas da construção da sua página de vendas.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
          {services.map((service, index) => (
            <div key={index} className="bg-pz-black p-10 hover:bg-zinc-900/50 transition-colors group">
              <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;