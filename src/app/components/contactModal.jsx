"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Close icon for modal
import ContactForm from "./contactForm";
import ButtonPage from "./button";

export default function ContactDialog({ open, setOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  //   const [open, setOpen] = useState(false); // State for modal

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Data Submitted:", formData);
  //     setOpen(true); // Open modal on form submission
  //   };

  const handleClose = () => {
    setOpen(false); // Close modal
  };

  return (
    <>
      {/* <ContactForm /> */}

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "20px", // Rounded corners like image 1
            padding: "20px", // Add some padding inside
            width: "100%", // Adjust width as needed
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            paddingBottom: "10px",
            color:"#e08f34",
            fontSize:"30px"
          }}
        >
          Contact Us{" "}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "10px", // Moves button left of the title
              top: "5px", // Moves button slightly above
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", fontFamily: "Raleway" }}>
          <form
            className="space-y-4 w-full font-[raleway]"
            onSubmit={handleSubmit}
          >
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
                  height: "30px",
                  marginTop: "15px",
                  marginBottom: "10px",
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
                  height: "30px",
                  marginTop: "15px",
                  marginBottom: "10px",
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
                  height: "30px",
                  marginTop: "15px",
                  marginBottom: "10px",
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
                  height: "30px",
                  marginTop: "15px",
                  marginBottom: "10px",
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
                  height: "80px",
                  //marginTop:"15px"
                  // marginBottom: "10px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                  fontFamily: "Raleway, sans-serif",
                },
              }}
            />
            <div className="flex justify-center text-center px-16 mt-4">
              <p>
                Or email <span className="text-[#e6a55d]"> info@supporttasolutions.com</span> to get in
                touch with our team
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <ButtonPage
                btnName="Let's Connect"
                className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-4 py-2"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
