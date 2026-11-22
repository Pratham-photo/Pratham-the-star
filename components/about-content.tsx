"use client"

import React from "react"
import { site } from "@/lib/site"
import { usePageEffects } from "@/hooks/use-page-effects"

export function AboutContent() {
  usePageEffects()

  const {
    intro,
    multitalent,
    confession,
    inspiration,
    truth,
    dream,
    statement,
    closing,
  } = site.aboutPage

  return (
    <div className="about-page">
      {/* 0. INTRO */}
      <section className="about-section about-intro-section">
        <div className="container">
          <div className="project-row about-intro-row">
            <div className="project-info about-intro-info">
              <span
                style={{
                  fontFamily: "var(--syne)",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {intro.label}
              </span>

              <h1
                className="huge-type about-heading"
                style={{
                  lineHeight: 0.9,
                  marginBottom: "30px",
                }}
              >
                {intro.heading}
              </h1>

              {/* Mobile-only portrait placement right below the heading */}
              <div className="about-mobile-portrait">
                <div className="project-media" style={{ width: "100%", margin: "0 auto" }}>
                  <img
                    src={intro.portrait.src}
                    alt={intro.portrait.alt}
                    className="project-image"
                  />
                  <div
                    className="floating-label huge-type outline-text"
                    style={{ fontSize: "5rem", right: "-10px", bottom: "-10px" }}
                  >
                    {intro.floatingLabel}
                  </div>
                </div>
              </div>

              {/* 6 pill tags under the heading */}
              <div className="about-pills-row">
                {intro.tags.map((tag) => (
                  <span key={tag} className="about-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="reveal-text" style={{ width: "100%", marginBottom: "16px" }}>
                <span>
                  <p
                    style={{
                      fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {intro.roles}
                  </p>
                </span>
              </div>

              <div className="reveal-text" style={{ width: "100%" }}>
                <span>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.15rem)",
                      fontWeight: 300,
                      color: "#888888",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {intro.subroles}
                  </p>
                </span>
              </div>
            </div>

            {/* Desktop-only portrait */}
            <div className="project-media about-desktop-portrait">
              <img
                src={intro.portrait.src}
                alt={intro.portrait.alt}
                className="project-image"
              />
              <div
                className="floating-label huge-type outline-text"
                style={{ fontSize: "10rem", right: "-50px", bottom: "-40px" }}
              >
                {intro.floatingLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. "001 / THE MULTITALENT" */}
      <section className="about-section">
        <div className="container">
          <div className="divider"></div>
          <span className="about-step-label">{multitalent.number}</span>

          <div className="reveal-text" style={{ width: "100%", marginBottom: "40px" }}>
            <span>
              <h2
                style={{
                  fontFamily: "var(--syne)",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#ffffff",
                  maxWidth: "1050px",
                }}
              >
                {multitalent.statement}
              </h2>
            </span>
          </div>

          <div className="about-grid-5">
            {multitalent.tiles.map((tile, idx) => (
              <div
                key={tile}
                className="about-tile"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="reveal-text" style={{ width: "100%" }}>
                  <span>
                    <p className="about-tile-text">{tile}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-text" style={{ width: "100%", marginTop: "30px" }}>
            <span>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 300,
                  color: "#888888",
                }}
              >
                {multitalent.closing}
              </p>
            </span>
          </div>
        </div>
      </section>

      {/* 2. "002 / THE CONFESSION" */}
      <section className="about-section">
        <div className="container">
          <div className="divider"></div>
          <span className="about-step-label">{confession.number}</span>

          <div className="reveal-text" style={{ width: "100%", marginBottom: "30px" }}>
            <span>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                  fontWeight: 300,
                  color: "#aaaaaa",
                  lineHeight: 1.6,
                  maxWidth: "950px",
                }}
              >
                {confession.lead}
              </p>
            </span>
          </div>

          {/* Accent box style pull-quote */}
          <div
            className="about-accent-box"
            style={{
              background: "var(--accent)",
              padding: "40px",
              color: "white",
              marginBottom: "30px",
            }}
          >
            <div className="reveal-text" style={{ width: "100%" }}>
              <span>
                <p
                  style={{
                    fontFamily: "var(--syne)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  "{confession.quote}"
                </p>
              </span>
            </div>
          </div>

          <div className="about-confession-tags">
            <span
              style={{
                fontFamily: "var(--syne)",
                fontSize: "0.85rem",
                color: "#888888",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {confession.pretag}
            </span>
            {confession.tags.map((tag) => (
              <div key={tag} className="about-tile about-tag-tile">
                <span className="about-tag-text">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "003 / THE INSPIRATION" */}
      <section className="about-section">
        <div className="container">
          <div className="divider"></div>
          <span className="about-step-label">{inspiration.number}</span>

          <div className="reveal-text" style={{ width: "100%", marginBottom: "36px" }}>
            <span>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                  fontWeight: 300,
                  color: "#aaaaaa",
                  lineHeight: 1.6,
                  maxWidth: "900px",
                }}
              >
                {inspiration.text}
              </p>
            </span>
          </div>

          <div className="about-grid-3">
            {inspiration.tiles.map((item, idx) => (
              <div
                key={item.text}
                className="about-tile about-inspire-tile"
                style={{
                  animationDelay: `${idx * 0.15}s`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--syne)",
                    fontSize: "1.1rem",
                    color: "var(--accent)",
                    display: "block",
                    marginBottom: "16px",
                    fontWeight: 700,
                  }}
                >
                  {item.number}
                </span>
                <div className="reveal-text" style={{ width: "100%" }}>
                  <span>
                    <h3
                      style={{
                        fontFamily: "var(--syne)",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.text}
                    </h3>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "004 / THE TRUTH" */}
      <section className="about-section">
        <div className="container">
          <div className="divider"></div>
          <span className="about-step-label">{truth.number}</span>

          <div className="reveal-text" style={{ width: "100%", marginBottom: "36px" }}>
            <span>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                  fontWeight: 300,
                  color: "#aaaaaa",
                  lineHeight: 1.6,
                  maxWidth: "900px",
                }}
              >
                {truth.text}
              </p>
            </span>
          </div>

          <div className="about-grid-4">
            {truth.tiles.map((item, idx) => (
              <div
                key={item}
                className="about-tile about-truth-tile"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="reveal-text" style={{ width: "100%" }}>
                  <span>
                    <h4
                      style={{
                        fontFamily: "var(--syne)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "0.1em",
                        margin: 0,
                      }}
                    >
                      {item}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-tile about-wide-tile" style={{ marginTop: "20px" }}>
            <div className="reveal-text" style={{ width: "100%" }}>
              <span>
                <h3
                  style={{
                    fontFamily: "var(--syne)",
                    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {truth.wideTile}
                </h3>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "005 / THE DREAM" */}
      <section className="about-section">
        <div className="container">
          <div className="divider"></div>
          <span className="about-step-label">{dream.number}</span>

          <div className="about-dream-container">
            <div
              className="huge-type outline-text parallax-text about-dream-outline"
              data-speed="1.5"
            >
              {dream.outlineText}
            </div>
            <div className="reveal-text" style={{ width: "100%", position: "relative", zIndex: 2 }}>
              <span>
                <p
                  style={{
                    fontFamily: "var(--syne)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    maxWidth: "980px",
                    margin: 0,
                  }}
                >
                  {dream.statement}
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE STATEMENT */}
      <section className="about-section">
        <div className="container">
          <div className="about-statement-block">
            <div className="reveal-text" style={{ width: "100%" }}>
              <span>
                <p
                  style={{
                    fontFamily: "var(--syne)",
                    fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {statement.text}
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING */}
      <section className="about-section about-closing-section">
        <div className="container">
          <div className="reveal-text" style={{ width: "100%", marginBottom: "24px" }}>
            <span>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  fontWeight: 300,
                  color: "#888888",
                  maxWidth: "900px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {closing.intro}
              </p>
            </span>
          </div>

          <div className="reveal-text" style={{ width: "100%", marginBottom: "60px" }}>
            <span>
              <p
                className="huge-type"
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.05,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {closing.highlight}
              </p>
            </span>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          padding-top: 140px;
        }

        .about-section {
          position: relative;
          margin-bottom: 120px;
        }

        .about-intro-section {
          margin-bottom: 80px;
        }

        .about-step-label {
          font-family: var(--syne), sans-serif;
          color: var(--accent);
          display: block;
          margin-bottom: 24px;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .about-heading {
          font-size: clamp(3.5rem, 7vw, 7.5rem);
        }

        .about-mobile-portrait {
          display: none;
        }

        .about-desktop-portrait {
          display: block;
        }

        .about-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .about-pill {
          font-family: var(--syne), sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cccccc;
          border-radius: 2px;
          transition: border-color 0.3s ease;
        }

        .about-pill:hover {
          border-color: var(--accent);
        }

        .about-tile {
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px 24px;
          background: transparent;
          transition: border-color 0.3s ease, transform 0.3s ease;
          border-radius: 2px;
          box-sizing: border-box;
        }

        .about-tile:hover {
          border-color: var(--accent);
        }

        .about-grid-5 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .about-tile-text {
          font-family: var(--syne), sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.35;
          margin: 0;
        }

        .about-confession-tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .about-tag-tile {
          padding: 10px 18px;
        }

        .about-tag-text {
          font-family: var(--syne), sans-serif;
          font-size: 0.9rem;
          color: #dddddd;
          letter-spacing: 0.02em;
        }

        .about-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .about-inspire-tile {
          padding: 40px 30px;
        }

        .about-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .about-truth-tile {
          padding: 30px 20px;
          text-align: center;
        }

        .about-wide-tile {
          padding: 40px 30px;
        }

        .about-dream-container {
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 40px 0;
        }

        .about-dream-outline {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          font-size: clamp(5rem, 14vw, 15rem);
          white-space: nowrap;
          pointer-events: none;
          z-index: 1;
          opacity: 0.12;
          width: 100%;
        }

        .about-statement-block {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 70px 0;
        }

        .about-closing-section {
          margin-bottom: 80px;
        }

        @media (max-width: 992px) {
          .about-grid-3 {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          }
          .about-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-page {
            padding-top: 100px;
          }

          .about-section {
            margin-bottom: 80px;
          }

          .about-desktop-portrait {
            display: none;
          }

          .about-mobile-portrait {
            display: block;
            margin: 20px 0 30px 0;
            width: 100%;
          }

          .about-grid-5 {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .about-grid-3 {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .about-grid-4 {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .about-dream-container {
            min-height: 220px;
          }

          .about-dream-outline {
            font-size: clamp(3rem, 12vw, 6rem);
          }

          .about-statement-block {
            padding: 40px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-tile,
          .about-pill {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}
