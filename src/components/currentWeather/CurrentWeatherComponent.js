import {ZERO_TEMPERATURE} from "../../redux/constants";
import {useContext, useEffect} from "react";
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
import {ThemeContext} from "../../ThemeProvider";
import classNames from "classnames";

const CurrentWeatherComponent = () => {
    const dispatch = useDispatch();
    const {theme, setNewTheme} = useContext(ThemeContext)
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {location,selectedCity} = useSelector(state => state.locationStore);
    // const {error} = useSelector(state => state.errorsStore);
    let mainContainerTheme = '';
    if(theme === 'cold') {
        mainContainerTheme = styles.cold;
    }
    if(theme === 'warm') {
        mainContainerTheme = styles.warm;
    }
    const setTheme = (weather) => {
        if(weather !== undefined && weather.main !== undefined){
            let theme = 'normal';
            if((weather.main.temp + ZERO_TEMPERATURE) <= 0){
                theme = 'cold';
            }
            if((weather.main.temp + ZERO_TEMPERATURE) >16){
                theme = 'warm';
            }
            setNewTheme(theme);
        }
    }

    useEffect(()=>{
        setTheme(weather);
    },[weather,setTheme])

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
        <div className={classNames([styles.mainContainer,mainContainerTheme])}>
            <SearchComponent/>
            <LocationComponent weather={weather}/>
            <div  className={styles.wrapper}>
                <WeatherComponent weather={weather}/>
                <WindComponent weather={weather}/>
                <div className={styles.subWrapper}>
                    <ForecastHourlyComponent forecast={forecast}/>
                    <ForecastDailyComponent forecast={forecast}/>
                </div>
            </div>
            {weather !== undefined &&
                <IconWeatherComponent weather={weather.weather[0]} className={styles.iconWeather}/>
            }
        </div>
    )
}
export default CurrentWeatherComponent;