import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Shop() {
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'clothing', 'accessories', 'shoes'];

  const allProducts = [
    {
      id: 1,
      name: 'Tailored Black Blazer',
      price: 495,
      category: 'clothing',
      image: 'https://images.unsplash.com/photo-1770254082274-97be020349b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 2,
      name: 'Luxury Fur Coat',
      price: 1299,
      category: 'clothing',
      image: 'https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 3,
      name: 'Designer Straw Hat',
      price: 165,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1745284504844-7979176dc29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 4,
      name: 'Artisan Leather Boots',
      price: 545,
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 5,
      name: 'Classic Dress Shirt',
      price: 225,
      category: 'clothing',
      image: 'https://images.unsplash.com/photo-1620730192630-e1e66b613ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 6,
      name: 'Leather Belt',
      price: 145,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1624222247344-7ff0489a6c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 7,
      name: 'Premium Overcoat',
      price: 795,
      category: 'clothing',
      image: 'https://images.unsplash.com/photo-1666358069269-8b1778d8f48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 8,
      name: 'Designer Watch',
      price: 1250,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 9,
      name: 'Oxford Shoes',
      price: 425,
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ];

  const filteredProducts = filter === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl mb-4">Shop All</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Browse our complete collection of luxury fashion and accessories.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f, index) => (
              <motion.button
                key={f}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 text-sm tracking-wide transition-all capitalize ${
                  filter === f
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
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
      </div>
    </div>
  );
}
