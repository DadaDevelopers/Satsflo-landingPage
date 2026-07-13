import logoPink from '../assets/Logopink.svg'
import footerImage from '../assets/footer-image.webp'

function AppleIcon() {
  return (
    <svg className="h-9 w-6.75 shrink-0 sm:h-[23.27px] sm:w-[18.03px]" viewBox="0 0 18 24" fill="none" aria-hidden="true">
      <path
        fill="#000"
        d="M14.86 12.7c-.02-2.1 1.72-3.1 1.8-3.15-.98-1.44-2.51-1.63-3.05-1.66-1.3-.13-2.54.77-3.2.77-.66 0-1.68-.75-2.76-.73-1.42.02-2.73.83-3.46 2.1-1.47 2.56-.38 6.36 1.06 8.44.7 1.02 1.53 2.16 2.63 2.12 1.05-.04 1.45-.68 2.72-.68s1.63.68 2.75.66c1.14-.02 1.86-1.03 2.55-2.06.8-1.18 1.13-2.33 1.15-2.39-.03-.01-2.17-.83-2.19-3.42Z"
      />
      <path
        fill="#000"
        d="M12.7 6.34c.58-.7.97-1.68.86-2.65-.83.03-1.85.56-2.45 1.25-.54.61-1.01 1.6-.88 2.53.92.07 1.87-.46 2.47-1.13Z"
      />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg className="h-7.5 w-7.5 shrink-0 sm:h-[23.9px] sm:w-[21.73px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#FFCC66"
        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z"
      />
      <path
        fill="#48A0DC"
        d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z"
      />
      <path
        fill="#88C057"
        d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.195l11.04 10.989z"
      />
      <path
        fill="#ED7161"
        d="M13.544 13.056l-11 10.933c.298.036.612-.014.906-.183l13.324-7.54-3.23-3.21z"
      />
    </svg>
  )
}

function AppStoreBadge() {
  return (
    <a
      href="#download"
      className="flex h-17.5 w-full items-center gap-3 rounded-[44.9102px] bg-white px-6 shadow-sm ring-1 ring-black/10 transition hover:brightness-95 sm:h-12.5 sm:w-41.75 sm:gap-2 sm:rounded-[25px] sm:px-4"
    >
      <AppleIcon />
      <span className="flex flex-1 flex-col text-center leading-none text-black">
        <span className="text-xl sm:text-[10px]">Download on the</span>
        <span className="text-xl font-semibold sm:text-base">App Store</span>
      </span>
    </a>
  )
}

function GooglePlayBadge() {
  return (
    <a
      href="#download"
      className="flex h-17.5 w-full items-center gap-3 rounded-[44.9102px] bg-black px-6 transition hover:brightness-110 sm:h-12.5 sm:w-41.75 sm:gap-2 sm:rounded-[25px] sm:px-4"
    >
      <GooglePlayIcon />
      <span className="flex flex-1 flex-col text-center leading-none text-white">
        <span className="text-xl sm:text-[14px]">Get it on</span>
        <span className="text-xl  font-semibold sm:text-base">Google Play</span>
      </span>
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#0A142F"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      className="h-5 w-5 sm:h-4 sm:w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0A142F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#0A142F"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

const SOCIALS = [
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: TwitterIcon, label: 'X', href: '#' },
]

export default function Footer() {
  const year = 2026

  return (
    <footer className="relative overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 block h-full w-full sm:hidden"
        viewBox="0 0 100 240"
        preserveAspectRatio="none"
      >
        <path d="M0,38 Q28,15 44,17 L100,17 L100,240 L0,240 Z" fill="#FF4081" fillOpacity="0.1" />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full sm:block"
        viewBox="0 0 1440 907"
        preserveAspectRatio="none"
      >
        <path d="M0,330 Q400,275 640,271 L1440,271 L1440,907 L0,907 Z" fill="#FF4081" fillOpacity="0.1" />
      </svg>

      <div className="relative mx-auto max-w-360 px-5 pt-10 pb-8 sm:px-8 sm:pt-20 lg:pt-24 lg:pr-20.75 lg:pl-45.75">
        <div className="grid grid-cols-1 gap-10.75 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-0">
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:translate-y-18.5 lg:items-start lg:text-left">
            <div className="flex items-center gap-3 lg:gap-6">
              <img src={logoPink} alt="logo" className="h-13.5 w-auto sm:h-13 lg:h-[83.27px]" />
              <span className="font-[Anton] text-[62.6471px] leading-none text-[#FF4081] sm:text-5xl lg:text-[87.0588px]">
                Satsflo
              </span>
            </div>
            <p className="mx-auto mt-7.5 max-w-97.5 text-center font-['EB_Garamond'] text-[32px] font-medium italic leading-10 text-[#222223] sm:mt-6 sm:max-w-[320px] sm:text-[24px] lg:mx-0 lg:max-w-90 lg:text-left lg:text-[28px] lg:leading-8">
              Made with love for women everywhere.
            </p>
          </div>

          <div className="order-1 relative mx-auto flex justify-center-safe lg:order-2 lg:justify-end">
            <img
              src={footerImage}
              alt="Satsflo app preview"
              className="max-w-130 w-full shrink-0 lg:w-165 lg:max-w-none"
              loading="lazy"
              width={1334}
              height={1334}
            />
          </div>
        </div>

        <div className="mt-7.5 flex flex-col items-center sm:mt-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full max-w-75 flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:gap-20.25">
            <p className="mt-12 text-center text-[24px] leading-8 text-[#0A142F] sm:mt-6 sm:text-[20px] sm:leading-normal lg:mt-0">
              © {year} Satsflo Period App. All Rights Reserved.
            </p>

            <div className="mt-6 flex items-center gap-3 lg:mt-0">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9.5 w-9.5 items-center justify-center rounded-full border-[1.5px] border-[#0A142F]/15 transition hover:bg-[#0A142F]/5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
