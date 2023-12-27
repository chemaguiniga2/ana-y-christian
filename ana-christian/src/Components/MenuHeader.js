import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Header.css'

export const MenuHeader = () => {

  return (
    <>
    <Toolbar>
        <Button
        variant='text'
        size="large"
        color="inherit"
        sx={{ mr: 2 }}
        href='#Locations'
        >
        <p>ceremonia & recepción</p>
        </Button>
        <Button
        variant='text'
        size="large"
        color="inherit"
        sx={{ mr: 2 }}
        href='#Confirmation'
        >
        <p>confirmación</p>
        </Button>
    </Toolbar>
    <h1 style={{ alignSelf: 'center', fontFamily: "'Playfair Display', serif", fontSize: '89px', marginTop: '100px' }} >A&C</h1>
    <Toolbar>
        <Button
        variant='text'
        size="large"
        color="inherit"
        sx={{ mr: 2 }}
        href='#Accomodation'
        >
        <p>alojamiento</p>
        </Button>
        <Button
        variant='text'
        size="large"
        color="inherit"
        sx={{ mr: 2 }}
        href='#Gifts'
        >
        <p>mesa de regalos</p>
        </Button>
    </Toolbar>
    </>
  );
}
