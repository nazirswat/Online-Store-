import { useState } from 'react';
import { motion } from 'motion/react';
import { Search as SearchIcon, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const popularSearches = [
    'Blazer',
    'Boots',
    'Silk',
    'Cashmere',
    'Bag',
    'Coat'
  ];

  const popularItems = [
    {
      id: '1',
      name: 'Tailored Black Blazer',
      price: 495,
      trending: true,
      image: 'https://images.unsplash.com/photo-1770254082274-97be020349b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '2',
      name: 'Luxury Fur Coat',
      price: 1299,
      trending: true,
      image: 'https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '3',
      name: 'Designer Straw Hat',
      price: 165,
      trending: true,
      image: 'https://images.unsplash.com/photo-1745284504844-7979176dc29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '4',
      name: 'Artisan Leather Boots',
      price: 545,
      trending: true,
      image: 'https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '5',
      name: 'Cashmere Sweater',
      price: 425,
      trending: false,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '6',
      name: 'Silk Evening Gown',
      price: 1450,
      trending: true,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '7',
      name: 'Classic Dress Shirt',
      price: 225,
      trending: false,
      image: 'https://images.unsplash.com/photo-1620730192630-e1e66b613ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '8',
      name: 'Designer Handbag',
      price: 950,
      trending: true,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      id: '9',
      name: 'Leather Trench Coat',
      price: 2100,
      trending: true,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handlePopularSearchClick = (search: string) => {
    setSearchQuery(search);
    setShowResults(true);
  };

  // Filter products based on search query
  const searchResults = popularItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl mb-8">Search & Explore</h1>

          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full pl-16 pr-6 py-6 text-lg border-2 border-neutral-200 focus:border-black focus:outline-none transition-colors"
            />
          </form>

          <div className="text-left max-w-4xl mx-auto mb-16">
            <h2 className="text-xl mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              {popularSearches.map((search, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handlePopularSearchClick(search)}
                  className="px-6 py-3 bg-white border border-neutral-200 hover:border-black transition-colors text-sm cursor-pointer"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search Results or Popular Items Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-3xl">
              {showResults && searchQuery ? `Results for "${searchQuery}"` : 'Trending Now'}
            </h2>
          </div>

          {showResults && searchResults.length === 0 && searchQuery ? (
            <div className="text-center py-16 text-neutral-600">
              <p className="text-lg mb-2">No products found for "{searchQuery}"</p>
              <p className="text-sm">Try searching for something else or browse our trending items below.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showResults && searchQuery ? searchResults : popularItems).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/product/${product.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden bg-white mb-4 aspect-[3/4] cursor-pointer"
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

                    {product.trending && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-xs tracking-wide flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        TRENDING
                      </div>
                    )}

                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
                    >
                      <Heart className="w-5 h-5" />
                    </button>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/10 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="px-6 py-3 bg-white text-black hover:bg-neutral-100 transition-colors"
                      >
                        View Details
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <div className="space-y-1">
                    <h3 className="group-hover:opacity-60 transition-opacity">{product.name}</h3>
                    <p className="text-sm text-neutral-600">${product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
