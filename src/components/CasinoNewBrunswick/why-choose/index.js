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
                            <Typography className="text1">
                                Nestled in the city of Moncton, New Brunswick, Casino New Brunswick stands
                                as a prominent gaming and entertainment destination that offers an exciting blend
                                of casino gaming, world-class entertainment, luxurious accommodations, and exceptional
                                dining experiences. Here's a comprehensive overview of this dynamic establishment
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