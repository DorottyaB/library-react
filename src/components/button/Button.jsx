import './button.css';

const Button = ({ value, handleClick, color }) => {
  const read = value === 'Read' ? 'read' : value === 'Not Read' ? 'not-read' : '';
  const type = color === 'primary' ? 'btn-primary' : 'btn-secondary';
  const main = value === 'ADD NEW BOOK' ? 'btn-main' : '';

  return (
    <button onClick={handleClick} color={color} className={`${read} ${type} ${main}`}>
      {value}
    </button>
  );
};

export default Button;
