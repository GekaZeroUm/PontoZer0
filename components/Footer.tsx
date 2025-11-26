import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pz-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <span className="text-2xl font-black tracking-tighter text-white">
                PONTO<span className="text-zinc-500">ZERO</span>.
              </span>
             <p className="text-zinc-500 text-sm mt-2">Todo afiliado começa aqui.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Ponto Zero. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Termos de Uso</a>
            <a href="#" className="hover:text-zinc-400">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;