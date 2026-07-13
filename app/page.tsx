import {
  Mail, MapPin, Globe, ArrowRight, Code2, Download, FileText,
  Briefcase, CalendarDays, MapPinned,
} from 'lucide-react'
import Image from 'next/image'
import Navbar from './components/Navbar'
import ScrollReveal from './components/ScrollReveal'
import content from '../locales/en.json'

/* ─── Data ──────────────────────────────────────────────────────────────── */

const experience = content.experience.items
const projects = content.projects.items
const skills = content.skills.categories
const education = content.education.items
const certifications = content.certifications.items
const stats = content.stats

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section
          className="hero-grid min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-16 relative overflow-hidden"
          style={{ background: 'var(--hero-bg)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'var(--hero-blob1)' }} />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: 'var(--hero-blob2)' }} />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left: Text content */}
            <div className="fade-up">
              <div className="inline-block mb-6">
                <span className="text-xs font-mono tracking-[0.3em] uppercase px-4 py-2 rounded-full" style={{ color: 'var(--acc)', background: 'var(--acc-bg)', border: '1px solid var(--acc-border)' }}>
                  {content.hero.greeting}
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" style={{ color: 'var(--t1)' }}>
                {content.hero.name}
              </h1>

              <div className="h-1 w-20 mb-6 rounded-full" style={{ background: `linear-gradient(90deg, var(--acc), transparent)` }} />

              <p className="text-lg lg:text-xl font-semibold mb-4" style={{ color: 'var(--acc)' }}>
                {content.hero.title}
              </p>

              <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: 'var(--t2)' }}>
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--acc), #0891b2)', color: '#ffffff', boxShadow: '0 10px 30px rgba(20,184,166,0.3)' }}>
                  {content.hero.viewWork}
                </a>
                <a href={`mailto:${content.about.email}`} className="px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300 hover:bg-opacity-10 text-center" style={{ borderColor: 'var(--acc)', color: 'var(--acc)', background: 'transparent' }}>
                  {content.hero.contactMe}
                </a>
              </div>
            </div>

            {/* Right: Profile image with decorative elements */}
            <div className="relative lg:h-full min-h-[500px]">
              {/* Animated background shapes */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 animate-float" style={{ background: 'var(--acc)' }} />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-5 animate-float" style={{ background: 'var(--acc)', animationDelay: '2s' }} />

              {/* Profile image with glow */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-glow" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', overflow: 'hidden' }}>
                  <Image src="/profileImg.png" alt={content.hero.profileAlt} fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'var(--t4)' }}>
            <span className="text-xs tracking-widest uppercase">{content.hero.scroll}</span>
            <div className="w-px h-8 bg-gradient-to-b from-current to-transparent" />
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────────────── */}
        <section id="about" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-page)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.about.label}</SectionLabel></ScrollReveal>
            <div className="grid md:grid-cols-2 gap-10 sm:gap-14 items-center mt-10">
              <ScrollReveal delay={80}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 leading-snug" style={{ color: 'var(--t1)' }}>
                  {content.about.title}{' '}
                  <span className="gradient-text">{content.about.highlight}</span>
                </h2>
                <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: 'var(--t2)' }}>
                  {content.about.paragraph1}
                </p>
                <p className="leading-relaxed mb-8 text-sm sm:text-base" style={{ color: 'var(--t2)' }}>
                  {content.about.paragraph2}
                </p>
                <div className="flex flex-wrap gap-5 text-sm" style={{ color: 'var(--t3)' }}>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--acc)' }} />
                    {content.about.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--acc)' }} />
                    {content.about.email}
                  </span>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 stagger">
                {stats.map((stat) => (
                  <ScrollReveal key={stat.label}>
                    <div className="card-surface rounded-2xl p-4 sm:p-6 text-center" style={{ background: 'var(--bg-stat)' }}>
                      <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-xs" style={{ color: 'var(--t3)' }}>{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────────────────────── */}
        <section id="projects" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-section)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.projects.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-10 sm:mb-12" style={{ color: 'var(--t1)' }}>
                {content.projects.title}
              </h2>
            </ScrollReveal>
            <div className="space-y-24">
              {projects.map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 80}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative h-96 rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ background: `linear-gradient(135deg, var(--acc-bg), #ecfdf5)` }}>
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-contain p-8 transition-transform duration-500 hover:scale-110" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-7xl">{project.icon}</div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ background: 'var(--acc-bg)', color: 'var(--acc)', border: '1px solid var(--acc-border)' }}>
                        <span className="text-sm font-semibold">{project.year}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: 'var(--t1)' }}>
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--t2)' }}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105" style={{ background: 'var(--acc-bg)', color: 'var(--acc)', border: '1px solid var(--acc-border)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:gap-4"
                          style={{ background: 'var(--acc)', color: '#ffffff', boxShadow: '0 10px 30px rgba(20,184,166,0.3)' }}
                        >
                          <Globe className="w-5 h-5" />
                          {content.projects.viewLive}
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ───────────────────────────────────────────────── */}
        <section id="education" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-section)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.education.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-10 sm:mb-12" style={{ color: 'var(--t1)' }}>
                {content.education.title}
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 stagger">
              {education.map((edu) => (
                <ScrollReveal key={edu.institution}>
                  <div className="card-surface rounded-2xl p-6 sm:p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: 'var(--t1)' }}>{edu.degree}</h3>
                        <p className="text-sm font-semibold" style={{ color: 'var(--acc)' }}>{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs mb-3" style={{ color: 'var(--t3)' }}>
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPinned className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--t2)' }}>{edu.details}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────────────────────── */}
        <section id="experience" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-section)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.experience.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-10 sm:mb-12" style={{ color: 'var(--t1)' }}>
                {content.experience.title}
              </h2>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-6">
              {experience.map((job, i) => (
                <ScrollReveal key={job.company} delay={i * 100}>
                  <div className="card-surface p-6 sm:p-8 relative overflow-hidden group">
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ background: 'var(--acc)' }} />

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-base sm:text-lg font-bold" style={{ color: 'var(--t1)' }}>
                            {job.role}
                          </h3>
                          {job.current && (
                            <span
                              className="text-xs px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1"
                              style={{ background: '#dcfce7', color: '#16a34a' }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                              {content.experience.current}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--acc)' }}>{job.company}</p>
                      </div>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0" style={{ background: 'var(--acc-bg)' }}>
                        <Briefcase className="w-5 h-5" style={{ color: 'var(--acc)' }} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs mb-4" style={{ color: 'var(--t3)' }}>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinned className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--t2)' }}>
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium pill-indigo">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ─────────────────────────────────────────────────── */}
        <section id="skills" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-page)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.skills.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-10 sm:mb-12" style={{ color: 'var(--t1)' }}>
                {content.skills.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 stagger">
              {Object.entries(skills).map(([category, { label, pilClass, items }]) => (
                <ScrollReveal key={category}>
                  <div className="card-surface rounded-2xl p-5 sm:p-6 h-full">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-4 sm:mb-5 font-semibold" style={{ color: label }}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className={`px-3 py-1.5 rounded-full text-xs font-medium ${pilClass}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ──────────────────────────────────────────── */}
        <section id="certifications" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-page)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.certifications.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-10 sm:mb-12" style={{ color: 'var(--t1)' }}>
                {content.certifications.title}
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 stagger">
              {certifications.map((cert) => (
                <ScrollReveal key={cert.name}>
                  <div className="card-surface rounded-2xl p-5 sm:p-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--acc-bg)', border: '1px solid var(--acc-border)' }}>
                      <FileText className="w-5 h-5" style={{ color: 'var(--acc)' }} />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold mb-2" style={{ color: 'var(--t1)' }}>{cert.name}</h3>
                    <p className="text-xs mb-2" style={{ color: 'var(--t3)' }}>{cert.issuer}</p>
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium pill-indigo">{cert.year}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Resume ─────────────────────────────────────────────────── */}
        <section id="resume" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ background: 'var(--bg-page)' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal><SectionLabel>{content.resume.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="card-surface mt-10 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--acc-bg)', border: '1px solid var(--acc-border)' }}>
                    <FileText className="w-6 h-6" style={{ color: 'var(--acc)' }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1" style={{ color: 'var(--t1)' }}>
                      {content.resume.title}
                    </h3>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--t3)' }}>
                      {content.resume.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {content.resume.tags.map((tag: string) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium pill-indigo">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-105 flex-shrink-0"
                  style={{ background: 'var(--acc)', color: '#ffffff', boxShadow: '0 4px 16px rgba(99,102,241,0.25)' }}
                >
                  <Download className="w-4 h-4" />
                  {content.resume.download}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────── */}
        <section id="contact" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden" style={{ background: 'var(--bg-section)' }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[280px] rounded-full blur-[100px]" style={{ background: 'var(--hero-blob1)' }} />
          </div>
          <div className="max-w-xl mx-auto text-center relative z-10">
            <ScrollReveal><SectionLabel>{content.contact.label}</SectionLabel></ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-4" style={{ color: 'var(--t1)' }}>
                {content.contact.title}
              </h2>
              <p className="leading-relaxed mb-8 text-sm sm:text-base" style={{ color: 'var(--t2)' }}>
                {content.contact.description}
              </p>
              <a
                href={`mailto:${content.about.email}`}
                className="inline-flex items-center gap-3 px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: 'var(--acc)', color: '#ffffff', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                {content.contact.button}
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────── */}
        <footer className="py-6 sm:py-8 px-6 sm:px-8 lg:px-16 xl:px-24" style={{ borderTop: '1px solid var(--foot-border)' }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs" style={{ color: 'var(--t3)' }}>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4" style={{ color: 'var(--acc)' }} />
              <span className="font-semibold" style={{ color: 'var(--t1)' }}>{content.footer.name}</span>
            </div>
            <span>{content.footer.copyright}</span>
          </div>
        </footer>

      </main>
    </>
  )
}

/* ─── Shared components ──────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 flex-shrink-0" style={{ background: 'var(--acc)' }} />
      <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--acc)' }}>
        {children}
      </span>
    </div>
  )
}

