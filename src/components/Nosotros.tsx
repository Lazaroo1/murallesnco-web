import GalleryBackground from './GalleryBackground'

const galleryImages = [
  '/gallery/uno.png',
  '/gallery/dos.jpg',
  '/gallery/tres.png',
  '/gallery/cuatro.png',
  '/gallery/cinco.png',
  '/gallery/seis.png',
  '/gallery/siete.png',
  '/gallery/d7.png',
  '/gallery/ocho.png',
  '/gallery/nueve.png',
  '/gallery/diez.png',
  '/gallery/diez6.png',
  '/gallery/once.png',
  '/gallery/doce.png',
  '/gallery/trece.png',
  '/gallery/catorce.png',
  '/gallery/quince.png',
]

function Nosotros() {
  return (
    <section id="nosotros" className="grid min-h-screen bg-black md:grid-cols-2">
      <div className="order-2 flex items-center px-6 py-20 md:order-1 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <h2 className="m-0 font-serif-custom text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight text-white">
            No fabricamos. Construimos estructuras que perduran.
          </h2>

          <div className="mt-8 space-y-5 font-sans-custom text-base leading-7 text-[var(--color-muted)] md:text-lg">
            <p>
              Invertimos con una mirada de largo plazo, buscando capitalizar
              oportunidades que puedan sostenerse a través de ciclos y
              generaciones.
            </p>
            <p>
              Creamos alianzas estratégicas con operadores, fundadores e
              inversionistas que comparten disciplina, criterio y visión de
              permanencia.
            </p>
            <p>
              Nuestro enfoque está en generar valor compartido: estructuras
              claras, relaciones profundas y crecimiento que fortalece a todas
              las partes.
            </p>
          </div>
        </div>
      </div>

      <div className="relative order-1 min-h-[50vh] overflow-hidden md:order-2 md:min-h-screen">
        <GalleryBackground
          imagePaths={galleryImages}
          className="absolute inset-0 h-full w-full overflow-hidden"
          overlayClassName="absolute inset-0 bg-black/35"
        />
      </div>
    </section>
  )
}

export default Nosotros
