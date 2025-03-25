export default function ButtonPage({ btnName, className }) {
  return (
    <div className="">
      <button
      type="submit"
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
            background: "linear-gradient( #326F46,#20973A), linear-gradient(180deg, #20973A, #326F46)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
          }}

          // style={{
          //   backgroundImage: className
          //     ? className
          //     : `linear-gradient( #326F46,#20973A), linear-gradient(180deg, #20973A, #326F46)`,
          //   backgroundOrigin: "border-box",
          //   backgroundClip: "padding-box, border-box",
          //   color: `#${className}`,
          // }}
        ></span>
        {btnName}
      </button>
    </div>
  );
}
