import styles from './styles.module.css'
import {ZERO_TEMPERATURE} from "../../../redux/constants";

const WeatherComponent = ({weather}) => {
    return (
        <>
            {weather !== undefined && weather.main !== undefined &&
            <div className={styles.weatherBox}>
                <div className={styles.tempBox}>
                    <div className={styles.temp}>
                        {Math.round((weather.main.temp + ZERO_TEMPERATURE))}&#176;
                    </div>
                    <div className={styles.tempDaily}>
                        {Math.round((weather.main.temp_min + ZERO_TEMPERATURE))}&#176;  {Math.round((weather.main.temp_max + ZERO_TEMPERATURE))}&#176;
                    </div>
                </div>
                <div className={styles.weather}>
                    {weather.weather[0].main}
                </div>
            </div>
            }
            </>
    )
}
export default WeatherComponent;