import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { useStore } from '../store';

const Navbar = () => {
  const getCartCount = useStore((state) => state.getCartCount);
  const cartCount = getCartCount();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-primary">
            DigiTools
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-primary transition-colors">Products</a>
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-600 cursor-pointer hover:text-primary transition-colors">
            <User className="w-4 h-4" />
            <span>Login</span>
          </div>
          
          <button className="hidden md:block bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-all shadow-md shadow-primary/20">
            Get Started
          </button>

          <div className="relative group cursor-pointer p-2 hover:bg-slate-50 rounded-full transition-all">
            <ShoppingCart className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-white font-bold text-[10px] w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
