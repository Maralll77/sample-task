function Button({ name, onClick }) {
  return (
    <button className="firstButton" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
