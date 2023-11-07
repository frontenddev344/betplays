import React from "react";
import { EntertenmentWrapper } from "./style";
import { Box, Typography, Container } from "@mui/material";
import { Data } from "./Data";

export default function Entertenment() {
    return (
        <>
            <EntertenmentWrapper>
                <Box component="section" className="entertenment-wrapper">
                    <Container>
                        <Box className="entertenment-inner-wrapper">
                            <Box className="left-Data">
                                <Typography component="h4">
                                    Entertainment
                                </Typography>
                                <Typography>
                                    The casino's Molson Canadian Centre is a major attraction, regularly hosting world-class entertainment events, including concerts, comedy shows, and performances by acclaimed artists and entertainers.
                                </Typography>
                            </Box>
                            <Box className="right-Data">
                                <Typography component="h4">
                                    Amenities
                                </Typography>
                                <Box className="whatofferlist">
                                    {Data?.map((item, index) => (
                                        <ul>
                                            <li key={index}>
                                                <span>{item.listHeading}</span>
                                                {item.listContent}
                                                <span className="secondtext">

                                                </span>
                                            </li>
                                        </ul>
                                    ))}
                                </Box>

                            </Box>
                        </Box>
                    </Container>
                </Box>
            </EntertenmentWrapper>
        </>
    )
}