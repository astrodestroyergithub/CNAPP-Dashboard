import './AddWidgetBar.scss';

export default function AddWidgetBar({ value, onChange, placeholder }) {
  return (
    <div className="add-widget-bar">
      <input
        className="add-widget-input"
        type="text"
        placeholder={placeholder || "Type widget name..."}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
