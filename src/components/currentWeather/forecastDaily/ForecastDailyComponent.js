import {Button} from "react-bootstrap";
import {useState} from "react";
import {
    btn,
    forecast
} from "./styles.module.css";
import ForecastDailyItemComponent from "./forecastDailyItemComponent/ForecastDailyItemComponent";

const ForecastDaily = ({forecast:{daily} = {}}) =>{
    const [disableForecast, setDisableForecast] = useState(true);

    return (
        <>
            {daily &&
                <div>
                    <Button className={btn} onClick={() => setDisableForecast(!disableForecast)}>
                        {disableForecast ? 'Daily Forecast' : 'Hide Daily'}
                    </Button>
                    {!disableForecast &&
                        <div className={forecast}>
                            {daily.map((weather, i) => <ForecastDailyItemComponent key = {i} weather = {weather} />
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