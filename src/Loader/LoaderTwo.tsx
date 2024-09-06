import React from 'react';

const LoaderTS: React.FC<{ shape: 'circle' | 'triangle' | 'rect' }> = ({ shape }) => {
  const loaderStyle: React.CSSProperties = {
    '--path': '#2f3545',
    '--dot': '#5628ee',
    '--duration': '3s',
    width: shape === 'triangle' ? '48px' : '44px',
    height: '44px',
    position: 'relative',
    display: 'inline-block',
    margin: '0 16px',
  } as React.CSSProperties;

  const beforeStyle: React.CSSProperties = {
    content: "''",
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    position: 'absolute',
    display: 'block',
    background: 'var(--dot)',
    top: '37px',
    left: shape === 'triangle' ? '21px' : '19px',
    transform: shape === 'triangle' ? 'translate(-10px, -18px)' : 'translate(-18px, -18px)',
    animation: `${shape === 'triangle' ? 'dotTriangle' : 'dotRect'} var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite`,
  };

  const svgStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: '100%',
  };

  const commonStyle: React.CSSProperties = {
    fill: 'none',
    stroke: 'var(--path)',
    strokeWidth: '10px',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
  };

  const shapeAnimation = {
    circle: 'pathCircle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
    rect: 'pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
    triangle: 'pathTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
  };

  const keyframesStyle = `
    @keyframes pathCircle {
      25% { stroke-dashoffset: 125; }
      50% { stroke-dashoffset: 175; }
      75% { stroke-dashoffset: 225; }
      100% { stroke-dashoffset: 275; }
    }
    @keyframes dotRect {
      25% { transform: translate(0, 0); }
      50% { transform: translate(18px, -18px); }
      75% { transform: translate(0, -36px); }
      100% { transform: translate(-18px, -18px); }
    }
    @keyframes pathRect {
      25% { stroke-dashoffset: 64; }
      50% { stroke-dashoffset: 128; }
      75% { stroke-dashoffset: 192; }
      100% { stroke-dashoffset: 256; }
    }
    @keyframes pathTriangle {
      33% { stroke-dashoffset: 74; }
      66% { stroke-dashoffset: 147; }
      100% { stroke-dashoffset: 221; }
    }
    @keyframes dotTriangle {
      33% { transform: translate(0, 0); }
      66% { transform: translate(10px, -18px); }
      100% { transform: translate(-10px, -18px); }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframesStyle}</style>
      <div style={beforeStyle}></div>
      <svg viewBox={shape === 'circle' ? '0 0 80 80' : '0 0 86 80'} style={svgStyle}>
        {shape === 'circle' && <circle r="32" cy="40" cx="40" style={{ ...commonStyle, strokeDasharray: '150 50 150 50', strokeDashoffset: '75', animation: shapeAnimation[shape] }} />}
        {shape === 'triangle' && <polygon points="43 8 79 72 7 72" style={{ ...commonStyle, strokeDasharray: '145 76 145 76', strokeDashoffset: '0', animation: shapeAnimation[shape] }} />}
        {shape === 'rect' && <rect height="64" width="64" y="8" x="8" style={{ ...commonStyle, strokeDasharray: '192 64 192 64', strokeDashoffset: '0', animation: shapeAnimation[shape] }} />}
      </svg>
    </div>
  );
};

export default LoaderTS;
