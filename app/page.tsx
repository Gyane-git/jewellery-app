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

            <span className="ns-badge ">Launching Soon</span>

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
              Nosepin House is opening its doors online — a home for fine nose
              pins and jewellery, crafted for those who notice the details.
              We&apos;re putting the finishing touches on the collection.
            </p>

            {/* {!joined ? (
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
            )} */}

            <div className="ns-footer">
              <span>Kathmandu, Nepal</span>
              <span className="ns-dot" aria-hidden="true" />
              <span>nosepinhouse.com</span>
            </div>
          </div>
        </div>

        <div className="ns-right">
          <div className="ns-texture" aria-hidden="true" />
          <div className="ns-glow ns-glow-a" aria-hidden="true" />
          <div className="ns-glow ns-glow-b" aria-hidden="true" />
          {/* <span className="ns-monogram" aria-hidden="true">N</span> */}

          <h2 className="ns-coming">Coming Soon</h2>

          <Image
            src="/pendant.png"
            alt="Nosepin House gold pendant"
            width={372}
            height={715}
            className="ns-pendant"
          />

          <div className="ns-sparkles" aria-hidden="true">
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

          <div className="ns-social">
            <a
              href="https://www.facebook.com/share/1JrdQvaJVo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nosepin House on Facebook"
              className="ns-social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.7v8h3.3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nosepinhouse1?stkn=c25sbGtnNmhnZzVo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nosepin House on Instagram"
              className="ns-social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4.1" />
                <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nosepinhouse?_r=1&_t=ZS-99rZTM3Xl8p"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nosepin House on TikTok"
              className="ns-social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16.3 3h-2.9v12.2a2.7 2.7 0 1 1-2.4-2.68V9.5a5.8 5.8 0 1 0 5.3 5.78V9.1a7.6 7.6 0 0 0 4.2 1.27V7.4A4.7 4.7 0 0 1 16.3 3z" />
              </svg>
            </a>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 18px auto 22px;
  padding: 8px 20px;

  border: 1px solid rgba(184, 145, 73, 0.55);
  border-radius: 999px;

  background: linear-gradient(
    135deg,
    rgba(184, 145, 73, 0.08),
    rgba(255, 255, 255, 0.5)
  );

  color: #a47b32;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;

  box-shadow:
    0 4px 18px rgba(164, 123, 50, 0.08),
    inset 0 0 12px rgba(255, 255, 255, 0.5);

  position: relative;
}

/* Small decorative dots */
.ns-badge::before,
.ns-badge::after {
  content: "✦";
  font-size: 9px;
  margin: 0 9px;
  opacity: 0.7;
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
          gap: 1.4rem;
          padding: 3rem 2rem;
          background: linear-gradient(160deg, var(--maroon) 0%, var(--maroon-deep) 65%, #26050f 100%);
        }

        .ns-coming {
          position: relative;
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          letter-spacing: 0.02em;
          text-align: center;
          color: var(--gold-light);
          animation: ns-rise 0.9s ease-out both;
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

        .ns-pendant {
          position: relative;
          width: 10.5rem;
          height: auto;
          animation: ns-rise 1s ease-out 0.15s both, ns-float 6s ease-in-out 1.1s infinite;
          filter: drop-shadow(0 14px 26px rgba(0, 0, 0, 0.4));
        }

        .ns-social {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.2rem;
        }

        .ns-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          border: 1px solid rgba(233, 205, 140, 0.55);
          border-radius: 50%;
          color: var(--gold-light);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .ns-social-link:hover {
          background: var(--gold-light);
          color: var(--maroon-deep);
          border-color: var(--gold-light);
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
          margin-top: 0.2rem;
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
          .ns-pendant,
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