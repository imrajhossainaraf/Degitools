import React from 'react';
import * as LucideIcons from 'lucide-react';
import { useStore } from '../store';
import { toast } from 'react-toastify';
import { X } from 'lucide-react';

const CartItem = ({ item }) => {
  const IconComponent = LucideIcons[item.icon] || LucideIcons.Package;
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(item.id);
    toast.error(`${item.name} removed.`, {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <div className="bg-white p-8 rounded-[32px] flex flex-col sm:flex-row items-center justify-between border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center">
          <IconComponent className={`w-10 h-10 ${item.iconColor || 'text-primary'}`} />
        </div>
        <div className="space-y-1">
          <h4 className="font-extrabold text-xl text-slate-800">{item.name}</h4>
          <div className="inline-flex px-2 py-0.5 rounded-md bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
            {item.tag || 'Premium'}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10 mt-6 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
        <div className="text-right space-y-1">
          <div className="text-2xl font-black text-slate-900">${item.price}</div>
          <div className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">Quantity: {item.quantity}</div>
        </div>
        <button
          onClick={handleRemove}
          className="w-12 h-12 rounded-xl bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
          title="Remove"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
