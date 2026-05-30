import React from 'react';

// Change 1: Header component is completely restructured.
const MinimalHeader = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'HOME', href: '#' },
    { id: 'about', label: 'ABOUT', href: '#about-section' },
    { id: 'experience', label: 'EXPERIENCE', href: '#experience-section' },
    { id: 'publications', label: 'PUBLICATIONS', href: '#publications-section' },
    { id: 'works', label: 'PROJECTS', href: '#projects-section' },
    { id: 'skills', label: 'SKILLS', href: '#skills-section' },
    { id: 'contact', label: 'CONTACT', href: '#contact-section' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center ml-0 sm:ml-[-48px] gap-2"> {/* more left alignment for HUGO VICARIO */}

          <span className="font-semibold text-sm sm:text-base tracking-widest" style={{ fontFamily: 'DM Sans, sans-serif' }}>PRASHAM TITIYA</span>
        </div>

        {/* Center Navigation - Hidden on mobile, visible on lg */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`text-medium font-semibold transition-colors duration-300 ${activeSection === item.id ? 'text-black underline' : 'text-black/70 hover:text-black'}`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Button - Hidden on very small screens if needed, or kept */}
        <div className="w-auto hidden sm:block">
          <a href="https://drive.google.com/file/d/1rhKbdp4ol0wBQKhOhRY1aqbM4uT7x-G0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-5 py-2 sm:px-7 sm:py-3 bg-black text-white rounded-md text-sm sm:text-base font-bold tracking-widest hover:bg-white hover:text-black transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

// Change 2: Hero Section uses a flex layout for better alignment.
const BlobLayer = () => {
  const count = 10;
  const refs = React.useRef([]);
  const targets = React.useRef(Array.from({ length: count }).map(() => ({ x: 0, y: 0 })));
  const coords = React.useRef(Array.from({ length: count }).map(() => ({ x: 0, y: 0 })));

  React.useEffect(() => {
    const vw = () => (typeof window !== 'undefined' ? window.innerWidth : 1200);
    const vh = () => (typeof window !== 'undefined' ? window.innerHeight : 800);

    const randomPos = (padding = 80) => ({
      x: padding + Math.random() * (vw() - padding * 2),
      y: padding + Math.random() * (vh() - padding * 2),
    });

    for (let i = 0; i < count; i++) {
      targets.current[i] = randomPos(100 - i * 4);
      coords.current[i] = { ...targets.current[i] };
    }

    const intervals = [];
    for (let i = 0; i < count; i++) {
      const cadence = 1400 + i * 150 + Math.floor(Math.random() * 1000);
      intervals[i] = setInterval(() => {
        targets.current[i] = randomPos(40 + i * 4);
      }, cadence);
    }

    let rafId = 0;
    const loop = () => {
      for (let i = 0; i < count; i++) {
        const t = targets.current[i];
        const c = coords.current[i];
        const speed = 0.04 + (i / count) * 0.12 + Math.random() * 0.02;
        c.x += (t.x - c.x) * speed;
        c.y += (t.y - c.y) * speed;
        const el = refs.current[i];
        if (el) {
          el.style.transform = `translate3d(${c.x - el.offsetWidth / 2}px, ${c.y - el.offsetHeight / 2}px, 0)`;
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      intervals.forEach((id) => clearInterval(id));
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.max(48, 120 - i * 6);
        const colors = [
          'linear-gradient(135deg,#6EE7B7,#3B82F6)',
          'linear-gradient(135deg,#A78BFA,#F472B6)',
          'linear-gradient(135deg,#FDE68A,#FB923C)',
          'linear-gradient(135deg,#60A5FA,#34D399)'
        ];
        const bg = colors[i % colors.length];
        return (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="blob-follow"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: bg,
              opacity: Math.max(0.12, 0.52 - i * 0.025),
              filter: `blur(${30 + i * 2}px)`,
              zIndex: i,
            }}
          />
        );
      })}
    </div>
  );
};

const HeroSection = () => {
  const rotatingRoles = ['Researcher', 'Developer', 'Engineer'];
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % rotatingRoles.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-center pt-20 sm:pt-0">

      {/* Interactive background blobs */}
      <BlobLayer />
      {/* Main Content Aligned to Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-8 relative z-10">
        {/* Text Content (reordered: name, role, MS CS, thesis, brief description) */}

        <div className="flex flex-col text-center items-center w-full">

          <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-extrabold text-black leading-none mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Prasham Titiya
          </h2>

          <h1 className="text-[30px] sm:text-[56px] lg:text-[45px] font-semibold text-black leading-none uppercase mb-3" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>
            <span key={rotatingRoles[roleIndex]} className="inline-block transition-all duration-300 ease-out">
              {rotatingRoles[roleIndex]}
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-black/90 font-semibold mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            MS CS @ Arizona State University
          </p>

          <p className="text-lg sm:text-xl lg:text-2xl text-black/90 font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Thesis: Retrieval and Reasoning of Heterogenous Data.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            {/* Top row: Resume and Contact Me */}
            <div className="flex items-center gap-3">
              <a href="https://drive.google.com/file/d/1rhKbdp4ol0wBQKhOhRY1aqbM4uT7x-G0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span>Resume</span>
              </a>

              <button onClick={() => {
                const target = document.getElementById('contact-section');
                if (!target) return;
                const header = document.querySelector('header');
                const headerHeight = header ? header.getBoundingClientRect().height : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
                window.scrollTo({ top, behavior: 'smooth' });
              }} className="flex items-center gap-3 bg-black text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1"/><polyline points="7 10 12 15 17 10"/></svg>
                <span>Contact Me</span>
              </button>
            </div>

            {/* Bottom row: icons that expand on hover */}
            <div className="flex items-center gap-3 mt-2">
              <a href="https://github.com/prasham1515" target="_blank" rel="noopener noreferrer" className="group flex items-center bg-black text-white rounded-md px-2 py-2 w-10 hover:w-36 overflow-hidden transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.028c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.072 1.835 2.813 1.305 3.495.997.108-.776.42-1.305.763-1.606-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.125-.303-.535-1.522.117-3.176 0 0 1.008-.323 3.301 1.23.96-.267 1.988-.399 3.011-.404 1.022.005 2.05.137 3.011.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.654.243 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.478 5.921.431.372.815 1.102.815 2.222v3.293c0 .32.219.694.825.576C20.565 21.797 24 17.299 24 12c0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/prasham-titiya" target="_blank" rel="noopener noreferrer" className="group flex items-center bg-black text-white rounded-md px-2 py-2 w-10 hover:w-36 overflow-hidden transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
              </a>

              <a href="https://scholar.google.com/citations?user=dSSM6noAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="group flex items-center bg-black text-white rounded-md px-2 py-2 w-10 hover:w-36 overflow-hidden transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.5L12 16 2 11.5 12 7l10 4.5z" />
                  <path d="M12 16v5" stroke="none" />
                  <path d="M7 12v3a5 5 0 0 0 5 4" stroke="none" />
                </svg>
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Google Scholar</span>
              </a>

              <a href="https://drive.google.com/file/d/1lPATfUSTxjjpWF9YmqKAGDrgNMVsmwuo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex items-center bg-black text-white rounded-md px-2 py-2 w-10 hover:w-36 overflow-hidden transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
        <ScrollIndicator targetId="about-section" />

    </div>
  );
};


// Change 3: Social Icons are simplified to be static without hover animations.
const SocialIcons = () => {
  // Social icons removed per request (previously rendered logos in bottom-left).
  return null;
};

// Scroll Indicator Component - reusable and positioned (bottom-right by default)
const ScrollIndicator = ({ targetId = 'about-section', label = 'SCROLL' }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [animationKey, setAnimationKey] = React.useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey(prev => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-30 flex items-center justify-center"
      style={{ pointerEvents: 'auto' }}
    >
      <button
        onClick={() => {
          const target = document.getElementById(targetId);
          if (!target) return;
          const header = document.querySelector('header');
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // small gap
          window.scrollTo({ top, behavior: 'smooth' });
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Scroll to next section"
        className="flex items-center gap-3 rounded-full border-2 px-4 py-2 bg-white text-black hover:bg-white transition-shadow shadow-sm"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        <span className={`text-xs font-bold transition-opacity ${isHovered ? 'opacity-100' : 'opacity-80'}`}>{label}</span>
        <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7l5 5 5-5" />
        </svg>
      </button>
    </div>
  );
};


export default HeroSection;
export { MinimalHeader, SocialIcons, ScrollIndicator };