import ButtonPage from "../components/button";

export default function BannerHead({ head, desc, buttons, longDesc }) {
  return (
    <div className="inter">
      <h1
        className="text-[64px] mt-24 font-[500] text-center"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {head}
      </h1>
      <p className="text-center font-[600] text-[24px] text-[#000000]">
        {desc}
      </p>

      {buttons?.length > 0 ? (
        <div className="flex justify-center gap-12 mt-8">
          {buttons.map((btn, index) => (
            <ButtonPage key={index} btnName={btn.text} className={btn.className} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-6 text-[18px] text-gray-700 px-6 md:px-32">
          {longDesc}
        </p>
      )}
    </div>
  );
}
