export default function ButtonPage({
  btnName,
  className = "",
  onHandleClick,
  disabled = false,
  variant = "solid", // 'solid' | 'outline'
}) {
  const isOutline = variant === "outline";

  return (
    <button
      onClick={onHandleClick}
      type="submit"
      disabled={disabled}
      className={`
        relative text-sm md:text-base font-semibold rounded-md
        min-w-[180px] h-[40px] md:h-[50px] text-center transition-all duration-200 ease-in-out
        ${
          isOutline
            ? "text-[#976220] bg-white"
            : "bg-gradient-to-b from-[#CC9642] to-[#976220] text-white border-transparent"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
        ${className}
      `}
    >
      {/* Gradient Border for outline only */}
      {isOutline && (
        <span
          className="absolute inset-0 rounded-md pointer-events-none"
          style={{
            padding: "2px",
            background: "linear-gradient(180deg, #976220, #CC9642)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
          }}
        ></span>
      )}
      <span className="relative z-10">{btnName}</span>
    </button>
  );
}
