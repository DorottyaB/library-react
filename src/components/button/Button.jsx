import './button.css';

const Button = ({ value, handleClick, color }) => {
  const read = value === 'Read' ? 'read' : value === 'Not Read' ? 'not-read' : 'white';
  const type = color === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button onClick={handleClick} color={color} className={`${read} ${type}`}>
      {value}
    </button>
  );
};

export default Button;
