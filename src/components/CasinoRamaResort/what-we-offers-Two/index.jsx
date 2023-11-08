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
                                Accommodations & Amenities
                            </Typography>
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                Casino Rama Resort features a luxurious hotel with over 300 rooms and suites.
                                The rooms are elegantly appointed, offering a relaxing and comfortable retreat after
                                a day of gaming and entertainment. Some rooms provide breathtaking views of Lake
                                Couchiching or the beautiful surrounding landscape.
                            </Typography>
                            <Typography className="dataContentText">
                                Food enthusiasts will find plenty to savor at Casino Rama Resort.
                                The resort features a variety of dining options, including
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
                                Amenities
                            </Typography>
                            {/* <Box className="img">
                                <img src={pathImg} alt="Shape" />
                            </Box> */}
                        </Box>
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                                Beyond gaming, entertainment, and dining, Casino Rama Resort offers additional amenities for guests
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
