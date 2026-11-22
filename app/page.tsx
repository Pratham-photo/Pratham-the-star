"use client"

import React, { useEffect, useState } from "react"
import { site, type ImageItem } from "@/lib/site"
import { IntroLoader } from "@/components/intro-loader"
import { Lightbox } from "@/components/lightbox"

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxPhotos, setLightboxPhotos] = useState<ImageItem[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (photos: ImageItem[], index: number) => {
    setLightboxPhotos(photos)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob")
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Parallax Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset

      // Hero parallax
      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ;(text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`
        }
      })

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        ;(label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Simple reveal on enter (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text)
    })

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <IntroLoader />
      <div className="blob" id="cursor-blob"></div>

      <nav>
        <div className="logo">{site.nav.logo}</div>
        <ul className="nav-links">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

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
        <footer id="contact">
          <div className="container">
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

            <div className="footer-cta">
              <a href={`mailto:${site.contact.email}`}>{site.contact.cta}</a>
            </div>
            <div className="divider"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--syne)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              <div>
                © {site.year} {site.name}
              </div>
              <div style={{ display: "flex", gap: "30px" }}>
                {site.contact.socials.map((social, index) => {
                  const isMailto = social.href?.startsWith("mailto:")
                  return social.href ? (
                    <a
                      key={index}
                      href={social.href}
                      target={isMailto ? undefined : "_blank"}
                      rel={isMailto ? undefined : "noopener noreferrer"}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {social.name}
                    </a>
                  ) : (
                    <span key={index}>{social.name}</span>
                  )
                })}
              </div>
              <div>{site.contact.location}</div>
            </div>
          </div>
        </footer>
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
