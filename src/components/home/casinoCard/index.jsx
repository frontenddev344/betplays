import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { CasinoCardWrapper } from "./style";
import { Data } from "./Data";

function CasinoCard() {
    return (
        <CasinoCardWrapper>
            <Box component='section' className="casinoCardwrapper">
                <Container>
                    <Box className="casinoCardInnerwrapper">
                        <Box className="headingstyle">
                            <Typography className="heading">
                                Your Path to Casino Greatness Starts Here
                                <span>Casino</span>
                            </Typography>
                        </Box>
                        <Box className="cardTopHeading">
                            <Typography>Ready to discover the most thrilling casinos
                                in Canada? Navigate our user-friendly hub to compare, explore,
                                and play. Whether you're in Ontario, British Columbia, Quebec,
                                or anywhere in between, Bet-Plays.com provides reviews on casinos
                                across several Canadian locations.</Typography>
                        </Box>
                        {Data?.map((item, index) => (
                            <Box key={index} className="cardsec">
                                <Box className="card-body">
                                    <Box className="card-img"><img src={item.hotelImg} alt="hotel" /></Box>
                                    <Box className="card-data">
                                        <Typography variant="h5">{item.HotelName}</Typography>
                                        <Typography>{item.HotelContent}</Typography>
                                    </Box>
                                    <Box className="card-link">
                                        <Link href={item.hotelLink} target="_blank">view more</Link>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </CasinoCardWrapper>
    );
}

export default CasinoCard;
