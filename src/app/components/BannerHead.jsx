import ButtonPage from "./ButtonPage";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function BannerHead({
  head,
  desc,
  buttons,
  buttonsMob,
  longDesc,
  page,
}) {

  return (
    <div className="font-[inter] px-6 md:px-16 bg-white flex flex-col items-start sm:items-center md:items-center lg:items-center mx-auto container">
      <h1
        className="text-[48px] lg:text-[64px] mb-4 lg:mb-0 font-medium leading-[1.2] lg:leading-normal break-words"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {head}
      </h1>
      <p className="font-semibold sm:text-center text-[20px] lg:text-[22px] text-[#000000] leading-[1.2] lg:leading-normal break-words capitalize">
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
        <div className="flex lg:hidden  mt-8  flex-col-reverse gap-8">
          {longDesc && (
            <p className="text-justify  sm:text-center font-regular font-[inter] text-[16px] lg:text-[18px] text-[rgba(19,17,34,0.6)] w-full capitalize">
              {longDesc}
            </p>
          )}
          <div className="flex flex-col justify-start sm:justify-center sm:items-center gap-4">
            {buttonsMob.map((btn, index) => (
              <ButtonPage
                key={index}
                btnName={btn.text}
                className={btn.className}
                variant={btn.variant}
              />
            ))}
          </div>
        </div>
      ) : (
        // 🟡 MOBILE: If only `buttons` exist (same as large screens, but column layout)
        <div className="flex lg:hidden w-full mt-8  flex-col lg:justify-center items-start sm:items-center md:items-center lg:items-center gap-4">
          {buttons?.length > 0 ? (
            buttons.map((btn, index) => (
              <ButtonPage
                key={index}
                btnName={btn.text}
                className={btn.className}
                variant={btn.variant}
                href={btn.href}
              />
            ))
          ) : (
            <p className="text-start lg:text-center w-full items-center font-regular font-[inter] text-[16px] lg:text-[18px] text-[rgba(19,17,34,0.6)] capitalize ">
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
              <Link key={index} href={btn.href}>
                <ButtonPage btnName={btn.text} className={btn.className} variant={btn.variant} />
              </Link>
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
