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

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <h1
          className="font-serif-custom m-0 max-w-5xl font-normal text-white"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '0.01em' }}
        >
          Capital. Visión. Alianzas.
        </h1>

        <button
          type="button"
          className="font-serif-custom border border-white bg-transparent text-white transition-colors hover:bg-white/10"
          style={{
            padding: '0.75rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.05em',
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