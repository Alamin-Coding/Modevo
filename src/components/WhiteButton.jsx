const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
