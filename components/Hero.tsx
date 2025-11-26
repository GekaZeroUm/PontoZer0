import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-pz-black border-b border-white/5 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-b from-zinc-800 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-t from-zinc-900 to-transparent rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-zinc-500 text-sm font-medium tracking-[0.2em] uppercase border-b border-zinc-800 pb-1">
              Estúdio Digital para Iniciantes
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Sua estrutura <br />
            <span className="text-zinc-600">profissional.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
            A <strong className="text-white font-semibold">Ponto Zero</strong> é especializada em criar a infraestrutura digital que todo afiliado precisa para começar. Design, copy e conversão em um único lugar.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <a href="#sobre" className="text-white text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors flex items-center gap-2 group">
              Conheça a Agência 
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;