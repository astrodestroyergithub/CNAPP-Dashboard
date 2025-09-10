import React from "react";

const SegmentedCircle = ({
  size = 90,          
  outerRadius = 30,    
  innerRadius = 25,    
  strokeWidth = 2,    
  color = "#ccc",   
}) => {
  const segments = [120, 80, 160];
  const gap = 0;

  const polarToCartesian = (r, angleDeg) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
    return {
      x: r * Math.cos(angleRad),
      y: r * Math.sin(angleRad),
    };
  };

  let paths = [];
  let startAngle = 0;

  segments.forEach((angle, i) => {
    const endAngle = startAngle + angle;

    const innerStart = polarToCartesian(innerRadius, startAngle);
    const innerEnd = polarToCartesian(innerRadius, endAngle);

    const outerStart = polarToCartesian(outerRadius, startAngle);
    const outerEnd = polarToCartesian(outerRadius, endAngle);

    const largeArc = angle > 180 ? 1 : 0;

    const d = `
      M ${innerStart.x},${innerStart.y}
      A ${innerRadius},${innerRadius} 0 ${largeArc} 1 ${innerEnd.x},${innerEnd.y}
      L ${outerEnd.x},${outerEnd.y}
      A ${outerRadius},${outerRadius} 0 ${largeArc} 0 ${outerStart.x},${outerStart.y}
      Z
    `;

    paths.push(<path key={i} d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />);
    startAngle += angle + gap;
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="0"
        cy="0"
        r={outerRadius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {paths}
    </svg>
  );
};

export default SegmentedCircle;
