import { useState } from 'react';

import TopBanner   from './components/TopBanner';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Lookbook    from './components/Lookbook';
import FAQ         from './components/FAQ';
import Footer      from './components/Footer';
import CartDrawer  from './components/CartDrawer';

export default function App() {
  // ── Estado del carrito ──────────────────────────────────
  const [cartItems, setCartItems]   = useState([]);
  const [cartOpen,  setCartOpen]    = useState(false);
  const [cartIdSeed, setCartIdSeed] = useState(0);

  // ── Estado del filtro de productos ─────────────────────
  const [activeFilter, setActiveFilter] = useState('Ver todo');

  function addToCart(product) {
    const newId = cartIdSeed + 1;
    setCartIdSeed(newId);
    setCartItems((prev) => [...prev, { ...product, cartId: newId }]);
    setCartOpen(true);
  }

  function removeFromCart(cartId) {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  }

  return (
    <>
      <TopBanner />

      <Navbar
        cartCount={cartItems.length}
        onCartOpen={() => setCartOpen(true)}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <main>
        <Hero onAddToCart={addToCart} />
        <ProductGrid onAddToCart={addToCart} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <Lookbook />
        <FAQ />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />
    </>
  );
}
