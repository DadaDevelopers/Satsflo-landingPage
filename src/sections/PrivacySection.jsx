import React from 'react';
import { Check, MessageSquare, Heart, Send } from 'lucide-react';
import Button from '../components/Button';
import shieldImg from '../assets/privacy-shield.png';
import zuriAvatar from '../assets/zuri-avatar.png';
import './PrivacySection.css';

export default function PrivacySection() {
  return (
    <section className="privacy-section" id="privacy">
      <div className="privacy-cards-container">
        
        {/* Card 1: Community Card */}
        <div className="privacy-card community-card">
          <div className="card-info">
            <h2 className="card-title text-pink">A Community That Understands</h2>
            <p className="card-subtitle">You're not alone in this journey.</p>
            
            <ul className="card-features pink-checks">
              <li>
                <div className="check-wrapper pink-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Real conversations</span>
              </li>
              <li>
                <div className="check-wrapper pink-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Support groups</span>
              </li>
              <li>
                <div className="check-wrapper pink-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Share experiences</span>
              </li>
              <li>
                <div className="check-wrapper pink-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Learn and grow together</span>
              </li>
            </ul>

            <Button className="primary-btn community-btn">Join the Community</Button>
          </div>

          <div className="card-graphic community-mockup-col">
            <div className="community-post-card">
              
              {/* Post Header */}
              <div className="post-header">
                <div className="post-avatar-wrapper">
                  <img
                    src={zuriAvatar}
                    alt="Zuri Hassan avatar"
                    className="post-avatar"
                  />
                  <div className="post-avatar-badge">
                    <span>+</span>
                  </div>
                </div>
                
                <div className="post-user-info">
                  <div className="post-username-row">
                    <span className="post-name">Zuri Hassan</span>
                    <span className="post-handle">@hassan</span>
                  </div>
                  <span className="post-active">Active 5m ago</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="post-content">
                <h4 className="post-body-title">Feeling Anxious 😩😩😩</h4>
                <p className="post-body-text">
                  My period's a little late, and I'm starting to feel anxious about it. Anyone else get that nervous feeling when your cycle is off? 😭😢😭😢😭😢😭
                </p>
              </div>

              {/* Post Footer */}
              <div className="post-footer">
                <div className="post-actions">
                  <div className="post-action">
                    <MessageSquare size={18} />
                    <span>500</span>
                  </div>
                  <div className="post-action text-pink-hover">
                    <Heart size={18} />
                    <span>10</span>
                  </div>
                  <div className="post-action">
                    <Send size={18} />
                  </div>
                </div>

                <div className="post-replies">
                  <div className="reply-avatar bg-blue-avatar">JD</div>
                  <div className="reply-avatar bg-purple-avatar">AM</div>
                  <div className="reply-avatar reply-btc-avatar">₿</div>
                  <div className="reply-avatar bg-green-avatar">SK</div>
                  <div className="reply-avatar bg-orange-avatar">LH</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Card 2: Privacy Card */}
        <div className="privacy-card security-card">
          <div className="card-graphic privacy-graphic">
            <img
              src={shieldImg}
              alt="3D Gold Security Shield with Purple Padlock"
              className="privacy-shield-img"
            />
          </div>

          <div className="card-info">
            <h2 className="card-title text-purple">Privacy First. Always.</h2>
            <p className="card-subtitle">Your body. Your data. Your choice.</p>
            
            <ul className="card-features purple-checks">
              <li>
                <div className="check-wrapper purple-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>End-to-end encryption</span>
              </li>
              <li>
                <div className="check-wrapper purple-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Full data ownership</span>
              </li>
              <li>
                <div className="check-wrapper purple-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Granular sharing controls</span>
              </li>
              <li>
                <div className="check-wrapper purple-check">
                  <Check size={16} className="check-icon" />
                </div>
                <span>Secure authentication</span>
              </li>
            </ul>

            <Button className="primary-btn security-btn">Learn More About Privacy</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
