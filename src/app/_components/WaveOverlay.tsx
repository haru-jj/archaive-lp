'use client';

import { useEffect, useRef, useState } from 'react';

type Layer = {
  A0: number;
  A1: number;
  lambdaRatio: number;
  omega: number;
  phi: number;
  baselineOffset: number;
  fill: string;
};

const LAYERS: Layer[] = [
  {
    A0: 38,
    A1: 8,
    lambdaRatio: 1.0,
    omega: 0.25,
    phi: 0,
    baselineOffset: 0,
    fill: 'color-mix(in srgb, currentColor 38%, white)',
  },
  {
    A0: 28,
    A1: 6,
    lambdaRatio: 0.77,
    omega: 0.38,
    phi: Math.PI / 3,
    baselineOffset: 0,
    fill: 'color-mix(in srgb, currentColor 66%, white)',
  },
  {
    A0: 18,
    A1: 4,
    lambdaRatio: 0.625,
    omega: 0.5,
    phi: (2 * Math.PI) / 3,
    baselineOffset: 0,
    fill: 'currentColor',
  },
];

const SAMPLES = 96;

type Props = {
  height?: number;
  className?: string;
  baselineRatio?: number;
};

export function WaveOverlay({
  height = 320,
  className = '',
  baselineRatio = 0.5,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setWidth(el.clientWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (width === 0) return;

    let rafId = 0;
    const start = performance.now();
    const baseBaseline = height * baselineRatio;

    const tick = () => {
      const t = (performance.now() - start) / 1000;

      for (let i = 0; i < LAYERS.length; i += 1) {
        const layer = LAYERS[i];
        const path = pathRefs.current[i];
        if (!path) continue;

        const baseline = baseBaseline + layer.baselineOffset;
        const lambda = width * layer.lambdaRatio;
        const amplitude = layer.A0 + layer.A1 * Math.sin(layer.omega * t);

        let d = `M 0 ${height} L 0 ${(
          baseline -
          amplitude * Math.sin(layer.omega * t + layer.phi)
        ).toFixed(2)}`;

        for (let j = 1; j <= SAMPLES; j += 1) {
          const x = (j / SAMPLES) * width;
          const y =
            baseline -
            amplitude *
              Math.sin(
                (2 * Math.PI * x) / lambda + layer.omega * t + layer.phi,
              );
          d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
        }
        d += ` L ${width.toFixed(2)} ${height} Z`;

        path.setAttribute('d', d);
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [width, height, baselineRatio]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none relative w-full ${className}`}
      style={{ height }}
    >
      {width > 0 && (
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio='none'
          className='absolute inset-0 h-full w-full'
          aria-hidden='true'
        >
          {LAYERS.map((layer, i) => (
            <path
              key={i}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              fill={layer.fill}
            />
          ))}
        </svg>
      )}
    </div>
  );
}
