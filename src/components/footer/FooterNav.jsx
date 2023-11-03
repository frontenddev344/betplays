import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FooterWrapper } from "./style";

function HeaderNav() {

    return (
        <>
            <FooterWrapper >
                <Box >
                    <Typography variant="h6" className="footer-head">Menu</Typography>
                    <ul className="headerNav">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink >Caesars Windsor Hotel & Casino </NavLink>
                        </li>
                        <li>
                            <NavLink >Casino du Lac-Leamy</NavLink>
                        </li>
                        <li>
                            <NavLink >Casino Rama Resort</NavLink>
                        </li>
                        <li>
                            <NavLink >The Niagara Fallsview Casino Resort </NavLink>
                        </li>
                        <li>
                            <NavLink >Casino de Montréal</NavLink>
                        </li>
                        <li>
                            <NavLink >River Rock Casino Resort</NavLink>
                        </li>
                        <li>
                            <NavLink >Casino Nova Scotia</NavLink>
                        </li>
                        <li>
                            <NavLink >Casino New Brunswick</NavLink>
                        </li>
                        <li>
                            <NavLink >Contact</NavLink>
                        </li>

                    </ul>
                </Box>
            </FooterWrapper>
        </>
    );
}
export default HeaderNav;