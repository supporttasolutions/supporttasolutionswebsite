import ButtonPage from "../components/button";

export default function BannerHead({ head, desc, buttons, longDesc }) {
  return (
    <div className="inter px-4 bg-white">
      <h1
        className=" text-[52px] lg:text-[64px] mt-24 mb-4 lg:mb-0 font-[500] text-start lg:text-center leading-[1.2] lg:leading-normal break-words"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {head}
      </h1>
      <p className="text-start lg:text-center font-[600] text-[22px] text-[#000000]">
        {desc}
      </p>

      {buttons?.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center gap-4 lg:gap-12 mt-8">
          {buttons.map((btn, index) => (
            <ButtonPage
              key={index}
              btnName={btn.text}
              className={btn.className}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-12">
          <p className="text-start lg:text-center  text-[18px] text-[rgba(19,17,34,0.6)]  w-[614px]">
            {longDesc}
          </p>{" "}
        </div>
      )}
    </div>
  );
}
