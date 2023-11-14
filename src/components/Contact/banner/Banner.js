import React from "react";
import { Box, Typography } from "@mui/material";
import { BannerWrapper } from "./style";
import pathImg from "../../../assest/_Path_.png";

function SlideBanner() {
  return (
    <>
      <BannerWrapper>
        <Box component='section' className="bannerMain">
          <Box className="headingContent">
            <Box className="headingstyle">
              <Typography variant="h1">
                Contact
              </Typography>
              <Box className="img">
                <img src={pathImg} alt="Shape" />
              </Box>
            </Box>

            <Typography component="subtitle" className="text">

            </Typography>
          </Box>
        </Box>
      </BannerWrapper>
    </>
  )
} export default SlideBanner;