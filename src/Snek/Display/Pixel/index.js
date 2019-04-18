import React from 'react';

export default function Pixel(props) {
  return (
    <div className={`display__pixel display__pixel_${props.status}`}>
      <svg viewBox="0 0 11 11">
        <path className="path" d="M1,1h9v9H1V1ZM2,2H9V9H2V2ZM3,3H8V8H3V3Z" />
      </svg>
    </div>
  );
}
