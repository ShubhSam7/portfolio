"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp, ArrowUpRight, Check, Copy, GraduationCap, Moon, Sun } from "lucide-react";
import { contactEmail, heroMedia, projects, reading, skills } from "@/lib/portfolio";
import { ProjectPreview } from "@/components/ProjectPreview";
import { MessageBox } from "@/components/MessageBox";
import { RockPaperScissors } from "@/components/RockPaperScissors";

function SectionHeading({ number, title, note }: { number: string; title: string; note: string }) {
  return <div className="section-heading"><h2><span className="section-number">{number} /</span>{title}</h2><span className="section-note">{note}</span></div>;
}

export function Portfolio() {
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("about");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const emailFallback = useRef<HTMLInputElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === "light");
    const updateAtTop = () => { if (window.scrollY < 80) setActive("about"); };
    const observer = new IntersectionObserver(entries => {
      if (window.scrollY < 80) { setActive("about"); return; }
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-10% 0px -55% 0px" });
    document.querySelectorAll("#work, #about, #blogs, #contact").forEach(section => observer.observe(section));
    window.addEventListener("scroll", updateAtTop, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateAtTop); if (copyTimer.current) clearTimeout(copyTimer.current); };
  }, []);

  useEffect(() => {
    if (copyState === "error") { emailFallback.current?.focus(); emailFallback.current?.select(); }
  }, [copyState]);

  function toggleTheme() {
    const next = !light;
    document.documentElement.dataset.theme = next ? "light" : "dark";
    setLight(next);
    try { localStorage.setItem("portfolio-theme", next ? "light" : "dark"); } catch { /* Theme still works without storage. */ }
  }

  async function copyEmail() {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyState("copied");
      copyTimer.current = setTimeout(() => setCopyState("idle"), 2500);
    } catch {
      setCopyState("error"); emailFallback.current?.focus(); emailFallback.current?.select();
    }
  }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="shell">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Shubh home" onClick={() => setActive("about")}>shubh<span>.</span></a>
        <nav aria-label="Main navigation">
          {["About", "Work", "Blogs", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? "active" : ""} onClick={() => setActive(item.toLowerCase())}>{item}</a>)}
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${light ? "dark" : "light"} theme`} title="Switch color theme">{light ? <Moon size={19} /> : <Sun size={20} />}</button>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-eyebrow">A WORK IN PROGRESS. JUST LIKE MY SIDE PROJECTS.</span>
            <h1>Hey, I’m Shubh <span className="wave" role="img" aria-label="waving hand">👋</span></h1>
            <p>I get curious, build something, and keep tweaking it until it feels right. Right now, I’m doing that at <a href="#experience">Habuild</a>—and with the side projects below.</p>
            <div className="hero-meta"><span className="location"><i />Nagpur, India</span><span className="hero-aside">Probably thinking about the next thing to build.</span></div>
            <div className="hero-actions"><a href="#work">See what I’ve been making <ArrowDown size={15} /></a><a href="#contact">Say hey <ArrowUpRight size={15} /></a><RockPaperScissors /></div>
          </div>
          <figure className={`hero-portrait ${heroMedia.isDemo ? "is-demo" : ""}`}>
            <div className="portrait-image">
              {heroMedia.type === "video" ? <video src={heroMedia.src} controls muted loop playsInline preload="metadata" aria-label={heroMedia.alt} /> : <Image src={heroMedia.src} alt={heroMedia.alt} width={600} height={650} priority unoptimized={heroMedia.src.endsWith(".gif")} />}
            </div>
            <figcaption><span>{heroMedia.isDemo ? "DEMO" : "OFF SCREEN"}</span><span className="portrait-scribble">a little more me.</span></figcaption>
          </figure>
        </section>

        <section id="about" className="about-section">
          <SectionHeading number="01" title="A little about me" note="BEHIND THE TABS" />
          <div className="about-grid">
            <div className="about-copy"><p className="about-lead">I like the part where an idea<br />finally starts working.</p><p>I work across the frontend and backend at Habuild. Some days that means getting an interface to feel right. Other days, it’s figuring out why an API has other plans.</p><p>I’m learning more about system design, experimenting with AI, and collecting plenty of “oh, that’s how it works” moments along the way.</p></div>
            <figure className="workspace"><Image src="/workspace.jpg" width={900} height={600} sizes="(max-width: 600px) 90vw, 320px" alt="A laptop on a sunlit desk, an illustrative workspace moodboard" /><figcaption>A LITTLE WORKSPACE INSPIRATION</figcaption></figure>
          </div>
          <div className="education-card"><span className="education-icon"><GraduationCap size={22} /></span><div><h3>B.Tech in Computer Science &amp; Engineering</h3><p>Indian Institute of Information Technology, Nagpur</p></div><span className="education-date">2022 — 2026</span></div>
        </section>

        <section id="work" className="work-section">
          <SectionHeading number="02" title="Things I’ve been making" note="A FEW SIDE QUESTS ↙" />
          <p className="section-intro">A few ideas that made it out of my notes app. Preview a little, then take a look around.</p>
          <div className="project-grid">{projects.map((project, index) => <ProjectPreview key={project.id} project={project} featured={index === 0} />)}</div>
        </section>

        <section id="experience" className="experience-section">
          <SectionHeading number="03" title="Learning on the job" note="THE CURRENT CHAPTER" />
          <div className="experience-row"><span className="habuild-mark" aria-hidden="true">h.</span><div><h3>Software Engineering Intern · Habuild</h3><p>Working across CRM, web portals, mobile, and backend APIs.<br />Building useful things, asking questions, and learning from the team.</p></div></div>
        </section>

        <section id="tools" className="skills-section">
          <SectionHeading number="04" title="Tools I reach for" note="WHATEVER FITS THE IDEA" />
          <div className="skills-grid">{skills.map(row => <div className="skill-group" key={row.label}><h3>{row.label}</h3><p>{row.note}</p><div className="skill-tools">{row.tools.map(tool => <span className="tech-badge" key={tool.name}><span className={`tech-mark ${tool.color}`} aria-hidden="true">{tool.mark}</span>{tool.name}</span>)}</div></div>)}</div>
        </section>

        <section id="blogs" className="blogs-section">
          <SectionHeading number="05" title="Good reads, saved for later" note="THE READING SHELF" />
          <p className="reading-intro">A few corners of the internet worth getting lost in.</p>
          <div className="reading-list">{reading.map(item => <a className="reading-link" href={item.url} key={item.name} target="_blank" rel="noopener noreferrer"><span className={`reading-monogram ${item.color}`}>{item.initials}</span><div className="reading-copy"><h3>{item.name}<span>{item.domain}</span></h3><p>{item.description}</p><span className="reading-category">{item.category}</span></div><ArrowUpRight size={20} /></a>)}</div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro"><span className="contact-eyebrow">NO PERFECT PITCH NEEDED</span><h2>Got a thought?<br /><em>Drop it here.</em></h2><p>A half-formed idea, something you’re stuck on, or just a hey. I’m all ears.</p>
            <div className="contact-actions"><a href={`mailto:${contactEmail}`} className="contact-email-link">Email me directly <ArrowUpRight size={15} /></a><button className="copy-button" type="button" onClick={copyEmail}>{copyState === "copied" ? "Copied!" : "Copy email"}{copyState === "copied" ? <Check size={14} /> : <Copy size={14} />}</button></div>
            {copyState === "error" && <div className="email-fallback"><label htmlFor="contact-email">Copy this email address:</label><input ref={emailFallback} id="contact-email" type="text" value={contactEmail} readOnly onFocus={event => event.currentTarget.select()} /></div>}
            <span className="copy-feedback" role="status">{copyState === "error" ? "Clipboard unavailable. Select the email address to copy it." : copyState === "copied" ? "Email copied to clipboard" : ""}</span>
          </div>
          <MessageBox />
        </section>
      </main>
      <footer className="footer"><p>© {new Date().getFullYear()} Shubh Samaiya <span>· Always a work in progress.</span></p><button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp size={17} /></button></footer>
    </div>
  </>;
}
