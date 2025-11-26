import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://wa.me/5585996586689?text=Ol%C3%A1%2C%20visitei%20o%20site%20da%20Ponto%20Zero%20e%20gostaria%20de%20saber%20mais.";

  const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#portfolio' },
    { label: 'Começar', href: '#investimento' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-pz-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-black tracking-tighter text-white">
                PONTO<span className="text-zinc-600">ZERO</span>.
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-zinc-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2"
              >
                Falar no WhatsApp <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-pz-black border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className="text-zinc-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-zinc-900 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)} 
              className="text-black bg-white block px-3 py-3 rounded-lg text-base font-bold mt-4 text-center mx-2"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;