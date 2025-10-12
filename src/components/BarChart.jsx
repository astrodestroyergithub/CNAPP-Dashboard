import './BarChart.scss';

// const data = {
//   "Memory Usage": 762,
//   "Memory Quota Overcommit": 345,
//   "KubeContainerOOMKilledCount": 976,
//   "Missing Pod Replicas": 283,
//   "Pod Restart Rate": 566
// };

const BarChart = ({ data }) => {
  const maxBarHeight = Math.max(...Object.values(data));

  const getColorClass = (label) => {
    // A simple function to assign a color class based on the label
    switch (label) {
      case "Memory Usage":
        return "bar-1";
      case "Memory Quota Overcommit":
        return "bar-2";
      case "KubeContainerOOMKilledCount":
        return "bar-3";
      case "Missing Pod Replicas":
        return "bar-4";
      case "Pod Restart Rate":
        return "bar-5";
      default:
        return "";
    }
  };

  return (
    <div className="bar-chart-container">
      <div className="chart-wrapper">
        <div className="bar-chart">
          {Object.entries(data).map(([label, value], index) => (
            <div
              key={index}
              className={`bar-item ${getColorClass(label)}`}
              style={{ height: `${(value / maxBarHeight) * 100}%` }}
            >
            </div>
          ))}
        </div>
      </div>
      <div className="legend">
        {Object.entries(data).map(([label, value], index) => (
          <div key={index} className="legend-item">
            <div className={`legend-color-box ${getColorClass(label)}`}></div>
            <span className="legend-label">{label}: {value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
