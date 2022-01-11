import styles from './styles.module.css'
import {ZERO_TEMPERATURE} from "../../../redux/constants";

const WeatherComponent = ({weather, weather: {main, main: {temp, temp_min, temp_max} = {} } = {} }) => {

    return (
        <>
            {weather && main &&
                <div className={styles.weatherBox}>
                    <div className={styles.tempBox}>
                        <div className={styles.temp}>
                            {Math.round((temp + ZERO_TEMPERATURE))}&#176;
                        </div>
                        <div className={styles.tempDaily}>
                            {Math.round((temp_min + ZERO_TEMPERATURE))}&#176;  {Math.round((temp_max + ZERO_TEMPERATURE))}&#176;
                        </div>
                        <div className={styles.weather}>
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default WeatherComponent;