import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-pz-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
              O "Ponto Zero" é onde tudo começa. Mas poucos começam certo.
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                O mercado digital amadureceu. O tempo de vender com páginas amadoras, feitas de qualquer jeito, acabou. Hoje, a confiança é a moeda mais valiosa da internet.
              </p>
              <p>
                Criamos a <strong className="text-white">Ponto Zero</strong> ao perceber uma lacuna no mercado: grandes agências cobram milhares de reais por uma Landing Page, e ferramentas "faça você mesmo" entregam resultados genéricos que não convertem.
              </p>
              <p>
                Nossa missão é democratizar o design profissional. Entregamos para o iniciante (afiliado, produtor ou pequeno negócio) a mesma qualidade visual dos grandes players, por um valor acessível.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 border border-zinc-800 rounded-none z-0"></div>
            <div className="bg-zinc-900/30 p-8 relative z-10 backdrop-blur-sm border border-white/5">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Para quem é?</h3>
                  <p className="text-zinc-500 text-sm">Afiliados iniciantes, dropshippers e prestadores de serviço que precisam de uma página de vendas para rodar tráfego pago.</p>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Nosso DNA</h3>
                  <p className="text-zinc-500 text-sm">Minimalismo agressivo. Acreditamos que o design deve ser invisível: o cliente não deve notar a página, ele deve desejar o produto.</p>
                </div>
                <div className="w-full h-px bg-zinc-800"></div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Metodologia</h3>
                  <p className="text-zinc-500 text-sm">Não usamos modelos prontos e repetitivos. Analisamos seu nicho, seu produto e criamos a estrutura ideal para vender.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;