'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire this up to your real mailing list (Mailchimp, Brevo, a Google Sheet, etc.)
    setJoined(true);
  }

  return (
    <main className="ns-frame">
      <div className="ns-corner ns-corner-tl" aria-hidden="true" />
      <div className="ns-corner ns-corner-tr" aria-hidden="true" />
      <div className="ns-corner ns-corner-bl" aria-hidden="true" />
      <div className="ns-corner ns-corner-br" aria-hidden="true" />

      <div className="ns-page">
        <div className="ns-left">
          <div className="ns-left-inner">
            <Image
              src="/logo.png"
              alt="Nosepin House"
              width={340}
              height={252}
              priority
              className="ns-logo"
            />

            <span className="ns-badge">Launching Soon</span>

            <h1 className="ns-headline">
              Something exquisite
              <br />
              is on its way
            </h1>

            <div className="ns-divider" aria-hidden="true">
              <span className="ns-divider-line" />
              <span className="ns-divider-gem" />
              <span className="ns-divider-line" />
            </div>

            <p className="ns-copy">
              A new jewellery experience is on its way.

We’re carefully preparing a beautiful collection, made for those who appreciate elegance, quality, and timeless style.


            </p>

            {!joined ? (
              <form className="ns-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="ns-input"
                />
                <button type="submit" className="ns-button">
                  <span>Notify me</span>
                </button>
              </form>
            ) : (
              <p className="ns-success">
                You&apos;re on the list — we&apos;ll email you the moment we open.
              </p>
            )}

            <div className="ns-footer">
              <span>Kathmandu, Nepal</span>
              <span className="ns-dot" aria-hidden="true" />
              <span>nosepin.com</span>
            </div>
          </div>
        </div>

        <div className="ns-right" aria-hidden="true">
          <div className="ns-texture" />
          <div className="ns-glow ns-glow-a" />
          <div className="ns-glow ns-glow-b" />

          <span className="ns-monogram">N</span>

          <svg
            className="ns-jewel"
            viewBox="0 0 320 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldFace" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F8ECC6" />
                <stop offset="45%" stopColor="#D8B361" />
                <stop offset="100%" stopColor="#8E6A28" />
              </linearGradient>
              <linearGradient id="goldEdge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F6E7BE" />
                <stop offset="100%" stopColor="#A9803C" />
              </linearGradient>
              <radialGradient id="rubyFace" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FF9FB4" />
                <stop offset="45%" stopColor="#C6274F" />
                <stop offset="100%" stopColor="#6E0E28" />
              </radialGradient>
              <linearGradient id="chainGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F6E7BE" />
                <stop offset="100%" stopColor="#B08D46" />
              </linearGradient>
            </defs>

            {/* chain / flourish, echoing the swoop in the wordmark */}
            <path
              d="M60 20C40 70 96 96 118 118C136 136 132 158 118 172"
              stroke="url(#chainGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M260 20C280 70 224 96 202 118C184 136 188 158 202 172"
              stroke="url(#chainGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
            />
            {[...Array(6)].map((_, i) => (
              <circle
                key={`l${i}`}
                cx={70 + i * 8.5}
                cy={26 + i * 2}
                r="2.2"
                fill="url(#chainGrad)"
                opacity="0.7"
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <circle
                key={`r${i}`}
                cx={250 - i * 8.5}
                cy={26 + i * 2}
                r="2.2"
                fill="url(#chainGrad)"
                opacity="0.7"
              />
            ))}

            {/* setting */}
            <path
              d="M160 158L160 180"
              stroke="url(#goldEdge)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M132 178C132 160 188 160 188 178L182 190C176 182 144 182 138 190Z"
              fill="url(#goldFace)"
              stroke="#5B3A14"
              strokeWidth="1.25"
            />

            {/* faceted pendant gem */}
            <g transform="translate(160,268)">
              <polygon
                points="0,-92 44,-42 44,24 0,96 -44,24 -44,-42"
                fill="url(#goldFace)"
                stroke="#5B3A14"
                strokeWidth="1.5"
              />
              <polygon points="0,-92 44,-42 -44,-42" fill="#F8ECC6" opacity="0.6" />
              <polygon points="0,-64 24,-42 -24,-42" fill="url(#rubyFace)" />
              <line x1="0" y1="-92" x2="0" y2="96" stroke="#5B3A14" strokeWidth="1" opacity="0.5" />
              <line x1="-44" y1="-42" x2="44" y2="-42" stroke="#5B3A14" strokeWidth="1" opacity="0.5" />
              <line x1="-44" y1="24" x2="44" y2="24" stroke="#5B3A14" strokeWidth="1" opacity="0.5" />
              <line x1="0" y1="-92" x2="-44" y2="-42" stroke="#5B3A14" strokeWidth="0.75" opacity="0.35" />
              <line x1="0" y1="-92" x2="44" y2="-42" stroke="#5B3A14" strokeWidth="0.75" opacity="0.35" />
              <line x1="0" y1="96" x2="-44" y2="24" stroke="#5B3A14" strokeWidth="0.75" opacity="0.35" />
              <line x1="0" y1="96" x2="44" y2="24" stroke="#5B3A14" strokeWidth="0.75" opacity="0.35" />
              <circle cx="-18" cy="-58" r="5" fill="#FFFFFF" opacity="0.55" />
            </g>

            {/* small stud, echoing the nose-pin motif in the wordmark */}
            <circle cx="160" cy="196" r="7" fill="#FBF6EE" stroke="#8E6A28" strokeWidth="2" />
          </svg>

          <div className="ns-sparkles">
            {sparklePositions.map((pos, i) => (
              <span
                key={i}
                className={`ns-sparkle${pos.big ? ' ns-sparkle-big' : ''}`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  animationDelay: pos.delay,
                }}
              />
            ))}
          </div>

          <p className="ns-tag">Fine Nose Pins &amp; Jewellery</p>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,500&family=Marcellus&family=Jost:wght@300;400;500&display=swap');

        :root {
          --maroon-deep: #3d0a1f;
          --maroon: #5b1030;
          --gold: #c9a24c;
          --gold-light: #e9cd8c;
          --cream: #fbf6ee;
          --ink: #241016;
          --ruby: #c6274f;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <style jsx>{`
        .ns-frame {
          position: relative;
          min-height: 100vh;
          padding: 1.1rem;
          background: var(--cream);
          box-sizing: border-box;
        }

        .ns-frame::before {
          content: '';
          position: absolute;
          inset: 0.4rem;
          border: 1px solid rgba(201, 162, 76, 0.9);
          pointer-events: none;
          z-index: 3;
        }

        .ns-frame::after {
          content: '';
          position: absolute;
          inset: 0.55rem;
          border: 1px solid rgba(201, 162, 76, 0.35);
          pointer-events: none;
          z-index: 3;
        }

        .ns-corner {
          position: absolute;
          width: 2.4rem;
          height: 2.4rem;
          z-index: 4;
          pointer-events: none;
        }

        .ns-corner::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1.5px solid var(--gold);
        }

        .ns-corner-tl {
          top: 0.15rem;
          left: 0.15rem;
        }
        .ns-corner-tl::before {
          border-right: none;
          border-bottom: none;
        }

        .ns-corner-tr {
          top: 0.15rem;
          right: 0.15rem;
        }
        .ns-corner-tr::before {
          border-left: none;
          border-bottom: none;
        }

        .ns-corner-bl {
          bottom: 0.15rem;
          left: 0.15rem;
        }
        .ns-corner-bl::before {
          border-right: none;
          border-top: none;
        }

        .ns-corner-br {
          bottom: 0.15rem;
          right: 0.15rem;
        }
        .ns-corner-br::before {
          border-left: none;
          border-top: none;
        }

        .ns-page {
          position: relative;
          min-height: calc(100vh - 2.2rem);
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          background: var(--cream);
          color: var(--ink);
        }

        .ns-left {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 3.5rem;
        }

        .ns-left-inner {
          max-width: 30rem;
          width: 100%;
          animation: ns-rise 0.9s ease-out both;
        }

        .ns-logo {
          height: auto;
          width: 11rem;
          margin-bottom: 1.25rem;
        }

        .ns-badge {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--maroon-deep);
          border: 1px solid var(--gold);
          padding: 0.4rem 0.9rem;
          margin-bottom: 1.5rem;
        }

        .ns-headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(2.3rem, 3.8vw, 3.2rem);
          line-height: 1.15;
          margin: 0 0 1.4rem;
          background: linear-gradient(100deg, var(--maroon-deep) 30%, var(--maroon) 45%, #a8783a 52%, var(--maroon-deep) 65%);
          background-size: 260% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: ns-shimmer 5s linear infinite;
        }

        .ns-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.6rem;
        }

        .ns-divider-line {
          width: 2.75rem;
          height: 1px;
          background: var(--gold);
        }

        .ns-divider-gem {
          width: 7px;
          height: 7px;
          background: var(--ruby);
          transform: rotate(45deg);
          box-shadow: 0 0 0 1px var(--gold);
        }

        .ns-copy {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.75;
          color: #4a3b3f;
          margin: 0 0 2.25rem;
          max-width: 34ch;
        }

        .ns-form {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .ns-input {
          flex: 1;
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          padding: 0.85rem 1.1rem;
          border: 1px solid #d8c9a8;
          background: #fff;
          border-radius: 2px;
          outline-offset: 2px;
        }

        .ns-input:focus-visible {
          outline: 2px solid var(--gold);
        }

        .ns-button {
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.85rem 1.6rem;
          background: var(--maroon-deep);
          color: var(--gold-light);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          white-space: nowrap;
        }

        .ns-button span {
          position: relative;
          z-index: 1;
        }

        .ns-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--maroon);
          transform: translateX(-101%);
          transition: transform 0.3s ease;
        }

        .ns-button:hover::before {
          transform: translateX(0);
        }

        .ns-success {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          color: var(--maroon);
          border-left: 2px solid var(--gold);
          padding-left: 0.9rem;
          margin: 0 0 2.5rem;
        }

        .ns-footer {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          color: #8a7368;
        }

        .ns-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #8a7368;
        }

        .ns-right {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, var(--maroon) 0%, var(--maroon-deep) 65%, #26050f 100%);
        }

        .ns-texture {
          position: absolute;
          inset: 0;
          opacity: 0.5;
          background-image: radial-gradient(rgba(233, 205, 140, 0.14) 1px, transparent 1px);
          background-size: 26px 26px;
        }

        .ns-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.35;
        }

        .ns-glow-a {
          width: 22rem;
          height: 22rem;
          background: var(--gold);
          top: -6rem;
          right: -6rem;
        }

        .ns-glow-b {
          width: 16rem;
          height: 16rem;
          background: #ffe6b0;
          bottom: -4rem;
          left: -4rem;
          opacity: 0.18;
        }

        .ns-monogram {
          position: absolute;
          font-family: 'Marcellus', serif;
          font-size: 32rem;
          line-height: 1;
          color: rgba(255, 255, 255, 0.045);
          user-select: none;
        }

        .ns-jewel {
          width: 14rem;
          height: auto;
          animation: ns-rise 1s ease-out 0.15s both, ns-float 6s ease-in-out 1.1s infinite;
          filter: drop-shadow(0 14px 26px rgba(0, 0, 0, 0.4));
        }

        .ns-sparkles {
          position: absolute;
          inset: 0;
        }

        .ns-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold-light);
          box-shadow: 0 0 6px 2px rgba(233, 205, 140, 0.8);
          animation: ns-twinkle 3.2s ease-in-out infinite;
        }

        .ns-sparkle-big {
          width: 6px;
          height: 6px;
          box-shadow: 0 0 10px 3px rgba(233, 205, 140, 0.9);
        }

        .ns-tag {
          position: relative;
          margin-top: 2.25rem;
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          letter-spacing: 0.28em;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--gold-light);
        }

        @keyframes ns-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ns-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ns-twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.6);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes ns-shimmer {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 260% 0%;
          }
        }

        @media (max-width: 900px) {
          .ns-page {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
          }

          .ns-right {
            order: -1;
            padding: 3rem 1.5rem 3.5rem;
            min-height: 22rem;
          }

          .ns-left {
            padding: 3rem 1.75rem 3.5rem;
          }

          .ns-form {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-left-inner,
          .ns-jewel,
          .ns-sparkle,
          .ns-headline {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}

const sparklePositions = [
  { top: '16%', left: '26%', delay: '0s' },
  { top: '28%', left: '74%', delay: '0.6s', big: true },
  { top: '60%', left: '20%', delay: '1.2s', big: true },
  { top: '70%', left: '70%', delay: '1.8s' },
  { top: '44%', left: '82%', delay: '0.9s' },
  { top: '80%', left: '44%', delay: '1.5s' },
  { top: '38%', left: '12%', delay: '2.1s' },
  { top: '20%', left: '55%', delay: '2.6s', big: true },
];