import React from "react";
import { GamingExperienceWraspper } from "./style";
import { Box, Typography } from "@mui/material";
import Gimg from "../../../assest/g1.jpg";


export default function GamingExperience() {
    return (
        <>
            <GamingExperienceWraspper>
                <Box component='section' className="gaming-wrapper">
                    <Box className="gaming-content">
                        <Box className="gaming-counting-wrapper">
                            <Box className="gaming-counting">
                                <marquee direction="down">
                                    <Typography>
                                        Entertainment
                                    </Typography>
                                </marquee>
                            </Box>
                        </Box>
                        <Box className="gaming-text">
                            <Box className="headingstyle">
                                <Typography className="heading">
                                    The Théâtre du Casino
                                    <span>Casino</span>
                                </Typography>
                                <Typography className="text">
                                    a part of the complex, frequently hosts a wide range of entertainment events,
                                    including concerts, comedy shows, and live performances by acclaimed artists.
                                    The theater's intimate atmosphere allows guests to get up close and personal with
                                    the talent.
                                </Typography>
                                <a href="https://casinos.lotoquebec.com/fr/lacleamy/accueil" className="btn-G" target="_target">
                                    Read more
                                </a>
                            </Box>
                        </Box>

                    </Box>
                    <Box className="gaming-img">
                        <Box className="img">
                            <img src={Gimg} alt="img" />
                        </Box>
                    </Box>

                </Box>
                <Box>

                </Box>
            </GamingExperienceWraspper>
        </>
    )
}