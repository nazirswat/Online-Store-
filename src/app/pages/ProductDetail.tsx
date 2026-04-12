import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, TrendingUp, Star, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ProductDetail() {
  const { id } = useParams();

  // All products database
  const allProducts = [
    {
      id: '1',
      name: 'Tailored Black Blazer',
      price: 495,
      category: 'women',
      description: 'A perfectly tailored black blazer crafted from premium wool blend. Features a structured silhouette, notched lapels, and a single-button closure. Fully lined for comfort and sophistication.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Charcoal'],
      image: 'https://images.unsplash.com/photo-1770254082274-97be020349b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    },
    {
      id: '2',
      name: 'Luxury Fur Coat',
      price: 1299,
      category: 'women',
      description: 'Indulge in pure luxury with this exquisite fur coat. Made from ethically sourced materials, this statement piece features a plush texture and elegant drape that commands attention.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black', 'Cream'],
      image: 'https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    },
    {
      id: '3',
      name: 'Designer Straw Hat',
      price: 165,
      category: 'accessories',
      description: 'A handwoven straw hat perfect for sunny days. Features a wide brim for sun protection and a stylish ribbon detail. Lightweight and breathable for all-day comfort.',
      sizes: ['One Size'],
      colors: ['Natural', 'Black Ribbon', 'White Ribbon'],
      image: 'https://images.unsplash.com/photo-1745284504844-7979176dc29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    },
    {
      id: '4',
      name: 'Artisan Leather Boots',
      price: 545,
      category: 'accessories',
      description: 'Handcrafted Italian leather boots with exceptional attention to detail. Features a stacked heel, pointed toe, and premium leather sole. Built to last a lifetime.',
      sizes: ['36', '37', '38', '39', '40', '41'],
      colors: ['Black', 'Cognac', 'Dark Brown'],
      image: 'https://images.unsplash.com/photo-1516763449302-78450e5a507d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    },
    {
      id: '5',
      name: 'Cashmere Sweater',
      price: 425,
      category: 'women',
      description: 'Pure cashmere sweater offering unparalleled softness and warmth. Classic crew neck design with ribbed cuffs and hem. A timeless essential for your wardrobe.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Cream', 'Black', 'Camel', 'Grey'],
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: false
    },
    {
      id: '6',
      name: 'Silk Evening Gown',
      price: 1450,
      category: 'women',
      description: 'An ethereal silk evening gown that flows beautifully with every movement. Features delicate draping, a flattering silhouette, and exquisite craftsmanship.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Champagne', 'Black', 'Emerald'],
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    },
    {
      id: '7',
      name: 'Classic Dress Shirt',
      price: 225,
      category: 'men',
      description: 'Impeccably tailored dress shirt in premium cotton. Features mother-of-pearl buttons, refined collar construction, and a slim-fit silhouette.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Light Blue', 'Pink'],
      image: 'https://images.unsplash.com/photo-1620730192630-e1e66b613ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: false
    },
    {
      id: '8',
      name: 'Designer Handbag',
      price: 950,
      category: 'accessories',
      description: 'Structured leather handbag with gold-tone hardware. Features multiple compartments, adjustable strap, and signature detailing. The perfect everyday luxury piece.',
      sizes: ['One Size'],
      colors: ['Black', 'Tan', 'Burgundy'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    },
    {
      id: '9',
      name: 'Leather Trench Coat',
      price: 2100,
      category: 'women',
      description: 'Luxurious leather trench coat with timeless appeal. Features a belted waist, double-breasted closure, and premium Italian leather construction.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Camel'],
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      trending: true
    }
  ];

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-neutral-600 hover:text-black underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    'Premium quality materials',
    'Expert craftsmanship',
    'Sustainable sourcing',
    'Free shipping & returns'
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-sm text-neutral-600"
        >
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] bg-white overflow-hidden"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.trending && (
              <div className="absolute top-6 left-6 px-4 py-2 bg-black text-white text-xs tracking-wide flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                TRENDING
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-3xl">${product.price}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-sm text-neutral-600 ml-2">(124 reviews)</span>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-sm tracking-wide mb-3">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-neutral-300 hover:border-black transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="text-sm tracking-wide mb-3">COLOR</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-neutral-300 hover:border-black transition-colors text-sm"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="px-6 py-4 border border-neutral-300 hover:border-black transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-neutral-200 space-y-4 text-sm text-neutral-600">
              <div>
                <strong className="text-black">Category:</strong> {product.category}
              </div>
              <div>
                <strong className="text-black">SKU:</strong> LAL-{product.id.padStart(5, '0')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
