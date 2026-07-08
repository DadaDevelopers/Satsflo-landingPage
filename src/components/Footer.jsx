import logoPink from '../assets/Logopink.svg'
import footerImage from '../assets/FooterImage.svg'

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
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="#0A142F" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="#0A142F" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="#0A142F" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-5 w-5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#0A142F"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.98h4V21H3V9.98ZM9.5 9.98h3.83v1.51h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.98Z"
      />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#0A142F"
        d="M22 5.92c-.72.32-1.5.53-2.31.63a4.02 4.02 0 0 0 1.76-2.22 8 8 0 0 1-2.55.98 4.01 4.01 0 0 0-6.84 3.66A11.39 11.39 0 0 1 3.9 4.9a4.01 4.01 0 0 0 1.24 5.35 4 4 0 0 1-1.82-.5v.05a4.01 4.01 0 0 0 3.22 3.93 4 4 0 0 1-1.81.07 4.02 4.02 0 0 0 3.75 2.79A8.05 8.05 0 0 1 2 18.57a11.35 11.35 0 0 0 6.15 1.8c7.38 0 11.42-6.11 11.42-11.42l-.01-.52A8.18 8.18 0 0 0 22 5.92Z"
      />
    </svg>
  )
}

const SOCIALS = [
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: TwitterIcon, label: 'Twitter', href: '#' },
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
