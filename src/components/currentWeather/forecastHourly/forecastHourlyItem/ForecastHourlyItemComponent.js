import {
    itemBox,
    tempStyle,
    weatherStyle,
    iconWind,
    windTitle,
    iconWeather
} from "./styles.module.css";
import {ZERO_TEMPERATURE} from "../../../../redux/constants";
import IconWeatherComponent from "../../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import arrow from "../../../../assets/icons/arrow.png";

const  ForecastHourlyItemComponent = ({weather :{dt, temp, weather, wind_deg, wind_speed}} ) => {
    return(
        <div className={itemBox}>
            <div className="forecastHourlyTime">
                {new Date(dt * 1000).getHours()}:00
            </div>
            <div className={tempStyle}>
                {Math.round((temp + ZERO_TEMPERATURE))}&#176;
            </div>
            <div className={weatherStyle}>
                <IconWeatherComponent weather={(weather[0])} className={iconWeather}/>
            </div>
            <div className='forecastHourlyWind'>
                <img className={iconWind}
                     style={{transform: 'rotate(' + (wind_deg + 90) + 'deg)'}}
                     src={arrow}
                     alt='arrow'/>
            </div>
            <div className={windTitle}>
                <p>{Math.round(wind_speed)}m/s</p>
            </div>
        </div>
    )
}
export default ForecastHourlyItemComponent;