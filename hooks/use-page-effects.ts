"use client"

import { useEffect } from "react"

export function usePageEffects() {
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

      // Parallax text
      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ;(text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`
        }
      })

      // Hero image parallax
      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`
      }

      // Floating labels
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        ;(label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Scroll Reveal Effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll(".reveal-text")
    revealElements.forEach((el) => {
      observer.observe(el)
    })

    // Add smooth scrolling for anchor links
    const handleAnchorClick = function (this: HTMLAnchorElement, e: MouseEvent) {
      const href = this.getAttribute("href")
      if (!href) return

      if (href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      } else if (href.startsWith("/#")) {
        // If already on the home page, smoothly scroll to the section
        if (window.location.pathname === "/" || window.location.pathname === "") {
          const hash = href.substring(1)
          const target = document.querySelector(hash)
          if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: "smooth" })
            window.history.pushState(null, "", hash)
          }
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"], a[href^="/#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as any)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as any)
      })
    }
  }, [])
}
