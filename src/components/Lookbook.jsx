const editorials = [
  {
    id: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdM2TOXuwqkwhzba0321iVxsLHfA5JOLDFEc6xxaUhX6SRfV1S3IaNshemApvAesQ6Z4n8sHT6nxr42V8u9orBf5Y9jlXlR2VHWUXHiPiE4OWisAAxMyUboekiNJvvZKq0LIsCo5z5OPQiIKsq94SfsXhabO8oROmBCty9dfOWz5G9OArhps3N1zNoIpX2P8oWRAfo8shrBq2ymMs59O8UW6E-zRTT7-npf_UwowCmG8cX8rZ8DnqsQ',
    alt: 'Lookbook editorial — Cortes descontracturados',
    title: 'Cortes descontracturados',
    subtitle: 'Básicos Cotidianos',
    offset: false,
  },
  {
    id: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkHUz1_3BmVhRVkVKUHY8rJE16H6SP-_lRv3oEiA8DG91bt8VgaVQuGuIC6oM3OjJaQc2Ip-xh7qjkV23j9xb5873b72iqxATdu6sUE3p4BnWu9VdA-LJNBYLMPg8Nl4pmGuIU_RRzl0iwtzg35s73H9B3zkrwYn8eUb0vvkf_wfu0SYW8y3FVxyFZGtfFmGv-8H8mn0kuNjsLUO1-N12ReQqJkALM0mXiEEtjSoFPID5Z4IcHyFVBKQ',
    alt: 'Lookbook editorial — El Traje Relajado',
    title: 'El Traje Relajado',
    subtitle: 'Celeste Glaciar & Crema',
    offset: true,
  },
  {
    id: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9OTc0exRb28IIyTqeb0OJqiIAP-IAr3OG7RyzWQTEi7bNOPro0qTeQM1pJ60JQZ5NYfAdSfIrJait3Fvh9n-gKmbzNWxZY2QddKKJE0c2EDKbYR6ozd357RF_foOhlhWNmoifxZCC_J5Q2Y_gjlElSMcxNzCSbXmIfaGVg0frP1CqcL1SlHqh23L5d6guz3NFWh5Nh7LBfT8Gwkjn-MDORhmz4M-AJ3wDK9BxHH4CGjzceFpTR5SlnQ',
    alt: 'Lookbook editorial — Sutileza & Movimiento',
    title: 'Sutileza & Movimiento',
    subtitle: 'Seda Natural & Palazzos',
    offset: false,
  },
];

export default function Lookbook() {
  return (
    <section
      id="editorial"
      aria-label="Lookbook — En Movimiento"
      className="
        w-full
        bg-[var(--color-surface-container-low)]
        border-y border-[var(--color-outline-variant)]
        py-20
      "
    >
      <div
        className="
          max-w-[1360px] mx-auto
          px-[var(--spacing-gutter-mobile)] lg:px-[var(--spacing-gutter)]
        "
      >
        {/* Encabezado centrado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="
              text-[length:var(--font-size-label-md)]
              font-[var(--font-weight-label-md)]
              tracking-[var(--letter-spacing-label-md)]
              uppercase text-[var(--color-on-surface-variant)]
              block mb-2
            "
          >
            Lookbook Primavera-Verano
          </span>
          <h2
            className="
              font-[var(--font-display)]
              text-[length:var(--font-size-headline-lg-mobile)] lg:text-[length:var(--font-size-headline-lg)]
              font-[var(--font-weight-headline-xl)]
              text-[var(--color-primary-container)]
            "
          >
            En Movimiento
          </h2>
          <p
            className="
              text-[var(--color-on-surface-variant)]
              text-[length:var(--font-size-body-md)]
              font-light mt-3 leading-relaxed
            "
          >
            Inspiración real para estilismos del día a día. Prendas pensadas
            para acompañar cada momento con libertad, modernidad y frescura.
          </p>
        </div>

        {/* Grid editorial con offset en el central */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorials.map(({ id, image, alt, title, subtitle, offset }) => (
            <div
              key={id}
              className={`space-y-4 ${offset ? 'md:-translate-y-6' : ''}`}
            >
              <div
                className="
                  aspect-[3/4] overflow-hidden
                  rounded-[var(--radius-DEFAULT)]
                  bg-[var(--color-surface-container-lowest)]
                  border border-[var(--color-outline-variant)]
                "
              >
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <span
                  className="
                    font-[var(--font-display)]
                    text-[length:var(--font-size-title-md)]
                    text-[var(--color-primary-container)]
                    italic font-normal block
                  "
                >
                  {title}
                </span>
                <p
                  className="
                    text-[length:var(--font-size-label-md)]
                    font-[var(--font-weight-label-md)]
                    tracking-[var(--letter-spacing-label-md)]
                    uppercase
                    text-[var(--color-on-surface-variant)]
                    mt-0.5
                  "
                >
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
