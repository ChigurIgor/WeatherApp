import {ZERO_TEMPERATURE} from "../../redux/constants";
import {useContext, useEffect} from "react";
import {getForecast, getWeather, getWeatherInCurrentLocation} from "../../redux/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentLocation} from "../../redux/actions/locationActions";
import ForecastHourlyComponent from "./forecastHourly/ForecastHourlyComponent";
import ForecastDailyComponent from "./forecastDaily/ForecastDailyComponent";
import IconWeatherComponent from "../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import {
    cold,
    warm,
    wrapper,
    subWrapper,
    iconWeather,
    mainContainer
} from './styles.module.css';
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
    // let mainContainerTheme = '';
    //  (theme === 'cold') && (mainContainerTheme = styles.cold);
    //  (theme === 'warm') && (mainContainerTheme = styles.warm);

    let mainContainerTheme = (theme === 'cold') ?
                    (cold) : (theme === 'warm') ?
                    (warm) : ('');

    // useEffect(()=>{
    //     if(weather && weather.main){
    //         const { main } = weather;
    //         let theme;
    //         (main.temp + ZERO_TEMPERATURE <= 0) ?
    //             (theme = 'cold') : (main.temp + ZERO_TEMPERATURE >16) ?
    //             (theme ='warm') : (theme = 'normal');
    //         setNewTheme(theme);
    //     }
    // },[weather]);

    useEffect(()=>{
        if( weather && weather.main ){
            const { main: { temp } } = weather;
            let theme = 'normal';
            ((temp + ZERO_TEMPERATURE) <= 0) &&  (theme = 'cold');
            ((temp + ZERO_TEMPERATURE) > 16) && (theme = 'warm');
            setNewTheme(theme);
        }
    },[weather, setNewTheme]);

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
        <div className={classNames([mainContainer,mainContainerTheme])}>
            <SearchComponent/>
            <LocationComponent weather={weather}/>
            <div  className={wrapper}>
                <WeatherComponent weather={weather}/>
                <WindComponent weather={weather}/>
                <div className={subWrapper}>
                    <ForecastHourlyComponent forecast={forecast}/>
                    <ForecastDailyComponent forecast={forecast}/>
                </div>
            </div>
            {weather &&
                <IconWeatherComponent weather={weather.weather[0]} className={iconWeather}/>
            }
        </div>
    )
}
export default CurrentWeatherComponent;