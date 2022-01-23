import iconSun from "../../../assets/icons/weatherIcons/sun.png";
import iconClouds from "../../../assets/icons/weatherIcons/clouds.png";
import iconRain from "../../../assets/icons/weatherIcons/rain.png";
import iconThunder from "../../../assets/icons/weatherIcons/thunder.png";
import iconFog from "../../../assets/icons/weatherIcons/fog.png";
import iconSnow from "../../../assets/icons/weatherIcons/snow.png";

const IconWeatherComponent = ({weather:{main, description} = {}, className}) => {
    let link;
    switch (main){
        case 'Clear':
            link = iconSun
            break;
        case 'Clouds':
            link = iconClouds
            break;
        case 'Rain':
            (description === "moderate rain") ?
                link = iconRain
                :
                link = iconThunder
            break;
        case 'Fog':
            link = iconFog
            break;
        case 'Haze':
            link = iconFog
            break;
        case 'Smoke':
            link = iconFog
            break;
        case 'Snow':
            link = iconSnow
            break;
        default:
            link = iconSun
            break;
    }

    return (<div className='imageWeather'>
        <img className={className} src={link} alt='iconWeather'/>
    </div>)
}

export default IconWeatherComponent ;
