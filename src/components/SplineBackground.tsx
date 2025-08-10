import React, { useEffect, useMemo, useRef, useState } from 'react';

// Allow JSX to recognize the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

type SplineBackgroundProps = {
  url?: string;
  fallbackImage?: string; // optional image path/module
};

const SPLINE_SCRIPT_SRC = 'https://unpkg.com/@splinetool/viewer@1.0.67/build/spline-viewer.js';

const SplineBackground: React.FC<SplineBackgroundProps> = ({
  url = '[PLACEHOLDER_SPLINE_URL]',
  fallbackImage,
}) => {
  const [viewerReady, setViewerReady] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(!!customElements.get('spline-viewer'));
  const viewerRef = useRef<HTMLElement | null>(null);

  // Load the Spline web component script if not already present
  useEffect(() => {
    if (scriptLoaded) return;

    const existing = document.querySelector(`script[src="${SPLINE_SCRIPT_SRC}"]`) as HTMLScriptElement | null;
    if (existing) {
      if (existing.getAttribute('data-loaded') === 'true' || customElements.get('spline-viewer')) {
        setScriptLoaded(true);
        return;
      }
      existing.addEventListener('load', () => {
        existing.setAttribute('data-loaded', 'true');
        setScriptLoaded(true);
      });
      return;
    }

    const script = document.createElement('script');
    script.src = SPLINE_SCRIPT_SRC;
    script.type = 'module';
    script.async = true;
    script.addEventListener('load', () => {
      script.setAttribute('data-loaded', 'true');
      setScriptLoaded(true);
    });
    script.addEventListener('error', () => {
      console.error('Failed to load Spline viewer script');
      setScriptLoaded(false);
    });
    document.head.appendChild(script);
  }, [scriptLoaded]);

  // Handle load/error from the viewer element
  useEffect(() => {
    if (!scriptLoaded) return;
    const el = viewerRef.current;
    if (!el) return;

    const onLoad = () => setViewerReady(true);
    const onError = () => setViewerReady(false);

    el.addEventListener('load', onLoad as EventListener);
    el.addEventListener('error', onError as EventListener);

    // Safety: if nothing loads within 2.5s, we keep fallback visible
    const timeout = window.setTimeout(() => {
      if (!viewerReady) {
        console.warn('Spline viewer load timeout — showing fallback');
      }
    }, 2500);

    return () => {
      el.removeEventListener('load', onLoad as EventListener);
      el.removeEventListener('error', onError as EventListener);
      window.clearTimeout(timeout);
    };
  }, [scriptLoaded, viewerReady]);

  const fallbackStyle = useMemo<React.CSSProperties>(() => ({
    position: 'fixed',
    inset: 0,
    width: '100%',
    height: '100%',
    backgroundImage: fallbackImage ? `url(${fallbackImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: viewerReady ? 0 : 1,
    transition: 'opacity 500ms ease',
    zIndex: 0,
  }), [fallbackImage, viewerReady]);

  return (
    <>
      {/* Fallback visual - fades out when viewer is ready */}
      <div aria-hidden style={fallbackStyle} />

      {/* Spline container */}
      <div style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {/* Render only when script is loaded to avoid SSR/TS issues */}
        {scriptLoaded && (
          <spline-viewer ref={viewerRef as any} url={url} />
        )}
      </div>
    </>
  );
};

export default SplineBackground;
