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
      className={`text-sm md:text-base font-semibold rounded-md
        min-w-[180px] h-[48px] px-6
        border-2 text-center transition-all duration-200 ease-in-out
        ${isOutline
          ? "bg-white text-[#20973A] border-[#20973A]"
          : "bg-gradient-to-b from-[#20973A] to-[#326F46] text-white border-transparent"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
        ${className}`}
    >
      {btnName}
    </button>
  );
}
