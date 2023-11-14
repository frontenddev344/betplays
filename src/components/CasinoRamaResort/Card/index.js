import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { CardWrapper } from "./style";
import Img from "../../../assest/h7.jpg";

export default function Card() {
    return (
        <>
            <CardWrapper>
                <Box className="CardWrapper" component="section">
                    <Container>
                        <Box className="CardInnerWrapper">
                            <Box className="img">
                                <img src={Img} alt="img" />
                            </Box>
                            <Box className="content">
                                <Typography variant="h3">
                                    Entertainment
                                </Typography>
                                <Typography>
                                    The resort's entertainment options are second to none.
                                    The state-of-the-art entertainment center, known as the
                                    Entertainment Centre at Casino Rama, regularly hosts world-class
                                    artists, bands, and comedians. Past performers include legends like
                                    Jerry Seinfeld, Tony Bennett, and Mariah Carey. The venue provides an
                                    intimate setting for unforgettable live shows.
                                </Typography>
                                <a href="https://www.casinorama.com/" className="btn-G" target="_target">
                                    Read more
                                </a>

                            </Box>
                        </Box>
                    </Container>
                </Box>
            </CardWrapper>

        </>
    )
}