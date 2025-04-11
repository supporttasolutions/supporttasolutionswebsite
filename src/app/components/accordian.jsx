"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none",
  boxShadow: "none",
  "&::before": { display: "none" },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "1.2rem", // Increase size
          color: "#E08F34",
          fontWeight: "normal",
          stroke: "#E08F34",
          strokeWidth: 0.5, // Make it bolder
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2, 0),
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    transform: "rotate(90deg)",
    transition: "transform 0.3s ease",
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(-90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginRight: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "15px 0",
  textAlign: "start",
}));

// const StyledTypography = styled(Typography)({
//   fontSize: "34px",
//   fontWeight: "regular",
//   fontFamily: "var(--font-raleway)",
// });

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ isactive }) => ({
  fontSize: "26px",
  fontWeight: isactive ? "600" : "400", // Bold when expanded
  fontFamily: "var(--font-raleway)",
  transition: "font-weight 0.3s ease",

  "@media (max-width: 1024px)": {
    fontSize: "24px",
  },
  "@media (max-width: 768px)": {
    fontSize: "20px",
  },
  "@media (max-width: 480px)": {
    fontSize: "16px",
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <div className="w-full">
      {[
        "Customer-First Solutions",
        "Agility Strategy Development",
        "Creative Excellence",
        "3 Months Warranty",
      ].map((title, index) => (
        <div key={index}>
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary>
              <StyledTypography
                isactive={expanded === `panel${index}`}
                component="span"
              >
                {title}
              </StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr className="border-t border-[#E08F3499]" />
        </div>
      ))}
    </div>
  );
}
