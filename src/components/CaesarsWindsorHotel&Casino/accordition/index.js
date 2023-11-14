import React from "react";
import { AccroditionWraspper } from "./style";
import { Box, Typography, Container } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Data } from "./Data";

export default function Accrodition() {
    return (
        <>
            <AccroditionWraspper>
                <Box component="section" className="accordition-wrapper">
                    <Container>
                        <Accordion >
                            <AccordionSummary
                                id="panel1-header"
                                aria-controls="panel1-content"
                                expandIcon={<ExpandMoreIcon />}>
                                {/* Add content for AccordionSummary */}
                                <Typography>Top Tips for gambling</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* Add content for AccordionDetails */}

                                {Data?.map((item, index) => (
                                    <Box className="accrodin-data">
                                        <li key={index}>
                                        <span>{item.listHeading}</span>
                                        {item.listContent}
                                        <span className="secondtext">
                                        
                                        </span>
                                    </li>
                                    </Box>
                                ))}

                            </AccordionDetails>
                        </Accordion>
                    </Container>
                </Box>
            </AccroditionWraspper>
        </>
    );
}
