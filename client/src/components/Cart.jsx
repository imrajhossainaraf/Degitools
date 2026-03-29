import React from 'react';
import { useStore } from '../store';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);
  const getCartCount = useStore((state) => state.getCartCount);
  const getCartTotal = useStore((state) => state.getCartTotal);

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  const handleCheckout = () => {
    clearCart();
    toast.info('Order processed successfully!', {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-8 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center">
          <ShoppingBag className="w-12 h-12 text-slate-200" />
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-extrabold text-slate-800">Your cart is empty</h3>
          <p className="text-slate-400 font-medium max-w-xs mx-auto">Explore our premium digital tools and add some to your collection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12 items-start">
      <div className="lg:col-span-2 space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="space-y-8">
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/40 sticky top-32">
          <h3 className="text-xl font-extrabold text-slate-800 mb-8">Summary</h3>
          
          <div className="space-y-5 mb-10">
            <div className="flex justify-between text-sm font-bold text-slate-400">
              <span>Items Count</span>
              <span className="text-slate-800">{cartCount}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-slate-400">
              <span>Subtotal</span>
              <span className="text-slate-800">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="border-t border-slate-100 pt-6 flex justify-between items-center">
              <span className="font-extrabold text-slate-800">Total Price</span>
              <span className="font-extrabold text-3xl text-primary">${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-primary text-white font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 group shadow-xl shadow-primary/25 hover:bg-primary-dark transition-all active:scale-95"
          >
            Checkout Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
