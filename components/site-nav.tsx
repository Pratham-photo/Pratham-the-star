import React from "react"
import { site } from "@/lib/site"

export function SiteNav() {
  return (
    <nav>
      <div className="logo">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          {site.nav.logo}
        </a>
      </div>
      <ul className="nav-links">
        {site.nav.links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
