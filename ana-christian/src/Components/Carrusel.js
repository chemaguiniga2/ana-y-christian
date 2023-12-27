import * as React from 'react';
import './Carrusel.css'
import imageOne from '../img/anaychristian-1.jpeg';
import imageTwo from '../img/carruseldos.jpeg';
import imageThree from '../img/carruseltres.jpeg';

export const Carrusel = (props) => {

  return (
    <>
    <div className={`${props.isMobile ? "Main-Container-Carrusel-Mobile" : "Main-Container-Carrusel"}`}>
        <div className={`${props.isMobile ? "Img-Col-Mobile" : "Img-Col"}`}>
            <img
                src={imageOne}
                alt="anaychristian-1"
                className={`${props.isMobile ? "Image-Carrusel-Mobile" : "Image-Carrusel"}`}
            />
        </div>
        <div className={`${props.isMobile ? "Img-Col-Mobile" : "Img-Col"}`}>
            <img
                src={imageTwo}
                alt="anaychristian-1"
                className={`${props.isMobile ? "Image-Carrusel-Mobile" : "Image-Carrusel"}`}
            />
        </div>
        <div className={`${props.isMobile ? "Img-Col-Mobile" : "Img-Col"}`}>
            <img
                src={imageThree}
                alt="anaychristian-1"
                className={`${props.isMobile ? "Image-Carrusel-Mobile" : "Image-Carrusel"}`}
            />
        </div>
    </div>
    <div style={{ backgroundColor: 'black', height: '10px' }}></div>
    {/* <div style={{ height: '100px' }}></div>
    <div style={{ backgroundColor: 'black', height: '10px' }}></div> */}
    </>
  );
}
