import React from "react";
import { FooterWrapper } from "./style";
import { Box, Container, Typography } from "@mui/material";
import FooterNav from "../footer/FooterNav";
import logo from "../../assest/logo.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <>
            <FooterWrapper>
                <Box component='section' className="footerwrapper">
                    <Container>
                        <Box className="footerInnerWrapper">
                            <Box className="logo">
                                <img src={logo} alt="Shape" />
                                <Box className="address-Bar">
                                    <Typography>
                                        <span>Address : </span>
                                        5455 De Gaspe Avenue
                                    </Typography>
                                    <Typography>
                                        5455 De Gaspe Avenue Suite 710, Montreal, QC, H2T 3B3
                                    </Typography>
                                    <Typography>
                                        <span>Telephone : </span>
                                        (844) 774-3296
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="menu">
                                {/* menu nav */}
                                <FooterNav />

                            </Box>
                            <Box className="icon-links">
                                <Typography variant="h6" className="footer-head">Social icon</Typography>
                                <Box className="icon-links-wrapper">
                                    <Box className="icons">
                                        <FaFacebookF />
                                    </Box>
                                    <Box className="icons">
                                        <FaYoutube />
                                    </Box>
                                    <Box className="icons">
                                        <FaTwitter />
                                    </Box>
                                    <Box className="icons">
                                        <FaLinkedinIn />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="bottom-footer">
                            <Typography>© 2023 Offresetoiles. tous les droits sont réservés.</Typography>
                        </Box>
                    </Container>
                </Box>
            </FooterWrapper>
        </>
    );
}

export default Footer;
