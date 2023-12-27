import * as React from 'react';
import Button from '@mui/material/Button';
import './Locations.css'
import image from '../img/imglocations.png';

export const Locations = (props) => {
  
  const onClickingCeremony = () => {
    window.open("https://www.google.com/maps/dir//Josefa+Ortiz+de+Dom%C3%ADnguez+101,+Centro,+52600+Santiago+Tianguistenco+de+Galeana,+M%C3%A9x./@19.1818917,-99.5509854,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cdf3cd4407e943:0x834066bc2e26cbb5!2m2!1d-99.4685583!2d19.1819047?entry=ttu", "_blank");
  }

  const onClickingWedding = () => {
    window.open("https://www.google.com/maps/dir/19.2712941,-99.5714919/Hacienda+Real,+Manzana+001,+52645+Ex+-+Hacienda+de+Atenco,+M%C3%A9x./@19.2353294,-99.5832895,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85cd8b323ac211fb:0x9fe033d79f1b8998!2m2!1d-99.5127102!2d19.1845203?entry=ttu", "_blank");
  }

  return (
    <>
    <style>
        @import url('https://fonts.cdnfonts.com/css/ophelia-2');
    </style>
                
    <div style={{ display: 'flex' }} className={`${props.isMobile ? "MainContainer-Mobile" : "MainContainer"}`} id='Locations'>
        <div className={`${props.isMobile ? "Image-Container-Mobile" : "Image-Container"}`} >
            <img
                src={image}
                alt="anaychristian-1"
                className={`${props.isMobile ? "Image-Mobile" : "Image"}`}
            />
        </div>
        <div className={`${props.isMobile ? "Details-Container-Mobile" : "Details-Container"}`}>
            <div className={`${props.isMobile ? "Details-Mobile" : "Details"}`}>
                <h2 className='Details-title' style={{ fontFamily: "'Playfair Display', serif" }}>
                    Ceremonia
                </h2>
                <p className='Detail-Text'>
                    Parroquia de Santiago Apóstol,
                    Santiago Tianguistenco, 4:00 pm
                </p>
                <div className='Button-Container'>
                    <Button
                        onClick={onClickingCeremony}
                        style={{ color: 'white' }}
                    >
                        VER UBICACIÓN
                    </Button>
                </div>
            </div>
            <div className={`${props.isMobile ? "Details-Mobile" : "Details"}`}>
                <h2 className='Details-title' style={{ fontFamily: "'Playfair Display', serif" }}>
                    Recepción
                </h2>
                <p className='Detail-Text'>
                    Hacienda Real, Manzana 001,
                    52645
                    Ex - Hacienda de Atenco, Méx. 7:00 pm
                </p>
                <div className='Button-Container'>
                    <Button
                        onClick={onClickingWedding}
                        style={{ color: 'white' }}
                    >
                        VER UBICACIÓN
                    </Button>
                </div>
            </div>
        </div>
    </div>
    <div style={{ backgroundColor: 'black', height: '10px' }}></div>
    </>
  );
}