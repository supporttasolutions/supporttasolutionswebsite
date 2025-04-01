import Heading from "./Heading";
import { TextField } from "@mui/material";
import { useState } from "react";
import ButtonPage from "./ButtonPage";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ConnectProjectPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Future API integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="py-8 lg:py-12">
      <Heading
        heading="Tell Us About Your Project"
        description="Give Your Ideas Life!"
      />

      <div className="flex flex-col lg:flex-row gap-8 items-center w-full py-[30px] lg:py-[80px] px-3 lg:px-[120px] md:px-12 lg:px-20 mx-auto container">
        {/* Contact Details Section */}
        <div className="bg-[#FCEED7] p-3 md:p-10  w-full md:w-1/3  h-auto lg:h-150 rounded-l-lg ">
          <div className="flex flex-wrap gap-2 sm:flex-col  lg:bg-[#FCEED7] px-2 lg:p-6 lg:rounded-lg space-y-6 lg:space-y-4">
            <div className="flex items-start space-x-2">
              <IoMdMail className="text-[#E08F34]" size={25} />
              <div className="font-[raleway] w-full">
                <p className="font-semibold text-md text-[#E08F34]">Email</p>
                <p className="text-gray-500 text-base uppercase">
                  qwer2qwertyui
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <FaPhone className="text-[#E08F34]" size={25} />
              <div className="font-[raleway] w-full">
                <p className="font-semibold text-md text-[#E08F34]">Phone</p>
                <p className="text-gray-500 text-base uppercase">
                  qwer2qwertyui
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <MdLocationPin className="text-[#E08F34]" size={25} />
              <div className="font-[raleway] w-full">
                <p className="font-semibold text-md text-[#E08F34]">
                  Our Office Location
                </p>
                <p className="text-gray-500 text-base uppercase">
                  qwer2qwertyui
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}

        <div className="w-full flex flex-col md:w-2/3 h-full">
          <div className="flex flex-col items-center justify-center block lg:hidden ">
            <Image
              src={"/supporttaLogo.png"}
              alt="Supportta_Logo"
              width={25}
              height={40}
              className="mb-12 block lg:hidden"
            />

            <h3 className="font-[raleway] font-[500] text-[18px] text-[#131122E5] mb-2 text-center"> 
              HAVE A PROJECT ?
            </h3>
            <p className="font-[raleway] font-[500] text-[12px] text-[#13112299] text-center">
              SEND A MESSAGE
            </p>
          </div>
          <ContactForm />
          {/* <form className="space-y-4">
            <TextField
              label="Full Name"
              name="fullName"
              variant="standard"
              fullWidth
              value={formData.fullName}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.30)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#E0E3E7", // Default border color
                  borderBottomWidth: "2px",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#B2BAC2 !important", // Hover state
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A !important", // Focused state
                },
                "& .MuiInputBase-root": {
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            />

            <TextField
              label="Email ID"
              name="email"
              type="email"
              variant="standard"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.30)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#E0E3E7", // Default border color
                  borderBottomWidth: "2px",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#B2BAC2 !important", // Hover state
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A !important", // Focused state
                },
                "& .MuiInputBase-root": {
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              variant="standard"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.30)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#E0E3E7", // Default border color
                  borderBottomWidth: "2px",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#B2BAC2 !important", // Hover state
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A !important", // Focused state
                },
                "& .MuiInputBase-root": {
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            />
            <TextField
              label="Company Name"
              name="company"
              variant="standard"
              fullWidth
              value={formData.company}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.30)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#E0E3E7", // Default border color
                  borderBottomWidth: "2px",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#B2BAC2 !important", // Hover state
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A !important", // Focused state
                },
                "& .MuiInputBase-root": {
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            />
            <TextField
              label="Project Details"
              name="projectDetails"
              variant="standard"
              fullWidth
              multiline
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.30)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#E0E3E7", // Default border color
                  borderBottomWidth: "2px",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#B2BAC2 !important", // Hover state
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A !important", // Focused state
                },
                "& .MuiInputBase-root": {
                  height: "100px",
                  // marginTop: "20px",
                  // marginBottom: "20px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            />
          </form>
          <div className="flex justify-start mt-8">
            <ButtonPage
              btnName="Let's Connect"
              className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-4 py-2 "
            />
          </div>{" "} */}
        </div>
      </div>

      {/* image section */}
      <div className="flex flex-col justify-center items-center ">
        <p className="font-[medium] font-[raleway] text-[14px] lg:text-[26px]">
          Our team will get back to you as soon as possible.
        </p>
        <div className=" relative flex items-center justify-center w-[86.75%] aspect-[1/.28] mt-12  mx-auto container ">
          <div className="absolute z-10 bg-[#ffffff50] h-full w-full"></div>
          {/* <Image src={"/hero-bg.jpg"} fill className="object-fill" alt="" /> */}
          <Image src={"/hero-bg.jpg"} fill className="object-fill" alt="" />
        </div>
      </div>
    </div>
  );
}
