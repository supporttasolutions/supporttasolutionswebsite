"use client";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 'none', 
  boxShadow: 'none', 
  '&::before': { display: 'none' }, 
}));

const AccordionSummary = styled((props) => (
<MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon 
        sx={{ 
          fontSize: '1.5rem', // Increase size
          color: '#E08F34', 
          fontWeight: 'bold', 
          stroke: "#E08F34", 
          strokeWidth: 1 // Make it bolder
        }} 
      />
    }
    {...props}
  />
))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    transform: 'rotate(90deg)', 
    transition: 'transform 0.3s ease',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(-90deg)', 
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginRight: theme.spacing(1),
  },
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '15px 0',
  textAlign:"start"
 
}));

const StyledTypography = styled(Typography)({
  fontSize: "34px",
  fontWeight: "regular",
  fontFamily: "var(--font-raleway)",
});


export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <div className=''>
      {[
        "Customer-First Solutions",
        "Agility Strategy Development",
        "Creative Excellence",
        "3 Months Warranty",
      ].map((title, index) => (
        <div key={index}>
          <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary>
              <StyledTypography component="span" >{title}</StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr className="border-t border-[#E08F3499]" /> 
        </div>
      ))}
    </div>
  );
}
