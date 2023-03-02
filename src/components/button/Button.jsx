import './button.css';

const Button = ({ value, handleClick, color, title }) => {
  const read = value === 'Read' ? 'read' : value === 'Not Read' ? 'not-read' : '';
  const type = color === 'primary' ? 'btn-primary' : 'btn-secondary';
  const starter = value === 'ADD NEW BOOK' ? 'btn-starter' : '';
  const main = value === '+' ? 'btn-main' : '';

  return (
    <button
      onClick={handleClick}
      color={color}
      title={title}
      className={`${read} ${type} ${starter} ${main}`}
    >
      {value}
    </button>
  );
};

export default Button;
