import image from '../img/final.png';
import imageMobile from '../img/fondo-final-mobile.jpeg';
import './MainBackground.css'

export const Final = (props) => {

    const backgroundImage = props.isMobile ? imageMobile : image;

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={`${props.isMobile ? "Background-Mobile" : "Background"}`}>
        </div>
    )
}