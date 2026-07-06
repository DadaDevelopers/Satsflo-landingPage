import React from 'react';
import FeaturesSection from './sections/FeaturesSection';
import RhythmSection from './sections/RhythmSection';
import WellnessSection from './sections/WellnessSection';
import CelebrateSection from './sections/CelebrateSection';
import PrivacySection from './sections/PrivacySection';
import CTASection from './sections/CTASection';
// import FooterSection from './sections/FooterSection';
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#212121] flex flex-col font-sans">
      <main className="flex-1">
        {/* Part 1: Features Section */}
        <FeaturesSection />

        {/* Part 2: Rhythm Section (Cycle Phases) */}
        <RhythmSection />
        <WellnessSection />
        <CelebrateSection />
        
        {/* Part 4: Privacy first approach */}
        <PrivacySection />
        
        {/* Part 5: Call to action */}
        <CTASection />
        
        {/* Footer */}
        {/* <FooterSection /> */}
        <Footer />
    </main>
    </div>
  );
}

export default App;
