"use client";

import LaptopHero from "./LaptopHero";
import { Headline, Item, Reveal, Rise, Stagger } from "./motion";

const navItems = [
  { label: "Catalog", href: "#catalog" },
  { label: "Studio", href: "#studio" },
  { label: "Repair lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

const oems = [
  "Dell Technologies",
  "HPE Enterprise",
  "Lenovo ThinkSystem",
  "Cisco Systems",
  "Fortinet",
  "Aruba Networks",
  "Asus Pro",
  "HP Commercial",
  "Canon",
  "Epson",
];

const capabilities = [
  {
    icon: "laptop_mac",
    title: "Laptops & Workstations",
    text: "Bulk fleet provisioning of business notebooks, CAD workstations and high-performance desktops — imaged and tuned for zero day-one lag.",
  },
  {
    icon: "dns",
    title: "Servers & Storage",
    text: "Rackmount, tower and blade builds with hot-swap NVMe/SAS arrays, redundant power and automated failover.",
  },
  {
    icon: "router",
    title: "Network & Perimeter",
    text: "Managed L2/L3 PoE switching, next-generation firewalls, Wi-Fi 6 density and structured Cat6A backbone.",
  },
  {
    icon: "home_repair_service",
    title: "Repairs & Sourcing",
    text: "Chip-level diagnostics, BGA rework, logic board repair, screen replacement and sourcing of rare legacy parts.",
  },
  {
    icon: "print",
    title: "Print & Peripherals",
    text: "Laser multifunction fleets, genuine OEM toners, barcode systems, commercial displays and docking.",
  },
  {
    icon: "handshake",
    title: "Maintenance Contracts",
    text: "Comprehensive and non-comprehensive SLAs with preventive care, standby loaners and on-site engineers.",
  },
];

const advantages = [
  {
    icon: "shield",
    title: "Genuine, traceable, warranted",
    text: "Direct authorised channels only — real warranties, serials that track back to Dell, HP, Lenovo and Cisco.",
  },
  {
    icon: "precision_manufacturing",
    title: "Staged before it ships",
    text: "Every workstation, server and switch is burned in, firmware-updated and pre-configured in our own lab.",
  },
  {
    icon: "support_agent",
    title: "An engineer, not an IVR",
    text: "Escalate straight to certified hardware architects instead of queueing behind an automated menu.",
  },
];

const stats = [
  { value: "99.8%", label: "SLA adherence across active contracts" },
  { value: "4 hrs", label: "Median on-site response, Navi Mumbai" },
  { value: "5,000+", label: "Units staged and dispatched monthly" },
  { value: "8 yrs", label: "Serving corporates, hospitals, institutions" },
];

const faqs = [
  {
    question: "Do you support 30-day PO terms for corporates?",
    answer:
      "Yes. Registered corporates with established credit credentials can procure hardware and AMCs on 30-day purchase orders with standard GST documentation.",
  },
  {
    question: "What do you service in the repair lab?",
    answer:
      "Chip-level motherboard logic repair, micro-soldering, liquid spill cleanup, power IC swaps, display replacement and data recovery across all leading OEM laptops and servers.",
  },
  {
    question: "Can you deliver outside Mumbai and Maharashtra?",
    answer:
      "Yes. Our headquarters and lab are in Vashi, Navi Mumbai, but we dispatch insured bulk hardware and provision corporate fleets Pan-India with expedited transit.",
  },
  {
    question: "Are OEM warranties maintained?",
    answer:
      "Every server, laptop and switch sourced through us carries its original OEM warranty — Dell ProSupport, HPE Pointnext, Cisco Smart Net — with serial registration.",
  },
];

export default function Home() {
  return (
    <>
      <LaptopHero />

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" aria-label="RJ CAREPLUS home">
            <img src="/logo/rj-careplus-logo.png" alt="RJ CAREPLUS" />
          </a>
          <nav className="main-nav" aria-label="Main">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="topbar-actions">
            <a className="icon-btn" href="tel:+917506434129" aria-label="Call RJ CAREPLUS">
              <span className="material-symbols-outlined">call</span>
            </a>
            <a className="btn solid sm" href="#contact">
              Get a quote
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="marquee" aria-label="Authorised OEM partners">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1}>
              {oems.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ))}
        </div>

        {/* ---------- 01 · capabilities ---------- */}
        <section id="catalog" className="section">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Rise>
                  <p className="eyebrow">
                    <span className="num">01</span>
                    <span className="bar" />
                    <span className="label">What we supply</span>
                  </p>
                </Rise>
                <Headline
                  className="display"
                  text="One vendor for every box you plug in."
                  italicFrom={5}
                />
              </div>
              <Rise delay={0.15}>
                <p className="lede">
                  Procurement, staging, networking and repair under one roof — so nobody on
                  your team is chasing six suppliers to finish one rollout.
                </p>
              </Rise>
            </div>

            <Stagger className="cap-list" gap={0.07}>
              {capabilities.map((cap, i) => (
                <Item key={cap.title} className="cap">
                  <span className="cap-n">{String(i + 1).padStart(2, "0")}</span>
                  <div className="cap-title">
                    <span className="material-symbols-outlined">{cap.icon}</span>
                    <h3>{cap.title}</h3>
                  </div>
                  <p>{cap.text}</p>
                  <span className="go" aria-hidden="true">
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </span>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ---------- 02 · the studio ---------- */}
        <section id="studio" className="section alt">
          <div className="wrap split">
            <div>
              <Rise>
                <p className="eyebrow">
                  <span className="num">02</span>
                  <span className="bar" />
                  <span className="label">Why we get kept on</span>
                </p>
              </Rise>
              <Headline
                className="display"
                text="Bought once. Trusted after."
                italicFrom={2}
              />
              <Rise delay={0.15}>
                <p className="lede" style={{ marginTop: 26 }}>
                  We pair wholesale procurement power with a real engineering bench, which is
                  why IT directors stop shopping around after the first rollout.
                </p>
              </Rise>

              <Stagger className="mini-list" gap={0.08}>
                {advantages.map((item) => (
                  <Item key={item.title} className="mini">
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </div>

            <Reveal
              className="figure"
              src="/editorial_photograph_of_a_contemporary_light_filled_company_office_interior.png"
              alt="Open-plan corporate office full of deployed workstations"
            >
              <figcaption>
                <span className="label">Fleet rollouts</span>
                <p>Pre-configured laptops and monitors, floor-ready.</p>
              </figcaption>
            </Reveal>
          </div>
        </section>

        {/* ---------- stat band ---------- */}
        <section className="section tight">
          <div className="wrap">
            <Stagger className="stats" gap={0.09}>
              {stats.map((stat) => (
                <Item key={stat.value} className="stat">
                  <b>{stat.value}</b>
                  <p>{stat.label}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ---------- 03 · the lab ---------- */}
        <section id="lab" className="section">
          <div className="wrap split flip">
            <Reveal
              className="figure wide"
              src="/overhead_and_isometric_studio_photography_of_a_perfectly_assembled_executive.png"
              alt="Assembled executive workstation with laptop, monitor and peripherals"
            >
              <figcaption>
                <span className="label">Staged &amp; tested</span>
                <p>Every desk kit burned in and imaged before it ships.</p>
              </figcaption>
            </Reveal>

            <div>
              <Rise>
                <p className="eyebrow">
                  <span className="num">03</span>
                  <span className="bar" />
                  <span className="label">Transparency &amp; operations</span>
                </p>
              </Rise>
              <Headline className="display" text="A real lab you can walk into." italicFrom={4} />
              <Rise delay={0.15}>
                <p className="lede" style={{ marginTop: 26 }}>
                  Our commercial lab and supply office sit in Vashi Plaza, Navi Mumbai. Meet the
                  consultants, test hardware on site, or drop off mission-critical units for
                  express repair.
                </p>
              </Rise>

              <Rise delay={0.2}>
                <div className="ops-cards">
                  <div className="ops-card">
                    <span className="label">Operations office</span>
                    <p>C/110, C-Wing, Vashi Plaza, Sector 17, Vashi, Navi Mumbai, MH 400703</p>
                  </div>
                  <div className="ops-card">
                    <span className="label">Direct lines</span>
                    <strong>
                      +91 75064 34129
                      <br />
                      +91 81693 14307
                    </strong>
                  </div>
                </div>
              </Rise>

              <Rise delay={0.25}>
                <p className="hours">
                  <span className="dot" />
                  <span className="label">Walk-ins &amp; diagnostics — Mon to Sat, 10:00–19:30</span>
                </p>
              </Rise>
            </div>
          </div>
        </section>

        {/* ---------- 04 · contact ---------- */}
        <section id="contact" className="section alt">
          <div className="wrap inq-layout">
            <div>
              <Rise>
                <p className="eyebrow">
                  <span className="num">04</span>
                  <span className="bar" />
                  <span className="label">Two-hour quote turnaround</span>
                </p>
              </Rise>
              <Headline className="display" text="Tell us what you need to run." italicFrom={4} />
              <Rise delay={0.15}>
                <p className="lede" style={{ marginTop: 26 }}>
                  A competitive quotation, a chip-level repair estimate or an AMC proposal —
                  straight to the engineering desk, not a sales queue.
                </p>
              </Rise>

              <Stagger className="contact-list" gap={0.07}>
                <Item className="contact-item">
                  <span className="material-symbols-outlined">phone</span>
                  <div>
                    <span className="label">Direct helpline</span>
                    <a href="tel:+917506434129">+91 75064 34129 / +91 81693 14307</a>
                  </div>
                </Item>
                <Item className="contact-item">
                  <span className="material-symbols-outlined">mail</span>
                  <div>
                    <span className="label">Corporate email</span>
                    <a href="mailto:info.rjcareplus@gmail.com">info.rjcareplus@gmail.com</a>
                  </div>
                </Item>
                <Item className="contact-item">
                  <span className="material-symbols-outlined">domain</span>
                  <div>
                    <span className="label">Official website</span>
                    <span>www.rjcareplus.com</span>
                  </div>
                </Item>
              </Stagger>
            </div>

            <Rise delay={0.1}>
              <div className="form-card">
                <h3>Request a BOQ or repair estimate</h3>
                <form
                  className="inquiry-form"
                  action="mailto:info.rjcareplus@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <div className="form-row">
                    <label>
                      <span className="label">Company / organization *</span>
                      <input name="company" type="text" required placeholder="Apex Hospital" />
                    </label>
                    <label>
                      <span className="label">Name &amp; designation *</span>
                      <input name="contact" type="text" required placeholder="R. Sharma, IT Lead" />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      <span className="label">Corporate email *</span>
                      <input name="email" type="email" required placeholder="name@organization.com" />
                    </label>
                    <label>
                      <span className="label">Telephone *</span>
                      <input name="phone" type="tel" required placeholder="+91 98765 43210" />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      <span className="label">Primary requirement</span>
                      <select name="requirement" defaultValue="Workstations & laptop fleets">
                        <option>Workstations &amp; laptop fleets</option>
                        <option>Rack servers &amp; SAN storage</option>
                        <option>Firewalls &amp; network switches</option>
                        <option>Chip-level repair / diagnostics</option>
                        <option>Printers, toners &amp; consumables</option>
                        <option>Annual maintenance contract</option>
                      </select>
                    </label>
                    <label>
                      <span className="label">Estimated volume</span>
                      <select name="volume" defaultValue="1–10 units (express)">
                        <option>1–10 units (express)</option>
                        <option>10–50 units (fleet)</option>
                        <option>50–250 units (rollout)</option>
                        <option>250+ units (enterprise bulk)</option>
                        <option>Single server / storage unit</option>
                      </select>
                    </label>
                  </div>

                  <label>
                    <span className="label">Specs, part numbers or fault symptoms</span>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Paste desired specs (RAM, SSD, processor family, OS image) or describe the hardware fault…"
                    />
                  </label>

                  <button type="submit" className="btn solid">
                    Submit inquiry
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </button>

                  <div className="form-foot">
                    <span className="label">Confidential technical audit</span>
                    <span className="label">GST invoice &amp; PO ready</span>
                  </div>
                </form>
              </div>
            </Rise>
          </div>
        </section>

        {/* ---------- 05 · faq ---------- */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Rise>
                  <p className="eyebrow">
                    <span className="num">05</span>
                    <span className="bar" />
                    <span className="label">Common queries</span>
                  </p>
                </Rise>
                <Headline className="display" text="Questions, answered plainly." italicFrom={1} />
              </div>
              <Rise delay={0.15}>
                <p className="lede">
                  Anything not covered here, ask the engineering desk directly — you will get a
                  human, not a ticket number.
                </p>
              </Rise>
            </div>

            <Stagger className="faq-list" gap={0.07}>
              {faqs.map((faq) => (
                <Item key={faq.question}>
                  <details className="faq">
                    <summary>
                      {faq.question}
                      <span className="material-symbols-outlined">add</span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ---------- closing ---------- */}
        <section className="closing">
          <div className="wrap">
            <Rise>
              <span className="label">Let&rsquo;s spec it together</span>
            </Rise>
            <Headline className="display" text="Your IT never stops working." italicFrom={2} />
            <Rise delay={0.15}>
              <p>
                Send a parts list, a floor count or a dead motherboard. We will come back with a
                costed answer the same working day.
              </p>
            </Rise>
            <Rise delay={0.25}>
              <div className="closing-cta">
                <a className="btn solid" href="#contact">
                  Request a quote
                </a>
                <a className="btn line" href="tel:+917506434129">
                  <span className="material-symbols-outlined">call</span>
                  +91 75064 34129
                </a>
              </div>
            </Rise>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <img src="/logo/rj-careplus-logo.png" alt="RJ CAREPLUS" />
            <p>
              Your one stop for every IT component. Enterprise compute, corporate fleet supply,
              certified chip-level repair and annual maintenance contracts.
            </p>
            <span className="footer-live">
              <span className="dot" />
              <span className="label">Trusted partner for your IT needs</span>
            </span>
          </div>

          <div className="footer-col">
            <h4 className="label">Solutions</h4>
            <ul>
              <li><a href="#catalog">Laptops &amp; desktops</a></li>
              <li><a href="#catalog">Servers &amp; storage</a></li>
              <li><a href="#catalog">Perimeter firewalls</a></li>
              <li><a href="#catalog">Printers &amp; toners</a></li>
              <li><a href="#catalog">Chip-level repairs</a></li>
              <li><a href="#catalog">Enterprise AMCs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="label">Authorized brands</h4>
            <ul>
              <li>Dell Technologies</li>
              <li>HPE Enterprise</li>
              <li>Lenovo ThinkSystem</li>
              <li>Cisco Systems</li>
              <li>Fortinet UTM</li>
              <li>Canon &amp; HP Print</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="label">Headquarters &amp; lab</h4>
            <address>
              <span>
                <b>Address</b> — C/110, C-Wing, Vashi Plaza, Sector 17, Vashi, Navi Mumbai,
                Maharashtra 400703
              </span>
              <span>
                <b>Phone</b> — +91 75064 34129 / +91 81693 14307
              </span>
              <span>
                <b>Email</b> — <a href="mailto:info.rjcareplus@gmail.com">info.rjcareplus@gmail.com</a>
              </span>
              <span>
                <b>Web</b> — www.rjcareplus.com
              </span>
            </address>
          </div>
        </div>

        <div className="wrap bottom-bar">
          <span className="label">© 2026 RJ CAREPLUS — Sales, repairs &amp; corporate supply</span>
          <nav>
            <a className="label" href="#contact">Privacy</a>
            <a className="label" href="#contact">Procurement terms</a>
            <a className="label" href="#contact">Repair warranty</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
