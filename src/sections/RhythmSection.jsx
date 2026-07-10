import React from "react";
import womanImage from "../assets/images/rhythm-woman.png";
import PinkBlob from "../components/PinkBlob";
import PhaseItem from "../components/PhaseItem";
import Button from "../components/Button";

const phases = [
  {
    color: "menstrual",
    title: "Menstrual Phase",
    text: "Rest and recovery. Give your body the care it needs."
  },
  {
    color: "follicular",
    title: "Follicular Phase",
    text: "Energy and creativity increase."
  },
  {
    color: "ovulation",
    title: "Ovulation Phase",
    text: "Peak fertility and confidence."
  },
  {
    color: "luteal",
    title: "Luteal Phase",
    text: "Prepare and slow down. Reflect and reset."
  }
];

export default function RhythmSection({ onOpenPhaseModal }) {
  return (
    <section className="w-full bg-[#fff6fb] relative overflow-visible" id="about">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[5rem] px-6 py-12 lg:px-[8%] lg:py-[6rem] max-w-[1442px] mx-auto w-full text-center lg:text-left">

        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[320px] h-[360px] lg:w-[420px] lg:h-[460px] rounded-[24px]">
            {/* SVG Pink Blob Background */}
            <PinkBlob className="absolute w-[95%] h-auto bottom-[2%] left-1/2 -translate-x-1/2 z-1" />

            {/* 3D Meditating Woman Image */}
            <img
              src={womanImage}
              alt="Woman meditating"
              className="absolute w-full h-full object-contain object-bottom bottom-0 left-0 z-10 scale-[1.2] lg:scale-[1.25] -translate-y-2 lg:-translate-y-4 origin-bottom transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex-1 w-full text-left">

          <span className="text-[#FF4081] text-[11px] lg:text-[13px] font-bold tracking-[0.25em] font-serif uppercase">
            UNDERSTAND YOUR RHYTHM
          </span>

          <h2 className="mt-4 mb-6 lg:my-4 font-sans font-bold text-[20px] lg:text-[28px] leading-[1.2] text-[#111] tracking-[-0.04em] max-w-[312px] lg:max-w-none mx-auto lg:mx-0">
            Know Your Phases.
            <br />
            Own Your Flow.
          </h2>

          <div className="flex flex-col gap-[1.2rem] mb-[2.5rem]">

            {phases.map((phase) => (
              <PhaseItem key={phase.title} {...phase} />
            ))}

          </div>

          <div className="text-center lg:text-left">
            <Button onClick={onOpenPhaseModal}>
              Learn Your Rhythm
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
