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
                                Situated on the shores of Leamy Lake in Gatineau, Quebec, Casino du
                                Lac-Leamy is a renowned casino and entertainment complex that offers visitors
                                an array of gaming options, exquisite dining experiences, live entertainment,
                                and a luxurious atmosphere. Take a peak at this exceptional destination
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