'use client';

type RippleBackgroundProps = {
  className?: string;
};

const CIRCLES = [
  { size: 'xxlarge', shade: 'shade1', delay: '0s' },
  { size: 'xlarge', shade: 'shade2', delay: '0.6s' },
  { size: 'large', shade: 'shade3', delay: '1.2s' },
  { size: 'medium', shade: 'shade4', delay: '1.8s' },
  { size: 'small', shade: 'shade5', delay: '2.4s' },
] as const;

export function RippleBackground({ className = '' }: RippleBackgroundProps) {
  return (
    <>
      <div
        aria-hidden='true'
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        {CIRCLES.map((circle) => (
          <div
            key={`${circle.size}-${circle.shade}`}
            className={`circle-shell ${circle.size}`}
          >
            <div
              className={`circle ${circle.shade}`}
              style={{ animationDelay: circle.delay }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .circle-shell {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .circle {
          height: 100%;
          width: 100%;
          border-radius: 9999px;
          background: linear-gradient(
            180deg,
            rgba(59, 130, 246, 0.22) 0%,
            rgba(37, 99, 235, 0.12) 100%
          );
          box-shadow: 0 0 1px 0 rgba(37, 99, 235, 0.35);
          animation: ripple 15s infinite;
        }

        .small {
          width: 200px;
          height: 200px;
        }

        .medium {
          width: 400px;
          height: 400px;
        }

        .large {
          width: 600px;
          height: 600px;
        }

        .xlarge {
          width: 800px;
          height: 800px;
        }

        .xxlarge {
          width: 1000px;
          height: 1000px;
        }

        .shade1 {
          opacity: 0.2;
        }

        .shade2 {
          opacity: 0.5;
        }

        .shade3 {
          opacity: 0.7;
        }

        .shade4 {
          opacity: 0.8;
        }

        .shade5 {
          opacity: 0.9;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
          }

          50% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(0.8);
          }
        }
      `}</style>
    </>
  );
}
