import React from 'react';
import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';

// Lucide icons fallback / SVG icons matching Figma features
import {
  Calendar,
  Smile,
  BookOpen,
  Users,
  MessageSquare,
  Gift,
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Cycle Tracking',
    description:
      'Track periods, ovulation, fertility window and cycle trends.',
  },
  {
    icon: Smile,
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
    icon: Users,
    title: 'Partner Mode',
    description:
      'Share selected insights while maintaining your privacy.',
  },
  {
    icon: MessageSquare,
    title: 'Community',
    description:
      'Connect, learn and grow with women on similar journeys.',
  },
  {
    icon: Gift,
    title: 'Gift Token',
    description:
      'Send sats to celebrate, support and encourage those who matter.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <SectionTitle
        overline="EVERYTHING YOU NEED"
        title="Designed Around Women.<br />Built for Real Life."
      />

      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
