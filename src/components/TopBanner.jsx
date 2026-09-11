export default function TopBanner() {
  return (
    <div
      role="banner"
      aria-label="Información de envíos"
      className="
        w-full bg-[var(--color-primary-container)]
        text-[var(--color-on-primary)]
        py-2.5 px-4 text-center
        text-[length:var(--font-size-label-md)]
        font-[var(--font-weight-label-md)]
        tracking-[var(--letter-spacing-label-md)]
        uppercase
        border-b border-[var(--color-on-primary-fixed)]
      "
    >
      Envío de cortesía y devoluciones fáciles en todos los pedidos de la nueva temporada
    </div>
  );
}
