// Datos del producto destacado en el hero
const product = {
  badge: 'Nueva Edición',
  category: 'Sastrería Contemporánea',
  name: 'Blazer Oversize Celeste & Pantalón Fluido',
  price: '€240,00',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAkHUz1_3BmVhRVkVKUHY8rJE16H6SP-_lRv3oEiA8DG91bt8VgaVQuGuIC6oM3OjJaQc2Ip-xh7qjkV23j9xb5873b72iqxATdu6sUE3p4BnWu9VdA-LJNBYLMPg8Nl4pmGuIU_RRzl0iwtzg35s73H9B3zkrwYn8eUb0vvkf_wfu0SYW8y3FVxyFZGtfFmGv-8H8mn0kuNjsLUO1-N12ReQqJkALM0mXiEEtjSoFPID5Z4IcHyFVBKQ',
  imageAlt: 'Blazer Oversize Celeste & Pantalón Fluido — Atelier Élan',
  sizes: ['XS', 'S', 'M', 'L'],
  activeSize: 'S',
  colors: [
    { name: 'Celeste Glaciar', hex: '#a9c7e2', active: true },
    { name: 'Marfil Puro',     hex: '#f6f6f4', border: true },
    { name: 'Grafito Mate',    hex: '#2a2f35' },
  ],
  activeColor: 'Celeste Glaciar',
};

// Ítems de la barra de confianza
const trustItems = [
  'Envíos sostenibles',
  'Algodón orgánico y sedas ligeras',
  'Producción local transparente',
];

export default function Hero({ onAddToCart }) {
  return (
    <section
      aria-label="Hero — Colección Cápsula"
      className="
        w-full border-b border-[var(--color-outline-variant)]
        bg-gradient-to-b from-[var(--color-surface)] via-[#f7f9fb] to-[#f0f4f8]/50
        overflow-x-hidden
      "
    >
      <div
        className="
          max-w-[1360px] mx-auto
          px-6 lg:px-12
          py-12 lg:py-20
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-center
        "
      >

        {/* ── Columna izquierda: editorial ─────────────────── */}
        <div className="flex flex-col items-start gap-6 min-w-0">

          {/* Badge de temporada */}
          <div
            className="
              inline-flex items-center gap-2
              px-3.5 py-1.5 rounded-[var(--radius-full)]
              border border-[var(--color-outline-variant)]
              bg-[var(--color-surface-container-lowest)]
              text-[var(--color-on-surface-variant)]
              text-[length:var(--font-size-label-md)]
              font-[var(--font-weight-label-md)]
              leading-[var(--line-height-label-md)]
              tracking-[var(--letter-spacing-label-md)]
              uppercase
            "
          >
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-[#84a6c8]"
            />
            Colección Cápsula // Primavera-Verano
          </div>

          {/* Headline principal */}
          <h1
            className="
              font-[var(--font-display)]
              text-[length:var(--font-size-headline-xl-mobile)] lg:text-[length:var(--font-size-headline-xl)]
              font-[var(--font-weight-headline-xl)]
              leading-[var(--line-height-headline-xl-mobile)] lg:leading-[var(--line-height-headline-xl)]
              tracking-[var(--letter-spacing-headline-xl-mobile)] lg:tracking-[var(--letter-spacing-headline-xl)]
              text-[var(--color-primary-container)]
            "
          >
            Piezas pensadas para vivirlas{' '}
            <em className="italic font-light not-italic">todos los días.</em>
          </h1>

          {/* Bajada */}
          <p
            className="
              font-[var(--font-sans)]
              text-[15px] sm:text-[16px]
              font-[var(--font-weight-body-lg)]
              leading-relaxed
              text-[var(--color-on-surface-variant)]
              w-full font-light
            "
          >
            Diseño consciente, siluetas fluidas y materiales que respiran.
            Pensado para acompañar tu ritmo, desde una mañana de café
            hasta una cena improvisada.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#coleccion"
              className="
                px-8 py-3.5 rounded-[var(--radius-full)]
                bg-[var(--color-primary-container)]
                text-[var(--color-on-primary)]
                text-[length:var(--font-size-label-lg)]
                font-[var(--font-weight-label-lg)]
                tracking-[var(--letter-spacing-label-lg)]
                uppercase
                hover:bg-[#3a3f44] transition-colors
              "
            >
              Descubrir cápsula
            </a>
            <a
              href="#editorial"
              className="
                px-7 py-3.5 rounded-[var(--radius-full)]
                border border-[var(--color-outline-variant)]
                bg-[var(--color-surface-container-lowest)]
                text-[var(--color-primary-container)]
                text-[length:var(--font-size-label-lg)]
                font-[var(--font-weight-label-lg)]
                tracking-[var(--letter-spacing-label-lg)]
                uppercase
                hover:bg-[var(--color-surface-container-low)] transition-colors
              "
            >
              Ver lookbook
            </a>
          </div>

          {/* Barra de confianza */}
          <div className="w-full pt-8 mt-2 border-t border-[var(--color-outline-variant)]">
            <ul
              aria-label="Compromisos de la marca"
              className="
                flex flex-wrap items-center
                gap-y-2 gap-x-6
                text-[length:var(--font-size-label-lg)]
                text-[var(--color-on-surface-variant)]
                tracking-wide font-light
                list-none p-0 m-0
              "
            >
              {trustItems.map((item, i) => (
                <li key={item} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-[var(--color-outline)] mr-4">
                      •
                    </span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Columna derecha: tarjeta de producto ─────────── */}
        <div className="min-w-0">
          <article
            aria-label={`Producto destacado: ${product.name}`}
            className="
              bg-[var(--color-surface-container-lowest)]
              p-5 sm:p-7
              rounded-[var(--radius-DEFAULT)]
              border border-[var(--color-outline-variant)]
              shadow-sm
            "
          >

            {/* Imagen del producto */}
            <div
              className="
                relative w-full aspect-[4/5]
                overflow-hidden
                bg-[var(--color-surface-container-low)]
                rounded-[var(--radius-DEFAULT)]
                mb-6
              "
            >
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Badge "Nueva Edición" */}
              <span
                className="
                  absolute top-4 left-4
                  text-[length:var(--font-size-label-sm)]
                  font-[var(--font-weight-label-sm)]
                  tracking-[var(--letter-spacing-label-sm)]
                  uppercase
                  bg-[var(--color-surface-container-lowest)]/95
                  backdrop-blur-sm
                  px-3 py-1
                  rounded-[var(--radius-full)]
                  text-[var(--color-primary-container)]
                  border border-[var(--color-outline-variant)]
                "
              >
                {product.badge}
              </span>
            </div>

            {/* Info del producto */}
            <div className="space-y-4">

              {/* Nombre y precio */}
              <div className="flex items-baseline justify-between border-b border-[var(--color-outline-variant)] pb-3">
                <div>
                  <span
                    className="
                      text-[length:var(--font-size-label-sm)]
                      font-[var(--font-weight-label-sm)]
                      tracking-[var(--letter-spacing-label-sm)]
                      uppercase text-[var(--color-on-surface-variant)]
                      block
                    "
                  >
                    {product.category}
                  </span>
                  <h2
                    className="
                      font-[var(--font-display)]
                      text-[length:var(--font-size-headline-sm)]
                      font-[var(--font-weight-headline-sm)]
                      leading-[var(--line-height-headline-sm)]
                      text-[var(--color-primary-container)]
                      mt-0.5
                    "
                  >
                    {product.name}
                  </h2>
                </div>
                <span
                  className="
                    font-[var(--font-display)]
                    text-[length:var(--font-size-title-md)]
                    font-[var(--font-weight-headline-xl)]
                    text-[var(--color-primary-container)]
                    whitespace-nowrap ml-4
                  "
                >
                  {product.price}
                </span>
              </div>

              {/* Selectores: tallas y color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">

                {/* Tallas */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className="
                        text-[length:var(--font-size-label-md)]
                        font-[var(--font-weight-label-md)]
                        tracking-[var(--letter-spacing-label-md)]
                        uppercase text-[var(--color-on-surface-variant)]
                      "
                    >
                      Talla
                    </span>
                    <a
                      href="#guia-tallas"
                      className="
                        text-[length:var(--font-size-label-md)]
                        text-[var(--color-on-surface-variant)]
                        underline hover:text-[var(--color-primary-container)]
                        transition-colors
                      "
                    >
                      Guía
                    </a>
                  </div>
                  <div role="group" aria-label="Seleccionar talla" className="flex gap-2">
                    {product.sizes.map((size) => {
                      const isActive = size === product.activeSize;
                      return (
                        <button
                          key={size}
                          type="button"
                          aria-pressed={isActive}
                          aria-label={`Talla ${size}${isActive ? ', seleccionada' : ''}`}
                          className={`
                            w-10 h-8
                            text-[length:var(--font-size-label-md)]
                            font-[var(--font-weight-label-md)]
                            rounded-[var(--radius-DEFAULT)]
                            border transition-colors
                            ${
                              isActive
                                ? 'border-[var(--color-primary-container)] bg-[var(--color-primary-container)] text-[var(--color-on-primary)]'
                                : 'border-[var(--color-outline-variant)] text-[var(--color-on-surface)] hover:border-[var(--color-primary-container)]'
                            }
                          `}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <p
                    className="
                      text-[length:var(--font-size-label-md)]
                      font-[var(--font-weight-label-md)]
                      tracking-[var(--letter-spacing-label-md)]
                      uppercase text-[var(--color-on-surface-variant)]
                      mb-2
                    "
                  >
                    Tono:{' '}
                    <span className="text-[var(--color-primary-container)] font-semibold">
                      {product.activeColor}
                    </span>
                  </p>
                  <div
                    role="group"
                    aria-label="Seleccionar color"
                    className="flex items-center gap-2.5"
                  >
                    {product.colors.map(({ name, hex, active, border }) => (
                      <button
                        key={name}
                        type="button"
                        aria-pressed={!!active}
                        aria-label={name}
                        title={name}
                        className={`
                          w-6 h-6 rounded-[var(--radius-full)]
                          transition-all
                          ${active ? 'ring-2 ring-offset-2 ring-[var(--color-primary-container)]' : 'hover:scale-110'}
                          ${border ? 'border border-[var(--color-outline-variant)]' : ''}
                        `}
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón añadir a la bolsa */}
              <button
                type="button"
                onClick={() => onAddToCart && onAddToCart(product)}
                className="
                  w-full py-3.5 mt-2
                  rounded-[var(--radius-full)]
                  bg-[var(--color-primary-container)]
                  text-[var(--color-on-primary)]
                  text-[length:var(--font-size-label-lg)]
                  font-[var(--font-weight-label-lg)]
                  tracking-[var(--letter-spacing-label-lg)]
                  uppercase
                  hover:bg-[#3a3f44] transition-colors
                  flex items-center justify-center gap-2
                "
              >
                Añadir a la bolsa
              </button>
              
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
