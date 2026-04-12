import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Accessories() {
  const accessories = [
    {
      id: 1,
      name: 'Designer Straw Hat',
      price: 165,
      image: 'https://images.unsplash.com/photo-1745284504844-7979176dc29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 2,
      name: 'Artisan Leather Boots',
      price: 545,
      image: 'https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 3,
      name: 'Silk Scarf',
      price: 195,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 4,
      name: 'Leather Belt',
      price: 145,
      image: 'https://images.unsplash.com/photo-1624222247344-7ff0489a6c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 5,
      name: 'Designer Watch',
      price: 1250,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 6,
      name: 'Leather Gloves',
      price: 185,
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl mb-4">Accessories</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Complete your look with our curated selection of premium accessories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((product, index) => (
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
