import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data } from "./Data";

function WhatWeOffer() {
    return (
        <WhatWeOfferWrapper>
            <Box component='section' className="whatofferwrapper">
                <Container>
                    <Box className="whatofferInnerwrapper">
                        <Box className="headingstyle">
                            <Typography className="heading">
                                Casino Nova Scotia Sydney
                                <span>Casino</span>
                            </Typography>
                        </Box>
                        <Box className="whatofferlist">
                            <Box className="doubleHeading">
                            <Typography className="heading1">
                                Gaming at Casino Nova Scotia Sydney
                            </Typography>
                            <Typography className="heading1">
                                The Sydney location offers a gaming experience that reflects the friendly Maritime spirit
                            </Typography>
                            </Box>
                            
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
