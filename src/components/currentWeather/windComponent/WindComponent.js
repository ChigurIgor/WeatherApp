import styles from './styles.module.css'
import arrow from "../../../assets/icons/arrow.png";
import compass from "../../../assets/icons/compass.png";

const WindComponent = ({weather}) =>{
    return(
        <div className={styles.windBox}>
            {weather !== undefined && weather.main !== undefined &&
                <div className={styles.windWrapper}>
                    <div className="windDirection">
                        <img
                            className={styles.iconWind}
                            style={{transform: 'rotate(' + (weather.wind.deg + 90) + 'deg)'}}
                            src={arrow} alt='arrow'
                        />
                    </div>
                    <div className={styles.windCompass}>
                        <img
                            className={styles.iconCompass}
                            src={compass}
                            alt='compass'
                        />
                    </div>
                    <div className={styles.windTitle}>
                        <p>{Math.round(weather.wind.speed)}m/s</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default WindComponent;