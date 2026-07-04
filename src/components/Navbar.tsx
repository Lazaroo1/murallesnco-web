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
      style={{ left: 0, right: 0, width: '100%' }}
      className={`fixed top-0 z-50 text-white transition-all duration-300 ${
        isScrolled ? 'bg-black/60 shadow-lg backdrop-blur-md' : 'bg-black/20'
      }`}
    >
      <nav
        style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
        className="flex w-full items-center justify-between py-5"
        aria-label="Principal"
      >
        {/* Logo */}
        
          href="#hero"
          className="flex flex-col items-start leading-none text-white no-underline"
          aria-label="Muralles & Co. Holdings"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
          }}
        >
          <span
            className="font-serif-custom font-normal text-white"
            style={{ fontSize: '1.25rem', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            MURALLES &amp; CO.
          </span>
          <span
            className="font-sans-custom font-light uppercase text-white/60"
            style={{ fontSize: '0.55rem', letterSpacing: '0.28em', lineHeight: 1, marginTop: '3px' }}
          >
            HOLDINGS
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            
              key={item.id}
              href={`#${item.id}`}
              className="font-serif-custom text-white no-underline transition-opacity hover:opacity-70"
              style={{ fontSize: '0.95rem', letterSpacing: '0.03em' }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
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
            <span className={`absolute left-0 top-0 h-px w-6 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-px w-6 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-4 h-px w-6 bg-white transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-black/80 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-5 px-8 pb-6 pt-2">
          {navItems.map((item) => (
            
              key={item.id}
              href={`#${item.id}`}
              className="font-serif-custom text-base text-white no-underline"
              onClick={(e) => {
                e.preventDefault()
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