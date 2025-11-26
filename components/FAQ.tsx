import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "O que exatamente eu recebo?",
      answer: "Você recebe uma Landing Page completa, com design profissional e copy (texto) persuasiva, pronta para vender. Entregamos o arquivo pronto para você subir na sua estrutura (WordPress/Elementor) ou o código HTML, dependendo da sua preferência."
    },
    {
      question: "Preciso ter domínio e hospedagem?",
      answer: "Sim! A Ponto Zero cria a página, mas ela precisa morar na internet. Você precisa ter contratado um domínio (ex: seunome.com.br) e uma hospedagem. Se não souber como, nós te orientamos no processo."
    },
    {
      question: "Serve para qualquer nicho?",
      answer: "Absolutamente. Criamos páginas para emagrecimento, renda extra, encapsulados, cursos profissionalizantes, ebooks e serviços locais. Adaptamos a comunicação para o seu público."
    },
    {
      question: "Quanto tempo demora para ficar pronta?",
      answer: "Nosso prazo médio é de 48 horas úteis após o envio das informações do seu produto. Trabalhamos com agilidade porque sabemos que você tem pressa para começar a anunciar."
    },
    {
      question: "Vocês fazem o tráfego (anúncios) também?",
      answer: "Não. Nosso foco é exclusivo na estrutura (Landing Page). Nós deixamos a 'loja' pronta para vender, mas é você quem traz os clientes através do tráfego (Facebook Ads, Google Ads, TikTok, etc)."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-pz-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-zinc-400">
            Tudo o que você precisa saber antes de fechar sua página.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-800 rounded-lg bg-zinc-900/20 overflow-hidden transition-all hover:border-zinc-700"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-zinc-400 flex-shrink-0" />
                ) : (
                  <Plus className="text-zinc-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 text-zinc-400 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;