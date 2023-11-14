import React from "react";
import { Box, Typography } from "@mui/material";
import { BgCollunmSecWrapper } from "./style";
import { Data } from "./Data";


export default function BgCollunmSec() {
    return (
        <>
            <BgCollunmSecWrapper>
                <Box className="BgCollunm" component="section">
                    <Box className="content">
                        <Box className="text">
                            <Typography className="heading">
                                Gaming at Casino Rama
                            </Typography>
                            <Typography >
                                Casino Rama boasts one of the largest and most diverse gaming floors
                                in Ontario. Whether you're a fan of slots, table games, or poker, there's
                                something for everyone. The gaming floor spans over 192,000 square
                                feet and features
                            </Typography>
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
                        </Box>
                    </Box>
                    <Box className="imggallry">

                    </Box>
                </Box>
            </BgCollunmSecWrapper>
        </>
    )
}
