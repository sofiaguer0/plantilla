import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: '¿Cómo acierto con mi talla?',
    answer:
      'Nuestros patrones tienen un calce contemporáneo y fluido. Si preferís un ajuste relajado y moderno (como el que ves en las fotos), elegí tu talla habitual. Si te gusta un efecto más ceñido a la silueta, te aconsejamos una talla menor. Escribinos si tenés dudas con tus medidas de pecho o cadera.',
  },
  {
    id: 2,
    question: '¿Cómo debo cuidar mis prendas de seda y lino?',
    answer:
      'Recomendamos lavado suave a mano en agua fría con jabón neutro, o programa delicado sin centrifugado intenso. El secado en plano a la sombra preserva la elasticidad y color de las fibras naturales durante años.',
  },
  {
    id: 3,
    question: '¿Cuánto tardan los envíos y cómo son las devoluciones?',
    answer:
      'Los envíos peninsulares tardan entre 24 y 48 horas laborables. Las devoluciones son totalmente gratuitas durante 30 días: generamos la etiqueta prepagada y podés entregarla en cualquier punto de recogida o pedir recogida en casa.',
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[var(--color-outline-variant)] rounded-[var(--radius-DEFAULT)] bg-[var(--color-surface-container-lowest)] p-6 shadow-xs">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span
          className="
            font-[var(--font-display)]
            text-[length:var(--font-size-title-md)]
            font-[var(--font-weight-title-md)]
            text-[var(--color-primary-container)]
          "
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          className="
            text-[var(--color-secondary)]
            text-xl font-light shrink-0
            transition-transform duration-200
            select-none
          "
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>

      {open && (
        <p
          className="
            mt-4
            text-[length:var(--font-size-body-md)]
            font-[var(--font-weight-body-md)]
            leading-[var(--line-height-body-md)]
            text-[var(--color-on-surface-variant)]
            font-light
          "
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      aria-label="Preguntas frecuentes"
      className="
        w-full max-w-[1000px] mx-auto
        px-[var(--spacing-gutter-mobile)] lg:px-[var(--spacing-gutter)]
        py-20
      "
    >
      <div className="text-center mb-12">
        <span
          className="
            text-[length:var(--font-size-label-md)]
            font-[var(--font-weight-label-md)]
            tracking-[var(--letter-spacing-label-md)]
            uppercase text-[var(--color-on-surface-variant)]
            block mb-2
          "
        >
          Servicio & Dudas Rápidas
        </span>
        <h2
          className="
            font-[var(--font-display)]
            text-[length:var(--font-size-headline-lg-mobile)] lg:text-[length:var(--font-size-headline-lg)]
            font-[var(--font-weight-headline-xl)]
            text-[var(--color-primary-container)]
          "
        >
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
