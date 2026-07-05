import React from "react";
import "./RhythmSection.css";
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
    <section className="rhythm-section" id="phases">
      <div className="rhythm-container">

        <div className="rhythm-image">
          <div className="rhythm-image-container">
            {/* SVG Pink Blob Background */}
            <PinkBlob className="pink-blob-svg" />

            {/* 3D Meditating Woman Image */}
            <img
              src={womanImage}
              alt="Woman meditating"
              className="meditating-woman-img"
            />
          </div>
        </div>

        <div className="rhythm-content">

          <span className="subtitle">
            UNDERSTAND YOUR RHYTHM
          </span>

          <h2>
            Know Your Phases.
            <br />
            Own Your Flow.
          </h2>

          <div className="phase-list">

            {phases.map((phase) => (
              <PhaseItem key={phase.title} {...phase} />
            ))}

          </div>

          <Button onClick={onOpenPhaseModal}>
            Learn Your Rhythm
          </Button>

        </div>

      </div>
    </section>
  );
}
