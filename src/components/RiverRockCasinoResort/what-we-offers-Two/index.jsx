import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { WhatWeOfferWrapper } from "./style";
import { Data } from "./Data";
import { Data2 } from "./Data2";

function WhatWeOfferTwo() {
    return (
        <WhatWeOfferWrapper>
            <Box component='section' className="whatofferwrapper">
                <Container>
                    <Box className="whatofferInnerwrapper">
                        <Box className="headingstyle">
                            <Typography className="heading">
                                Dining and Culinary Experiences
                            </Typography>
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                River Rock Casino Resort offers a rich variety of dining options,
                                ensuring guests can indulge in an array of culinary delights
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
                            <Box className="headingstyle">
                                <Typography className="heading">
                                    Entertainment & Amenities
                                </Typography>
                            </Box>
                            <Box className="dataContent top">
                                <Typography className="dataContentText">
                                    The River Rock Show Theatre is a highlight of the resort, regularly
                                    hosting an eclectic mix of live performances, including concerts, comedy shows,
                                    and other events by celebrated artists and entertainers.
                                </Typography>
                            </Box>
                        </Box>
                        {/* section repeat */}
                        <Box className="headingstyle">
                            <Typography className="heading">
                                Amenities
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
