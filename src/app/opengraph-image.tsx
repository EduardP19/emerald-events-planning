import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Emerald Event Planning — Making Occasions Unforgettable';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          background: 'linear-gradient(135deg, #0F3D1B 0%, #1A5C2A 55%, #2D7A43 100%)',
          fontFamily: 'Georgia, serif',
          padding: 80,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#E8C97A',
            marginBottom: 24,
          }}
        >
          Making Occasions Unforgettable
        </div>
        <div
          style={{
            fontSize: 108,
            color: '#FFFFFF',
            lineHeight: 1.05,
            fontWeight: 600,
          }}
        >
          Emerald Event Planning
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.82)',
            marginTop: 32,
            fontFamily: 'Georgia, serif',
          }}
        >
          London · Surrey · West Sussex · Hampshire
        </div>
      </div>
    ),
    { ...size }
  );
}
