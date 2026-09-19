"use client";

import { useEffect } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Product Catalog", href: "#solutions" },
  { label: "Services & Repairs", href: "#services" },
  { label: "Contact", href: "#quote-builder" },
];

const brandPillars = [
  "Direct OEM Sourcing",
  "< 4-Hour SLA Support",
  "30-Day Corporate PO",
  "Certified In-House Repairs",
];

const capabilities = [
  {
    icon: "laptop_mac",
   eyebrow: "PILLAR // 01",
    title: "Laptops, Desktops & Workstations",
    text: "Bulk fleet provisioning of business notebooks, engineering CAD workstations, and high-performance desktop rigs tailored for zero day-one lag.",
    meta: "DELL · LENOVO · HP",
    cta: "BULK DISPATCH →",
  },
  {
    icon: "dns",
    eyebrow: "PILLAR // 02",
    title: "Mission-Critical Servers & Storage",
    text: "Rackmount, tower, and blade configurations with enterprise hot-swap NVMe/SAS RAID arrays, redundant power units, and automated failover.",
    meta: "HPE PROLIANT · DELL POWEREDGE",
    cta: "EXPANDABLE →",
  },
  {
    icon: "router",
    eyebrow: "PILLAR // 03",
    title: "Perimeter & Network Architecture",
    text: "Managed L2/L3 PoE switches, Fortinet next-generation firewalls, high-density mesh Wi-Fi 6 access points, and structured Cat6A backbone cabling.",
    meta: "CISCO · FORTINET · ARUBA",
    cta: "ZERO LEAK →",
  },
  {
    icon: "home_repair_service",
    eyebrow: "PILLAR // 04 · SPECIALTY",
    title: "Enterprise Repairs & Component Sourcing",
    text: "Certified chip-level diagnostics, BGA rework, logic board repairs, screen replacements, and rapid sourcing of rare legacy or high-spec components.",
    meta: "IN-LAB & ON-SITE REPAIRS",
    cta: "ESTIMATE →",
  },
  {
    icon: "print",
    eyebrow: "PILLAR // 05",
    title: "Printers, Consumables & Peripherals",
    text: "High-capacity laser multifunction printers, genuine OEM toners, barcode systems, commercial displays, docks, and ergonomic workstation accessories.",
    meta: "CANON · EPSON · HP",
    cta: "PRINT FLEETS →",
  },
  {
    icon: "handshake",
    eyebrow: "PILLAR // 06",
    title: "Annual Maintenance Contracts (AMC)",
    text: "Comprehensive and non-comprehensive SLA agreements ensuring preventive care, guaranteed standby loaners, and immediate certified onsite engineers.",
    meta: "24/7 SLA COVERAGE",
    cta: "AMC PLANS →",
  },
];

const advantageStats = [
  { value: "99.8%", label: "SLA Adherence" },
  { value: "4-Hour", label: "Local Response" },
  { value: "100%", label: "Genuine OEM Sourcing" },
];

const faqs = [
  {
    question: "Do you support 30-day PO terms for corporate entities?",
    answer:
      "Yes. Registered corporates with established credit credentials can procure IT hardware and AMCs through 30-day corporate Purchase Orders with standard GST documentation.",
  },
  {
    question: "What components do you service in your repair lab?",
    answer:
      "Our certified technicians handle chip-level motherboard logic repairs, micro-soldering, liquid spill cleanups, power IC swaps, display replacements, and data recovery for all leading OEM laptops and servers.",
  },
  {
    question: "Can you deliver outside Mumbai / Maharashtra?",
    answer:
      "Yes. While our headquarters and labs are based in Vashi, Navi Mumbai, we dispatch insured bulk hardware and provision corporate fleets across Pan-India with expedited transit.",
  },
  {
    question: "Are genuine OEM warranties maintained?",
    answer:
      "Every server, laptop, and enterprise switch sourced through RJ CAREPLUS carries original OEM warranty (Dell ProSupport, HPE Pointnext, Cisco Smart Net) with serial registration.",
  },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="RJ CAREPLUS home">
            <img
              src="/logo/rj-careplus-logo.png"
              alt="RJ CAREPLUS Logo"
            />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="primary-btn" href="#quote-builder" aria-label="Get corporate quote">
              <span>Get Corporate Quote</span>
            </a>
            <a className="phone-chip" href="tel:+917506434129" aria-label="Call RJ CAREPLUS">
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="hero section" id="top">
          <div className="max-width hero-inner">
            <div className="eyebrow-banner">
              <div className="live-pill">
                <span className="dot" />
                <span>CORPORATE SUPPLY &amp; REPAIR HUB • NAVI MUMBAI</span>
              </div>
              <div className="mini-rail">
                <span>
                  <span className="material-symbols-outlined">verified</span>
                  DIRECT OEM REGISTRY
                </span>
                <span className="highlight">
                  <span className="material-symbols-outlined">local_shipping</span>
                  SAME-DAY DISPATCH
                </span>
              </div>
            </div>

            <div className="hero-grid">
              <div className="hero-copy reveal">
                <div className="eyebrow-tag">
                  <span className="material-symbols-outlined">verified</span>
                  <span>YOUR ONE STOP NEEDS FOR ALL IT COMPONENTS</span>
                </div>

                <h1>
                  Next-Generation IT Infrastructure &amp; Corporate Supply.
                  <span>Built for Uptime.</span>
                </h1>

                <p>
                  <strong>RJ CAREPLUS</strong> equips enterprises, hospitals, institutions, and
                  high-growth businesses with tier-1 computing fleets, high-availability servers,
                  certified networking, and rapid-turnaround chip-level repair services.
                </p>

                <div className="hero-actions">
                  <a className="primary-btn large" href="#quote-builder" aria-label="Get corporate quote">
                    <span>Get Corporate Quote</span>
                  </a>
                  <a className="secondary-btn large" href="#solutions" aria-label="Explore hardware catalog">
                    <span className="material-symbols-outlined">inventory_2</span>
                    <span>Explore Catalog</span>
                  </a>
                </div>

                <div className="status-grid">
                  {brandPillars.map((item) => (
                    <div key={item} className="status-pill">
                      <span className="material-symbols-outlined">verified_user</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-visual reveal">
                <div className="visual-frame">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkilyIyuScTkU87rTui7B_6yt1SN1Nofe5yu2eAroVUMQf7VBvKYGpANo5QZROPyYxQWKKXwypMDDkO_hE5etCbiG-pjQsxor-Hryo4aGJltaTTDfdE4NtL3awM5Z0_dqmqQvj7YwvPPfD4_Vgqqv5DjUoAzBVpx_XLQ_Qca9zAcC6XLgc9XO-jS2PHEy6YeBUEdM0QW8qhQLqdyl5U_PZQ73ADBjRsrUc8svPrs9ON49dryOYwBB5"
                    alt="Corporate enterprise workspace with IT hardware"
                  />

                  <div className="visual-overlay">
                    <div>
                      <span className="label">OPERATIONS BASE // VASHI PLAZA</span>
                      <h3>Bespoke Staging &amp; Testing Facility</h3>
                      <p>Turnkey pre-configured systems ready for client rollouts</p>
                    </div>
                    <span className="tag">QC STAGED</span>
                  </div>
                </div>

                <div className="floating-card">
                  <div className="icon-wrap">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <div>
                    <p className="small-label">FLEET CAPACITY</p>
                    <p className="value">10 to 5,000+ Units/Mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="max-width logo-strip-inner">
            <div className="brand-inline">
              <span className="material-symbols-outlined">verified</span>
              <span>OFFICIAL OEM ALLIANCES &amp; DIRECT SOURCING</span>
            </div>
            <div className="brand-list">
              <span>DELL Technologies</span>
              <span className="slash">/</span>
              <span>HPE Enterprise</span>
              <span className="slash">/</span>
              <span>Lenovo ThinkSystem</span>
              <span className="slash">/</span>
              <span>Cisco Systems</span>
              <span className="slash">/</span>
              <span>Fortinet</span>
              <span className="slash">/</span>
              <span>Asus Pro</span>
              <span className="slash">/</span>
              <span>HP Commercial</span>
            </div>
          </div>
        </section>

        <section id="solutions" className="section solutions">
          <div className="max-width">
            <div className="section-heading reveal">
              <div>
                <span className="section-kicker">SOLUTIONS &amp; CAPABILITIES</span>
                <h2>Comprehensive Hardware, Sourcing &amp; Repairs</h2>
              </div>
              <a href="#quote-builder">GET A TAILORED BOM QUOTE</a>
            </div>

            <div className="capability-grid reveal">
              {capabilities.map((capability) => (
                <article key={capability.title} className="capability-card">
                  <div className="capability-top">
                    <div className="icon-wrap highlight">
                      <span className="material-symbols-outlined">{capability.icon}</span>
                    </div>
                    <span className="eyebrow">{capability.eyebrow}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                  <div className="card-footer">
                    <span>{capability.meta}</span>
                    <span className="action-link">{capability.cta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section advantage-section">
          <div className="max-width advantage-layout reveal">
            <div className="advantage-copy">
              <span className="section-kicker">THE RJ CAREPLUS ADVANTAGE</span>
              <h2>Why Corporate Leaders &amp; IT Directors Rely on Us.</h2>
              <p>
                We remove the friction of dealing with multiple fragmented vendors. RJ CAREPLUS
                combines raw wholesale procurement power with precision engineering and fast
                repair turnarounds.
              </p>

              <div className="advantage-list">
                <div className="mini-feature">
                  <div className="icon-wrap soft">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <h4>100% Genuine OEM Hardware</h4>
                    <p>
                      Direct authorized channels guaranteeing authentic warranties and valid serial
                      tracking with Dell, HP, Lenovo &amp; Cisco.
                    </p>
                  </div>
                </div>

                <div className="mini-feature">
                  <div className="icon-wrap soft">
                    <span className="material-symbols-outlined">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4>In-House Staging &amp; Testing Lab</h4>
                    <p>
                      Every workstation, server, and network switch is burned-in,
                      firmware-updated, and pre-configured before delivery.
                    </p>
                  </div>
                </div>

                <div className="mini-feature">
                  <div className="icon-wrap soft">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <h4>Direct Engineer Access (No IVR)</h4>
                    <p>
                      Instant escalation to certified hardware architects and service managers
                      without waiting on automated manufacturer queues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="advantage-visual">
              <div className="image-grid">
                <div className="photo-card">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKRb64QECTLK1eZvI2IOwA3a3silKGuLYmT6qLQ6qKhyDq0ROR01otB6n5SffyGCR8MUVnCXLhK2Um6Q25tI6JeLev2d3OPNEAJZTk2Fu2WJWexNrbIqDQU_Hed5j2neRMByn42m-CLjJmfiwfFjh_BV6uMOnhgxxBQxfCOUFqlAOX1qgtTSDzZn-VVjvyltcZAU6iowjxDRsIjT1SVM-AK7mBDLsEtkb0_Q2ADpVxsndlg3U94d5q"
                    alt="Server cluster in a data center"
                  />
                  <div className="photo-copy">
                    <span>ENTERPRISE COMPUTE</span>
                    <p>High-availability cluster deployments &amp; SAN storage expansions.</p>
                  </div>
                </div>

                <div className="photo-card">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcyt8eP5Efp4sWJCCiIE2OQkJnDbIQtbl4hks9qKpx4ekTk9oNPq9_OovJShSrzjIsSj1ClVuEIMbokoMjgkdfMMhbP_9rS9LSFCQ4CiXqdipVd0fHp-JeHjML6Rvdjtjzgd5xGY1N_PJPRM3MJJ-eSbVamvAiW1WHjU2Pgyc4NVdthJ29PfsqGiV9a_da7PrIZzsoLvaAEIMoPWxYmsp97r0XOIGhfulAvagdCMgL8xN_rMyl8CSG"
                    alt="Executive office workspace"
                  />
                  <div className="photo-copy">
                    <span>FLEET ROLLOUTS</span>
                    <p>Pre-configured corporate laptop &amp; monitor bulk supply.</p>
                  </div>
                </div>
              </div>

              <div className="stat-row">
                {advantageStats.map((stat) => (
                  <div key={stat.label} className="stat-box">
                    <span>{stat.value}</span>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section transparency-section">
          <div className="max-width transparency-grid reveal">
            <div className="transparency-copy">
              <span className="section-kicker">TRANSPARENCY &amp; PHYSICAL OPERATIONS</span>
              <h2>Direct Corporate Verification &amp; Walk-In Tech Center</h2>
              <p>
                We operate an established commercial lab and corporate supply office right in Vashi
                Plaza, Navi Mumbai. Meet our technical consultants, test hardware on-site, or drop off
                mission-critical units for express repairs.
              </p>

              <div className="operations-grid">
                <div className="ops-card">
                  <span>OPERATIONS OFFICE</span>
                  <p>C/110, C-Wing, Vashi Plaza, Sector - 17, Vashi, Navi Mumbai, MH - 400703</p>
                </div>
                <div className="ops-card">
                  <span>DIRECT TELECOM LINES</span>
                  <strong>+91 7506434129<br />+91 8169314307</strong>
                </div>
              </div>

              <div className="open-hours">
                <span className="pulse-dot" />
                <span>IN-PERSON CONSULTATIONS &amp; REPAIR DIAGNOSTICS: MON - SAT (10:00 - 19:30)</span>
              </div>
            </div>

            <div className="lab-card">
              <div className="lab-head">
                <img
                  src="/logo/rj-careplus-logo.png"
                  alt="RJ CAREPLUS"
                />
                <span className="authorized-badge">
                  <span className="material-symbols-outlined">verified</span>
                  AUTHORIZED
                </span>
              </div>

              <div className="lab-body">
                <span className="mini-kicker">CORPORATE PARTNER &amp; TECH LAB</span>
                <p>
                  Providing end-to-end hardware supply, chip-level diagnosis, and managed IT
                  services across Mumbai &amp; Pan-India.
                </p>
              </div>

              <div className="feature-badges">
                <div>
                  <span className="material-symbols-outlined">laptop_mac</span>
                  <span>Laptops &amp; Desktops</span>
                </div>
                <div>
                  <span className="material-symbols-outlined">desktop_windows</span>
                  <span>Monitors &amp; Displays</span>
                </div>
                <div>
                  <span className="material-symbols-outlined">print</span>
                  <span>Printers &amp; Toners</span>
                </div>
                <div>
                  <span className="material-symbols-outlined">memory</span>
                  <span>Chip-Level Diagnostics</span>
                </div>
              </div>

              <div className="lab-footer">
                <span>
                  <span className="pulse-dot" />
                  Vashi Plaza, Sector 17
                </span>
                <span>GST REGISTERED</span>
              </div>
            </div>
          </div>
        </section>

        <section id="quote-builder" className="section inquiry-section">
          <div className="max-width inquiry-wrap reveal">
            <div className="inquiry-copy">
              <div className="eyebrow-tag dark-tag">
                <span className="material-symbols-outlined">request_quote</span>
                <span>FAST 2-HOUR QUOTE TURNAROUND</span>
              </div>
              <h2>Build Your Corporate IT Inquiry</h2>
              <p>
                Need a competitive corporate quotation, immediate chip-level repair estimate, or
                comprehensive AMC proposal? Submit your specifications directly to our engineering desk.
              </p>

              <div className="contact-points">
                <div className="contact-item">
                  <span className="material-symbols-outlined">phone</span>
                  <div>
                    <small>DIRECT HELPLINE</small>
                    <a href="tel:+917506434129">+91 7506434129 / +91 8169314307</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="material-symbols-outlined">mail</span>
                  <div>
                    <small>CORPORATE EMAIL</small>
                    <a href="mailto:info.rjcareplus@gmail.com">info.rjcareplus@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="material-symbols-outlined">domain</span>
                  <div>
                    <small>OFFICIAL WEBSITE</small>
                    <span>www.rjcareplus.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="inquiry-form-wrap">
              <h3>Request Bill of Quantities (BOQ) or Repair Estimate</h3>
              <form className="inquiry-form">
                <div className="form-row">
                  <label>
                    Company / Organization Name *
                    <input type="text" placeholder="e.g. Apex Hospital / Tech Corp" />
                  </label>
                  <label>
                    Your Name &amp; Designation *
                    <input type="text" placeholder="e.g. Rajesh Sharma (IT Lead)" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Corporate Email Address *
                    <input type="email" placeholder="name@organization.com" />
                  </label>
                  <label>
                    Contact Telephone *
                    <input type="tel" placeholder="+91 98765 43210" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Primary Requirement
                    <select defaultValue="Workstations & Laptop Fleets">
                      <option>Workstations &amp; Laptop Fleets</option>
                      <option>Enterprise Rack Servers &amp; SAN Storage</option>
                      <option>Perimeter Firewalls &amp; Network Switches</option>
                      <option>Chip-Level Component Repair / Diagnostics</option>
                      <option>Printers, Toners &amp; Consumables Supply</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                    </select>
                  </label>
                  <label>
                    Estimated Unit Volume
                    <select defaultValue="1 - 10 Units (Express)">
                      <option>1 - 10 Units (Express)</option>
                      <option>10 - 50 Units (Fleet Provision)</option>
                      <option>50 - 250 Units (Corporate Rollout)</option>
                      <option>250+ Units (Enterprise Bulk)</option>
                      <option>Single Server / Storage Unit</option>
                    </select>
                  </label>
                </div>

                <label>
                  Specification Notes / Part Numbers / Symptoms
                  <textarea rows={4} placeholder="Paste desired specs (RAM, SSD, processor family, OS image) or describe hardware repair faults..." />
                </label>

                <button type="submit" className="submit-btn">
                  <span>Submit Corporate Inquiry to RJ CAREPLUS</span>
                  <span className="material-symbols-outlined">send</span>
                </button>

                <div className="form-footer">
                  <span>100% CONFIDENTIAL TECHNICAL AUDIT</span>
                  <span>GST INVOICE &amp; PO READY</span>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="max-width faq-wrap reveal">
            <div className="faq-header">
              <span className="section-kicker">COMMON QUERIES</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-grid">
              {faqs.map((faq) => (
                <article key={faq.question} className="faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="max-width footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/logo/rj-careplus-logo.png"
                alt="RJ CAREPLUS Logo"
              />
            </div>
            <p>
              Your one stop needs for all IT components. High-performance enterprise compute,
              corporate fleet supply, certified chip-level repairs, and seamless annual
              maintenance contracts.
            </p>
            <div className="footer-live">
              <span className="pulse-dot" />
              <span>TRUSTED PARTNER FOR YOUR IT NEEDS</span>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-title">SOLUTIONS</span>
            <ul>
              <li><a href="#solutions">Laptops &amp; Desktops</a></li>
              <li><a href="#solutions">Servers &amp; Storage</a></li>
              <li><a href="#solutions">Perimeter Firewalls</a></li>
              <li><a href="#solutions">Printers &amp; Toners</a></li>
              <li><a href="#solutions">Chip-Level Repairs</a></li>
              <li><a href="#solutions">Enterprise AMCs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-title">AUTHORIZED BRANDS</span>
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
            <span className="footer-title">HEADQUARTERS &amp; LAB</span>
            <div className="footer-contact">
              <p><strong>Address:</strong> C/110, C-Wing, Vashi Plaza, Sector - 17, Vashi, Navi Mumbai, Maharashtra - 400703</p>
              <p><strong>Phones:</strong> +91 7506434129 / +91 8169314307</p>
              <p><strong>Emails:</strong> <a href="mailto:info.rjcareplus@gmail.com">info.rjcareplus@gmail.com</a> / <a href="mailto:rj.careplus@rediffmail.com">rj.careplus@rediffmail.com</a></p>
              <p><strong>Web:</strong> www.rjcareplus.com</p>
            </div>
          </div>
        </div>

        <div className="max-width bottom-bar">
          <span>© 2026 RJ CAREPLUS. All rights reserved. Sales, Repairs &amp; Corporate Supply.</span>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Procurement</a>
            <span>·</span>
            <a href="#">Repair Warranty Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
