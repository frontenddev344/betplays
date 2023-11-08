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
                                Halifax's Casino Nova Scotia offers an array of dining options, allowing guests to
                                enjoy a variety of culinary delights:
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
                                    Entertainment
                                </Typography>
                            </Box>
                            <Box className="dataContent top">
                                <Typography className="dataContentText">
                                    The Schooner Showroom, within the Halifax location, frequently hosts live entertainment events,
                                    including concerts, comedy shows, and performances by renowned artists and entertainers.
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
