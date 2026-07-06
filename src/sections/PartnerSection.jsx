import React from 'react';
import { Check, Star } from 'lucide-react';
import Button from '../components/Button';
import './PartnerSection.css';

export default function PartnerSection() {
  return (
    <section className="partner-section" id="partner">
      <div className="partner-container">
        
        {/* Left Side: Info */}
        <div className="partner-info">
          <span className="partner-overline">STAY IN SYNC WITH YOUR PARTNER</span>
          <h2 className="partner-title">Share only what you want,<br />when you want.</h2>
          
          <ul className="partner-features">
            <li>
              <div className="check-icon-wrapper">
                <Check size={18} className="check-icon" />
              </div>
              <span>Full control over your data</span>
            </li>
            <li>
              <div className="check-icon-wrapper">
                <Check size={18} className="check-icon" />
              </div>
              <span>Selected insights sharing</span>
            </li>
            <li>
              <div className="check-icon-wrapper">
                <Check size={18} className="check-icon" />
              </div>
              <span>Private and secure always</span>
            </li>
          </ul>

          <Button className="primary-btn partner-btn">Invite Partner</Button>
        </div>

        {/* Right Side: Testimonial Card */}
        <div className="partner-testimonial-wrapper">
          <div className="partner-card">
            <div className="partner-card-header">
              <div className="partner-avatar">WJ</div>
              <div className="partner-user-meta">
                <h3>William Johnson</h3>
                <p>@williamj</p>
              </div>
              <div className="partner-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFB300" stroke="none" />
                ))}
              </div>
            </div>
            <p className="partner-card-text">
              "I love that Satsflo is built around privacy. I can share selected insights with my partner without giving up my personal data."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
