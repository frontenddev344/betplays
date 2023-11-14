import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data } from "./Data";
import pathImg from "../../../assest/_Path_.png";

function WhatWeOffer() {
    return (
        <WhatWeOfferWrapper>
            <Box component='section' className="whatofferwrapper">
                <Container>
                    <Box className="whatofferInnerwrapper">
                        <Box className="headingstyle">
                            <Typography className="heading">
                                Dining and Culinary Experiences
                            </Typography>
                            <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box>
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                            Casino de Montréal offers a remarkable range of dining options, ensuring that guests can savor a diverse culinary journey
                            </Typography>
                        </Box>
                        <Box className="whatofferlist">
                            <ul>
                                {Data?.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.listHeading}</span>
                                        {item.listContent}

                                        <span className="secondtext">
                                            {item.listContent2}
                                        </span>
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

export default WhatWeOffer;
