import React from 'react';
import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';

import {
  BookOpen,
  Zap,
} from 'lucide-react';

import iconCycle from '../assets/icon-cycle.png';
import iconMoods from '../assets/icon-moods.png';
import iconPartner from '../assets/icon-partner.png';
import iconCommunity from '../assets/icon-community.png';

const features = [
  {
    icon: iconCycle,
    title: 'Cycle Tracking',
    description:
      'Track periods, ovulation, fertility window and cycle trends.',
  },
  {
    icon: iconMoods,
    title: 'Symptoms & Moods',
    description:
      'Log how you feel and discover patterns in your body and mind.',
  },
  {
    icon: BookOpen,
    title: 'Journal',
    description:
      'Capture reflections, experiences and personal health notes.',
  },
  {
    icon: iconPartner,
    title: 'Partner Mode',
    description:
      'Share selected insights while maintaining your privacy.',
  },
  {
    icon: iconCommunity,
    title: 'Community',
    description:
      'Connect, learn and grow with women on similar journeys.',
  },
  {
    icon: Zap,
    title: 'Gift Token',
    description:
      'Send sats to celebrate, support and encourage those who matter.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full px-[25px] py-[70px] sm:px-[40px] sm:py-[80px] lg:px-[105px] lg:py-[100px] bg-white" id="features">
      <SectionTitle
        overline="EVERYTHING YOU NEED"
        title="Designed Around Women.<br />Built for Real Life."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1442px] mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
