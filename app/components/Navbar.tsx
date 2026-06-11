'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'

const content = require('../../locales/en.json')
const navLinks = content.navbar.links

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme }   = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ background: 'var(--nav-bg)', borderBottom: '1px solid var(--nav-border)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-base" style={{ color: 'var(--t1)' }}>
          <Code2 className="w-5 h-5" style={{ color: 'var(--acc)' }} />
          {content.navbar.logo}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link: { href: string; label: string }) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-indigo-500"
              style={{ color: 'var(--t2)' }}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{ background: 'var(--acc-bg)', color: 'var(--acc)' }}
              aria-label={content.accessibility.toggleTheme}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <a
            href={`mailto:${content.about.email}`}
            className="text-sm px-4 py-2 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ background: 'var(--acc)', color: '#ffffff' }}
          >
            {content.navbar.hireMe}
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-all"
              style={{ background: 'var(--acc-bg)', color: 'var(--acc)' }}
              aria-label={content.accessibility.toggleTheme}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 transition-colors"
            style={{ color: 'var(--t2)' }}
            aria-label={content.accessibility.toggleMenu}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div style={{ borderTop: '1px solid var(--nav-border)', background: 'var(--nav-bg)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link: { href: string; label: string }) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-1.5 transition-colors hover:text-indigo-500"
                style={{ color: 'var(--t2)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${content.about.email}`}
              className="mt-1 text-sm px-4 py-2.5 rounded-full font-semibold text-center"
              style={{ background: 'var(--acc)', color: '#ffffff' }}
            >
              {content.navbar.hireMe}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
