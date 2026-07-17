export default function Button({
  text,
  className = "",
  type = "button",
  ...props
  
}) {
  return (
    <button
      type={type}
      className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}