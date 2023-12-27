import * as React from 'react';
import './Gifts.css'

export const Gifts = (props) => {

  const onClickGifts = () => {
    window.open(`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51344161`, "_blank");
  };

  return (
    <>
    <style>
        @import url('https://fonts.cdnfonts.com/css/ophelia-2');
    </style>
    <div style={{ backgroundColor: '#faf5ef' }} id='Gifts'>
      <div style={{ backgroundColor: 'black', height: '10px' }}></div>
      <div className={`${props.isMobile ? "Container-Gifts-Mobile" : "Container-Gifts"}`}>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Código de vestimenta: Formal</h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Mesa de regalo:</h1>
          <div className='Liverpool'><p style={{ marginLeft: '20px', marginRight: '20px', fontFamily: "'Playfair Display', serif"}} onClick={onClickGifts} >Liverpool</p></div>
      </div>
      <div style={{ backgroundColor: 'black', height: '10px' }}></div>
    </div>
    </>
  );
}
