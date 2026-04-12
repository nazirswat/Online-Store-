import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export default function Explore() {
  const collections = [
    {
      id: 1,
      title: 'Spring Collection 2026',
      description: 'Discover our latest seasonal offerings',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/new'
    },
    {
      id: 2,
      title: "Women's Essentials",
      description: 'Timeless pieces for every wardrobe',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/women'
    },
    {
      id: 3,
      title: "Men's Collection",
      description: 'Refined style meets modern comfort',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/men'
    },
    {
      id: 4,
      title: 'Accessories',
      description: 'Complete your look with premium details',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/accessories'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl mb-4">Explore</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Dive into our curated collections and discover what makes Lalazar special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={collection.link} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden bg-neutral-900 aspect-[4/3]"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-3xl text-white mb-2">{collection.title}</h3>
                    <p className="text-white/80">{collection.description}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative py-24 bg-neutral-900 overflow-hidden"
        >
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c1c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Lalazar Story"
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl mb-6">Our Story</h2>
            <p className="text-lg text-white/90 mb-8">
              Founded on the principles of timeless elegance and sustainable luxury, Lalazar represents
              the perfect fusion of traditional craftsmanship and modern design sensibility.
            </p>
            <Link to="/" className="inline-block px-8 py-4 bg-white text-black hover:bg-neutral-100 transition-colors">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
