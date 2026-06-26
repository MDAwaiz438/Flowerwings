'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const router = useRouter();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[200] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory shadow-modal z-[210] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-line">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-ink" />
                <h2 className="font-display text-h3 text-ink font-semibold">Your Cart</h2>
                <span className="bg-pink-petal text-pink text-xs px-2 py-0.5 rounded-full font-medium ml-2">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-slate hover:text-pink transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-petal rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag className="w-8 h-8 text-pink" />
                  </div>
                  <h3 className="text-h3 font-display font-medium text-ink">Your cart is empty</h3>
                  <p className="text-slate text-body max-w-[240px]">
                    Looks like you haven't added any beautiful blooms to your cart yet.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsOpen(false);
                      router.push('/shop');
                    }} 
                    className="mt-4"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 bg-white p-3 rounded-lg border border-line shadow-sm">
                      <div className="relative w-20 h-24 rounded-md overflow-hidden bg-pink-blush/20 flex-shrink-0">
                        <Image
                          src={item.product.images[0] || 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=400&auto=format&fit=crop'}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-body text-ink line-clamp-2">
                            {item.product.name}
                          </h4>
                          <button 
                            onClick={() => removeItem(item.product.id)}
                            className="text-mist hover:text-[#E53E3E] transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-pink font-semibold mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        
                        <div className="flex items-center gap-3 mt-auto pt-2">
                          <div className="flex items-center border border-line rounded-md">
                            <button
                              onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="p-1 text-slate hover:text-pink disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 text-slate hover:text-pink"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-line p-6 bg-white">
                <div className="flex justify-between items-center mb-4 text-body">
                  <span className="text-slate">Subtotal</span>
                  <span className="font-semibold text-ink text-h3">{formatPrice(getCartTotal())}</span>
                </div>
                <p className="text-xs text-mist mb-4 text-center">
                  Shipping and delivery location calculated at checkout.
                </p>
                <Button size="full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
