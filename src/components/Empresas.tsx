const companies = [
  { name: 'Gamacell', image: '/gallery/uno.png' },
  { name: "Quintana's Blend", image: '/gallery/dos.jpg' },
  { name: 'Palacios Brothers', image: '/gallery/tres.png' },
  { name: 'Momentos GT', image: '/gallery/cuatro.png' },
  { name: 'Mundo Aceites', image: '/gallery/cinco.png' },
]

function Empresas() {
  return (
    <section
      id="empresas"
      className="min-h-screen bg-[#0a0a0a] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center">
        <h2 className="m-0 text-center font-[var(--font-serif)] text-[clamp(2.5rem,7vw,5rem)] font-normal leading-none text-white">
          Nuestras empresas
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {companies.map((company, index) => (
            <article
              key={company.name}
              className={`group relative h-[400px] overflow-hidden border border-white/15 bg-neutral-950 ${
                index === companies.length - 1
                  ? 'col-span-2 mx-auto w-[calc(50%_-_0.5rem)] md:col-span-1 md:mx-0 md:w-full'
                  : ''
              }`}
            >
              <img
                src={company.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/65" />

              <h3 className="relative z-10 m-0 p-5 font-[var(--font-serif)] text-2xl font-normal leading-tight text-white md:text-xl lg:text-2xl">
                {company.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Empresas

