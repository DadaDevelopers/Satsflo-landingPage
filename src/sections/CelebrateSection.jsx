import React from 'react';
import SectionTitle from '../components/SectionTitle';
import bitcoinLightningImg from '../assets/bitcoin-lightning.png';
import './CelebrateSection.css';

export default function CelebrateSection() {
  return (
    <section className="celebrate-section" id="celebrate">
      <div className="celebrate-container">
        <SectionTitle
          overline="A NEW WAY TO CELEBRATE"
          title="The World's First Bitcoin-Powered<br />Cycle App."
        />

        <div className="celebrate-graphic-wrapper">
          <div className="celebrate-graphic-crop">
            <img
              src={bitcoinLightningImg}
              alt="Bitcoin Lightning Network integration features: pregnancy journey, show support, first period journeys, celebrate milestones, personal achievements"
              className="celebrate-img"
            />
          </div>
        </div>

        <p className="celebrate-caption">
          Powered by the Bitcoin Lightning Network.
        </p>
      </div>
    </section>
  );
}
