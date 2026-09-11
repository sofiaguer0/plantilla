const testimonials = [
  {
    id: 1,
    quote:
      '«El blazer celeste tiene el corte oversize exacto: moderno, súper favorecedor y no pesa nada. Lo llevo tanto con vaqueros como en reuniones.»',
    name: 'Elena B.',
    role: 'Arquitecta & Diseñadora (Barcelona)',
    stars: 5,
  },
  {
    id: 2,
    quote:
      '«Hacía tiempo que no encontraba una marca con esta sensibilidad: prendas chic, sin artificios, fáciles de combinar y con tejidos que de verdad respiran.»',
    name: 'Carla M.',
    role: 'Directora Creativa (Madrid)',
    stars: 5,
  },
  {
    id: 3,
    quote:
      '«Llegó en 24 horas en un packaging de papel reciclado impecable. El tacto de la seda y la caída del pantalón son una maravilla total.»',
    name: 'Inés P.',
    role: 'Cliente Verificada (Valencia)',
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div aria-label={`${count} de 5 estrellas`} className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#84a6c8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-label="Opiniones de clientes"
      className="
        w-full max-w-[1360px] mx-auto
        px-[var(--spacing-gutter-mobile)] lg:px-[var(--spacing-gutter)]
        py-20
        border-b border-[var(--color-outline-variant)]
      "
    >
      {/* Encabezado */}
      <div className="text-center mb-14">
        <span
          className="
            text-[length:var(--font-size-label-md)]
            font-[var(--font-weight-label-md)]
            tracking-[var(--letter-spacing-label-md)]
            uppercase text-[var(--color-on-surface-variant)]
            block mb-2
          "
        >
          Comunidad Élan
        </span>
        <h2
          className="
            font-[var(--font-display)]
            text-[length:var(--font-size-headline-lg-mobile)] lg:text-[length:var(--font-size-headline-lg)]
            font-[var(--font-weight-headline-xl)]
            text-[var(--color-primary-container)]
          "
        >
          Opiniones Reales
        </h2>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, quote, name, role, stars }) => (
          <figure
            key={id}
            className="
              p-8 rounded-[var(--radius-DEFAULT)]
              bg-[var(--color-surface-container-lowest)]
              border border-[var(--color-outline-variant)]
              shadow-xs flex flex-col justify-between
            "
          >
            <blockquote>
              <StarRating count={stars} />
              <p
                className="
                  font-[var(--font-display)]
                  text-[length:var(--font-size-body-lg)]
                  text-[var(--color-primary-container)]
                  italic leading-relaxed font-normal
                "
              >
                {quote}
              </p>
            </blockquote>
            <figcaption className="mt-6 pt-4 border-t border-[var(--color-surface-container-low)] flex items-center justify-between">
              <span
                className="
                  text-[length:var(--font-size-label-lg)]
                  font-[var(--font-weight-label-lg)]
                  tracking-[var(--letter-spacing-label-lg)]
                  uppercase text-[var(--color-primary-container)]
                "
              >
                {name}
              </span>
              <span
                className="
                  text-[length:var(--font-size-label-md)]
                  text-[var(--color-on-surface-variant)]
                "
              >
                {role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
