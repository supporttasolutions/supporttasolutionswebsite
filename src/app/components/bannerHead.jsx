import ButtonPage from "./ButtonPage";

export default function BannerHead({ head, desc, buttons, buttonsMob, longDesc }) {
  return (
    <div className="font-[inter] px-4 bg-white flex flex-col items-start lg:items-center">
      <h1
        className="text-[52px] lg:text-[64px] mb-4 lg:mb-0 font-medium leading-[1.2] lg:leading-normal break-words"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {head}
      </h1>
      <p className="font-semibold text-[22px] text-[#000000] w-[300px] lg:w-[450px]">
        {desc}
      </p>

      {/* On mobile, show both button and longDesc; on large screens, show either button or longDesc */}
      <div className="block lg:hidden">
        {buttonsMob?.length > 0 && (
          <div className="flex flex-col justify-start gap-4 mt-8 mb-12">
            {buttonsMob.map((btn, index) => (
              <ButtonPage key={index} btnName={btn.text} className={btn.className} />
            ))}
          </div>
        )}
        {longDesc && (
          <div className="flex justify-center mt-4">
            <p className="text-start font-regular font-[inter] text-[18px] text-[rgba(19,17,34,0.6)] w-[300px] capitalize">
              {longDesc}
            </p>
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        {buttons?.length > 0 ? (
          <div className="flex flex-row justify-center gap-12 mt-8">
            {buttons.map((btn, index) => (
              <ButtonPage key={index} btnName={btn.text} className={btn.className} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-12">
            <p className="text-center font-regular font-[inter] text-[18px] text-[rgba(19,17,34,0.6)] w-[614px] capitalize lg:normal-case">
              {longDesc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
