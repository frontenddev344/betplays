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
                                {/* <Typography variant="h3" className="h3">
                                    Entertainment
                                </Typography> */}
                                <Typography>
                                    The casino offers an extensive gaming experience, with a multitude of options
                                    to cater to every visitor's preferences
                                </Typography>
                                {/* <Typography variant="h5" className="h3">
                                    The casino offers
                                </Typography> */}
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
                                <a href="https://casinos.lotoquebec.com/fr/montreal/accueil" className="btn-G" target="_target">
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