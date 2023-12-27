import * as React from 'react';
import './Accomodation.css'
import image from '../img/imgacommodation.jpeg';

export const Accomodation = (props) => {

  return (
    <>
    <style>
        @import url('https://fonts.cdnfonts.com/css/ophelia-2');
    </style>
    <div className={`${props.isMobile ? "Main-Container-Mobile" : "Main-Container"}`} id='Accomodation'>
        <div className='Description'>
            <h1 className='Accomodation-title' style={{ fontFamily: "'Playfair Display', serif" }}>Alojamiento</h1>
            <p>Mansión Inn Carretera La Marquesa Tenango km. 23.2, Mezapa
            Sección I, 52613 Santiago Tianguistenco de Galeana, Méx.
            (mencionar Boda Ana & Cristian para la reservación)
            </p>
            <p># de reservación - 7131354070</p>
        </div>
        <div className='Image-Container-Accomodation'>
            <img
                src={image}
                alt="anaychristian-1"
                className={`${props.isMobile ? "Image-Accomodation-Mobile" : "Image-Accomodation"}`}
            />
        </div>
    </div>
    </>
  );
}


// https://wa.me/15531257025?text=Hola%20soy%20fulano%20y%20%20me%20gustaria%20confimar%20mi%20asistencia%20a%20tu%20boda