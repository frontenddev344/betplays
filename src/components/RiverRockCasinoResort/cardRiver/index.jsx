import React from "react";
import { CardRiverWRapper } from "./style";
import { Box, Typography, Container } from "@mui/material";
import pathImg from "../../../assest/_Path_.png";
import  cardImg  from "../../../assest/wcl-gaming.jpg";
import { Data } from "./Data";



export default function CardRiver() {
    return (
        <>
            <CardRiverWRapper>
                <Box className="cardRiver" component="section">
                    <Container>
                        <Box className="cardRiverInner">
                            <Box className="headingstyle">
                                <Typography className="heading">
                                    Casino Nova Scotia Halifax
                                </Typography>
                                <Box className="img">
                                    <img src={pathImg} alt="Shape" />
                                </Box>
                            </Box>
                            <Box className="Text_heading">
                                <Typography>
                                    Gaming at Casino Nova Scotia Halifax
                                </Typography>
                                <Typography>
                                    The Halifax location features a diverse gaming floor with numerous options to suit a
                                    range of preferences
                                </Typography>
                            </Box>
                            <Box className="cardWrapper">
                                <Box className="text-data">
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
                                    <a href="https://casinonovascotia.com/" class="btn-G" target="_target">Read more</a>
                                </Box>
                                <Box className="imgWrapper">
                                    <img src={cardImg} alt="gaming-img" />
                                </Box>
                            </Box>

                        </Box>
                    </Container>
                </Box>
            </CardRiverWRapper>
        </>
    )
}