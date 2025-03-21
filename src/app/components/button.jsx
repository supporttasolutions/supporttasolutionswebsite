export default function ButtonPage({ btnName, className }) {
  return (
    <div className="">
      <button
        className={`relative text-[#20973A] w-[200px] px-4 py-3  inter ${className}`}
        style={{
          borderRadius: "10px",
        }}
      >
        <span
          className="absolute inset-0  border-0"
          style={{
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            padding: "2px",
            background: "linear-gradient(180deg, #326F46 0%, #20973A 100%)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
          }}
        ></span>
        {btnName}
      </button>
    </div>
  );
}
