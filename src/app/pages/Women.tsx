import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Women() {
  const womenProducts = [
    {
      id: 1,
      name: 'Tailored Black Blazer',
      price: 495,
      image: 'https://images.unsplash.com/photo-1770254082274-97be020349b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 2,
      name: 'Luxury Fur Coat',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 3,
      name: 'Silk Midi Dress',
      price: 685,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 4,
      name: 'Cashmere Sweater',
      price: 425,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 5,
      name: 'Wide Leg Trousers',
      price: 375,
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 6,
      name: 'Evening Clutch',
      price: 550,
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
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
          <h1 className="text-5xl md:text-7xl mb-4">Women's Collection</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Elegant pieces designed for the modern woman who values sophistication and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {womenProducts.map((product, index) => (
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
