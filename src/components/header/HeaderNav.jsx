import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import DehazeIcon from '@mui/icons-material/Dehaze';


function HeaderNav() {


  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <HeaderStyle >
        <Box className={showMediaIcons ? "headerNav mobile-menu-link" : "headerNav"} >
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
              <NavLink to='/RiverRockCasinoResort'>River Rock Casino Resort</NavLink>
            </li>
            <li>
              <NavLink to='/CasinoNovaScotia'>Casino Nova Scotia</NavLink>
            </li>
            <li>
              <NavLink to='/CasinoNewBruBrunswick'>Casino New Brunswick</NavLink>
            </li>
            <li>
              <NavLink to='/Contact'>Contact</NavLink>
            </li>

          </ul>
          <Box className="hamburger-Icon">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <DehazeIcon />
            </a>
          </Box>
        </Box>
      </HeaderStyle>
    </>
  );
}
export default HeaderNav;