import React from 'react';

/* Lucide is loaded from CDN by the host page:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script>
   This wrapper defers to lucide.createIcons() after mount. */
export function Icon({ name, size = 16, strokeWidth = 1.75, color = 'currentColor', style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth },
      nameAttr: 'data-lucide', root: el,
    });
  }, [name, size, strokeWidth, color]);
  return <span ref={ref} aria-hidden="true" style={{ display: 'inline-flex', width: size, height: size, flex: 'none', ...style }} />;
}
