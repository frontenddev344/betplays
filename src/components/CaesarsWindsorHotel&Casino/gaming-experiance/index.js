import React from "react";
import { GamingExperienceWraspper } from "./style";
import { Box, Typography } from "@mui/material";
import Gimg from "../../../assest/g1.jpg";


export default function GamingExperience() {
    return (
        <>
            <GamingExperienceWraspper>
                <Box component='section' className="gaming-wrapper">
                    <Box className="gaming-img">
                        <Box className="img">
                            <img src={Gimg} alt="img" />
                        </Box>
                    </Box>
                    <Box className="gaming-content">

                        <Box className="gaming-text">
                            <Box className="headingstyle">
                                <Typography className="heading">
                                    Caesars Windsor Casino
                                    <span>Casino</span>
                                </Typography>
                                <Typography className="text">
                                    is the heart of the action, and it doesn't disappoint. With over 100,000 square feet
                                    of gaming space, the casino offers a vast array of gaming options. From traditional table
                                    games like blackjack, roulette, and poker to an extensive selection of slots and video
                                    poker machines, the casino caters to both novice players and high rollers. The professional
                                    and courteous staff create a welcoming and lively atmosphere, and the casino's commitment
                                    to responsible gaming is evident throughout.
                                </Typography>
                                <a href="https://www.caesars.com/caesars-windsor?utm_campaign=google&utm_source=googl e&utm_medium=local&utm_term=WCL&utm_content=hotel&y_source=1_NDM2NjkxNC0 3MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D " className="btn-G" target="_target">
                                    Read more
                                </a>
                            </Box>
                        </Box>
                        <Box className="gaming-counting-wrapper">
                            <Box className="gaming-counting">
                                <marquee direction="down">
                                    <Typography>
                                        Gaming Experience
                                    </Typography>
                                </marquee>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>

                </Box>
            </GamingExperienceWraspper>
        </>
    )
}