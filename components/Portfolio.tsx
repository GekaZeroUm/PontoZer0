import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-pz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Portfólio & Estilo</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white">Simplicidade que vende.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Dark Mode / Tech */}
          <div className="group cursor-default">
            <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-black p-8 flex flex-col justify-center items-center">
                 {/* Abstract visual representation of a landing page */}
                 <div className="w-3/4 h-4 bg-zinc-700 rounded-full mb-4 opacity-50"></div>
                 <div className="w-1/2 h-4 bg-zinc-800 rounded-full mb-12 opacity-30"></div>
                 <div className="w-full h-32 bg-zinc-800/50 rounded border border-white/5 mb-4 backdrop-blur-sm"></div>
                 <div className="w-full flex gap-2">
                    <div className="w-1/2 h-20 bg-zinc-800/30 rounded"></div>
                    <div className="w-1/2 h-20 bg-zinc-800/30 rounded"></div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-bold tracking-widest uppercase border border-white px-4 py-2">Nicho: Renda Extra</span>
              </div>
            </div>
            <h4 className="text-white font-bold">Dark High-Ticket</h4>
            <p className="text-zinc-500 text-sm">Ideal para PLR e Infoprodutos.</p>
          </div>

          {/* Card 2 - Clean / Health */}
          <div className="group cursor-default md:mt-12">
            <div className="aspect-[4/5] bg-zinc-100 border border-zinc-200 rounded-lg overflow-hidden relative mb-4">
               <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 p-8 flex flex-col items-center pt-16">
                 <div className="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                 <div className="w-full h-2 bg-gray-300 rounded mb-2"></div>
                 <div className="w-2/3 h-2 bg-gray-300 rounded mb-8"></div>
                 <div className="w-full aspect-video bg-white shadow-lg rounded border border-gray-100"></div>
              </div>
               <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-black text-sm font-bold tracking-widest uppercase border border-black px-4 py-2">Nicho: Saúde/Beleza</span>
              </div>
            </div>
            <h4 className="text-white font-bold">Clean Minimalist</h4>
            <p className="text-zinc-500 text-sm">Foco em imagem e clareza.</p>
          </div>

          {/* Card 3 - Bold / Offer */}
          <div className="group cursor-default">
            <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative mb-4">
               <div className="absolute inset-0 bg-zinc-900 p-6 flex flex-col justify-between">
                  <div className="w-full h-8 bg-red-600/20 border border-red-600/30 rounded flex items-center justify-center text-red-500 text-xs font-bold uppercase">Oferta Exclusiva</div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-zinc-700 rounded"></div>
                    <div className="w-full h-2 bg-zinc-700 rounded"></div>
                    <div className="w-full h-2 bg-zinc-700 rounded"></div>
                  </div>
                  <div className="w-full py-3 bg-white rounded flex justify-center items-center">
                    <div className="w-24 h-2 bg-black rounded"></div>
                  </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-bold tracking-widest uppercase border border-white px-4 py-2">Nicho: Oferta Direta</span>
              </div>
            </div>
            <h4 className="text-white font-bold">Hard Sell</h4>
            <p className="text-zinc-500 text-sm">Focado em conversão agressiva.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;