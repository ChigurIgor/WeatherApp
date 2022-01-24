import {
    btn,
    forecast
} from './styles.module.css'
import {Button} from "react-bootstrap";
import {useState} from "react";
import ForecastHourlyItemComponent from "./forecastHourlyItem/ForecastHourlyItemComponent";
import _ from 'lodash';

const ForecastHourlyComponent = ({forecast:{hourly} = {} }) => {
    const hourlyForecastForTheDay = _.take(hourly,24);
    const [disableForecast, setDisableForecast] = useState(true);
    return (
        <>
            {hourly &&
                <div>
                    <Button
                        className={btn}
                        onClick={() => setDisableForecast(!disableForecast)}
                    >
                        {disableForecast ? ' Hourly Forecast' : 'Hide Hourly'}
                    </Button>
                    {!disableForecast &&
                        <div className={forecast}>
                            {hourlyForecastForTheDay.map((weather, i) => <ForecastHourlyItemComponent key={i} weather = {weather}/>)
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}
export default ForecastHourlyComponent;