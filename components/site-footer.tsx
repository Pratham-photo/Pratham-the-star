import React from "react"
import { site } from "@/lib/site"

export function SiteFooter({ children }: { children?: React.ReactNode }) {
  return (
    <footer id="contact">
      <div className="container">
        {children}

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
  )
}
