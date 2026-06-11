import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sneha Singhal Portfolio'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #fafafe 0%, #f0eeff 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 22px',
            borderRadius: 999,
            background: '#eef2ff',
            border: '1px solid #c7d2fe',
            color: '#4f46e5',
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          AI Fullstack Developer
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: 24,
            letterSpacing: '-2px',
          }}
        >
          <span style={{ color: '#111827' }}>Sneha&nbsp;</span>
          <span style={{ color: '#6366f1' }}>Singhal</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: '#6b7280',
            marginBottom: 36,
          }}
        >
          4+ Years Experience Building Modern Web Applications
        </div>

        {/* Tech Stack */}
        <div
          style={{
            display: 'flex',
            gap: 12,
          }}
        >
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'AI'].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: '10px 20px',
                  background: '#ffffff',
                  borderRadius: 999,
                  border: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  )
}
