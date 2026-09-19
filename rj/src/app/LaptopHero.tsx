"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const ease = (t: number) => t * t * (3 - 2 * t);

// Design size of the laptop screen; everything scales from this.
const W = 1280;
const H = 800;

/**
 * Scroll stage: the camera looks down on a shut laptop, levels off as the lid
 * comes up, then dollies into the screen until it fills the viewport and the
 * real site carries on from there. Motion is written to CSS custom properties
 * on <html>; all the geometry lives in globals.css.
 */
export default function LaptopHero() {
  const stage = useRef<HTMLElement>(null);
  // Chrome flattens hit-testing inside a `transform-style: preserve-3d` subtree,
  // so links in the lid can never be clicked however correct the markup is. Once
  // the zoom lands, we drop out of 3D entirely: the screen becomes a plain
  // full-viewport element and the hero is a real, operable page. Until then it's
  // `inert` — not clickable, not tabbable, not announced.
  const [live, setLive] = useState(false);
  const liveRef = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let s0 = 1; // fitted-on-desk scale
    let s1 = 1; // screen-fills-viewport scale
    let lift = 1020; // how far up the shut laptop sits, in scene px

    // Phones get a much larger share of the viewport — 42% of 390px would render
    // the laptop at ~160px, which reads as nothing at all.
    const fit = () => {
      const narrow = innerWidth < 900;
      s0 = Math.min(
        (innerWidth * (narrow ? 0.78 : 0.42)) / W,
        (innerHeight * (narrow ? 0.3 : 0.42)) / H
      );
      lift = narrow ? 760 : 1020;
      // 1.02 covers the lid's translateZ(-12px), which perspective shrinks a few px
      s1 = Math.max(innerWidth / W, innerHeight / H) * 1.02;
    };

    const tick = () => {
      const el = stage.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = reduced ? 1 : clamp(-r.top / Math.max(1, r.height - innerHeight));
      const l = reduced ? 1 : ease(clamp(p / 0.45)); // lid-open progress
      const z = reduced ? 1 : ease(clamp((p - 0.45) / 0.5)); // zoom-into-screen

      root.style.setProperty("--lid", String(l));
      root.style.setProperty("--z", String(z));
      root.style.setProperty("--ang", `${-90 + l * 98 - z * 8}deg`);
      root.style.setProperty("--tilt", `${-(1 - l) * 40}deg`);
      root.style.setProperty("--ty", `${-(1 - l) * lift}px`);
      root.style.setProperty("--s", String(s0 + (s1 - s0) * z));
      root.style.setProperty("--bezel", String(1 - clamp((z - 0.75) / 0.25)));

      // hysteresis so scrubbing across the threshold can't flap the swap
      const nowLive = liveRef.current ? z > 0.97 : z >= 0.995;
      if (nowLive !== liveRef.current) {
        liveRef.current = nowLive;
        setLive(nowLive);
      }
    };

    const onResize = () => {
      fit();
      tick();
    };

    fit();
    tick();
    addEventListener("scroll", tick, { passive: true });
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("scroll", tick);
      removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="stage" id="top" ref={stage}>
      <div className={live ? "viewport flat" : "viewport"}>
        <div className="scene">
          <div className="lid">
            <div className="lid-mark">RJ</div>

            <div className="screen">
              <div className="off" />
              <div className="sheen" />

              <div className="screen-page" inert={!live}>
                <div className="screen-body">
                  <p className="eyebrow">
                    <span className="bar" />
                    <span className="label accent">Same-day dispatch &middot; Navi Mumbai</span>
                  </p>
                  <h2 className="display">
                    Every machine your business runs on. <em>Supplied and repaired.</em>
                  </h2>
                  <p className="lede">
                    Laptops, servers, firewalls and printers from direct OEM channels — staged,
                    burned in and delivered. Plus a chip-level repair lab for when something
                    dies at the worst possible moment.
                  </p>
                  <div className="screen-cta">
                    <a className="btn solid" href="#contact">
                      Request a BOQ quote
                    </a>
                    <a className="btn line" href="#lab">
                      Book a repair pickup
                    </a>
                  </div>
                </div>

                <div className="screen-foot">
                  <div>
                    <span>4 hrs</span>
                    <p className="label">Local response SLA</p>
                  </div>
                  <div>
                    <span>5,000+</span>
                    <p className="label">Units shipped / month</p>
                  </div>
                  <div>
                    <span>100%</span>
                    <p className="label">Genuine OEM stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="base">
            <div className="shadow" />
            <div className="keys" />
            <div className="pad" />
            <div className="lip" />
          </div>
        </div>

        <div className="stage-title">
          <span className="label">RJ CAREPLUS &middot; Sales &middot; Repairs &middot; Corporate Supply</span>
          <h1 className="display">
            Your IT never
            <br />
            <em>stops working.</em>
          </h1>
          <p>
            Enterprise hardware procurement and certified chip-level repair for corporates,
            hospitals and institutions across Mumbai and Pan-India.
          </p>
        </div>

        <p className="hint">
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
          <span className="label">Scroll to open</span>
        </p>
      </div>
    </section>
  );
}
