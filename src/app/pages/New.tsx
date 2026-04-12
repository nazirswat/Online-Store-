import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function New() {
  const newArrivals = [
    {
      id: 1,
      name: 'Silk Evening Gown',
      price: 1450,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'Just In'
    },
    {
      id: 2,
      name: 'Cashmere Turtleneck',
      price: 385,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Leather Trench Coat',
      price: 2100,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'Exclusive'
    },
    {
      id: 4,
      name: 'Wool Blend Suit',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'New'
    },
    {
      id: 5,
      name: 'Designer Handbag',
      price: 950,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'Just In'
    },
    {
      id: 6,
      name: 'Premium Sunglasses',
      price: 295,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'New'
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
          <h1 className="text-5xl md:text-7xl mb-4">New Arrivals</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our latest collection featuring the newest trends and timeless classics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product, index) => (
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

                <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-xs tracking-wide">
                  {product.badge}
                </div>

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
