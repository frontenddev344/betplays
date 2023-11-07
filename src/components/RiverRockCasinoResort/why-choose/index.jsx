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
                                    The River Rock Casino
                                    {/* <span>
                                        Windsor
                                    </span> */}
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Typography className="text1">
                                Resort is a top-tier gaming and entertainment destination that offers an array of exciting casino games, fine dining experiences, luxurious accommodations, and live entertainment.
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