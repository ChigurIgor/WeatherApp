import {ZERO_TEMPERATURE} from "../../redux/constants";
import {useEffect} from "react";
import {getForecast, getWeather, getWeatherInCurrentLocation} from "../../redux/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentLocation} from "../../redux/actions/locationActions";
import ForecastHourlyComponent from "./forecastHourly/ForecastHourlyComponent";
import ForecastDailyComponent from "./forecastDaily/ForecastDailyComponent";
import IconWeatherComponent from "../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import styles from './styles.module.css';
import WindComponent from "./windComponent/WindComponent";
import WeatherComponent from "./weatherComponent/WeatherComponent";
import LocationComponent from "./locationComponent/LocationComponent";
import SearchComponent from "./searchComponent/SearchComponent";

const CurrentWeatherComponent = () => {
    const dispatch = useDispatch();
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {location,selectedCity} = useSelector(state => state.locationStore);
    // const {error} = useSelector(state => state.errorsStore);

    useEffect(() => {
            dispatch(
                getCurrentLocation()
            )
    }, [dispatch])

    useEffect(() => {
        if(selectedCity === undefined) {
            dispatch(
                getWeatherInCurrentLocation(location)
            )
        }
        else {
            dispatch(
                getWeather(selectedCity)
            )
        }

    }, [dispatch, selectedCity, location])

    useEffect(() => {
        dispatch(
            getForecast(weather)
        )
    }, [dispatch, weather])


    return(
        <div className={
            weather !== undefined && weather.main !== undefined
                ?
                (weather.main.temp + ZERO_TEMPERATURE) <= 0 ? 'mainContainer cold': (
                    (weather.main.temp + ZERO_TEMPERATURE) >16 ? 'mainContainer warm':'mainContainer'
                )
                :
                'mainContainer'
        }>
                    <SearchComponent/>
                    <LocationComponent weather={weather}/>
                    <WeatherComponent weather={weather}/>
                    <WindComponent weather={weather}/>
                    {weather !== undefined &&
                        <IconWeatherComponent weather={weather.weather[0]} className={styles.iconWeather}/>
                    }
                    <ForecastHourlyComponent forecast={forecast}/>
                    <ForecastDailyComponent forecast={forecast}/>
        </div>
    )
}
export default CurrentWeatherComponent;