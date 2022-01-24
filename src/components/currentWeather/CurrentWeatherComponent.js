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
import _ from 'lodash';

const CurrentWeatherComponent = () => {
    const dispatch = useDispatch();
    const {theme, setNewTheme} = useContext(ThemeContext)
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {location,selectedCity} = useSelector(state => state.locationStore);
    const {error} = useSelector(state => state.errorsStore);
    const {main, weather: weatherForecast} = weather || {};

    useEffect(() =>{
        console.log(error);
    },
        [error]);

    let mainContainerTheme = (theme === 'cold') ?
                    (cold) : (theme === 'warm') ?
                    (warm) : ('');

    useEffect(()=>{
        if( weather && main ){
            const {temp} = main;
            let theme = 'normal';
            ((temp + ZERO_TEMPERATURE) <= 0) &&  (theme = 'cold');
            ((temp + ZERO_TEMPERATURE) > 16) && (theme = 'warm');
            setNewTheme(theme);
        }
    },[weather, main, setNewTheme]);

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
                <IconWeatherComponent weather={_.head(weatherForecast)} className={iconWeather}/>
            }
        </div>
    )
}
export default CurrentWeatherComponent;