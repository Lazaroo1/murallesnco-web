const companyNames = [
  'Gamacell',
  "Quintana's Blend",
  'Palacios Brothers',
  'Momentos',
  'Mundo Aceites',
]

function Empresas() {
  return (
    <section
      id="empresas"
      className="min-h-screen bg-[#0a0a0a] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center">
        <h2 className="m-0 text-center font-serif-custom text-[clamp(2.5rem,7vw,5rem)] font-normal leading-none text-white">
          Nuestras empresas
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base font-light leading-relaxed text-white/70 md:text-lg">
          Contamos con empresas respaldadas por el capital de la firma en las
          industrias de creación de contenido, retail, manufactura de hardware
          y distribución de aceites para motor.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {companyNames.map((companyName, index) => (
            <article
              key={companyName}
              className={`group flex min-h-[200px] items-center justify-center border-b border-white/15 bg-[#0d0d0d] px-5 py-16 text-center ${
                index === companyNames.length - 1
                  ? 'col-span-2 mx-auto w-[calc(50%_-_0.5rem)] md:col-span-1 md:mx-0 md:w-full'
                  : ''
              }`}
            >
              <div>
                <span className="mx-auto mb-5 block h-px w-10 bg-white/40 transition-[width] duration-[400ms] ease-in-out group-hover:w-20" />
                <h3 className="m-0 font-serif-custom text-[1.3rem] font-light leading-tight text-white opacity-80 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100">
                  {companyName}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Empresas
