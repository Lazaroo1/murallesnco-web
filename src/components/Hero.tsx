import GalleryBackground from './GalleryBackground'

const galleryImages = [
  '/gallery/quince.png',
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
]

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden text-center"
    >
      <GalleryBackground imagePaths={galleryImages} />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 pt-16">
        <h1
          className="font-serif-custom m-0 max-w-6xl font-normal text-white"
          style={{
            fontSize: 'clamp(3.8rem, 8.2vw, 7rem)',
            lineHeight: 0.98,
            letterSpacing: '0.005em',
          }}
        >
          Capital. Visión. Alianzas.
        </h1>

        <button
          type="button"
          className="font-serif-custom border border-white/90 bg-transparent text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          style={{
            padding: '0.78rem 3rem',
            fontSize: '1.35rem',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
          onClick={scrollToContact}
        >
          Conversemos
        </button>
      </div>
    </section>
  )
}

export default Hero
