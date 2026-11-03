import { useMemo, useState } from 'react';
import {
  ArrowIcon,
  CheckIcon,
  LocationIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  ServiceIcon,
  SocialIcon,
} from './Icons';
import { assetPath, processSteps, projects, services, siteConfig } from './siteData';

const navItems = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

function Logo() {
  return (
    <a className="brand" href="#home" aria-label={`${siteConfig.businessName} home`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M7 23.5 24 8l17 15.5" />
          <path d="M12 21v19h24V21" />
          <path d="M19 40V27h10v13" />
          <path d="M5 40h38" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Tony&apos;s Talent</strong>
        <small>Home Improvement</small>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="button button-small nav-cta" href="#contact" onClick={closeMenu}>
            Request a quote
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Home improvement done with care</p>
          <h1>Craftsmanship that makes your house feel more like <em>home.</em></h1>
          <p className="hero-intro">
            Remodeling, repairs, carpentry, flooring, painting, and practical improvements—completed with
            clear communication and attention to detail.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Start your project <ArrowIcon />
            </a>
            <a className="text-link" href="#projects">
              Explore our work <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-points" aria-label="Business highlights">
            <span><CheckIcon /> Residential improvements</span>
            <span><CheckIcon /> Detail-focused work</span>
            <span><CheckIcon /> Clear project planning</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-image-wrap">
            <img src={assetPath('images/hero-house.svg')} alt="Stylized illustration of a renovated home interior" />
            <div className="hero-badge">
              <span className="badge-icon">TT</span>
              <span><strong>Built with skill.</strong><small>Finished with pride.</small></span>
            </div>
          </div>
          <div className="material-swatch swatch-one" />
          <div className="material-swatch swatch-two" />
        </div>
      </div>
      <a className="scroll-cue" href="#services" aria-label="Scroll to services">
        <span>Scroll to explore</span><i />
      </a>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="What we do"
            title="One trusted team for the work your home needs."
            text="From focused repairs to full room updates, every project receives thoughtful preparation and a clean, professional finish."
          />
          <a className="text-link desktop-link" href="#contact">Discuss your project <ArrowIcon /></a>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <span className="service-icon"><ServiceIcon name={service.icon} /></span>
                <span className="service-number">0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" aria-label={`Ask about ${service.title}`}>
                Learn more <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-image-main">
            <img src={assetPath('images/about-craft.svg')} alt="Craftsperson planning a home improvement project" />
          </div>
          <div className="about-image-small">
            <img src={assetPath('images/about-detail.svg')} alt="Close-up illustration of careful finish work" />
          </div>
          <div className="about-stamp" aria-label="Quality, honesty, craftsmanship">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="circlePath" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
              </defs>
              <text><textPath href="#circlePath">QUALITY • HONESTY • CRAFTSMANSHIP • </textPath></text>
              <path className="stamp-house" d="M42 60 60 44l18 16v20H42V60Zm12 20V65h12v15" />
            </svg>
          </div>
        </div>

        <div className="about-copy">
          <SectionHeading
            eyebrow="About Tony's Talent"
            title="Good work starts with listening. Great work ends in the details."
            text="Tony's Talent Home Improvement is built around a simple promise: understand what the customer needs, create a practical plan, and complete the work with care."
          />
          <p>
            Whether the project is a repair, a room refresh, or a larger renovation, we treat your property
            with respect and keep you informed from the first conversation through the final walkthrough.
          </p>
          <div className="values-list">
            <div><span>01</span><p><strong>Thoughtful solutions</strong>Recommendations shaped around your space, priorities, and budget.</p></div>
            <div><span>02</span><p><strong>Reliable communication</strong>Clear expectations, useful updates, and straightforward answers.</p></div>
            <div><span>03</span><p><strong>Respectful workmanship</strong>Careful preparation, quality finishes, and a tidy work area.</p></div>
          </div>
          <a className="button button-outline" href="#contact">Meet your project partner <ArrowIcon /></a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects made to look better, work better, and last."
          />
          <div className="project-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <article className={`project-card ${index === 0 && activeCategory === 'All' ? 'project-featured' : ''}`} key={project.title}>
              <img src={project.image} alt={`${project.title} placeholder`} />
              <div className="project-overlay">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="gallery-note">
          The gallery currently uses editable SVG placeholders. Replace the files in <code>public/images</code> with your project photos.
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward path from idea to finished project."
          text="A simple process keeps decisions organized and helps the work move forward with fewer surprises."
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.number}>
              <div className="process-number">{step.number}</div>
              {index < processSteps.length - 1 && <span className="process-line" aria-hidden="true" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="container quote-band-inner">
        <p>Have a room to update or a repair that keeps getting postponed?</p>
        <a className="button button-light" href="#contact">Let&apos;s talk about it <ArrowIcon /></a>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const projectType = data.get('projectType');
    const message = data.get('message');
    const subject = encodeURIComponent(`Website project request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject type: ${projectType}\n\nProject details:\n${message}`,
    );

    setStatus('Your email application should open with the project details filled in.');
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Let's build something better"
            title="Tell us what you would like to improve."
            text="Share a few details about the project. This starter form opens the visitor's email application so no server or database is required."
            light
          />

          <div className="contact-details">
            <a href={`tel:${siteConfig.phoneLink}`}>
              <span><PhoneIcon /></span>
              <p><small>Call or text</small><strong>{siteConfig.phoneDisplay}</strong></p>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <span><MailIcon /></span>
              <p><small>Email</small><strong>{siteConfig.email}</strong></p>
            </a>
            <div>
              <span><LocationIcon /></span>
              <p><small>Service area</small><strong>{siteConfig.serviceArea}</strong></p>
            </div>
          </div>

          <div className="social-row">
            <span>Follow our work</span>
            {Object.entries(siteConfig.socialLinks).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <p>Project inquiry</p>
            <span>Fields marked * are required.</span>
          </div>
          <div className="form-grid">
            <label>
              <span>Name *</span>
              <input name="name" type="text" autoComplete="name" placeholder="Your full name" required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Best number to reach you" />
            </label>
            <label className="form-full">
              <span>Email *</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label className="form-full">
              <span>What type of work do you need?</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service.title}>{service.title}</option>)}
                <option>Other / Multiple services</option>
              </select>
            </label>
            <label className="form-full">
              <span>Project details *</span>
              <textarea name="message" rows="5" placeholder="Tell us about the space, the work needed, and your ideal timeline." required />
            </label>
          </div>
          <button className="button form-submit" type="submit">Send project request <ArrowIcon /></button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Logo />
        <p>{siteConfig.tagline}<br />Serving {siteConfig.serviceArea}.</p>
        <div className="footer-links">
          {navItems.slice(1).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
        <p>Website starter built in React.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <QuoteBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
