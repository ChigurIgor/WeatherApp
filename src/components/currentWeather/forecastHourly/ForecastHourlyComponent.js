import styles from './styles.module.css'
import {Button} from "react-bootstrap";
import {ZERO_TEMPERATURE} from "../../../redux/constants";
import arrow from "../../../assets/icons/arrow.png";
import {useState} from "react";
import IconWeatherComponent from "../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";

const ForecastHourlyComponent = ({forecast}) => {
    let hourly;
    if(forecast !== undefined) {
        hourly = forecast.hourly.slice(0, 24);
    }
    const [disableForecast, setDisableForecast] = useState(true);

    return (
        <>
            {hourly !== undefined &&
                <div>
                    <Button
                        className={styles.btn}
                        onClick={() => setDisableForecast(!disableForecast)}
                    >
                        {disableForecast ? ' Hourly Forecast' : 'Hide Hourly'}
                    </Button>
                    {!disableForecast &&
                        <div className={styles.forecast}>
                            {hourly.map(item =>
                                <div className={styles.itemBox} key={item.dt}>
                                    <div className="forecastHourlyTime">
                                        {new Date(item.dt * 1000).getHours()}:00
                                    </div>
                                    <div className={styles.temp}>
                                        {Math.round((item.temp + ZERO_TEMPERATURE))}&#176;
                                    </div>
                                    <div className={styles.weather}>
                                        <IconWeatherComponent weather={(item.weather[0])} className={styles.iconWeather}/>
                                    </div>
                                    <div className='forecastHourlyWind'>
                                        <img className={styles.iconWind}
                                             style={{transform: 'rotate(' + (item.wind_deg + 90) + 'deg)'}}
                                             src={arrow}
                                             alt='arrow'/>
                                    </div>
                                    <div className={styles.windTitle}>
                                        <p>{Math.round(item.wind_speed)}m/s</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}
export default ForecastHourlyComponent;