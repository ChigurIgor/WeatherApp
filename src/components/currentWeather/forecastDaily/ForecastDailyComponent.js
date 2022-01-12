import {Button} from "react-bootstrap";
import {useState} from "react";
import styles from "./styles.module.css";
import ForecastDailyItemComponent from "./forecastDailyItemComponent/ForecastDailyItemComponent";

const ForecastDaily = ({forecast:{daily} = {}}) =>{
    const [disableForecast, setDisableForecast] = useState(true);

    return (
        <>
            {daily &&
                <div>
                    <Button className={styles.btn} onClick={() => setDisableForecast(!disableForecast)}>
                        {disableForecast ? 'Daily Forecast' : 'Hide Daily'}
                    </Button>
                    {!disableForecast &&
                        <div className={styles.forecast}>
                            {daily.map((weather) => <ForecastDailyItemComponent key = {weather.dt} weather = {weather} />
                              )
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}
export default ForecastDaily;