import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="-ml-6"
          >
            <Link to="/" className="hover:opacity-80 transition-opacity block">
              <img
                src="https://i.imgur.com/i0n0LiQ.png"
                alt="Lalazar Logo"
                className="h-16 w-auto max-w-[340px] object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/new"
              className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${isActive('/new') ? 'opacity-100' : 'opacity-80'}`}
            >
              New
            </Link>
            <Link
              to="/women"
              className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${isActive('/women') ? 'opacity-100' : 'opacity-80'}`}
            >
              Women
            </Link>
            <Link
              to="/men"
              className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${isActive('/men') ? 'opacity-100' : 'opacity-80'}`}
            >
              Men
            </Link>
            <Link
              to="/accessories"
              className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${isActive('/accessories') ? 'opacity-100' : 'opacity-80'}`}
            >
              Accessories
            </Link>
            <Link
              to="/sale"
              className={`text-sm tracking-wide hover:opacity-60 transition-opacity ${isActive('/sale') ? 'opacity-100' : 'opacity-80'}`}
            >
              Sale
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/search" className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/account" className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              className="md:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-neutral-200 bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link to="/new" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
              <Link to="/women" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Women</Link>
              <Link to="/men" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Men</Link>
              <Link to="/accessories" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Accessories</Link>
              <Link to="/sale" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Sale</Link>
              <Link to="/shop" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Shop All</Link>
              <Link to="/explore" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Explore</Link>
              <Link to="/features" className="text-sm tracking-wide" onClick={() => setMenuOpen(false)}>Features</Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="https://i.imgur.com/i0n0LiQ.png"
                alt="Lalazar Logo"
                className="h-16 w-auto max-w-[240px] mb-4 object-contain brightness-0 invert"
              />
              <p className="text-sm text-white/60">
                Redefining luxury fashion with timeless elegance and modern sophistication.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm tracking-wide">Shop</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
                <li><Link to="/women" className="hover:text-white transition-colors">Women</Link></li>
                <li><Link to="/men" className="hover:text-white transition-colors">Men</Link></li>
                <li><Link to="/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                <li><Link to="/sale" className="hover:text-white transition-colors">Sale</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm tracking-wide">Explore</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                <li><Link to="/explore" className="hover:text-white transition-colors">Collections</Link></li>
                <li><Link to="/features" className="hover:text-white transition-colors">Why Lalazar</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Our Story</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm tracking-wide">Support</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 Lalazar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
