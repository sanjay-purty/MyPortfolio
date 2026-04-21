export function Button({ children, variant = "primary", className = "", ...props }) {
  const styles =
    variant === "ghost"
      ? "btn-ghost"
      : "btn-primary";
  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
