import './ChatboxTextInputBar.scss';

export default function ChatboxTextInputBar({ value, onChange, placeholder }) {
  return (
    <div className="chatbox-text-input-bar">
      <input
        className="chatbox-text-input"
        type="text"
        placeholder={placeholder || "Type widget name..."}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
