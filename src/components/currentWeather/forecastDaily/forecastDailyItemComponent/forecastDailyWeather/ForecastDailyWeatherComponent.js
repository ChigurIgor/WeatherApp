import styles from "./styles.module.css";
import {ZERO_TEMPERATURE} from "../../../../../redux/constants";

const ForecastDailyWeatherComponent = ({temp: {night, day}}) => {
    return(
        <div className={styles.temp}>
            {Math.round((night + ZERO_TEMPERATURE))}&#176;
            {Math.round((day + ZERO_TEMPERATURE))}&#176;
        </div>
    )
}
export default ForecastDailyWeatherComponent;