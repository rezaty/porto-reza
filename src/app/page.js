'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

// ─── DATA ───────────────────────────────────────────────────────────────────
const techStacks = [
  { category: 'Languages',      items: ['Python', 'Java', 'TypeScript', 'JavaScript'] },
  { category: 'Frontend',       items: ['Next.js', 'React', 'Tailwind CSS'] },
  { category: 'Backend',        items: ['Django', 'Django REST Framework', 'Spring Boot'] },
  { category: 'Database',       items: ['PostgreSQL', 'Supabase'] },
  { category: 'DevOps & Tools', items: ['Git', 'Vercel', 'Railway', 'CI/CD', 'Figma'] },
  { category: 'Methodology',    items: ['Agile', 'Scrum'] },
];

const projects = [
  {
    name: 'CENS UI',
    full: 'The Civil Engineering National Summit',
    year: '2026',
    role: 'Website Developer · DevOps Engineer',
    desc: "Official website for CENS UI's 23rd annual event themed \"Rebuilt to Advance\". A modern, scalable platform for a national civil engineering summit serving participants across Indonesia, supporting competitions, workshops, and national summits.",
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    color: '#7c6af7',
    href: 'https://www.cens-ui.id/',
    image: '/cens-ui.png',
  },
  {
    name: 'SENADA',
    full: 'Sumber Niaga Administrasi dan Data',
    year: '2025',
    role: 'Website Developer · DevOps Engineer',
    desc: 'Web-based system for invoicing, inventory management, and financial dashboards. Features automated sales & purchase invoices with real-time stock tracking, and dashboards to monitor goods movement, cash inflow, and outflow.',
    stack: ['Django', 'Python', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    color: '#4aeabc',
    href: 'https://sumberniagahdp.com/',
    image: '/senada.png',
  },
  {
    name: 'SIAP',
    full: 'Sistem Informasi Administrasi dan Pengendali Mutu',
    year: '2024',
    role: 'Website Developer · Scrum Master · DevOps',
    desc: 'Led end-to-end Scrum ceremonies, managed backlog prioritization, and drove incremental delivery of survey, admin, dashboard, document automation, and tracker features across cross-functional teams.',
    stack: ['Django', 'Python', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Railway'],
    color: '#f7a76c',
    href: 'https://www.youtube.com/watch?v=rbXwCLVmSEw',
    image: '/siap.jpg',
  },
];

const iconMap = {
  'Python': '🐍', 'Java': '☕', 'TypeScript': '𝙏𝙎', 'JavaScript': '𝙅𝙎',
  'Next.js': '▲', 'React': '⚛', 'Tailwind CSS': '💨',
  'Django': '🎸', 'Django REST Framework': '🔗', 'Spring Boot': '🍃',
  'PostgreSQL': '🐘', 'Supabase': '⚡',
  'Git': '🌿', 'Vercel': '▲', 'Railway': '🚂', 'CI/CD': '♾', 'Figma': '🎨',
  'Agile': '🔄', 'Scrum': '🏉',
};

// ─── REUSABLE ────────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 500,
    }}>
      // {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800, marginBottom: '3rem', lineHeight: 1.1,
    }}>
      {children}
    </h2>
  );
}

// ─── HOME ────────────────────────────────────────────────────────────────────
function HomeSection() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 5vw', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.3,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '500px', height: '500px', borderRadius: '50%', filter: 'blur(40px)',
        background: 'radial-gradient(circle, rgba(124,106,247,0.15) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%', filter: 'blur(40px)',
        background: 'radial-gradient(circle, rgba(74,234,188,0.1) 0%, transparent 70%)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div style={{ position: 'relative', maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
        <p className="animate-fadeUp delay-1" style={{
          fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--accent2)', marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{ width: '32px', height: '1px', background: 'var(--accent2)', display: 'inline-block' }} />
          Hello, I&apos;m
        </p>

        <h1 className="animate-fadeUp delay-2" style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 800,
          lineHeight: 1.0, marginBottom: '0.5rem', letterSpacing: '-0.03em',
        }}>
          Reza Taufiq
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite',
          }}>
            Yahya
          </span>
        </h1>

        <p className="animate-fadeUp delay-3" style={{
          fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'var(--muted)',
          marginBottom: '2.5rem', maxWidth: '520px', lineHeight: 1.9,
        }}>
          Information Systems student at Universitas Indonesia.
          <br />Building scalable web platforms with modern stacks.
        </p>

        <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '0.75rem 1.75rem',
            background: 'var(--accent)', color: '#fff', borderRadius: '8px',
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#6b59e6'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            View Projects →
          </a>
          <a href="mailto:rezataufiq56@gmail.com" style={{
            padding: '0.75rem 1.75rem',
            border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px',
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function AboutSection() {
  const highlights = [
    { label: 'University', value: 'Universitas Indonesia' },
    { label: 'Degree',     value: 'Bachelor of Computer Science' },
    { label: 'Graduation', value: 'February 2026' },
    { label: 'Location',   value: 'Jakarta, Indonesia' },
  ];

  return (
    <section id="about" style={{ padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>About Me</SectionLabel>
        <SectionTitle>Who I Am</SectionTitle>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'start',
        }}>
          <div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              I&apos;m an Information Systems student with a passion for building scalable,
              modern web applications. I combine strong technical skills with leadership
              and communication abilities to deliver impactful projects.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
              Through various experiences — from leading student organizations to deploying
              full-stack applications — I continuously grow both personally and professionally.
              I thrive in collaborative environments and enjoy serving as Scrum Master.
            </p>

            <div style={{
              marginTop: '2rem', padding: '1.25rem 1.5rem',
              border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--card)',
            }}>
              <p style={{
                fontSize: '0.78rem', color: 'var(--accent2)',
                letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase',
              }}>
                Leadership Roles
              </p>
              <p style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.9 }}>
                <strong style={{ color: 'var(--accent2)' }}>Head of DPM</strong> — Fasilkom UI (2024)<br />
                <strong style={{ color: 'var(--accent2)' }}>Head of Support Division</strong> — PMB Fasilkom UI (2023–2024)
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.25rem',
                border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--card)',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{h.label}</span>
                <span style={{
                  color: 'var(--text)', fontWeight: 500, fontSize: '0.88rem',
                  fontFamily: 'Syne, sans-serif', textAlign: 'right',
                }}>
                  {h.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TECH STACK ──────────────────────────────────────────────────────────────
function TechStackSection() {
  return (
    <section id="techstack" style={{
      padding: '100px 5vw',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Skills</SectionLabel>
        <SectionTitle>Tech Stack</SectionTitle>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {techStacks.map((group, i) => (
            <div key={i} style={{
              padding: '1.5rem', border: '1px solid var(--border)',
              borderRadius: '14px', background: 'var(--card)', transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <p style={{
                fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: '1rem',
              }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((item, j) => (
                  <span key={j} style={{
                    padding: '0.35rem 0.75rem',
                    border: '1px solid var(--border)', borderRadius: '6px',
                    fontSize: '0.8rem', color: 'var(--text)',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    background: 'var(--bg)',
                  }}>
                    <span style={{ fontSize: '0.75rem' }}>{iconMap[item] || '●'}</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  const AccentBox = () => (
    <div style={{
      position: 'relative',
      borderLeft: isEven ? 'none' : `1px solid ${project.color}30`,
      borderRight: isEven ? `1px solid ${project.color}30` : 'none',
      minHeight: '240px',
      overflow: 'hidden',
    }}>
      {/* Project screenshot */}
      <img
        src={project.image}
        alt={project.name}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          transition: 'transform 0.5s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isEven
          ? `linear-gradient(to right, ${project.color}00, ${project.color}55)`
          : `linear-gradient(to left, ${project.color}00, ${project.color}55)`,
      }} />
      {/* Name badge */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        padding: '0.3rem 0.75rem',
        background: 'rgba(10,10,15,0.75)',
        backdropFilter: 'blur(8px)',
        borderRadius: '6px',
        border: `1px solid ${project.color}50`,
      }}>
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: '0.85rem', color: project.color,
        }}>
          {project.name}
        </span>
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isEven ? '1fr 2fr' : '2fr 1fr',
      border: '1px solid var(--border)', borderRadius: '16px',
      overflow: 'hidden', background: 'var(--card)', transition: 'all 0.3s ease',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = project.color;
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}18`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {isEven && <AccentBox />}

      <div style={{ padding: '2rem 2.5rem' }}>
        <p style={{
          fontSize: '0.7rem', color: 'var(--muted)',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem',
        }}>
          {project.year}
        </p>
        <h3 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: '1.1rem', marginBottom: '0.4rem',
        }}>
          {project.full}
        </h3>
        <p style={{ fontSize: '0.78rem', color: project.color, marginBottom: '1rem', fontWeight: 500 }}>
          {project.role}
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.stack.map((s, i) => (
            <span key={i} style={{
              padding: '0.25rem 0.6rem',
              background: `${project.color}15`,
              border: `1px solid ${project.color}40`,
              borderRadius: '5px', fontSize: '0.72rem', color: project.color,
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* Visit / Demo button */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '1.25rem',
            padding: '0.5rem 1rem',
            border: `1px solid ${project.color}60`,
            borderRadius: '7px',
            fontSize: '0.78rem',
            color: project.color,
            background: `${project.color}10`,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${project.color}25`;
            e.currentTarget.style.borderColor = project.color;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `${project.color}10`;
            e.currentTarget.style.borderColor = `${project.color}60`;
          }}
        >
          {project.href.includes('youtube') ? '▶ Watch Demo' : '↗ Visit Site'}
        </a>
      </div>

      {!isEven && <AccentBox />}

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Work</SectionLabel>
        <SectionTitle>Highlighted Projects</SectionTitle>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}