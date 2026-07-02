import { useNavigate } from 'react-router-dom';
import './BackButton.css';

export default function BackButton({ label = 'Back to Menu' }) {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate('/')} type="button">
      ← {label}
    </button>
  );
}
