import styles from "./styles.module.css";
import IconWeatherComponent from "../../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import ForecastDailyTimeComponent from "./forecastDailyTime/ForecastDailyTimeComponent";
import ForecastDailyWeatherComponent from "./forecastDailyWeather/ForecastDailyWeatherComponent";

const ForecastDailyItemComponent = ({weather: {dt, temp, weather}}) => {
    return(
        <div className={styles.itemBox}>
            <ForecastDailyTimeComponent dt = {dt} />
            <ForecastDailyWeatherComponent temp = {temp}/>
            <IconWeatherComponent weather={(weather[0])} className={styles.iconWeather}/>
        </div>
    )
}
export default ForecastDailyItemComponent;