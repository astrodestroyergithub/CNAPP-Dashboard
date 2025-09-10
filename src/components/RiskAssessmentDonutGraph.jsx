import React from 'react';
import './RiskAssessmentDonutGraph.scss';

const COLOR_MAP = {
  failed: '#c62828',
  warning: '#fdd835',
  'not-available': '#d3d3f3',
  passed: '#43a047',
};

const LABEL_MAP = {
  failed: 'Failed',
  warning: 'Warning',
  'not-available': 'Not available',
  passed: 'Passed',
};

const RiskAssessmentDonutGraph = ({ data }) => {
  const total = Object.values(data).reduce((sum, val) => sum + val, 0);

  const radius = 60;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  let accumulated = 0;

  const segments = Object.entries(data).map(([key, value]) => {
    const percentage = value / total;
    const length = percentage * circumference;
    const dashOffset = -accumulated;
    accumulated += length;

    return {
      key,
      value,
      color: COLOR_MAP[key],
      length,
      dashOffset,
    };
  });

  return (
    <div className="risk-donut-container">
      <svg
        className="risk-donut-chart"
        viewBox="0 0 120 120"
        width="120"
        height="120"
      >
        {segments.map(({ key, color, length, dashOffset }) => (
          <circle
            key={key}
            className="donut-segment"
            r={normalizedRadius}
            cx="60"
            cy="60"
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${length} ${circumference - length}`}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 60 60)"
          />
        ))}
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="donut-text">
          <tspan className="donut-value">{total}</tspan>
          <tspan className="donut-label" x="50%" dy="1.2em">Total</tspan>
        </text>
      </svg>

      <div className="risk-donut-legend">
        {Object.entries(data).map(([key, value]) => (
          <div className="legend-item" key={key}>
            <span className="legend-color" style={{ backgroundColor: COLOR_MAP[key] }} />
            {LABEL_MAP[key]} ({value})
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskAssessmentDonutGraph;