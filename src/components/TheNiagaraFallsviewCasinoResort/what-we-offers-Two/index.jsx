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
                                The resort's hotel boasts over 370 rooms and suites that offer opulent comfort. Guests have the privilege of enjoying views of either Niagara Falls or the city. The rooms feature modern amenities, plush bedding, and well-appointed bathrooms, making them an inviting retreat after a day of gaming and entertainment.
                            </Typography>
                            <Typography className="dataContentText">
                                Niagara Fallsview Casino Resort offers a rich assortment of dining options, including
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
                                Beyond gaming, entertainment, and dining, Niagara Fallsview Casino Resort offers additional amenities for guests
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
                        <Box className="dataContent">
                            <Typography className="dataContentText">
                            Niagara Fallsview Casino Resort is a spectacular destination 
                            that seamlessly blends world-class gaming, entertainment, dining, and 
                            luxury accommodations with the natural wonder of Niagara Falls as its 
                            backdrop. Whether you're a gaming enthusiast, a lover of live entertainment, 
                            or simply seeking a luxurious retreat in a breathtaking setting, this resort offers a 
                            comprehensive package of excitement and elegance. It's a place where the thrill of 
                            gaming meets the splendor of nature, making it a must-visit destination for a memorable getaway. 
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </WhatWeOfferWrapper>
    );
}

export default WhatWeOfferTwo;
