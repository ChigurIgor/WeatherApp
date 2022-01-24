import {
    weatherBox,
    tempBox,
    tempStyle,
    tempDaily,
    weatherStyle
} from './styles.module.css'
import {ZERO_TEMPERATURE} from "../../../redux/constants";
import _ from 'lodash';

const WeatherComponent = ({weather, weather: {weather: weatherForecast, main: {temp, temp_min, temp_max} = {} } = {} }) => {

    return (
        <>
            {weather?.main &&
                <div className={weatherBox}>
                    <div className={tempBox}>
                        <div className={tempStyle}>
                            {Math.round((temp + ZERO_TEMPERATURE))}&#176;
                        </div>
                        <div className={tempDaily}>
                            {Math.round((temp_min + ZERO_TEMPERATURE))}&#176;  {Math.round((temp_max + ZERO_TEMPERATURE))}&#176;
                        </div>
                        <div className={weatherStyle}>
                            {_.head(weatherForecast).main}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default WeatherComponent;