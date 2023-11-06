import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { CardWrapper } from "./style";
import Img from "../../../assest/home2.jpg";
import { Data } from "./Data";

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
                                <Typography variant="h3" className="h3">
                                    Entertainment
                                </Typography>
                                <Typography>
                                    The resort's crown jewel is The Avalon Theatre, which regularly hosts world-renowned
                                    artists, bands, and comedians. Its intimate setting provides a unique opportunity
                                    to witness unforgettable live performances, often featuring top-tier talent. Whether
                                    it's a music concert, a comedy show, or a theatrical production, the entertainment
                                    options are diverse and of the highest caliber.
                                </Typography>
                                <Typography variant="h5" className="h3">
                                    The casino offers
                                </Typography>
                                <Box className="whatofferlist">
                                    <ul>
                                        {Data.map((item, index) => (
                                            <li key={index}>
                                                <span>{item.listHeading}</span>
                                                {item.listContent}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
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