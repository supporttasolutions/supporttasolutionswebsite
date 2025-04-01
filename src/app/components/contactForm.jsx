"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
import ButtonPage from "./ButtonPage";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form className="space-y-4 w-full font-[raleway] px-4 md:px-0  " onSubmit={handleSubmit}>
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
            fontFamily: "Raleway, sans-serif"
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
            fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#20973A",
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#20973A",
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#20973A",
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#20973A",
             fontFamily: "Raleway, sans-serif"
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
             fontFamily: "Raleway, sans-serif"
          },
        }}
      />
      <div className="flex justify-start mt-8 w-full">
        <ButtonPage
          btnName="Let's Connect"
          className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-4 py-4 w-full lg:w-[250px] "
          
        />
      </div>
    </form>
  );
}
