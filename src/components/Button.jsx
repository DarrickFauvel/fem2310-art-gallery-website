function Button({ children, direction }) {
  return (
    <a className={`button ${direction}`} href="#">
      {children}
    </a>
  );
}

export default Button;
