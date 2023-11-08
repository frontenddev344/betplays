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