import {
    itemBox,
    iconWeather
} from "./styles.module.css";
import IconWeatherComponent from "../../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import ForecastDailyTimeComponent from "./forecastDailyTime/ForecastDailyTimeComponent";
import ForecastDailyWeatherComponent from "./forecastDailyWeather/ForecastDailyWeatherComponent";
import _ from "lodash"
const ForecastDailyItemComponent = ({weather: {dt, temp, weather}}) => {
    return(
        <div className={itemBox}>
            <ForecastDailyTimeComponent dt = {dt} />
            <ForecastDailyWeatherComponent temp = {temp}/>
            <IconWeatherComponent weather={_.head(weather)} className={iconWeather}/>
        </div>
    )
}
export default ForecastDailyItemComponent;