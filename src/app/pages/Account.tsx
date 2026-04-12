import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Account() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="max-w-md mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8"
        >
          <h1 className="text-4xl mb-2 text-center">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-neutral-600 text-center mb-8">
            {isSignUp
              ? 'Join Lalazar to enjoy exclusive benefits'
              : 'Sign in to your account'}
          </p>

          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-4 py-3 border border-neutral-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-neutral-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </span>{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-black hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 text-center mb-4">Or continue with</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-3 border border-neutral-300 hover:border-black transition-colors text-sm">
                Google
              </button>
              <button className="px-4 py-3 border border-neutral-300 hover:border-black transition-colors text-sm">
                Apple
              </button>
            </div>
          </div>

          {isSignUp && (
            <p className="mt-6 text-xs text-neutral-500 text-center">
              By creating an account, you agree to our{' '}
              <Link to="/" className="text-black hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-neutral-900 text-white p-6 text-center"
        >
          <h3 className="text-lg mb-2">Exclusive Member Benefits</h3>
          <ul className="text-sm text-white/80 space-y-2">
            <li>✓ Free shipping on all orders</li>
            <li>✓ Early access to new collections</li>
            <li>✓ Special member-only discounts</li>
            <li>✓ Birthday rewards and surprises</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
