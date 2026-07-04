function Contacto() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen overflow-hidden bg-black px-6 text-white"
    >
      <img
        src="/gallery/quince.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex min-h-screen items-center justify-center text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="m-0 font-[var(--font-serif)] text-[clamp(1.8rem,5vw,3rem)] font-normal leading-tight text-white">
            Si buscas capital, estructura o alianzas — estamos aquí.
          </h2>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex border border-white px-8 py-3 font-[var(--font-sans)] text-sm font-medium uppercase tracking-[0.18em] text-white no-underline transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Déjanos tus datos
          </a>

          <p className="mt-5 font-[var(--font-sans)] text-sm text-[var(--color-muted)]">
            Nos pondremos en contacto.
          </p>
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-0 z-10 px-6 py-8 text-center font-[var(--font-sans)] text-xs text-[var(--color-muted)]">
        © Muralles &amp; Co. Holdings
      </footer>
    </section>
  )
}

export default Contacto

