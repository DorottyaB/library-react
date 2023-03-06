import './button.css';

const Button = ({ value, handleClick, color, size, title }) => {
  const type = color === 'primary' ? 'btn-primary' : 'btn-secondary';
  const starter = value === 'ADD NEW BOOK' ? 'btn-starter' : '';
  const main = value === '+' ? 'btn-main' : '';
  const small = size === 'small' ? 'btn-small' : '';

  return (
    <button
      onClick={handleClick}
      color={color}
      title={title}
      className={`${type} ${starter} ${main} ${small}`}
    >
      {value}
    </button>
  );
};

export default Button;
