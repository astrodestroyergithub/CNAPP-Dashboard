import './StackedBarChart.scss';

const COLORS = {
  Critical: '#a80b0b',
  High: '#e75218',
  Minor: '#ef9f1c',
  Low: '#f2cc59',
  'No issues': '#c2c2c2',
};

const StackedBarChart = ({ data, registry }) => {
  const total = Object.values(data).reduce((sum, val) => sum + val, 0);

  return (
    <div className="stacked-bar-container">
      {registry === 'Image Risk Assessment' ? (
        <div className="total-count">{total} Total Vulnerabilities</div>) : (
          <div className="total-count">{total} Total Images</div>
      )}
      <div className="bar">
        {Object.entries(data).map(([key, value]) => {
          const width = total > 0 ? (value / total) * 100 : 0;
          return (
            <div
              key={key}
              className="bar-segment"
              style={{
                backgroundColor: COLORS[key],
                width: `${width}%`,
              }}
              title={`${key}: ${value}`}
            />
          );
        })}
      </div>

      <div className="legend">
        {Object.entries(data).map(([key, value]) => (
          <div className="legend-item" key={key}>
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[key] }}
            />
            {key} ({value})
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedBarChart;
