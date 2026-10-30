"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import type { Project } from "@/lib/portfolio";

export function ProjectPreview({ project, featured }: { project: Project; featured?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const player = video.current;
    const stop = () => {
      if (reducedMotion.matches) player?.pause();
    };
    const onVisibilityChange = () => { if (document.hidden) player?.pause(); };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => !entry.isIntersecting)) player?.pause();
    });
    if (player) observer.observe(player);
    reducedMotion.addEventListener("change", stop);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", stop);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  function playPreview(automatic = false) {
    if (failed || (automatic && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches))) return;
    // Browsers can decline autoplay; the explicit preview control remains available.
    void video.current?.play().catch(() => setPlaying(false));
  }

  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-media" onMouseLeave={() => video.current?.pause()}>
        <a className="project-video-link" href={project.href} target="_blank" rel="noopener noreferrer"
          aria-label={`${project.destination}: ${project.title} (opens in a new tab)`}
          onMouseEnter={() => playPreview(true)} onFocus={() => playPreview(true)} onBlur={() => video.current?.pause()}>
          <video ref={video} className="project-video" poster={project.poster} muted loop playsInline preload="none"
            aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)}>
            <source src={project.video} type="video/mp4" />
          </video>
          <span className="demo-label">DEMO PREVIEW</span>
          <span className="project-visit">{project.destination} <ArrowUpRight size={15} /></span>
        </a>
        {!failed && <button className="preview-control" type="button" aria-label={`${playing ? "Pause" : "Play"} ${project.title} preview`}
          aria-pressed={playing} onClick={() => playing ? video.current?.pause() : playPreview()}>
          {playing ? <Pause size={13} /> : <Play size={13} />} {playing ? "Pause" : "Preview"}
        </button>}
      </div>
      <a className="project-info" href={project.href} target="_blank" rel="noopener noreferrer">
        <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
        <span className="project-arrow"><ArrowUpRight size={19} /></span>
      </a>
      <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}
