import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { useStore } from '../store';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const IconComponent = LucideIcons[product.icon] || LucideIcons.Package;
  const addToCart = useStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
    
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const getBadgeStyles = () => {
    switch (product.tagType) {
      case 'popular': return 'bg-orange-100 text-orange-600';
      case 'new': return 'bg-green-100 text-green-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative flex flex-col h-full group">
      {product.tag && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getBadgeStyles()}`}>
          {product.tag}
        </div>
      )}

      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <IconComponent className={`w-6 h-6 ${product.iconColor || 'text-primary'}`} />
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            {product.name}
          </h3>
          <p className="text-[13px] text-slate-500 leading-relaxed mt-2 font-medium">
            {product.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1 pt-2">
          <span className="text-2xl font-extrabold text-slate-900">${product.price}</span>
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wide">/{product.period}</span>
        </div>

        <ul className="space-y-3 pt-4">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-[13px] text-slate-600 font-medium">
              <LucideIcons.Check className="w-4 h-4 text-green-500 stroke-[3]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8">
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 rounded-xl text-sm font-extrabold transition-all duration-300 active:scale-95 ${
            isAdded
              ? 'bg-green-500 text-white shadow-lg shadow-green-100'
              : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1'
          }`}
        >
          {isAdded ? 'Added to Cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
