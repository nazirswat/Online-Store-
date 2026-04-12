import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Sale() {
  const saleProducts = [
    {
      id: 1,
      name: 'Winter Wool Coat',
      originalPrice: 1200,
      salePrice: 720,
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 2,
      name: 'Silk Blouse',
      originalPrice: 350,
      salePrice: 245,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1624206112431-0e5e9a62e1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 3,
      name: 'Leather Messenger Bag',
      originalPrice: 650,
      salePrice: 455,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 4,
      name: 'Cashmere Cardigan',
      originalPrice: 480,
      salePrice: 288,
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 5,
      name: 'Oxford Shoes',
      originalPrice: 425,
      salePrice: 297,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: 6,
      name: 'Wool Scarf',
      originalPrice: 180,
      salePrice: 108,
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
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
          <h1 className="text-5xl md:text-7xl mb-4">Sale</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover exceptional savings on selected items. Limited time only.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saleProducts.map((product, index) => (
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

                <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs tracking-wide">
                  {product.discount}
                </div>

                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </motion.div>

              <div className="space-y-1">
                <h3 className="group-hover:opacity-60 transition-opacity">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-red-600 font-medium">${product.salePrice}</p>
                  <p className="text-sm text-neutral-400 line-through">${product.originalPrice}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
