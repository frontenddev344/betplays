import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data } from "./Data";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

function WhatWeOffer() {
    return (
        <WhatWeOfferWrapper>
            <Box component='section' className="whatofferwrapper">
                <Container>
                    <Box className="whatofferInnerwrapper">
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

                        <Box className="icon-links-wrapper">
                            <Box className="icons">
                                <FaFacebookF />
                            </Box>
                            <Box className="icons">
                                <FaTwitter />
                            </Box>
                        </Box>
                        <Box className="btm-text">
                            <Typography>
                                We appreciate your interest in our casino review website, and we're committed to delivering accurate and valuable information for your gaming choices. Your input helps us improve our services, so please don't hesitate to get in touch. Your satisfaction is our priority.
                            </Typography>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </WhatWeOfferWrapper>
    );
}

export default WhatWeOffer;
