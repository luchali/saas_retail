import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  MapPin,
  Phone,
  User,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  Truck,
  ArrowLeft,
  CheckCircle2,
  Package,
  Plus,
  Minus,
  Trash2,
  X,
  Globe
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router';

export function StoreLandingPage() {
  const { products, addOrder, storeName, cart, addToCart, removeFromCart, clearCart } = useAppContext();
  const [isOrdering, setIsOrdering] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    customer: '',
    email: '',
    phone: '',
    address: ''
  });

  const cartTotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (price * item.quantity);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    addOrder({
      customer: formData.customer,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      product: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
      amount: `$${cartTotal.toFixed(2)}`
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsOrdering(false);
      setIsCartOpen(false);
      clearCart();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 italic-none">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight uppercase">{storeName}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-slate-600 hidden sm:block font-sans">24/7 Delivery Available</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-slate-50 rounded-full transition-colors group"
            >
              <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-in fade-in zoom-in duration-300">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              Exclusive Marketplace
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
              Elevate Your Everyday <span className="text-blue-600">Essentials.</span>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover curated products designed for modern life. Automatic 24/7 ordering and worldwide shipping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: 'Secure Payment', desc: '100% Encrypted' },
            { icon: Clock, title: '24/7 Service', desc: 'Order Anytime' },
            { icon: Truck, title: 'Fast Shipping', desc: 'Express Delivery' },
            { icon: Star, title: 'Top Rated', desc: '5,000+ Reviews' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">{item.title}</p>
                <p className="text-[10px] text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Our Collection</h2>
            <p className="text-slate-500 text-sm">Synchronized with our latest inventory</p>
          </div>
          <button className="text-blue-600 text-sm font-bold flex items-center gap-1 group">
            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => {
                addToCart(product);
                setIsCartOpen(true);
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 bg-white text-slate-900 py-3 rounded-xl font-bold text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-center shadow-lg">
                  Add to Cart
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">{product.category}</p>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors uppercase">{product.name}</h3>
                </div>
                <p className="font-bold text-slate-900 text-sm">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 uppercase tracking-tight">Shopping Bag ({cart.length})</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-slate-300" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Your bag is empty</p>
                      <p className="text-xs text-slate-400">Discover something new today</p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-blue-600 text-xs font-bold uppercase tracking-widest"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-24 rounded-xl bg-slate-50 overflow-hidden shrink-0">
                        <img src={item.image} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-300 hover:text-rose-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">{item.category}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-slate-100 rounded-lg overflow-hidden shrink-0">
                            <button
                              onClick={() => {
                                // Add logic for decrement if needed
                              }}
                              className="p-1 hover:bg-slate-50 text-slate-400"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-bold">{item.quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="p-1 hover:bg-slate-50 text-slate-400"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-bold text-blue-600 text-sm">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 space-y-4">
                  <div className="flex justify-between items-end">
                    <p className="text-xs text-slate-400 font-bold uppercase">Subtotal</p>
                    <p className="text-xl font-bold text-slate-900">${cartTotal.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsOrdering(true);
                    }}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Panel */}
      <AnimatePresence>
        {isOrdering && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrdering(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[80]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[90] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <button onClick={() => setIsOrdering(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                  <ArrowLeft className="w-5 h-5 text-slate-500" />
                </button>
                <h3 className="font-bold text-slate-900 uppercase tracking-tight font-sans">Checkout</h3>
                <div className="w-9" />
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 font-sans">Order Confirmed!</h4>
                    <p className="text-slate-500 text-sm">Your order for {cart.length} items is being processed.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-10 space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Order Summary</p>
                      <div className="bg-slate-50 rounded-2xl p-4 space-y-4">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between items-center text-sm">
                            <span className="text-slate-600 font-sans">{item.name} <span className="text-slate-400 font-normal">x{item.quantity}</span></span>
                            <span className="font-bold text-slate-900">{item.price}</span>
                          </div>
                        ))}
                        <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                          <span className="text-xs font-bold uppercase">Total</span>
                          <span className="text-lg font-bold text-blue-600">${cartTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <User className="w-3 h-3" /> Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                          value={formData.customer}
                          onChange={e => setFormData({ ...formData, customer: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Phone className="w-3 h-3" /> Phone Number
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Globe className="w-3 h-3" /> Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <MapPin className="w-3 h-3" /> Delivery Address
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Street, City, State, ZIP"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                          value={formData.address}
                          onChange={e => setFormData({ ...formData, address: e.target.value })}
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
                        >
                          Complete Order
                        </button>
                        <p className="text-center text-[10px] text-slate-400 mt-4 italic">
                          Orders are processed automatically 24/7.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-slate-900 py-20 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight uppercase">{storeName}</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Redefining the online shopping experience with seamless, automatic ordering and premium curators.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest">Shop</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Catalog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest">Company</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-xs uppercase tracking-widest">Subscribe</h5>
            <div className="flex gap-2">
              <input type="email" placeholder="email@address.com" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-xs flex-1 outline-none focus:border-white/30" />
              <button className="bg-white text-slate-900 px-4 py-3 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      </footer>
    </div>
  );
}
