import GalleryBackground from './GalleryBackground'

const galleryImages = [
  '/gallery/quince.png',
  '/gallery/catorce.png',
  '/gallery/trece.png',
  '/gallery/doce.png',
  '/gallery/once.png',
  '/gallery/diez6.png',
  '/gallery/diez.png',
  '/gallery/nueve.png',
  '/gallery/ocho.png',
  '/gallery/d7.png',
  '/gallery/siete.png',
  '/gallery/seis.png',
  '/gallery/cinco.png',
  '/gallery/cuatro.png',
  '/gallery/tres.png',
  '/gallery/dos.jpg',
  '/gallery/uno.png',
]

function Contacto() {
  return (
    <section id="contacto" className="relative min-h-screen overflow-hidden bg-black text-white">
      <GalleryBackground
        imagePaths={galleryImages}
        overlayClassName="absolute inset-0 bg-black/70"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-5xl pt-16">
          <h2 className="font-serif-custom m-0 text-[clamp(2.8rem,5.8vw,5.2rem)] font-normal leading-[1.05] text-white">
            Si buscas capital, estructura
            <br />
            o alianzas. Estamos aquí.
          </h2>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-serif-custom mt-12 inline-flex border border-white/85 px-12 py-4 text-[1.45rem] font-normal leading-none text-white no-underline transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Déjanos tus datos
          </a>

          <p className="font-serif-custom mt-7 text-[1.28rem] font-normal text-white/60">
            Nos pondremos en contacto.
          </p>
        </div>
      </div>

      <footer className="font-serif-custom absolute inset-x-0 bottom-0 z-10 px-6 py-10 text-center text-base text-white/55">
        © Muralles &amp; Co. Holdings
      </footer>
    </section>
  )
}

export default Contacto
