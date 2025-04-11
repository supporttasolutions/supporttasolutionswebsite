"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
import ButtonPage from "./ButtonPage";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { fullName, email, phone, company, projectDetails } = formData;
    if (!fullName || !email || !phone || !company || !projectDetails) {
      toast.error("Please fill in all the fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwnPbImFKoJtV6cg17zLSovbQTXm4oVEFY9yiLfHVrmAL7lBq8o5nYL4I6P61p6m9R0-g/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        projectDetails: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <form className="space-y-4 w-full font-[raleway]" onSubmit={handleSubmit}>
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
              fontFamily: "Raleway, sans-serif",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#20973A",
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#20973A",
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#20973A",
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#20973A",
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#20973A",
              fontFamily: "Raleway, sans-serif",
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
              fontFamily: "Raleway, sans-serif",
            },
          }}
        />
        <div className="flex justify-start mt-8 w-full">
          <ButtonPage
            btnName="Let's Connect"
            className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-4 py-3 w-full lg:w-[250px] "
            disabled={isSubmitting}
          />
        </div>
      </form>
    </>
  );
}
