import React, { useState } from 'react';
import { Sparkles, Loader2, Copy } from 'lucide-react';
import { generateMarketingCopy } from '../services/geminiService';
import { GeneratedCopy } from '../types';

const AiCopyGen: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GeneratedCopy[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche || !product) return;
    
    setLoading(true);
    setHasSearched(true);
    const copies = await generateMarketingCopy(niche, product);
    setResults(copies);
    setLoading(false);
  };

  return (
    <section id="ferramenta" className="py-24 bg-pz-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 mb-6">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">Powered by Google Gemini</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Gerador de Headlines Ponto Zero</h2>
          <p className="text-zinc-400 text-lg">
            Prove um pouco do nosso foco em conversão. Gere ideias para sua página agora.
          </p>
        </div>

        <div className="bg-pz-dark border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Seu Nicho (Ex: Emagrecimento, Renda Extra)</label>
              <input 
                type="text" 
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-pz-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Digita aí..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Tipo de Produto (Ex: Ebook, Curso, Mentoria)</label>
              <input 
                type="text" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full bg-pz-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="O que você vende?"
                required
              />
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Gerando Ideias...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} /> Gerar Headlines de Alta Conversão
                  </>
                )}
              </button>
            </div>
          </form>

          {hasSearched && !loading && results.length === 0 && (
             <p className="text-center text-zinc-500">Nenhuma ideia gerada. Tente novamente.</p>
          )}

          <div className="space-y-6">
            {results.map((item, idx) => (
              <div key={idx} className="bg-pz-black border border-zinc-800 p-6 rounded-xl animate-fade-in-up">
                <div className="mb-4">
                  <span className="text-xs font-bold text-zinc-500 uppercase">Opção {idx + 1}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-zinc-500 block mb-1">Headline (Manchete)</span>
                    <h3 className="text-xl font-bold text-white">{item.headline}</h3>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block mb-1">Subheadline</span>
                    <p className="text-zinc-400">{item.subheadline}</p>
                  </div>
                  <div>
                     <span className="text-xs text-zinc-500 block mb-1">Botão (CTA)</span>
                    <div className="inline-block px-4 py-2 bg-zinc-800 rounded text-sm font-bold text-white border border-zinc-700">
                      {item.cta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {results.length > 0 && (
            <div className="mt-8 text-center pt-6 border-t border-zinc-800">
               <p className="text-zinc-400 mb-4">Gostou da copy? Imagine a estrutura completa.</p>
               <a href="#pricing" className="text-white font-bold hover:underline">Encomendar Landing Page Completa &rarr;</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiCopyGen;