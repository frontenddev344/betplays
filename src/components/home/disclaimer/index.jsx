import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { DisclaimerWrapper } from "./style";
import pathImg from "../../../assest/_Path_.png";

function Disclaimer() {
    return (
        <>
            <DisclaimerWrapper>
                <Box component='section' className="disclaimerwrapper">
                    <Container>
                        <Box className="disclaimerInnerwrapper">
                            <Box className="headingstyle">
                                <Typography variant="h4">
                                     Stay in the Loop
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Typography>
                                Don't miss out on the latest casino reviews, exclusive promotions, and industry news.
                                Subscribe to our newsletter and follow us on social media for real-time updates and
                                special offers.
                            </Typography>
                            <Typography variant="h6">
                                Ready to roll the dice? Explore the best local casinos in Canada!
                            </Typography>
                            <Box className="disclaimerText">
                                <ul>
                                    <li>
                                    Disclaimer: Responsible Gambling Awareness 
                                    </li>
                                    <li>
                                    Gambling should be an enjoyable and thrilling form of entertainment.
                                    </li>
                                    <li>
                                    However, it is important to remember that gambling involves risks and should always
                                     be approached with awareness and responsibility. Remember, gambling should always be
                                      a controlled and enjoyable experience. 
                                    </li>
                             
                                </ul>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </DisclaimerWrapper>
        </>
    )
} export default Disclaimer;