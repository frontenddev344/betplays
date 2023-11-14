import React from "react";
import { Box, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data } from "./Data";

function WhatWeOffer() {
    return (
        <WhatWeOfferWrapper>
            <Box component='section' className="whatofferwrapper">
                <Container>
                    <Box className="whatofferInnerwrapper">
                        {/* <Box className="headingstyle">
                            <Typography className="heading">
                                What We Offer
                                <span>Offer</span>
                            </Typography>
                        </Box> */}
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
