import {
    itemBox,
    iconWeather
} from "./styles.module.css";
import IconWeatherComponent from "../../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import ForecastDailyTimeComponent from "./forecastDailyTime/ForecastDailyTimeComponent";
import ForecastDailyWeatherComponent from "./forecastDailyWeather/ForecastDailyWeatherComponent";

const ForecastDailyItemComponent = ({weather: {dt, temp, weather}}) => {
    return(
        <div className={itemBox}>
            <ForecastDailyTimeComponent dt = {dt} />
            <ForecastDailyWeatherComponent temp = {temp}/>
            <IconWeatherComponent weather={(weather[0])} className={iconWeather}/>
        </div>
    )
}
export default ForecastDailyItemComponent;