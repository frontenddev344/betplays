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
                            <NavLink to='/CaesarsWindsorHotelCasino'>Caesars Windsor Hotel & Casino </NavLink>
                        </li>
                        <li>
                            <NavLink to='/CasinoduLacLeamy'>Casino du Lac-Leamy</NavLink>
                        </li>
                        <li>
                            <NavLink to='/CasinoRamaResort'>Casino Rama Resort</NavLink>
                        </li>
                        <li>
                            <NavLink to='/TheNiagaraFallsviewCasinoResort'>The Niagara Fallsview Casino Resort </NavLink>
                        </li>
                        <li>
                            <NavLink to='/CasinoDeMontreal'>Casino de Montréal</NavLink>
                        </li>
                        <li>
                            <NavLink to='/CasinoNovaScotia'>River Rock Casino Resort</NavLink>
                        </li>
                        <li>
                            <NavLink to='/RiverRockCasinoResort'>Casino Nova Scotia</NavLink>
                        </li>
                        <li>
                            <NavLink to='/CasinoNewBruBrunswick'>Casino New Brunswick</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact'>Contact</NavLink>
                        </li>

                    </ul>
                </Box>
            </FooterWrapper>
        </>
    );
}
export default HeaderNav;