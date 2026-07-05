import React from 'react';
import Logo from '../components/Logo';
import footerImg from '../assets/footer-section.png';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="footer-section">
      {/* Wave Divider at top */}
      <div className="footer-wave-container">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-wave">
          <path
            d="M0,40 C280,100 560,10 840,70 C1120,130 1320,50 1440,20 L1440,120 L0,120 Z"
            fill="#FFF5FA"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-top">
          {/* Left: Brand info */}
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p className="footer-tagline">Made with love for women everywhere.</p>
          </div>

          {/* Right: Phone mockup clipped to circle */}
          <div className="footer-mockup-wrapper">
            <div className="footer-mockup-circle">
              <img
                src={footerImg}
                alt="Satsflo App Interface Mockup"
                className="footer-mockup-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: App store buttons, copyright, social icons */}
        <div className="footer-bottom">
          <div className="footer-store-buttons">
            {/* App Store Badge (black style) */}
            <a href="#appstore" className="footer-store-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,21.97 9.1,22C7.81,22.05 6.8,20.71 5.96,19.5C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
              </svg>
              <div className="footer-store-text">
                <span className="footer-store-desc">Download on the</span>
                <span className="footer-store-name">App Store</span>
              </div>
            </a>

            {/* Google Play Badge (black style) */}
            <a href="#playstore" className="footer-store-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.5,12.15L5.73,19L17.87,11.33M19.5,11.85L17.87,12.67L5.73,5L19.5,11.85M20.66,11.41C21.11,11.64 21.11,12.36 20.66,12.59L18.82,13.5L17.18,12L18.82,10.5L20.66,11.41Z" />
              </svg>
              <div className="footer-store-text">
                <span className="footer-store-desc">Get it on</span>
                <span className="footer-store-name">Google Play</span>
              </div>
            </a>
          </div>

          <p className="footer-copyright">
            &copy; 2026 Satsflo Period App. All Rights Reserved.
          </p>

          <div className="footer-socials">
            {/* Instagram */}
            <a href="#instagram" aria-label="Instagram" className="social-icon-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#linkedin" aria-label="LinkedIn" className="social-icon-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#twitter" aria-label="Twitter/X" className="social-icon-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
