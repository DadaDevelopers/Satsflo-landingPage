import Navbar from './Navbar'
import phoneMockup from '../assets/hero-phones.webp'
import pic1 from '../assets/pic1.svg'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import pic4 from '../assets/pic4.svg'

function AppleIcon() {
  return (
    <svg className="h-[23.9px] w-[18.03px]" viewBox="0 0 18 24" fill="none" aria-hidden="true">
      <path
        fill="#fff"
        d="M14.86 12.7c-.02-2.1 1.72-3.1 1.8-3.15-.98-1.44-2.51-1.63-3.05-1.66-1.3-.13-2.54.77-3.2.77-.66 0-1.68-.75-2.76-.73-1.42.02-2.73.83-3.46 2.1-1.47 2.56-.38 6.36 1.06 8.44.7 1.02 1.53 2.16 2.63 2.12 1.05-.04 1.45-.68 2.72-.68s1.63.68 2.75.66c1.14-.02 1.86-1.03 2.55-2.06.8-1.18 1.13-2.33 1.15-2.39-.03-.01-2.17-.83-2.19-3.42Z"
      />
      <path
        fill="#fff"
        d="M12.7 6.34c.58-.7.97-1.68.86-2.65-.83.03-1.85.56-2.45 1.25-.54.61-1.01 1.6-.88 2.53.92.07 1.87-.46 2.47-1.13Z"
      />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg className="h-[23.9px] w-[21.73px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#fff"
        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.195l11.04 10.989zm0 2.067l-11 10.933c.298.036.612-.014.906-.183l13.324-7.54-3.23-3.21z"
      />
    </svg>
  )
}

function HeartShape({ className }) {
  return (
    <svg
      viewBox="0 0 540 537"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#FA80A8"
        d="M539.044 162.185C539.085 183.464 535.491 204.541 528.469 224.197C521.448 243.853 511.138 261.697 498.137 276.699L283.259 529.802C281.468 531.914 279.333 533.59 276.978 534.735C274.624 535.879 272.096 536.468 269.544 536.468C266.991 536.468 264.464 535.879 262.109 534.735C259.754 533.59 257.619 531.914 255.828 529.802L40.9499 276.699C14.7527 246.328 0.0225887 205.122 2.59581e-05 162.144C-0.0225367 119.167 14.6643 77.9399 40.8295 47.5319C66.9948 17.124 102.495 0.0262201 139.521 3.0132e-05C176.547 -0.0261598 212.065 17.0214 238.262 47.3923L269.544 81.3275L301.041 47.2806C320.591 24.7015 345.465 9.3515 372.525 3.16849C399.584 -3.01451 427.615 0.246651 453.079 12.5403C478.542 24.8339 500.297 45.6088 515.597 72.2423C530.897 98.8759 539.056 130.174 539.044 162.185Z"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        fill="#FFBF00"
        stroke="#FBFBFB"
        strokeWidth="0.72"
        d="m10 1.5 2.47 5.51 6.03.55-4.55 4 1.35 5.94L10 14.6l-5.3 2.9 1.35-5.94-4.55-4 6.03-.55L10 1.5Z"
      />
    </svg>
  )
}

const AVATARS = [pic1, pic2, pic3, pic4]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115.27deg,#FF4081_-7.57%,#A2207B_32.38%,#550576_65.07%)] pb-28 sm:pb-36 lg:pb-40">
      <div className="relative z-10 mx-auto max-w-330 px-5 sm:px-8 lg:px-10">
        <Navbar />

        <div className="grid grid-cols-1 items-center gap-12 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-8 lg:pt-16">
          <div className="max-w-xl lg:max-w-151.5">
            <h1 className="text-center text-[44px] font-semibold leading-14 tracking-[-0.04em] text-white sm:text-left sm:text-[52px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[64px] lg:leading-tight lg:tracking-[-0.04em]">
              {'Understand Your '}
              <br />
              {'Cycle. Connect'}
              <br className="sm:hidden" />
              {' With'}
              <br className="hidden sm:inline" />
              {' '}
              <span className="font-serif italic text-[#DED4FF]">Confidence.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-92.5 text-center text-lg font-normal leading-7.5 text-white sm:mx-0 sm:max-w-none sm:text-left sm:tracking-[-0.02em] sm:text-white/90 lg:mt-8 lg:text-xl lg:leading-[1.6]">
              A modern women&apos;s health platform that helps you understand your body&apos;s natural
              rhythms, stay connected with those who matter, and celebrate life&apos;s moments through
              Bitcoin-powered gifting.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-12">
              <a
                href="https://drive.google.com/file/d/1wiczY25-ox_b2mJZSq6yDwo9_kRLedAA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-[0.8px] border-white bg-[#FF4081] py-4.5 pr-5 pl-6 text-lg font-medium text-white transition hover:brightness-105 lg:h-16.5 lg:min-w-60.75 lg:text-[20px] lg:leading-7.5"
              >
                <span className="h-4 w-px shrink-0 bg-white" />
                <GooglePlayIcon />
                <span>Download App</span>
              </a>
              <a
                href="https://forms.gle/tVc1ZbhkkRYUt4Mc8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center whitespace-nowrap rounded-xl border-[0.8px] border-white px-6 py-4.5 text-lg font-medium text-white transition hover:bg-white/10 lg:h-16.5 lg:w-57.5 lg:text-[20px] lg:leading-7.5"
              >
                Feedback Form
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-16">
              <div className="flex items-center">
                {AVATARS.map((avatar, i) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    className="h-14 w-14 rounded-full border-[1.6px] border-[#FFE6EE] object-cover sm:h-16 sm:w-16"
                    style={{ marginLeft: i === 0 ? 0 : '-14px' }}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-base text-white">Trusted by women across the globe.</p>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-base font-medium text-white">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-105 translate-y-12 lg:max-w-none">
            <HeartShape className="pointer-events-none absolute -top-8 -right-4 z-0 h-70 w-70 opacity-20 sm:-top-10 sm:h-95 sm:w-95 lg:-top-16 lg:-right-10 lg:h-140.5 lg:w-154" />
            <HeartShape className="pointer-events-none absolute -bottom-8 -left-10 z-0 h-70 w-70 rotate-180 opacity-20 sm:-bottom-10 sm:-left-8 sm:h-75 sm:w-75 lg:-bottom-2 lg:-left-16 lg:h-110 lg:w-110" />
            <img
              src={phoneMockup}
              alt="Satsflo app screens showing cycle tracking and a Bitcoin gift token"
              className="relative z-10 mx-auto h-auto w-full max-w-110.5 drop-shadow-2xl lg:max-w-140.75"
              fetchPriority="high"
              width={1126}
              height={1580}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 w-full overflow-hidden sm:h-24 lg:h-28 z-0">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path fill="#fff" d="M0,30 C720,110 720,110 1440,30 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  )
}
