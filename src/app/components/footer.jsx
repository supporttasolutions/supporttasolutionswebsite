import Footerstyle from "./footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Mail, MapPinned, Phone } from "lucide-react";
import ButtonPage from "./ButtonPage";

function Footer() {
  return (
    <footer
      className={`${Footerstyle.footerMain} relative text-white xl:pt-[60px] lg:pt-[50px] lg:pb-[10px] flex flex-col justify-center items-center `}
    >
      <div className="flex flex-col-reverse lg:flex-col  w-full px-2 lg:px-[120px] font-[raleway]">
        {/* vertcal div1 */}

        <div className="flex flex-wrap justify-between w-full footerSection gap-4">
          <div className="flex flex-col lg:gap-[25px] xl:gap-[30px] h-max">
            <div className="text-16 lg:text-[20px]  font-semibold text-[#E08F34]">
              Resources
            </div>
            <ul className="flex flex-col xl:gap-[18px] lg:gap-[15px] -[12px] lg:text-[18px]  font-medium ">
              <li>Careers</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col lg:gap-[25px] xl:gap-[30px] h-max">
            <div className="text-16 lg:text-[20px] font-semibold text-[#E08F34]">
              Services
            </div>
            <ul className="flex flex-col  text-[12px] lg:text-[18px] xl:gap-[18px] lg:gap-[15px] font-medium ">
              <li>Custom Software Development</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI / UX Design</li>
              <li>ECommerce Website</li>
            </ul>
          </div>
          <div className="flex flex-col lg:gap-[25px] xl:gap-[30px] h-max lg:w-[262px]">
            <div className="text-16 lg:text-[20px] font-semibold text-[#E08F34] ">
              Contact Us
            </div>
            <div className="flex flex-col xl:gap-[18px] lg:gap-[15px] text-[12px] lg:text-[18px] font-medium ">
              <div className="flex justify-center items-start lg:gap-[10px] ">
                <div className="lg:w-[24px] lg:h-[24px]">
                  <MapPinned className="text-[#E08F34]" />
                </div>
                <div>
                  YMCA International Building,
                  <br />
                  Lal Bahadur Shastri Rd,
                  <br /> Kottayam, Kerala 686001
                </div>
              </div>
              <div className="flex justify-start items-center text-[12px] lg:text-[18px] lg:gap-[10px]">
                <div className="lg:w-[24px] lg:h-[24px]">
                  <Phone className="text-[#E08F34]" />
                </div>
                <div className="font-[inter]">+91 9188911326</div>
              </div>
              <div className="flex justify-start items-center text-[12px] lg:text-[18px] lg:gap-[10px]">
                <div className="lg:w-[24px] lg:h-[24px]">
                  <Mail className="text-[#E08F34]" />
                </div>
                <div>info@supporttasolutions.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* vertical; div 2 */}
        <div className="flex justify-between lg:h-[116px]">
          <div className="flex flex-col justify-center lg:gap-[12px] xl:w-[180px] lg:w-[160px]">
            <div className="text-[#E08F34] text-12px lg:text-[18px] inter tracking-[0.2em]">
              Follow us
            </div>
            <div className="flex justify-between items-center">
              <div className="lg:w-[40px] aspect-square flex items-center justify-center">
                <FaFacebook className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]  text-[#976220]" />
              </div>
              <div className="lg:w-[40px] aspect-square flex items-center justify-center">
                <FaLinkedin className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]  text-[#976220]" />
              </div>
              <div className="lg:w-[40px] aspect-square flex items-center justify-center">
                <FaInstagram className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]  text-[#976220] " />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <form className="flex flex-col lg:flex-row items-center justify-center lg:gap-[20px]  lg:h-[40px]">
              <input
                className="bg-[#FDF9F3] lg:px-[20px] lg:py-[10px] lg:rounded-[8px]  border-[.5px] border-[#00000033] xl:w-[260px]"
                type="text"
                placeholder="Enter your Number"
              />

              <button
                type="submit"
                className="flex justify-center items-center lg:rounded-[5px] font-medium lg:w-[130px] bg-linear-to-t from-[#20973A] to-[#326F46]  lg:p-[10px] cursor-pointer"
              >
                Let’s Connect
              </button>
            </form>
          </div>
        </div>

      </div>
        {/* vertical div3 */}

      <div className="flex justify-start items-center text-[8px] lg:text-[18px] w-full font-[inter]">
        Copyright @ 2025 Supportta Solutions Private Limited. All rights
        reserved
      </div>
    </footer>
  );
}

export default Footer;
