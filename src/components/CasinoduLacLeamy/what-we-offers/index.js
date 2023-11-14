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
                                Gaming at Casino du Lac-Leamy
                            </Typography>
                            <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box>
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                Casino du Lac-Leamy provides an exciting gaming environment with a wide
                                variety of options for guests. The casino boast
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
                    </Box>
                </Container>
            </Box>
        </WhatWeOfferWrapper>
    );
}

export default WhatWeOffer;
