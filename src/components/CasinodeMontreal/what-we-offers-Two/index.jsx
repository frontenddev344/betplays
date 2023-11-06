import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data2 } from "./Data2";
import pathImg from "../../../assest/_Path_.png";

function WhatWeOfferTwo() {
    return (
        <WhatWeOfferWrapper>
            <Box component='section' className="whatofferwrapper">
                <Container>
                    <Box className="whatofferInnerwrapper">
                        <Box className="headingstyle">
                            <Typography className="heading">
                                Dining and Culinary Experiences
                                <span>Experiences</span>
                            </Typography>
                            {/* <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box> */}
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                The Cabaret du Casino, a part of the complex, regularly hosts a
                                variety of entertainment events, including concerts, comedy shows,
                                and live performances by renowned artists. The venue's intimate setting
                                allows guests to get up close and personal with the performers.
                            </Typography>
                        </Box>

                        {/* section repeat */}
                        <Box className="headingstyle repeat-sec">
                            <Typography className="heading">
                                Amenities
                            </Typography>
                            <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box>
                        </Box>
                        <Box className="whatofferlist">
                            <ul>
                                {Data2?.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.listHeading}</span>
                                        {item.listContent}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </WhatWeOfferWrapper>
    );
}

export default WhatWeOfferTwo;
