"use client"

import React, { useState } from "react"
import { site, type ImageItem } from "@/lib/site"
import { IntroLoader } from "@/components/intro-loader"
import { Lightbox } from "@/components/lightbox"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { usePageEffects } from "@/hooks/use-page-effects"

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxPhotos, setLightboxPhotos] = useState<ImageItem[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  usePageEffects()

  const openLightbox = (photos: ImageItem[], index: number) => {
    setLightboxPhotos(photos)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <>
      <IntroLoader />
      <div className="blob" id="cursor-blob"></div>

      <SiteNav />

      <main>
        {/* HERO SECTION */}
        <section id="hero">
          <img
            src={site.hero.image.src}
            alt={site.hero.image.alt}
            className="hero-img"
            id="hero-img"
            style={site.hero.image.focus ? { objectPosition: site.hero.image.focus } : undefined}
          />
          <div className="hero-title-container container">
            <span className="huge-type parallax-text" data-speed="-2">
              {site.hero.words[0]}
            </span>
            <span className="huge-type outline-text parallax-text" data-speed="2" style={{ paddingLeft: "200px" }}>
              {site.hero.words[1]}
            </span>
          </div>
        </section>

        {/* INTRO */}
        <section id="about">
          <div className="container">
            <div style={{ maxWidth: "800px" }}>
              <span
                style={{
                  fontFamily: "var(--syne)",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {site.about.label}
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  fontFamily: "var(--syne)",
                  marginBottom: "40px",
                }}
              >
                {site.about.heading}
              </h2>
              {site.about.intro.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#888",
                    marginBottom: "24px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="scrolling-marquee">
          <div className="marquee-inner">
            <span className="huge-type outline-text">
              {site.marquee}
              {site.marquee}
            </span>
            <span className="huge-type outline-text">
              {site.marquee}
              {site.marquee}
            </span>
          </div>
        </div>

        {/* WORK SECTION */}
        <section id="work" className="container">
          <div className="sticky-type">ARCHIVE</div>

          {site.projects.map((project, index) => {
            const galleryPhotos = project.gallery || project.photos || []
            const fullSeriesPhotos = [project.cover, ...galleryPhotos]

            return (
              <React.Fragment key={project.id}>
                {index === 4 && (
                  <div style={{ maxWidth: "800px", marginBottom: "200px" }}>
                    <span
                      style={{
                        fontFamily: "var(--syne)",
                        color: "var(--accent)",
                        display: "block",
                        marginBottom: "20px",
                      }}
                    >
                      {site.about.label}
                    </span>
                    {site.about.middle.map((paragraph, mIdx) => (
                      <p
                        key={mIdx}
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 300,
                          color: "#888",
                          marginBottom: "24px",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                <div
                  className="project-row"
                  style={index % 2 === 1 ? { flexDirection: "row-reverse" } : undefined}
                >
                  <div className="project-info">
                    <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>{project.category}</span>
                    <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                    <div className="divider"></div>
                    <p>YEAR: {project.year}</p>

                    {galleryPhotos && galleryPhotos.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                          marginTop: "30px",
                          paddingBottom: "8px",
                        }}
                      >
                        {galleryPhotos.map((photo, pIdx) => (
                          <img
                            key={pIdx}
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className="comp-image"
                            onClick={() => openLightbox(fullSeriesPhotos, pIdx + 1)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View photo ${pIdx + 1} of ${project.title}`}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault()
                                openLightbox(fullSeriesPhotos, pIdx + 1)
                              }
                            }}
                            style={{
                              width: "60px",
                              height: "80px",
                              objectFit: "cover",
                              objectPosition: photo.focus || "center",
                              flexShrink: 0,
                              cursor: "zoom-in",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="project-media">
                    <img
                      src={project.cover.src}
                      alt={project.cover.alt}
                      loading="lazy"
                      className="project-image"
                      onClick={() => openLightbox(fullSeriesPhotos, 0)}
                      tabIndex={0}
                      role="button"
                      aria-label={`View cover photo of ${project.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          openLightbox(fullSeriesPhotos, 0)
                        }
                      }}
                      style={{
                        ...(project.cover.focus ? { objectPosition: project.cover.focus } : {}),
                        cursor: "zoom-in",
                      }}
                    />
                    <div
                      className="floating-label huge-type outline-text"
                      style={
                        index % 2 === 1
                          ? { fontSize: "8rem", right: "auto", left: "-100px" }
                          : { fontSize: "8rem" }
                      }
                    >
                      {project.label}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </section>

        {/* OVERLAPPING COMPOSITION SECTION */}
        <section>
          <div className="container composition">
            <div className="comp-item-1">
              <img
                src={site.composition.images[0].src}
                className="comp-image"
                alt={site.composition.images[0].alt}
                loading="lazy"
                onClick={() => openLightbox(site.composition.images, 0)}
                tabIndex={0}
                role="button"
                aria-label="View photo 1 of composition series"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openLightbox(site.composition.images, 0)
                  }
                }}
                style={{
                  ...(site.composition.images[0].focus ? { objectPosition: site.composition.images[0].focus } : {}),
                  cursor: "zoom-in",
                }}
              />
            </div>
            <div className="comp-item-2">
              <img
                src={site.composition.images[1].src}
                className="comp-image"
                alt={site.composition.images[1].alt}
                loading="lazy"
                onClick={() => openLightbox(site.composition.images, 1)}
                tabIndex={0}
                role="button"
                aria-label="View photo 2 of composition series"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openLightbox(site.composition.images, 1)
                  }
                }}
                style={{
                  ...(site.composition.images[1].focus ? { objectPosition: site.composition.images[1].focus } : {}),
                  cursor: "zoom-in",
                }}
              />
            </div>
            <div className="comp-item-3">
              <div
                style={{
                  background: "var(--accent)",
                  padding: "40px",
                  color: "white",
                }}
              >
                <h4 style={{ fontFamily: "var(--syne)", fontSize: "2rem" }}>{site.about.belief.heading}</h4>
                <p style={{ marginTop: "20px" }}>{site.about.belief.text}</p>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "400px",
                zIndex: 10,
              }}
            >
              <img
                src={site.composition.images[2].src}
                className="comp-image"
                alt={site.composition.images[2].alt}
                loading="lazy"
                onClick={() => openLightbox(site.composition.images, 2)}
                tabIndex={0}
                role="button"
                aria-label="View photo 3 of composition series"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openLightbox(site.composition.images, 2)
                  }
                }}
                style={{
                  ...(site.composition.images[2].focus ? { objectPosition: site.composition.images[2].focus } : {}),
                  cursor: "zoom-in",
                }}
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <SiteFooter>
          <div style={{ maxWidth: "800px", marginBottom: "100px" }}>
            <span
              style={{
                fontFamily: "var(--syne)",
                color: "var(--accent)",
                display: "block",
                marginBottom: "20px",
              }}
            >
              {site.about.label}
            </span>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#888",
                marginBottom: "24px",
              }}
            >
              {site.about.outro.learning}
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              {site.about.outro.highlighted}
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#888",
                marginBottom: "24px",
              }}
            >
              {site.about.outro.closing}
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                fontFamily: "var(--syne)",
                color: "var(--accent)",
                marginTop: "40px",
              }}
            >
              {site.about.outro.signature}
            </p>
          </div>
        </SiteFooter>
      </main>

      <Lightbox
        isOpen={lightboxOpen}
        photos={lightboxPhotos}
        initialIndex={lightboxIndex}
        onClose={closeLightbox}
      />
    </>
  )
}
