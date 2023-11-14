import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhyChooseWrapper } from "./style";
import pathImg from "../../../assest/_Path_.png";

function WhyChoose() {
    return (
        <>
            <WhyChooseWrapper>
                <Box className="whychoose" component="section">
                    <Container>
                        <Box className="whychoosewraper">
                            <Box className="headingstyle">
                                <Typography className="heading">
                                    casino review website
                                    <span>
                                        review
                                    </span>
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Typography className="text1">
                                Thank you for visiting our casino review website. We value your feedback and
                                inquiries, and we're here to assist you. Please feel free to reach out to us
                                through the following channels
                            </Typography>

                            <Typography component="subtitle" className="text2">
                                If you have questions, comments, or suggestions, you can use the contact form below.
                                Simply provide your name, email address, subject, and your message, and we'll
                                get back to you as soon as possible.
                            </Typography></Box>
                    </Container>
                </Box>

                <Box>
                </Box>
            </WhyChooseWrapper>
        </>
    )
} export default WhyChoose;