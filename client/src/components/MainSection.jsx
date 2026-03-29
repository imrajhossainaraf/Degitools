import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { useStore } from '../store';

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('products');
  const getCartCount = useStore((state) => state.getCartCount);
  const cartCount = getCartCount();

  return (
    <section className="py-24 px-6 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-slate-500 max-w-2xl text-sm font-medium leading-relaxed">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          
          <div className="flex bg-slate-100 p-1.5 rounded-[20px] shadow-inner">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-10 py-3 rounded-[16px] text-sm font-bold transition-all duration-400 ${
                activeTab === 'products'
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-10 py-3 rounded-[16px] text-sm font-bold transition-all duration-400 ${
                activeTab === 'cart'
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

        <div className="transition-all duration-700 ease-in-out">
          {activeTab === 'products' ? <ProductList /> : <Cart />}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
