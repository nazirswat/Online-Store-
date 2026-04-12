import { motion } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Tailored Black Blazer',
      price: 495,
      quantity: 1,
      size: 'M',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1770254082274-97be020349b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      id: '4',
      name: 'Artisan Leather Boots',
      price: 545,
      quantity: 1,
      size: '39',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-neutral-400" />
              <h2 className="text-2xl mb-4">Your cart is empty</h2>
              <p className="text-neutral-600 mb-8">Add some items to get started!</p>
              <Link
                to="/shop"
                className="inline-block px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 flex gap-6"
                  >
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-32 object-cover"
                      />
                    </Link>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="text-lg hover:opacity-60 transition-opacity">
                            {item.name}
                          </h3>
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-sm text-neutral-600 mb-4">
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-lg">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-white p-6 sticky top-24">
                  <h2 className="text-2xl mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-neutral-500">
                        Free shipping on orders over $500
                      </p>
                    )}
                    <div className="pt-4 border-t border-neutral-200">
                      <div className="flex justify-between text-lg">
                        <span className="font-medium">Total</span>
                        <span className="font-medium">${total}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors mb-4 flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <Link
                    to="/shop"
                    className="block text-center text-sm text-neutral-600 hover:text-black transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
