import { motion } from 'motion/react';
import { Star, TrendingUp, Heart, Shield, Truck, RefreshCw } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Premium Quality',
      description: 'Every piece is handcrafted from the finest materials sourced globally. Our commitment to quality ensures lasting value and timeless appeal.'
    },
    {
      icon: Star,
      title: 'Sustainable Fashion',
      description: 'Ethically sourced and responsibly made. We partner with artisans who share our values of environmental stewardship and fair labor practices.'
    },
    {
      icon: Heart,
      title: 'Timeless Design',
      description: 'Collections that transcend seasonal trends. Our pieces are designed to remain relevant and cherished for years to come.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We stand behind every product with our comprehensive quality guarantee. If you are not satisfied, we will make it right.'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary worldwide shipping on all orders. Your purchases are carefully packaged and insured for safe delivery.'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: 'Free returns within 30 days. We want you to be completely satisfied with every purchase from Lalazar.'
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
          <h1 className="text-5xl md:text-7xl mb-4">Why Choose Lalazar</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover the features and values that make us your trusted destination for luxury fashion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 bg-neutral-900 text-white p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl mb-6">Experience Luxury Redefined</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Lalazar for their fashion needs.
            Experience the difference that true quality and service makes.
          </p>
          <button className="px-8 py-4 bg-white text-black hover:bg-neutral-100 transition-colors">
            Start Shopping
          </button>
        </motion.div>
      </div>
    </div>
  );
}
