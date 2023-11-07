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
                                    Halifax and Sydney, Nova Scotia
                                    {/* <span>
                                        Windsor
                                    </span> */}
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Typography className="text1">
                                With two distinct locations in Halifax and Sydney, Nova Scotia, Casino Nova Scotia provides a vibrant gaming and entertainment experience that captures the essence of the Maritimes. Offering thrilling casino games, delectable dining and live performances, this detailed overview will help you discover which location offers the most for you
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