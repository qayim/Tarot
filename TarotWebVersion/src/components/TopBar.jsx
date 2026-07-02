import './TopBar.css';

export default function TopBar({ title, onClick, to }) {
  const Tag = onClick || to ? 'button' : 'div';

  return (
    <Tag
      className="top-bar"
      onClick={onClick}
      type={onClick ? 'button' : undefined}
      aria-label={onClick ? title : undefined}
    >
      <h1 className="top-bar__title">{title}</h1>
    </Tag>
  );
}
