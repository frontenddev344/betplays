import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
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