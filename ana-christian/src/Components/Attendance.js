import * as React from 'react';
import './Attendance.css'
import { AttendanceSelection } from './AttendanceSelection';

export const Attendance = (props) => {

  return (
    <>
    <style>
        @import url('https://fonts.cdnfonts.com/css/ophelia-2');
    </style>
    <div className={`${props.isMobile ? "Container-Attendance-Mobile" : "Container-Attendance"}`} id='Confirmation'>
        <div className={`${props.isMobile ? "Container-Label-Mobile" : "Container-Label"}`}>
            <p className='Attendance-title' style={{ fontFamily: "'Playfair Display', serif" }}>Confirmación</p>
        </div>
        <div className={`${props.isMobile ? "Container-Label-Mobile" : "Container-Label"}`}>
            <p className='Attendance-title' style={{ fontFamily: "'Playfair Display', serif" }}>Núm. de personas</p>
        </div>
        <AttendanceSelection />
    </div>
    <div style={{ backgroundColor: 'black', height: '10px' }}></div>
    </>
  );
}


// https://wa.me/15531257025?text=Hola%20soy%20fulano%20y%20%20me%20gustaria%20confimar%20mi%20asistencia%20a%20tu%20boda