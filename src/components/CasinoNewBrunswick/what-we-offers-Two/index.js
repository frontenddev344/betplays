import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data } from "./Data";
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
                                Gaming at Casino New Brunswick
                            </Typography>
                            <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box>
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                Casino New Brunswick provides a comprehensive gaming experience that caters to a wide range of preferences
                            </Typography>
                        </Box>
                        <Box className="whatofferlist">
                            <ul>
                                {Data?.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.listHeading}</span>
                                        {item.listContent}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        {/* section repeat */}
                        <Box className="headingstyle repeat-sec">
                            <Typography className="heading">
                                Dining and Culinary Experiences
                            </Typography>
                            <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box>
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                Casino New Brunswick offers a diverse range of dining options, ensuring that guests can savor a variety of culinary delights:
                            </Typography>
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
