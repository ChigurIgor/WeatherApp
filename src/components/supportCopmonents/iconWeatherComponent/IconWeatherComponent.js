import iconSun from "../../../assets/icons/weatherIcons/sun.png";
import iconClouds from "../../../assets/icons/weatherIcons/clouds.png";
import iconRain from "../../../assets/icons/weatherIcons/rain.png";
import iconThunder from "../../../assets/icons/weatherIcons/thunder.png";
import iconFog from "../../../assets/icons/weatherIcons/fog.png";
import iconSnow from "../../../assets/icons/weatherIcons/snow.png";

const IconWeatherComponent = ({weather, className}) => {
    let link = "";
    switch (weather.main){
        case 'Clear':
            link = iconSun
            break;
        case 'Clouds':
            link = iconClouds
            break;
        case 'Rain':
            (weather.description === "moderate rain") ?
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
