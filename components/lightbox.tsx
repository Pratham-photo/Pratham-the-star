"use client"

import React, { useEffect, useRef, useCallback, useState } from "react"
import type { ImageItem } from "@/lib/site"

export interface LightboxProps {
  isOpen: boolean
  photos: ImageItem[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ isOpen, photos, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  const touchStartXRef = useRef<number>(0)
  const touchStartYRef = useRef<number>(0)

  // Sync index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      previousActiveElementRef.current = document.activeElement as HTMLElement
      setMounted(true)
      // trigger transition
      requestAnimationFrame(() => {
        setVisible(true)
      })
    } else {
      setVisible(false)
      const timeout = setTimeout(() => {
        setMounted(false)
      }, 250)
      return () => clearTimeout(timeout)
    }
  }, [isOpen, initialIndex])

  // Restore focus when closing
  useEffect(() => {
    if (!isOpen && previousActiveElementRef.current) {
      previousActiveElementRef.current.focus()
      previousActiveElementRef.current = null
    }
  }, [isOpen])

  // Scroll lock
  useEffect(() => {
    if (!isOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  // Preload prev and next images
  useEffect(() => {
    if (!isOpen || photos.length <= 1) return
    const nextIdx = (currentIndex + 1) % photos.length
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length
    const imgNext = new Image()
    imgNext.src = photos[nextIdx].src
    const imgPrev = new Image()
    imgPrev.src = photos[prevIdx].src
  }, [currentIndex, isOpen, photos])

  const handlePrev = useCallback(() => {
    if (photos.length <= 1) return
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }, [photos.length])

  const handleNext = useCallback(() => {
    if (photos.length <= 1) return
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }, [photos.length])

  // Focus trap & keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    closeBtnRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        handlePrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        handleNext()
      } else if (e.key === "Tab") {
        const focusable = [
          prevBtnRef.current,
          nextBtnRef.current,
          closeBtnRef.current,
        ].filter(Boolean) as HTMLElement[]

        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, handlePrev, handleNext])

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
    touchStartYRef.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX
    const diffY = Math.abs(touchStartYRef.current - e.changedTouches[0].clientY)
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > diffY) {
      if (diffX > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  if (!mounted || !photos.length) return null

  const currentPhoto = photos[currentIndex] || photos[0]
  const counterText = `${String(currentIndex + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      className={`lightbox-overlay ${visible ? "visible" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        ref={closeBtnRef}
        type="button"
        className="lightbox-btn lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox (Esc)"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev button */}
      {photos.length > 1 && (
        <button
          ref={prevBtnRef}
          type="button"
          className="lightbox-btn lightbox-prev"
          onClick={handlePrev}
          aria-label="Previous photo (Left Arrow)"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="lightbox-img-wrap"
        onClick={(e) => {
          // If clicked in the margins of the wrapper, close
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}
      >
        <img
          key={currentPhoto.src}
          src={currentPhoto.src}
          alt={currentPhoto.alt || "Portfolio photograph"}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Next button */}
      {photos.length > 1 && (
        <button
          ref={nextBtnRef}
          type="button"
          className="lightbox-btn lightbox-next"
          onClick={handleNext}
          aria-label="Next photo (Right Arrow)"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Bottom Counter */}
      <div className="lightbox-counter" aria-live="polite">
        {counterText}
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          background: rgba(0, 0, 0, 0.95);
          z-index: 90000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease-out;
          user-select: none;
          -webkit-user-select: none;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .lightbox-overlay.visible {
          opacity: 1;
        }

        .lightbox-img-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 20px 70px 50px 70px;
          pointer-events: auto;
          box-sizing: border-box;
        }

        .lightbox-img {
          display: block;
          max-width: 90vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
          animation: lightboxImgFade 0.2s ease-out;
        }

        @keyframes lightboxImgFade {
          from {
            opacity: 0.85;
            transform: scale(0.99);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .lightbox-btn {
          position: absolute;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 90010;
          opacity: 0.75;
          transition: opacity 0.2s ease, transform 0.2s ease;
          outline: none;
          border-radius: 50%;
        }

        .lightbox-btn:hover,
        .lightbox-btn:focus-visible {
          opacity: 1;
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.08);
        }

        .lightbox-close {
          top: 24px;
          right: 24px;
        }

        .lightbox-prev {
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox-prev:hover,
        .lightbox-prev:focus-visible {
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-next {
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox-next:hover,
        .lightbox-next:focus-visible {
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--syne), sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          color: #888888;
          text-transform: uppercase;
          pointer-events: none;
          z-index: 90010;
        }

        @media (max-width: 768px) {
          .lightbox-img-wrap {
            padding: 20px 10px 45px 10px;
          }
          .lightbox-img {
            max-width: 96vw;
            max-height: 80vh;
          }
          .lightbox-close {
            top: 14px;
            right: 14px;
            padding: 8px;
          }
          .lightbox-prev {
            left: 8px;
            padding: 6px;
          }
          .lightbox-prev svg,
          .lightbox-next svg {
            width: 24px;
            height: 24px;
          }
          .lightbox-next {
            right: 8px;
            padding: 6px;
          }
          .lightbox-counter {
            bottom: 15px;
            font-size: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lightbox-overlay {
            transition: none !important;
          }
          .lightbox-img {
            animation: none !important;
          }
          .lightbox-btn {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}
