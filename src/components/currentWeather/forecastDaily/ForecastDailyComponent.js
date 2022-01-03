import {Button} from "react-bootstrap";
import {ZERO_TEMPERATURE} from "../../../redux/constants";
import {useState} from "react";
import IconWeatherComponent from "../../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import styles from "./styles.module.css";

const ForecastDaily = ({forecast}) =>{
    let daily;
    if(forecast !== undefined){
        daily = forecast.daily;
    }
    const [disableForecast, setDisableForecast] = useState(true);
    return (
        <>                {forecast !== undefined && daily !== undefined &&
        <div>
            <Button className={styles.btn} onClick={() => setDisableForecast(!disableForecast)}>
                {disableForecast ? 'Daily Forecast' : 'Hide Daily'}
            </Button>
            {!disableForecast &&
            <div className={styles.forecast}>
                {daily.map(item =>
                    <div className={styles.itemBox} key={item.dt}>
                        <div className="forecastDailyTime">
                            {new Date(item.dt * 1000).getDate()}/{new Date(item.dt * 1000).getMonth() + 1}/{new Date(item.dt * 1000).getFullYear()}
                        </div>
                        <div className={styles.temp}>
                            {Math.round((item.temp.night + ZERO_TEMPERATURE))}&#176;   {Math.round((item.temp.day + ZERO_TEMPERATURE))}&#176;
                        </div>
                        <div className='forecastDailyWeather'>
                            <IconWeatherComponent weather={(item.weather[0])} className={styles.iconWeather}/>
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