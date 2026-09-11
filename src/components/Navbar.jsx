import { useState } from 'react';
import { filters } from '../data/products';

// Links de sección que no filtran productos
const sectionLinks = [
  { label: 'En Movimiento', href: '#editorial' },
  { label: 'Comunidad',     href: '#comunidad' },
];

export default function Navbar({ cartCount, onCartOpen, activeFilter, onFilterChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scrollea a la sección de productos y aplica el filtro
  function handleFilter(filter) {
    onFilterChange(filter);
    setMobileMenuOpen(false);
    document.getElementById('esenciales')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className="
        sticky top-0 z-[100]
        bg-[var(--color-surface)]/95 backdrop-blur-md
        border-b border-[var(--color-outline-variant)]
        transition-all
      "
    >
      {/* Barra principal */}
      <div
        className="
          max-w-[1360px] mx-auto
          px-6 lg:px-12
          h-20 flex items-center justify-between gap-4
        "
      >
        {/* ── Hamburguesa (mobile) ── */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
        >
          <span
            className={`block h-px w-6 bg-[var(--color-primary-container)] transition-all origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-[var(--color-primary-container)] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-[var(--color-primary-container)] transition-all origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>

        {/* ── Links desktop izquierda ── */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
          {/* Dropdown "Colección" */}
          <div className="relative group">
            <button
              type="button"
              className="
                flex items-center gap-1
                text-[length:var(--font-size-label-lg)]
                font-[var(--font-weight-label-lg)]
                tracking-[var(--letter-spacing-label-lg)]
                uppercase
                text-[var(--color-on-surface-variant)]
                hover:text-[var(--color-primary-container)]
                transition-colors py-1
              "
            >
              Colección
              {/* Chevron */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="mt-0.5 transition-transform group-hover:rotate-180">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className="
                absolute top-full left-0 mt-2
                w-52
                bg-[var(--color-surface-container-lowest)]
                border border-[var(--color-outline-variant)]
                rounded-[var(--radius-lg)]
                shadow-lg
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-150
                py-2
              "
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => handleFilter(f)}
                  className={`
                    w-full text-left px-4 py-2.5
                    text-[length:var(--font-size-label-lg)]
                    font-[var(--font-weight-label-lg)]
                    tracking-[var(--letter-spacing-label-lg)]
                    uppercase transition-colors
                    ${
                      activeFilter === f
                        ? 'text-[var(--color-primary-container)] bg-[var(--color-surface-container-low)]'
                        : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary-container)] hover:bg-[var(--color-surface-container-low)]'
                    }
                  `}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Links de sección */}
          {sectionLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="
                text-[length:var(--font-size-label-lg)]
                font-[var(--font-weight-label-lg)]
                tracking-[var(--letter-spacing-label-lg)]
                uppercase
                text-[var(--color-on-surface-variant)]
                hover:text-[var(--color-primary-container)]
                transition-colors py-1
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Logo / marca (centro) ── */}
        <a
          href="#"
          aria-label="Tu Marca — Inicio"
          className="flex flex-col items-center group mx-auto lg:mx-0"
        >
          <span
            className="
              font-[var(--font-display)]
              text-[length:var(--font-size-title-md)]
              font-[var(--font-weight-title-md)]
              tracking-[0.22em]
              uppercase
              text-[var(--color-primary-container)]
              group-hover:opacity-80 transition-opacity
            "
          >
            TU MARCA
          </span>
          <span
            className="
              text-[length:var(--font-size-label-sm)]
              tracking-[0.28em]
              text-[var(--color-on-surface-variant)]
              mt-0.5 font-medium uppercase
            "
          >
            Colección
          </span>
        </a>

        {/* ── Derecha: divisa + carrito ── */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-[var(--color-on-surface-variant)]">
            <span className="text-[length:var(--font-size-label-md)] font-[var(--font-weight-label-md)] text-[var(--color-primary-container)] font-semibold">
              EUR
            </span>
            <span className="text-[var(--color-outline)]">/</span>
            <span className="text-[length:var(--font-size-label-md)] font-[var(--font-weight-label-md)] hover:text-[var(--color-primary-container)] cursor-pointer transition-colors">
              USD
            </span>
          </div>

          <button
            type="button"
            onClick={onCartOpen}
            aria-label={`Abrir bolsa, ${cartCount} artículo${cartCount !== 1 ? 's' : ''}`}
            className="
              flex items-center gap-2
              py-1.5 px-3
              rounded-[var(--radius-full)]
              border border-[var(--color-outline-variant)]
              bg-[var(--color-surface-container-lowest)]
              hover:border-[var(--color-primary-container)]
              hover:shadow-xs transition-all
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="text-[length:var(--font-size-label-md)] font-[var(--font-weight-label-md)] tracking-wider text-[var(--color-primary-container)]">
              ({cartCount})
            </span>
          </button>
        </div>
      </div>

      {/* ── Menú mobile desplegable ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)]">
          {/* Filtros de colección */}
          <div className="px-6 pt-4 pb-2">
            <p
              className="
                text-[length:var(--font-size-label-sm)]
                font-[var(--font-weight-label-sm)]
                tracking-[var(--letter-spacing-label-sm)]
                uppercase text-[var(--color-outline)]
                mb-3
              "
            >
              Colección
            </p>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => handleFilter(f)}
                  className={`
                    px-3.5 py-2
                    rounded-[var(--radius-full)]
                    text-[length:var(--font-size-label-md)]
                    font-[var(--font-weight-label-md)]
                    tracking-[var(--letter-spacing-label-md)]
                    uppercase transition-colors
                    ${
                      activeFilter === f
                        ? 'bg-[var(--color-primary-container)] text-[var(--color-on-primary)]'
                        : 'border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)]'
                    }
                  `}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Links de sección */}
          <div className="px-6 pt-4 pb-5 flex flex-col gap-1 border-t border-[var(--color-outline-variant)] mt-3">
            {sectionLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  py-2.5
                  text-[length:var(--font-size-label-lg)]
                  font-[var(--font-weight-label-lg)]
                  tracking-[var(--letter-spacing-label-lg)]
                  uppercase
                  text-[var(--color-on-surface-variant)]
                  hover:text-[var(--color-primary-container)]
                  transition-colors
                "
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
