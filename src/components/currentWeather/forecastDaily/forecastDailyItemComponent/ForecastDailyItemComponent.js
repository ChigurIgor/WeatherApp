import styles from "./styles.module.css";
import {ZERO_TEMPERATURE} from "../../../../redux/constants";
import IconWeatherComponent from "../../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";

const ForecastDailyItemComponent = ({weather: {dt, temp, weather}}) => {
    return(
        <div className={styles.itemBox} key={dt}>
            <div className="forecastDailyTime">
                {new Date(dt * 1000).getDate()}/{new Date(dt * 1000).getMonth() + 1}/{new Date(dt * 1000).getFullYear()}
            </div>
            <div className={styles.temp}>
                {Math.round((temp.night + ZERO_TEMPERATURE))}&#176;   {Math.round((temp.day + ZERO_TEMPERATURE))}&#176;
            </div>
            <div className='forecastDailyWeather'>
                <IconWeatherComponent weather={(weather[0])} className={styles.iconWeather}/>
            </div>
        </div>
    )
}
export default ForecastDailyItemComponent;