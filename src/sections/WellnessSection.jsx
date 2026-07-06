import React from "react";

import phoneMoods from "../assets/images/phone-moods.png";
import phoneJournal from "../assets/images/phone-journal.png";
import phoneCommunity from "../assets/images/phone-community.png";
import phoneGift from "../assets/images/phone-gift.png";

const features = [
  {
    title: "Mood Tracking",
    image: phoneMoods,
    bg: "#EAE3FF", // Purple
    clipPath: "polygon(0 0, 100% var(--slant-height), 100% calc(100% - var(--slant-height)), 0 100%)",
    reverse: false,
    textColor: "#5A2CA0",
  },
  {
    title: "Satsflo Journal",
    image: phoneJournal,
    bg: "#F0F6FF", // Blue
    clipPath: "polygon(0 var(--slant-height), 100% 0, 100% 100%, 0 calc(100% - var(--slant-height)))",
    reverse: true,
    textColor: "#3b82f6",
  },
  {
    title: "Community",
    image: phoneCommunity,
    bg: "#EAE3FF", // Purple
    clipPath: "polygon(0 0, 100% var(--slant-height), 100% calc(100% - var(--slant-height)), 0 100%)",
    reverse: false,
    textColor: "#5A2CA0",
  },
  {
    title: "Gift Sats",
    image: phoneGift,
    bg: "#F0F6FF", // Blue
    clipPath: "polygon(0 var(--slant-height), 100% 0, 100% 100%, 0 calc(100% - var(--slant-height)))",
    reverse: true,
    textColor: "#3b82f6",
  },
];

export default function WellnessSection() {
  return (
    <section className="w-full pb-32 overflow-hidden" id="companion">
      
      {/* Header (Perfectly Centered) */}
      <div className="wellness-header">
        <span className="text-[#FF4081] text-sm font-bold tracking-[0.25em] font-[var(--font-serif)] uppercase block mb-6">
          MORE THAN TRACKING
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#111] font-[var(--font-sans)]">
          A Daily Wellness Companion.
        </h2>
      </div>

      <div className="flex flex-col relative w-full" style={{ "--slant-height": "6vw" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[780px]"
            style={{
              marginTop: index === 0 ? "0" : "calc(-1 * var(--slant-height))"
            }}
          >
            {/* Full-width Slanted Background block */}
            <div
              className="absolute inset-0 z-0 w-full h-full"
              style={{ 
                background: feature.bg,
                clipPath: feature.clipPath 
              }}
            />

            {/* Inner Content Wrapper - ALWAYS side-by-side */}
            <div className={`relative z-10 w-full max-w-[1442px] mx-auto px-4 lg:px-16 py-8 lg:py-16 flex ${
              feature.reverse ? "flex-row-reverse" : "flex-row"
            } items-center justify-between h-full`}>
              
              {/* Phone Container: Pushed to the outer edge (wider side of triangle) */}
              <div className="w-1/2 flex justify-start items-center py-4 lg:py-8">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-36 sm:w-56 lg:w-72 xl:w-80 max-h-[260px] sm:max-h-[380px] lg:max-h-[580px] xl:max-h-[640px] object-contain drop-shadow-2xl hover:-translate-y-3 transition-all duration-500 float-phone"
                />
              </div>

              {/* Text Container: Centered in its half */}
              <div className="w-1/2 flex justify-center items-center px-2 lg:px-4">
                <h2 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-[var(--font-serif)] text-center leading-tight"
                  style={{ color: feature.textColor }}
                >
                  {feature.title}
                </h2>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
