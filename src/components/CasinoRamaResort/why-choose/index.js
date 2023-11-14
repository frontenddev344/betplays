import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhyChooseWrapper } from "./style";

function WhyChoose() {
    return (
        <>
            <WhyChooseWrapper>
                <Box className="whychoose" component="section">
                    <Container>
                        <Box className="whychoosewraper">
                            <Box className="headingstyle">
                                <Typography className="heading">
                                    premier entertainment and gaming
                                    <span>
                                    premier
                                    </span>
                                </Typography>
                            </Box>
                            <Typography className="text1">
                                This Casino is a premier entertainment and gaming destination that offers
                                an unforgettable combination of thrilling casino experiences, world-class entertainment,
                                luxurious accommodations, and delectable dining options. Here's a detailed overview of this
                                renowned resort in Orillia, Ontario.
                            </Typography>
                        </Box>
                    </Container>
                </Box>

                <Box>
                </Box>
            </WhyChooseWrapper>
        </>
    )
} export default WhyChoose;