export default function CartDrawer({ isOpen, onClose, items, onRemove }) {
  // Parsea precios en formato "€240,00" → número
  function parsePrice(str) {
    return parseFloat(String(str).replace(/[€$\s]/g, '').replace('.', '').replace(',', '.')) || 0;
  }

  const subtotal = items.reduce((acc, item) => acc + parsePrice(item.price), 0);
  const formattedSubtotal = `€${subtotal.toFixed(2).replace('.', ',')}`;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          backgroundColor: 'rgba(11, 15, 17, 0.5)',
          transition: 'opacity 0.3s',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/* Panel lateral */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Bolsa de compra"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 9999,
          height: '100%',
          width: '100%',
          maxWidth: '28rem',
          backgroundColor: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-outline-variant)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Cabecera */}
        <div
          className="flex items-center justify-between p-6 pb-4"
          style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
        >
          <h3
            className="font-[var(--font-display)] text-[22px] font-normal text-[var(--color-primary-container)]"
          >
            Bolsa de Compra
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar bolsa"
            className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary-container)] p-1 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Lista de artículos */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {items.length === 0 ? (
            <p className="text-[15px] text-[var(--color-on-surface-variant)] text-center mt-12 font-light">
              Tu bolsa está vacía.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.cartId} className="flex gap-4 items-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded shrink-0"
                  style={{ border: '1px solid var(--color-outline-variant)' }}
                />
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-[#557896] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-[var(--font-display)] text-[15px] text-[var(--color-primary-container)] leading-snug mt-0.5">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[13px] font-semibold text-[var(--color-primary-container)]">
                      {item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => onRemove(item.cartId)}
                      className="text-[11px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary-container)] underline transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumen y checkout */}
        {items.length > 0 && (
          <div
            className="p-6 space-y-4"
            style={{ borderTop: '1px solid var(--color-outline-variant)' }}
          >
            <div className="flex justify-between text-[13px] text-[var(--color-on-surface-variant)]">
              <span>Envío Express</span>
              <span className="text-[var(--color-primary-container)] font-medium">Cortesía</span>
            </div>

            <div
              className="flex justify-between pt-3"
              style={{ borderTop: '1px solid var(--color-outline-variant)' }}
            >
              <span className="font-[var(--font-display)] text-[18px] text-[var(--color-primary-container)]">
                Subtotal
              </span>
              <span className="font-[var(--font-display)] text-[18px] text-[var(--color-primary-container)]">
                {formattedSubtotal}
              </span>
            </div>

            <button
              type="button"
              className="
                w-full py-4
                rounded-full
                text-[12px] uppercase tracking-widest font-semibold
                transition-colors
              "
              style={{
                backgroundColor: 'var(--color-primary-container)',
                color: 'var(--color-on-primary)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3a3f44'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary-container)'; }}
            >
              Tramitar Pedido
            </button>

            <p className="text-center text-[10px] uppercase tracking-widest text-[var(--color-on-surface-variant)]">
              Pago seguro · 30 días de prueba
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
