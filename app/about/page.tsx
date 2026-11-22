import type { Metadata } from "next"
import { site } from "@/lib/site"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: site.aboutPage.meta.title,
  description: site.aboutPage.meta.description,
}

export default function AboutPage() {
  return (
    <>
      <div className="blob" id="cursor-blob"></div>
      <SiteNav />
      <main>
        <AboutContent />
        <SiteFooter />
      </main>
    </>
  )
}
