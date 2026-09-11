const footerColumns = [
  {
    title: 'Colección',
    links: [
      'Blazers & Chaquetas',
      'Camisas & Tops',
      'Pantalones Fluidos',
      'Vestidos Ligeros',
      'Cápsula de Archivo',
    ],
  },
  {
    title: 'La Marca',
    links: [
      'Nuestra Filosofía',
      'Proceso & Producción',
      'Compromiso Sostenible',
      'Guía de Materiales',
      'Editorial & Prensa',
    ],
  },
  {
    title: 'Atención al Cliente',
    links: [
      'Seguimiento de Envíos',
      'Devoluciones Fáciles',
      'Guía de Tallas',
      'Contacto Directo',
      'Preguntas Frecuentes',
    ],
  },
];

const paymentMethods = ['Apple Pay', 'Visa', 'Mastercard', 'Klarna'];

export default function Footer() {
  return (
    <footer
      id="comunidad"
      aria-label="Pie de página"
      className="
        w-full
        bg-[var(--color-primary-container)]
        text-[var(--color-on-primary)]
        pt-16 pb-12
        border-t border-[#2a2f35]
      "
    >
      <div
        className="
          max-w-[1360px] mx-auto
          px-6 lg:px-12
        "
      >
        {/* Columnas de links */}
        <div className="pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-[#2a2f35] text-[length:var(--font-size-body-sm)] font-light text-[#a1abb7]">
          {footerColumns.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h5
                className="
                  text-[length:var(--font-size-label-sm)]
                  font-[var(--font-weight-label-sm)]
                  tracking-[var(--letter-spacing-label-sm)]
                  uppercase text-[var(--color-on-primary)] mb-4
                "
              >
                {title}
              </h5>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Métodos de pago */}
          <div>
            <h5
              className="
                text-[length:var(--font-size-label-sm)]
                font-[var(--font-weight-label-sm)]
                tracking-[var(--letter-spacing-label-sm)]
                uppercase text-[var(--color-on-primary)] mb-4
              "
            >
              Pagos & Métodos
            </h5>
            <p className="text-[#8692a0] text-[length:var(--font-size-label-md)] mb-4">
              Transacciones seguras y encriptadas.
            </p>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="
                    px-2.5 py-1
                    bg-[#20242a] rounded border border-[#343b44]
                    text-[#cbd5e1]
                    text-[length:var(--font-size-label-sm)]
                    tracking-wider uppercase font-medium
                  "
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#717c8a] text-[length:var(--font-size-label-md)] tracking-wider">
          <p className="text-center sm:text-left">© 2025 Tu Marca. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {['Política de Privacidad', 'Aviso Legal', 'Cookies'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
