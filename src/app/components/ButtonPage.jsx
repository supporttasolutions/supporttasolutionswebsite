export default function ButtonPage({ btnName, className, onHandleClick }) {
  return (
    <button
      onClick={onHandleClick}
      type="submit"
      className={`relative text-[#20973A] 
        text-sm md:text-base font-[inter] rounded-lg md:rounded-[10px] ${className}`}
      style={{
        borderRadius: "10px",
      }}
    >
      <span
        className="absolute inset-0 border-0"
        style={{
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "10px",
          padding: "2px",
          background:
            "linear-gradient( #326F46,#20973A), linear-gradient(180deg, #20973A, #326F46)",
          WebkitMask:
            "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
      ></span>
      {btnName}
    </button>
  );
}
