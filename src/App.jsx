import { useEffect, useState } from 'react'
import heroImage from '../images/Background img.png'
import cakeOne from '../images/img 1.jpeg'
import cakeTwo from '../images/img 2.png'
import cakeThree from '../images/img 3.png'
import cupcakes from '../images/img 5.png'
import flourishLogo from '../images/Logo 1.png'
import flourishStoryLogo from '../images/Logo 2.png'
import Peanut from '../images/img 4.png'
import celebrationBox from '../images/img 6.jfif'
import partyPans from '../images/img 7.jfif'
import treatBox from '../images/img 8.jfif'
import sausageRolls from '../images/img 9.jfif'
import doughnuts from '../images/img 10.jfif'
import smallChops from '../images/img 11.jfif'
import foodPlatter from '../images/img 12.jfif'

const WhatsAppIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
    <path d="M16.02 3.2a12.76 12.76 0 0 0-10.93 19.34L3.65 28.8l6.41-1.68A12.8 12.8 0 1 0 16.02 3.2Zm0 23.3a10.47 10.47 0 0 1-5.34-1.46l-.38-.23-3.8 1 1.02-3.69-.25-.38a10.53 10.53 0 1 1 8.75 4.76Zm5.77-7.89c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.71.16-.21.31-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-1.87-.93-3.1-1.67-4.33-3.78-.32-.55.32-.51.92-1.69.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.12 3.05 1.28 3.26c.16.21 2.2 3.35 5.32 4.7.74.32 1.32.51 1.77.65.74.23 1.42.2 1.95.12.59-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.55-.08-.13-.29-.21-.61-.37Z" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

const PhoneIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.49 19.49 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const PinIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const ClockIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const InstagramIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
)

const FacebookIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [reviewName, setReviewName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('flourish-reviews') || '[]')
    } catch {
      return []
    }
  })
  const closeMenu = () => setMenuOpen(false)
  const whatsappNumber = '2349153089020'
  const whatsappHref = `https://wa.me/${whatsappNumber}`
  const orderMessage = 'Hi, I am interested in ordering cake from Flourish Cakes & Pastries. Could you please send me the available options and pricing?'
  const orderHref = `${whatsappHref}?text=${encodeURIComponent(orderMessage)}`
  const treatMessage = 'Hi, I am interested in ordering a special treat from Flourish Cakes & Pastries. Could you please send me the available options and pricing?'
  const treatHref = `${whatsappHref}?text=${encodeURIComponent(treatMessage)}`
  const topMenu = [
    { image: cakeOne, name: 'Classic Celebration', description: 'Elegant buttercream cakes, lovingly finished for birthdays and every sweet milestone.' },
    { image: cakeTwo, name: 'Signature Cakes', description: 'Beautiful bespoke centrepieces created to make your celebration feel unforgettable.' },
    { image: cakeThree, name: 'Custom Occasion Cakes', description: 'Personalised cakes designed around your colour, theme, flavour, and special message.' },
    { image: cupcakes, name: 'Cupcake Boxes', description: 'Freshly baked little treats, perfect for gifting, sharing, and small celebrations.' },
  ]
  const specialTreats = [
    { image: Peanut, name: 'Crunchy Peanut', description: 'Golden, crunchy bites packaged fresh for easy snacking and gifting.' },
    { image: celebrationBox, name: 'Celebration Box', description: 'A joyful mix of cake, savoury treats, drinks, and party favourites.' },
    { image: partyPans, name: 'Party Pan', description: 'Generous trays prepared for effortless hosting and group celebrations.' },
    { image: treatBox, name: 'Surprise Treat Box', description: 'A ready-to-enjoy box of treats, beautifully wrapped for a sweet surprise.' },
    { image: sausageRolls, name: 'Sausage Rolls', description: 'Buttery, freshly baked rolls with a delicious savoury centre.' },
    { image: doughnuts, name: 'Doughnut Box', description: 'Soft, fluffy doughnuts made for sharing at home, work, or events.' },
    { image: smallChops, name: 'Small Chops Platter', description: 'A crowd-pleasing selection of savoury bites for every gathering.' },
    { image: foodPlatter, name: 'Premium Food Platter', description: 'A show-stopping gift platter filled with a little of everything good.' },
  ]

  useEffect(() => {
    localStorage.setItem('flourish-reviews', JSON.stringify(reviews))
  }, [reviews])

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 70)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const navItemClass = (name) => (
    activeNav === name
      ? 'border-b-2 border-[#ffc06c] pb-1 text-[#ffd49b]'
      : 'border-b-2 border-transparent pb-1 transition hover:text-[#ffd49b]'
  )

  const selectNav = (name) => {
    setActiveNav(name)
    closeMenu()
  }

  const submitReview = (event) => {
    event.preventDefault()
    if (!reviewName.trim() || !reviewText.trim()) return

    setReviews((currentReviews) => [
      { id: Date.now(), name: reviewName.trim(), text: reviewText.trim() },
      ...currentReviews,
    ])
    setReviewName('')
    setReviewText('')
  }

  return (
    <main className="min-h-screen bg-rose-50 text-stone-900">
      <section className="relative isolate z-20 min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="A celebration cake surrounded by pastries and desserts"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[63%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3d1027]/85 via-[#5d173d]/48 to-[#5d173d]/12" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#250615]/45 via-transparent to-transparent" />

        <header className={`fixed inset-x-0 top-0 z-30 px-4 transition-all duration-300 sm:px-7 lg:px-10 ${isScrolled ? 'border-b border-[#ead8cb] bg-[#fffaf6]/95 py-2 shadow-lg shadow-[#5b1737]/10 backdrop-blur-xl' : 'pt-4 sm:pt-6'}`}>
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 sm:px-3">
            <a href="#home" className="flex items-center gap-3" aria-label="Flourish home">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-[#fff7ee] shadow-md shadow-black/25">
                <img src={flourishLogo} alt="Flourish Cakes and Pastries" className="h-full w-full object-cover" />
              </span>
              <span className="leading-none">
                <span className={`block font-serif text-lg font-bold tracking-tight transition-colors ${isScrolled ? 'text-[#5b1737]' : 'text-white'}`}>FLOURISH</span>
                <span className={`mt-1 block text-[9px] font-bold tracking-[0.21em] transition-colors ${isScrolled ? 'text-[#b65468]' : 'text-[#ffd49b]'}`}>CAKES & PASTRIES</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 rounded-full border border-white/20 bg-[#391021]/60 px-7 py-3 text-sm font-semibold text-white/95 shadow-lg shadow-black/20 backdrop-blur-lg md:flex">
              <a onClick={() => selectNav('home')} className={navItemClass('home')} href="#home">Home</a>
              <a onClick={() => selectNav('menu')} className={navItemClass('menu')} href="#collections">Menu</a>
              <a onClick={() => selectNav('about')} className={navItemClass('about')} href="#about">About</a>
              <a onClick={() => selectNav('contact')} className={navItemClass('contact')} href="#contact">Contact</a>
            </div>

            <a href={whatsappHref} className="hidden items-center gap-2 rounded-full bg-[#d97835] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ec914d] sm:flex">
              <WhatsAppIcon className="h-4 w-4" />
              Chat with us
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-[#391021]/65 text-white shadow-lg shadow-black/20 backdrop-blur-lg md:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </nav>

        </header>

        <div
          className={`fixed inset-0 z-40 bg-[#210813]/65 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <aside
          className={`fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col bg-[#fffaf5] shadow-2xl shadow-black/35 transition-transform duration-300 ease-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between border-b border-[#ead9cf] px-6 py-5">
            <span className="font-serif text-xl font-bold tracking-tight text-[#a51e55]">FLOURISH</span>
            <button onClick={closeMenu} className="grid h-10 w-10 place-items-center rounded-full border border-[#e7cfc1] text-[#8a4a50] transition hover:bg-[#f8e7ed]" aria-label="Close navigation menu">
              <CloseIcon />
            </button>
          </div>

          <nav className="px-5 py-5" aria-label="Mobile navigation">
            <div className="grid gap-2">
              <a onClick={() => selectNav('home')} className={`flex items-center gap-3 rounded-full px-5 py-3.5 text-sm font-bold ${activeNav === 'home' ? 'bg-[#fdf1e6] text-[#c26826]' : 'text-[#70474b] hover:bg-[#f8e7ed]'}`} href="#home">
                <span className="h-1.5 w-1.5 rounded-full bg-[#df8b2b]" /> Home
              </a>
              <a onClick={() => selectNav('menu')} className={`rounded-full px-8 py-3.5 text-sm font-medium transition ${activeNav === 'menu' ? 'bg-[#fdf1e6] text-[#c26826]' : 'text-[#70474b] hover:bg-[#f8e7ed]'}`} href="#collections">Menu</a>
              <a onClick={() => selectNav('about')} className={`rounded-full px-8 py-3.5 text-sm font-medium transition ${activeNav === 'about' ? 'bg-[#fdf1e6] text-[#c26826]' : 'text-[#70474b] hover:bg-[#f8e7ed]'}`} href="#about">About</a>
              <a onClick={() => selectNav('contact')} className={`rounded-full px-8 py-3.5 text-sm font-medium transition ${activeNav === 'contact' ? 'bg-[#fdf1e6] text-[#c26826]' : 'text-[#70474b] hover:bg-[#f8e7ed]'}`} href="#contact">Contact</a>
            </div>
          </nav>

          <div className="mt-auto border-t border-[#ead9cf] p-5">
            <a onClick={closeMenu} href={whatsappHref} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d97835] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#d97835]/25">
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Chat with us
            </a>
          </div>
        </aside>

        <div id="home" className="mx-auto flex min-h-[calc(100vh-104px)] max-w-7xl items-end px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-28">
          <div className="max-w-2xl text-white">
            <p className="relative top-3 mb-5 flex w-fit items-center gap-3 rounded-full border border-[#ffd6a0]/45 bg-[#3d1027]/30 px-3.5 py-2 text-[10px] font-bold tracking-[0.18em] text-[#ffe0ad] shadow-sm backdrop-blur-[2px] sm:top-2 sm:px-4 sm:text-xs">
              <span className="h-px w-5 bg-[#ffd6a0] sm:w-7" />
              HAVE THE JOY OF SWEET TREATS
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[0.93] tracking-tight drop-shadow-sm sm:text-6xl lg:text-7xl">
              Sweet moments,
              <span className="block">beautifully made.</span>
              <em className="mt-3 block font-serif font-medium text-[#ffc06c]">For every occasion.</em>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-rose-50/95 sm:text-lg">
              From statement celebration cakes to irresistible pastries, Flourish brings a little more joy to every table.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#collections" className="rounded-full bg-[#efa64d] px-6 py-3.5 text-sm font-bold text-[#4c112d] shadow-lg shadow-[#2b0618]/25 transition hover:-translate-y-0.5 hover:bg-[#ffc06c]">Explore our treats</a>
              <a href={whatsappHref} className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#76153e]">
                <WhatsAppIcon className="h-4 w-4" />
                Message us
              </a>
            </div>
          </div>
        </div>

        <aside className="absolute bottom-6 right-5 max-w-[235px] text-right text-[11px] font-bold leading-5 text-white drop-shadow-md sm:text-xs lg:right-10">
          Celebration cakes · Cupcakes · Pastries<br />
          Dessert tables · Custom treats
        </aside>

        <div className="fixed bottom-5 right-5 z-10 flex items-center gap-2.5">
          <a href="tel:+2349153089020" className="grid h-14 w-14 place-items-center rounded-full border-4 border-[#f5eadf] bg-[#fff9f3] text-[#a8463d] shadow-xl shadow-black/25 transition hover:scale-105" aria-label="Call Flourish Cakes and Pastries">
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a href={whatsappHref} className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/25 transition hover:scale-105" aria-label="Chat with Flourish on WhatsApp">
              <WhatsAppIcon className="h-7 w-7" />
            </a>
        </div>
      </section>

      <section id="collections" className="bg-[#fffaf6] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#bd7441]">MADE FOR YOUR MOMENTS</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#5b1737] sm:text-5xl">Top <span className="text-[#d97835]">Menu</span></h2>
            <p className="mt-3 text-sm leading-relaxed text-[#744c55] sm:text-base">Freshly made treats to share, gift, and celebrate with the people you love.</p>
          </div>

          <div className="hide-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {topMenu.map((item, index) => (
              <article key={item.name} className="group w-[82vw] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-[#f0dfd4] bg-white p-3 shadow-[0_12px_32px_rgba(108,39,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(108,39,61,0.15)] sm:w-auto sm:shrink">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.05rem] bg-[#faeee7]">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  {index < 2 && <span className="absolute left-3 top-3 rounded-full bg-[#b33b67] px-3 py-1 text-[10px] font-bold tracking-wide text-white shadow-sm">FAVOURITE</span>}
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-serif text-xl font-bold text-[#5b1737]">{item.name}</h3>
                  <p className="mt-2 min-h-14 text-sm leading-6 text-[#79535a]">{item.description}</p>
                  <a href={orderHref} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#b52d62] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#92214e]">
                    Order Now !!
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="special-treats" className="bg-[#f8e9e3] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#b65468]">A LITTLE EXTRA JOY</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#5b1737] sm:text-5xl">Special <span className="text-[#d97835]">Treats</span></h2>
            </div>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#744c55] sm:text-base">From snack boxes to generous party platters, we make the little details delicious.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {specialTreats.map((treat) => (
              <article key={treat.name} className="group overflow-hidden rounded-[1.1rem] bg-[#fffaf6] shadow-[0_10px_25px_rgba(100,36,56,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(100,36,56,0.16)] sm:rounded-[1.35rem]">
                <div className="aspect-[4/3] overflow-hidden bg-[#f2dcd2]">
                  <img src={treat.image} alt={treat.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="font-serif text-base font-bold text-[#5b1737] sm:text-xl">{treat.name}</h3>
                  <p className="mt-2 min-h-16 text-xs leading-5 text-[#79535a] sm:min-h-14 sm:text-sm sm:leading-6">{treat.description}</p>
                  <a href={treatHref} className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-[#b52d62] bg-transparent px-2 py-2.5 text-xs font-bold text-[#a51e55] transition hover:bg-[#b52d62] hover:text-white sm:mt-5 sm:px-4 sm:py-3 sm:text-sm">
                    Enquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-base font-medium text-[#70474b] sm:text-lg">Seen something you like?</p>
            <a href={treatHref} className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#d97835] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#d97835]/20 transition hover:-translate-y-0.5 hover:bg-[#c76726]">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#fffdfb] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#bd7441]">OUR STORY</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#5b1737] sm:text-5xl">
              Made with heart, <span className="text-[#d97835]">shared with joy.</span>
            </h2>
            <div className="mt-7 space-y-4 text-sm leading-7 text-[#70474b] sm:text-base">
              <p>Flourish Cakes &amp; Pastries was born from a simple belief: the sweetest moments deserve a thoughtful touch. From a small family celebration to a table filled for a special occasion, every order is made to feel personal.</p>
              <p>We bring together beautiful design, comforting flavours, and the care of homemade baking to create cakes and treats people remember long after the last bite. Each piece is freshly prepared with attention to the details that make a celebration feel truly yours.</p>
            </div>
            <div className="mt-8 border-l-2 border-[#d97835] pl-4">
              <p className="font-serif text-lg font-bold text-[#5b1737]">Flourish Ayodele</p>
              <p className="mt-1 text-sm font-medium text-[#a51e55]">Founder, Flourish Cakes &amp; Pastries</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#f1ddd4] bg-gradient-to-br from-[#fce7ed] via-[#fff6ed] to-[#f9dab7] p-8 shadow-[0_18px_45px_rgba(108,39,61,0.10)] sm:p-12">
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#d97835]/15" />
            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#b52d62]/10" />
            <div className="relative grid aspect-square place-items-center rounded-[1.4rem] border border-white/70 bg-white/45 p-5 backdrop-blur-sm sm:p-8">
              <img src={flourishStoryLogo} alt="Flourish Cakes and Pastries logo" className="h-full w-full object-contain drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#fff7f1] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#bd7441]">LET'S MAKE IT SWEET</p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#5b1737] sm:text-5xl">Contact <span className="text-[#d97835]">Us</span></h2>
            <p className="mt-4 text-sm leading-relaxed text-[#70474b] sm:text-base">For birthdays, weddings, events, and every occasion worth celebrating, we are here to help.</p>
            <p className="mt-2 font-serif text-base font-bold text-[#a51e55]">Custom orders are always welcome.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[#efdcd2] bg-white p-7 text-center shadow-[0_12px_28px_rgba(108,39,61,0.08)] sm:p-9">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e6f7ed] text-[#25d366]">
                <WhatsAppIcon className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-[#5b1737]">Order on WhatsApp</h3>
              <p className="mt-2 text-sm text-[#79535a]">Send us a message and we will guide you through the options.</p>
              <a href={orderHref} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#b52d62] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#92214e]">
                <WhatsAppIcon className="h-5 w-5" />
                Message Us
              </a>
            </article>

            <article className="rounded-[1.5rem] border border-[#efdcd2] bg-white p-7 text-center shadow-[0_12px_28px_rgba(108,39,61,0.08)] sm:p-9">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#fcebdc] text-[#d97835]">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-[#5b1737]">Give Us a Call</h3>
              <p className="mt-2 text-sm text-[#79535a]">Have a question? We are happy to help with your enquiry.</p>
              <a href="tel:+2349153089020" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-[#d97835] bg-white px-5 py-3.5 text-sm font-bold text-[#a51e55] transition hover:bg-[#fff0e5]">
                +234 915 308 9020
              </a>
            </article>
          </div>

          <div className="mt-5 grid gap-4 rounded-[1.35rem] bg-[#f9e7dd] p-6 text-center sm:grid-cols-2 sm:text-left">
            <div className="flex items-start justify-center gap-3 sm:justify-start">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#b52d62]"><PinIcon className="h-5 w-5" /></span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#5b1737]">Location</h3>
                <p className="mt-1 text-sm text-[#79535a]">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-3 sm:justify-start">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#d97835]"><ClockIcon className="h-5 w-5" /></span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#5b1737]">Occasions</h3>
                <p className="mt-1 text-sm leading-6 text-[#79535a]">Birthdays · Weddings · Events<br />Please place custom orders at least 24 hours ahead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#5b1737] px-5 pb-7 pt-16 text-[#fff7f0] sm:px-8 lg:px-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d97835]/15" />
        <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-[#f7c58f]/10" />
        <button onClick={() => setReviewOpen(true)} className="absolute left-0 top-8 inline-flex items-center gap-2 rounded-r-full bg-[#d97835] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:translate-x-1 hover:bg-[#ec914d]">
          <span className="text-lg leading-none">✦</span>
          Leave a review
        </button>

        <div className="relative mx-auto grid max-w-7xl gap-12 pt-12 sm:grid-cols-[1fr_auto_auto] sm:items-start sm:pt-4">
          <a href="#home" onClick={() => selectNav('home')} className="flex items-center gap-4" aria-label="Flourish home">
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-white shadow-lg shadow-black/15">
              <img src={flourishLogo} alt="Flourish Cakes and Pastries" className="h-full w-full object-cover" />
            </span>
            <span>
              <span className="block font-serif text-3xl font-bold tracking-tight">FLOURISH</span>
              <span className="block text-xs font-bold tracking-[0.2em] text-[#f7c58f]">CAKES &amp; PASTRIES</span>
            </span>
          </a>

          <div>
            <h2 className="font-serif text-lg font-bold text-[#f7c58f]">Explore</h2>
            <nav className="mt-4 grid gap-3 text-sm font-medium" aria-label="Footer navigation">
              <a onClick={() => selectNav('home')} className="transition hover:text-[#f7c58f]" href="#home">Home</a>
              <a onClick={() => selectNav('menu')} className="transition hover:text-[#f7c58f]" href="#collections">Menu</a>
              <a onClick={() => selectNav('about')} className="transition hover:text-[#f7c58f]" href="#about">About</a>
              <button type="button" onClick={() => setReviewOpen(true)} className="text-left transition hover:text-[#f7c58f]">Review</button>
            </nav>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-[#f7c58f]">Connect</h2>
            <div className="mt-4 grid gap-3 text-sm font-medium">
              <a href={whatsappHref} className="flex items-center gap-2 transition hover:text-[#f7c58f]"><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[#f7c58f]"><InstagramIcon className="h-5 w-5" /> Instagram</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[#f7c58f]"><FacebookIcon className="h-5 w-5" /> Facebook</a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-center text-xs text-white/70 sm:text-sm">
          © {new Date().getFullYear()} Flourish Cakes &amp; Pastries. All rights reserved.
        </div>
      </footer>

      <div className={`fixed inset-0 z-[60] grid place-items-center bg-[#280815]/60 p-5 backdrop-blur-sm transition-opacity duration-200 ${reviewOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setReviewOpen(false)} aria-hidden={!reviewOpen}>
        <section className={`w-full max-w-md rounded-[1.5rem] bg-[#fffaf6] p-6 shadow-2xl transition duration-300 sm:p-8 ${reviewOpen ? 'translate-y-0 scale-100' : 'translate-y-5 scale-95'}`} onClick={(event) => event.stopPropagation()} aria-label="Leave a review">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-[#bd7441]">YOUR WORDS MATTER</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#5b1737]">Leave a review</h2>
            </div>
            <button onClick={() => setReviewOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#ead5ca] text-[#70474b] transition hover:bg-[#f8e7ed]" aria-label="Close review form"><CloseIcon /></button>
          </div>

          {reviews[0] && (
            <div className="mt-5 rounded-xl bg-[#fbece5] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#bd7441]">Latest review</p>
              <p className="mt-2 font-serif font-bold text-[#5b1737]">{reviews[0].name}</p>
              <p className="mt-1 text-sm leading-6 text-[#70474b]">“{reviews[0].text}”</p>
            </div>
          )}

          <form onSubmit={submitReview} className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-[#5b1737]">Your name
              <input value={reviewName} onChange={(event) => setReviewName(event.target.value)} className="rounded-xl border border-[#ead5ca] bg-white px-4 py-3 text-sm font-normal text-[#5b1737] outline-none transition focus:border-[#b52d62] focus:ring-2 focus:ring-[#b52d62]/15" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#5b1737]">Your review
              <textarea value={reviewText} onChange={(event) => setReviewText(event.target.value)} className="min-h-28 resize-y rounded-xl border border-[#ead5ca] bg-white px-4 py-3 text-sm font-normal text-[#5b1737] outline-none transition focus:border-[#b52d62] focus:ring-2 focus:ring-[#b52d62]/15" placeholder="Tell us about your experience" required />
            </label>
            <button type="submit" className="rounded-xl bg-[#b52d62] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#92214e]">Share your review</button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default App
