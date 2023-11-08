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
                            <NavLink to='/caesars-windsor-hotel-casino'>Caesars Windsor Hotel & Casino </NavLink>
                        </li>
                        <li>
                            <NavLink to='/casinodu-lac-leamy'>Casino du Lac-Leamy</NavLink>
                        </li>
                        <li>
                            <NavLink to='/casino-rama-resort'>Casino Rama Resort</NavLink>
                        </li>
                        <li>
                            <NavLink to='/the-niagara-fallsview-casino-resort'>The Niagara Fallsview Casino Resort </NavLink>
                        </li>
                        <li>
                            <NavLink to='/casino-de-montreal'>Casino de Montréal</NavLink>
                        </li>
                        <li>
                            <NavLink to='/river-rock-casino-resort'>River Rock Casino Resort</NavLink>
                        </li>
                        <li>
                            <NavLink to='/casino-nova-scotia'>Casino Nova Scotia</NavLink>
                        </li>
                        <li>
                            <NavLink to='/casino-new-bru-brunswick'>Casino New Brunswick</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink to='/term-and-condition'>Terms and Conditions</NavLink>
                        </li>

                    </ul>
                </Box>
            </FooterWrapper>
        </>
    );
}
export default HeaderNav;