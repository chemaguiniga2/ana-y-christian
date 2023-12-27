import image from '../img/primer-fondo.png';
import imageMobile from '../img/fondo-mobile.jpeg';
import './MainBackground.css'

export const MainBackground = (props) => {

    const backgroundImage = props.isMobile ? imageMobile : image;

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={`${props.isMobile ? "Background-Mobile" : "Background"}`}>
        </div>
    )
}