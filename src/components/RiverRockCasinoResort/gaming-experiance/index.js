import React from "react";
import { GamingExperienceWraspper } from "./style";
import { Box, Typography } from "@mui/material";
import Gimg from "../../../assest/g1.jpg";
import { Data } from "./Data";


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
                                    Here's a comprehensive look at this stunning resort
                                    {/* <span>resort</span> */}
                                </Typography>
                                <Typography className="text mt">
                                    Gaming at River Rock Casino
                                </Typography>
                                <Typography className="text mt">
                                    The casino at River Rock spans an impressive 70,000 square feet and delivers a diverse selection of gaming options for guests
                                </Typography>

                                <Box className="loopData">
                                    <ul>
                                        {Data?.map((item, index) => (
                                            <li key={index}>
                                                <span>{item.listHeading}</span>
                                                {item.listContent}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>


                                <a href="https://greatcanadian.com/destinations/britishcolumbia/riverrock/" className="btn-G" target="_target">
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