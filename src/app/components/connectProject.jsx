import Heading from "./Heading";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextField } from "@mui/material";
import { useState } from "react";
import ButtonPage from "./button"

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
    <div className="max-w-screen-xl mx-auto">
      <Heading
        heading="Tell Us About Your Project"
        description="Give Your Ideas Life!"
      />

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Contact Details Section */}
        <div className="bg-[#FFF3E1] p-6 rounded-lg shadow-md w-full lg:w-1/3">
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-[#FF8C00]" />
            <div>
              <h5 className="font-semibold text-sm text-gray-700">Email</h5>
              <h4 className="text-gray-800 text-base">qwer2qwertyui</h4>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Phone className="text-[#FF8C00]" />
            <div>
              <h5 className="font-semibold text-sm text-gray-700">Phone</h5>
              <h4 className="text-gray-800 text-base">qwer2qwertyui</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#FF8C00]" />
            <div>
              <h5 className="font-semibold text-sm text-gray-700">
                Our Office Location
              </h5>
              <h4 className="text-gray-800 text-base">qwer2qwertyui</h4>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form
          className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6">
            <TextField
              label="Full Name"
              name="fullName"
              variant="standard"
              fullWidth
              value={formData.fullName}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                    color: "rgba(0, 0, 0, 0.30)"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A", // Floating label color on focus
                },
             
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A", // Bottom border color on focus
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
                    color: "rgba(0, 0, 0, 0.30)"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A", // Floating label color on focus
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A", // Bottom border color on focus
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
                  color: "rgba(0, 0, 0, 0.30);", // Default label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A", // Floating label color on focus
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "rgba(185, 22, 22, 0.3)", // Bottom border color on focus
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
                  color: "rgba(0, 0, 0, 0.30)"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A", // Floating label color on focus
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A", // Bottom border color on focus
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
                    color: "rgba(0, 0, 0, 0.30)"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#20973A", // Floating label color on focus
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#20973A", // Bottom border color on focus
                },
              }}
            />
          </div>
          <div className="flex justify-end mt-1">
            <ButtonPage
              btnName="Let's Connect"
              className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-4 py-2 block md:hidden"
            />
          </div>{" "}
          <button
            type="submit"
            className="mt-6 w-full bg-[#20973A] text-white py-3 rounded-lg font-semibold hover:bg-[#326F46] transition duration-300"
          >
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
}
