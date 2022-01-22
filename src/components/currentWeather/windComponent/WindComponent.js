import {
    windBox,
    windWrapper,
    iconWind,
    windCompass,
    iconCompass,
    windTitle
} from './styles.module.css'
import arrow from "../../../assets/icons/arrow.png";
import compass from "../../../assets/icons/compass.png";

const WindComponent = ({weather}) =>{
    return(
        <div className={windBox}>
            {weather && weather.main &&
                <div className={windWrapper}>
                    <div className="windDirection">
                        <img
                            className={iconWind}
                            style={{transform: 'rotate(' + (weather.wind.deg + 90) + 'deg)'}}
                            src={arrow} alt='arrow'
                        />
                    </div>
                    <div className={windCompass}>
                        <img
                            className={iconCompass}
                            src={compass}
                            alt='compass'
                        />
                    </div>
                    <div className={windTitle}>
                        <p>{Math.round(weather.wind.speed)}m/s</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default WindComponent;