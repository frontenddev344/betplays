import React from "react";
import { HeaderStyle } from "./style";
import { Box, Container } from "@mui/material";
import HeaderNav from "./HeaderNav";
import Logo from "../../assest/logo.png";



function Header() {
    return (
        <>
            <HeaderStyle>
                <header className="headerBar">
                    <Container >
                        <Box className="headerWrapper">

                            {/* logo bar */}
                            <Box className="logo">


                                <a href="/">
                                    <img src={Logo} alt="logo" />
                                </a>

                            </Box>
                            {/* nav links */}
                            <HeaderNav />
                        </Box>
                    </Container>
                </header>
            </HeaderStyle>
        </>
    );
}
export default Header;