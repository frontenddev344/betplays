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
                                    Are you ready
                                    <span>
                                       ready
                                    </span>
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Typography className="text1">
                                to embark on an exhilarating journey through the
                                exciting world of casinos in Canada? Look no further; you've just
                                landed at the hub of thrilling gaming experiences, unbeatable bonuses,
                                and expert insights. We are your go-to source for all things casino-related
                                in the Great White North!
                            </Typography>
                            <Typography variant="h3">
                                Why Choose Bet-Plays.com?
                            </Typography>
                            <Typography component="subtitle" className="text2">
                                At Bet-Plays.com, our mission is simple: to help you discover the
                                best casinos, the most lucrative bonuses, and the latest industry trends,
                                all within the vibrant landscape of Canadian gaming.
                            </Typography></Box>
                    </Container>
                </Box>

                <Box>
                </Box>
            </WhyChooseWrapper>
        </>
    )
} export default WhyChoose;