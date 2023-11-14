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
                                    Caesars Windsor
                                    <span>
                                        Windsor
                                    </span>
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Typography className="text1">
                                Hotel & Casino is a world-class destination that effortlessly
                                combines luxury accommodations, thrilling gaming experiences,
                                and exceptional entertainment. Caesars Windsor Hotel & Casino
                                stands as a testament to opulence and entertainment. It's not
                                just a place to gamble; it's a destination that offers a well-rounded
                                experience. The luxurious accommodations, thrilling gaming options,
                                diverse dining, and entertainment make it a must-visit for anyone seeking
                                an unforgettable escape.
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