import * as React from 'react';
import './Header.css'
import { MenuHeader } from './MenuHeader';
import { MenuMobile } from './MenuMobile';

export const NavBar = ( props ) => {
  
  if (props.isMobile) {
    return (
      <header className={`${props.isMobile ? "Header-Mobile" : "Header"}`} style={{ fontFamily: 'sans-serif' }}>
        <MenuMobile />
      </header>
    )
  }
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <header className={`${props.isMobile ? "Header-Mobile" : "Header"}`} style={{ fontFamily: 'sans-serif' }}>
        <MenuHeader />
      </header>
    // </Box>
  );
}
