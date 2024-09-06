import React from 'react';

const ColorSpinner: React.FC = () => {
  const spinnerStyle: React.CSSProperties = {
    width: '3em',
    height: '3em',
    cursor: 'not-allowed',
    borderRadius: '50%',
    border: '2px solid #444',
    boxShadow: '-10px -10px 10px #6359f8, 0px -10px 10px 0px #9c32e2, 10px -10px 10px #f36896, 10px 0 10px #ff0b0b, 10px 10px 10px 0px#ff5500, 0 10px 10px 0px #ff9500, -10px 10px 10px 0px #ffb700',
    animation: 'rot55 0.7s linear infinite',
    position: 'relative'
  };

  const spinnerInStyle: React.CSSProperties = {
    border: '2px solid #444',
    width: '1.5em',
    height: '1.5em',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const keyframesStyle = `
    @keyframes rot55 {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={spinnerStyle}>
      <style>{keyframesStyle}</style>
      <div style={spinnerInStyle}></div>
    </div>
  );
};

export default ColorSpinner;
