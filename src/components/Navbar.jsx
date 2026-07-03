import { useState } from 'react'
import logoIcon from '../assets/Logo Icon.svg'

const NAV_LINKS = ['Features', 'Community', 'About', 'Privacy']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between gap-4 py-6 sm:py-8">
        <a href="#top" className="flex items-center gap-1">
          <img src={logoIcon} alt="" className="h-8 w-auto" />
          <span className="font-[Anton] text-2xl leading-none text-white">Satsflo</span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-base text-[#FFFFFF] transition hover:text-white/80">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#waitlist"
          className="hidden rounded-xl border-[0.8px] border-[#F2F2F2] px-4 py-2.5 text-base text-[#F2F2F2] transition hover:bg-white/10 lg:inline-block"
        >
          Join Waitlist
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path stroke="#fff" strokeWidth="1.5" strokeLinecap="round" d="M4 4l12 12M16 4 4 16" />
            ) : (
              <path stroke="#fff" strokeWidth="1.5" strokeLinecap="round" d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-xl border-[0.8px] border-[#F2F2F2] px-4 py-2.5 text-center text-base text-[#F2F2F2]"
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </>
  )
}
