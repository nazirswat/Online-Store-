import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, TrendingUp, Heart, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'women', label: 'Women' },
    { id: 'men', label: 'Men' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Tailored Black Blazer',
      price: 495,
      category: 'women',
      image: 'https://images.unsplash.com/photo-1770254082274-97be020349b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 2,
      name: 'Luxury Fur Coat',
      price: 1299,
      category: 'women',
      image: 'https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 3,
      name: 'Premium Black Overcoat',
      price: 795,
      category: 'men',
      image: 'https://images.unsplash.com/photo-1666358069269-8b1778d8f48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 4,
      name: 'Designer Straw Hat',
      price: 165,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1745284504844-7979176dc29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 5,
      name: 'Artisan Leather Boots',
      price: 545,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 6,
      name: 'Classic Dress Shirt',
      price: 225,
      category: 'men',
      image: 'https://images.unsplash.com/photo-1620730192630-e1e66b613ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section - Full Bleed */}
      <section className="relative min-h-screen flex items-center bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1705232497552-abd05ad64485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Fashion model in elegant attire"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-6xl md:text-8xl mb-6 text-white tracking-tight">
                Spring
                <br />
                Collection
                <br />
                2026
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-white/90 mb-8 max-w-md"
            >
              Discover timeless elegance reimagined for the modern wardrobe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4"
            >
              <Link to="/shop" className="px-8 py-4 bg-white text-black hover:bg-neutral-100 transition-colors">
                Shop Collection
              </Link>
              <Link to="/explore" className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors">
                Explore
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="mb-2">Premium Quality</h3>
              <p className="text-sm text-neutral-600">Handcrafted pieces from the finest materials</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="mb-2">Sustainable Fashion</h3>
              <p className="text-sm text-neutral-600">Ethically sourced and responsibly made</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="mb-2">Timeless Design</h3>
              <p className="text-sm text-neutral-600">Collections that transcend seasonal trends</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-8 text-center"
          >
            Featured Collection
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 text-sm tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden bg-white mb-4 aspect-[3/4]"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/10 flex items-center justify-center"
                  >
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="px-6 py-3 bg-white text-black hover:bg-neutral-100 transition-colors"
                    >
                      Quick View
                    </motion.button>
                  </motion.div>

                  <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </motion.div>

                <div className="space-y-1">
                  <h3 className="group-hover:opacity-60 transition-opacity">{product.name}</h3>
                  <p className="text-sm text-neutral-600">${product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="inline-block px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="relative py-24 bg-neutral-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1756277558413-aa1c8c011a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Lifestyle fashion"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl mb-6"
          >
            Crafted for Those Who
            <br />
            Demand Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Every piece tells a story of meticulous craftsmanship and timeless design,
            created for the discerning individual.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-8 py-4 bg-white text-black hover:bg-neutral-100 transition-colors"
          >
            Discover Our Story
          </motion.button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Stay Connected
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-600 mb-8"
          >
            Subscribe to receive exclusive access to new collections and special offers.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-neutral-300 focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
