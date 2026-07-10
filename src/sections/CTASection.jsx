import React from 'react';
import heartSvg from '../assets/heart.svg';
import './CTASection.css';

function AppleIcon() {
  return (
    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" aria-hidden="true">
      <path
        fill="#fff"
        d="M14.86 12.7c-.02-2.1 1.72-3.1 1.8-3.15-.98-1.44-2.51-1.63-3.05-1.66-1.3-.13-2.54.77-3.2.77-.66 0-1.68-.75-2.76-.73-1.42.02-2.73.83-3.46 2.1-1.47 2.56-.38 6.36 1.06 8.44.7 1.02 1.53 2.16 2.63 2.12 1.05-.04 1.45-.68 2.72-.68s1.63.68 2.75.66c1.14-.02 1.86-1.03 2.55-2.06.8-1.18 1.13-2.33 1.15-2.39-.03-.01-2.17-.83-2.19-3.42Z"
      />
      <path
        fill="#fff"
        d="M12.7 6.34c.58-.7.97-1.68.86-2.65-.83.03-1.85.56-2.45 1.25-.54.61-1.01 1.6-.88 2.53.92.07 1.87-.46 2.47-1.13Z"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="#fff"
        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.195l11.04 10.989zm0 2.067l-11 10.933c.298.036.612-.014.906-.183l13.324-7.54-3.23-3.21z"
      />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section className="cta-section" id="download">
      {/* Background Hearts Vector */}
      <img src={heartSvg} alt="" className="cta-heart cta-heart-left" />
      <img src={heartSvg} alt="" className="cta-heart cta-heart-right" />

      {/* Dark Overlay */}
      <div className="cta-overlay"></div>

      <div className="cta-container">
        <h2 className="cta-title">Join The Future Of Women's Health</h2>
        <p className="cta-subtitle">
          Satsflo combines cycle intelligence,<br className="mobile-only" /> community, relationship support<br className="desktop-only" /> and Bitcoin<br className="mobile-only" /> innovation in one seamless experience.
        </p>

        <div className="cta-buttons-container">
          <a
            href="https://drive.google.com/file/d/1wiczY25-ox_b2mJZSq6yDwo9_kRLedAA/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-download"
          >
            <GooglePlayIcon />
            <span>Download App</span>
          </a>

          <a
            href="https://forms.gle/tVc1ZbhkkRYUt4Mc8"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-waitlist"
          >
            Feedback form
          </a>
        </div>
      </div>
    </section>
  );
}
