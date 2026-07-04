import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Empresas', id: 'empresas' },
  { label: 'Contacto', id: 'contacto' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full text-white transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-black/60 shadow-lg backdrop-blur-md'
          : 'border-b border-white/10 bg-transparent'
      }`}
    >
      <nav
        className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-12"
        aria-label="Principal"
      >
        <a
          href="#hero"
          className="flex flex-col items-center text-center leading-none text-white no-underline"
          aria-label="Muralles & Co. Holdings"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('hero')
          }}
        >
          <span className="font-serif-custom text-[clamp(1.25rem,1.65vw,1.8rem)] font-normal uppercase leading-none tracking-[0.1em] text-white">
            MURALLES &amp; CO.
          </span>
          <span className="font-sans-custom mt-1.5 text-[0.58rem] font-light uppercase leading-none tracking-[0.42em] text-white/70">
            HOLDINGS
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-serif-custom text-[1.05rem] font-normal leading-none text-white no-underline transition-opacity hover:opacity-70 lg:text-[1.18rem]"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-6 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-black/85 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-6 pt-2 text-right">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-serif-custom text-xl font-normal text-white no-underline"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar

