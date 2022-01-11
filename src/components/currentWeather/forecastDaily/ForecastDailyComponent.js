import {Button} from "react-bootstrap";
import {ZERO_TEMPERATURE} from "../../../redux/constants";
import {useState} from "react";
import IconWeatherComponent from "../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import styles from "./styles.module.css";

const ForecastDaily = ({forecast:{daily} = {}}) =>{
    const [disableForecast, setDisableForecast] = useState(true);

    return (
        <>
            {daily !== undefined &&
                <div>
                    <Button className={styles.btn} onClick={() => setDisableForecast(!disableForecast)}>
                        {disableForecast ? 'Daily Forecast' : 'Hide Daily'}
                    </Button>
                    {!disableForecast &&
                        <div className={styles.forecast}>
                            {daily.map(({dt, temp, weather }) =>
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
                                </div>)
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}
export default ForecastDaily;