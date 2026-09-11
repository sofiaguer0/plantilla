import { products, filters } from '../data/products';

const badgeStyles = {
  accent:    'text-[#557896]',
  neutral:   'text-[var(--color-on-surface-variant)]',
  highlight: 'text-[var(--color-secondary)] font-semibold',
};

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex flex-col justify-between">
      <div>
        {/* Imagen con overlay quick-add */}
        <div
          className="
            relative w-full aspect-[3/4]
            overflow-hidden
            bg-[var(--color-surface-container-low)]
            rounded-[var(--radius-DEFAULT)] mb-4
          "
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="
              absolute bottom-3 inset-x-3
              py-2.5
              bg-[var(--color-surface-container-lowest)]/95 backdrop-blur-sm
              text-[var(--color-primary-container)]
              text-[length:var(--font-size-label-lg)]
              font-[var(--font-weight-label-lg)]
              tracking-[var(--letter-spacing-label-lg)]
              uppercase
              rounded-[var(--radius-DEFAULT)]
              opacity-0 group-hover:opacity-100 transition-all
              border border-[var(--color-outline-variant)]
              shadow-sm
              hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary)]
            "
          >
            Añadir a la bolsa
          </button>
        </div>

        <span
          className={`
            text-[length:var(--font-size-label-sm)]
            font-[var(--font-weight-label-sm)]
            tracking-[var(--letter-spacing-label-sm)]
            uppercase block
            ${badgeStyles[product.badgeVariant] ?? badgeStyles.neutral}
          `}
        >
          {product.category}
        </span>
        <h3
          className="
            font-[var(--font-display)]
            text-[length:var(--font-size-headline-sm)]
            font-[var(--font-weight-headline-xl)]
            text-[var(--color-primary-container)]
            mt-1
          "
        >
          {product.name}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[var(--color-outline-variant)]">
        <span
          className="
            text-[length:var(--font-size-body-md)]
            text-[var(--color-on-surface-variant)]
          "
        >
          {product.price}
        </span>
        <span
          className={`
            text-[length:var(--font-size-label-sm)]
            tracking-[var(--letter-spacing-label-sm)]
            uppercase
            ${badgeStyles[product.badgeVariant] ?? badgeStyles.neutral}
          `}
        >
          {product.badge}
        </span>
      </div>
    </article>
  );
}

export default function ProductGrid({ onAddToCart, activeFilter, onFilterChange }) {
  const visible =
    activeFilter === 'Ver todo'
      ? products
      : products.filter((p) => p.filter === activeFilter);

  return (
    <section
      id="esenciales"
      aria-label="Básicos Elevados"
      className="
        w-full max-w-[1360px] mx-auto
        px-[var(--spacing-gutter-mobile)] lg:px-[var(--spacing-gutter)]
        py-20
      "
    >
      {/* Encabezado + filtros */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--color-outline-variant)] pb-6 gap-6">
        <div>
          <span
            className="
              text-[length:var(--font-size-label-md)]
              font-[var(--font-weight-label-md)]
              tracking-[var(--letter-spacing-label-md)]
              uppercase text-[var(--color-on-surface-variant)]
              block mb-1
            "
          >
            Siluetas versátiles pensadas para combinar sin esfuerzo
          </span>
          <h2
            className="
              font-[var(--font-display)]
              text-[length:var(--font-size-headline-lg-mobile)] lg:text-[length:var(--font-size-headline-lg)]
              font-[var(--font-weight-headline-xl)]
              text-[var(--color-primary-container)]
            "
          >
            Tus Básicos Elevados
          </h2>
        </div>

        {/* Filtros */}
        <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const isActive = f === activeFilter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={isActive}
                onClick={() => onFilterChange(f)}
                className={`
                  px-4 py-2 rounded-[var(--radius-full)]
                  text-[length:var(--font-size-label-md)]
                  font-[var(--font-weight-label-md)]
                  tracking-[var(--letter-spacing-label-md)]
                  uppercase transition-colors
                  ${
                    isActive
                      ? 'bg-[var(--color-primary-container)] text-[var(--color-on-primary)]'
                      : 'border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)]'
                  }
                `}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
