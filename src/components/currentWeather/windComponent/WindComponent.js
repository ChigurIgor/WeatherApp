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

const WindComponent = ({weather, weather:{main, wind:{deg, speed}= {} } = {} }) =>{
    return(
        <>
            {weather && main &&
                <div className={windBox}>
                    <div className={windWrapper}>
                        <div className="windDirection">
                            <img
                                className={iconWind}
                                style={{transform: 'rotate(' + (deg + 90) + 'deg)'}}
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
                            <p>{Math.round(speed)}m/s</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default WindComponent;