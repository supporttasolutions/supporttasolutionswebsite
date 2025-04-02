import ButtonPage from "./ButtonPage";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function BannerHead({ head, desc, buttons, buttonsMob, longDesc ,page }) {
  return (
    <div className="font-[inter] px-4 bg-white flex flex-col items-start md:items-center lg:items-center">
      <h1
        className="text-[52px] lg:text-[64px] mb-4 lg:mb-0 font-medium leading-[1.2] lg:leading-normal break-words"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {head}
      </h1>
      <p className="font-semibold text-[22px] text-[#000000] leading-[1.2] lg:leading-normal break-words capitalize">
        {desc}
      </p>
      {page === "connect" && (
        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <FaFacebook size={35} />
          <FaLinkedin size={35} />
          <FaInstagram size={35} />
        </div>
      )}
      {/* 🟢 MOBILE: If buttonsMob exist, show them WITH longDesc in a column */}
      {buttonsMob?.length > 0 ? (
        <div className="block lg:hidden  mt-8 flex flex-col flex-col-reverse gap-8">
          {longDesc && (
            <p className="text-start font-regular font-[inter] text-[18px] text-[rgba(19,17,34,0.6)] w-[300px] capitalize">
              {longDesc}
            </p>
          )}
          <div className="flex flex-col justify-start gap-4">
            {buttonsMob.map((btn, index) => (
              <ButtonPage key={index} btnName={btn.text} className={btn.className} />
            ))}
          </div>
        </div>
      ) : (
        // 🟡 MOBILE: If only `buttons` exist (same as large screens, but column layout)
        <div className="block lg:hidden w-full mt-8 flex flex-col lg:justify-center items-start md:items-center lg:items-center gap-4">
          {buttons?.length > 0 ? (
            buttons.map((btn, index) => (
              <ButtonPage key={index} btnName={btn.text} className={btn.className} />
            ))
          ) : (
            <p className="text-start lg:text-center w-full items-center font-regular font-[inter] text-[18px] text-[rgba(19,17,34,0.6)] capitalize ">
              {longDesc}
            </p>
          )}
        </div>
      )}

      {/* 🖥️ LARGE SCREENS: Show buttons in a row, or longDesc if no buttons */}
      <div className="hidden lg:block">
        {buttons?.length > 0 ? (
          <div className="flex flex-row justify-center gap-12 mt-8">
            {buttons.map((btn, index) => (
              <ButtonPage key={index} btnName={btn.text} className={btn.className} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-12">
            <p className="text-center lg:text-center w-full lg:px-[120px] font-regular font-[inter] text-[18px] text-[rgba(19,17,34,0.6)]  capitalize lg:normal-case">
              {longDesc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
