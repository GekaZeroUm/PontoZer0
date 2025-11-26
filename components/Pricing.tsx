import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const whatsappLink = "https://wa.me/5585996586689?text=Ol%C3%A1%2C%20quero%20contratar%20o%20plano%20Launch%20da%20Ponto%20Zero.";

  return (
    <section id="investimento" className="py-24 bg-pz-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold text-white mb-6">Investimento Único. <br/>Sem surpresas.</h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-xl">
              Simplificamos o processo de contratação. Um único pacote que inclui tudo o que você precisa para validar seu produto e começar a vender.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Design Exclusivo', 'Copywriting Profissional', 'Versão Mobile/Desktop', 'Arquivo JSON/HTML', 'Suporte na Instalação', 'Entrega em 48h'].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-zinc-800 p-3 rounded bg-zinc-900/20">
                  <Check size={16} className="text-white" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white text-black p-8 md:p-12 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                 <div className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Launch Pack</div>
               </div>
              
              <div className="mb-8">
                <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest block mb-2">Valor Total</span>
                <div className="text-6xl font-black tracking-tighter">
                  R$49
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 font-medium">Ideal para:</p>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• Afiliados iniciantes</li>
                  <li>• Teste de novos produtos</li>
                  <li>• Prestadores de serviço locais</li>
                </ul>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white hover:bg-zinc-800 font-bold text-lg py-4 px-6 rounded-xl transition-all flex items-center justify-between group"
              >
                Contratar Projeto
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;