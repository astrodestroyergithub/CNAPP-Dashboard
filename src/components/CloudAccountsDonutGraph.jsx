import './CloudAccountsDonutGraph.scss';

const CloudAccountsDonutGraph = ({ data }) => {
  const connected = data.connected || 0;
  const notConnected = data['not-connected'] || 0;
  const total = data.total || connected + notConnected;

  const radius = 60;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const connectedPercentage = total > 0 ? connected / total : 0;
  const connectedStroke = connectedPercentage * circumference;

  return (
    <div className="donut-graph-container">
      <svg
        className="donut-chart"
        viewBox="0 0 120 120"
        width="120"
        height="120"
      >
        <circle
          className="donut-ring"
          cx="60"
          cy="60"
          r={normalizedRadius}
          fill="transparent"
          stroke="#e6eeff"
          strokeWidth={strokeWidth}
        />
        <circle
          className="donut-segment"
          cx="60"
          cy="60"
          r={normalizedRadius}
          fill="transparent"
          stroke="#4d7cfe"
          strokeWidth={strokeWidth}
          strokeDasharray={`${connectedStroke} ${circumference - connectedStroke}`}
          strokeDashoffset={circumference / 4 * -1} // Rotate start point to top
          strokeLinecap="butt"
        />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="donut-text">
          <tspan className="donut-value">{total}</tspan>
          <tspan className="donut-label" x="50%" dy="1.2em">Total</tspan>
        </text>
      </svg>

      <div className="donut-legend">
        <div className="legend-item">
          <span className="legend-color connected"></span>
          Connected ({connected})
        </div>
        <div className="legend-item">
          <span className="legend-color not-connected"></span>
          Not Connected ({notConnected})
        </div>
      </div>
    </div>
  );
};

export default CloudAccountsDonutGraph;