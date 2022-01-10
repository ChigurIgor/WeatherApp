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
     (theme === 'cold') && (mainContainerTheme = styles.cold);
     (theme === 'warm') && (mainContainerTheme = styles.warm);

    // useEffect(()=>{
    //     if(weather && weather.main !== undefined){
    //         const { main } = weather;
    //         let theme;
    //         const temp = (main.temp + ZERO_TEMPERATURE <= 0) ? (
    //             mainContainerTheme = styles.cold,
    //                 theme = 'cold'
    //             ) :
    //              (main.temp + ZERO_TEMPERATURE >16) ? (
    //                  mainContainerTheme = styles.warm,
    //                      theme ='warm'
    //              ) : (theme = 'normal');
    //         setNewTheme(theme);
    //     }
    // },[weather]);

    useEffect(()=>{
        if( weather && weather.main !== undefined ){
            const { main: { temp } } = weather;
            let theme = 'normal';
            //not working without temporary variable t
            let t = (temp + ZERO_TEMPERATURE <= 0) &&  (theme = 'cold');
            t = (temp + ZERO_TEMPERATURE > 16) && (theme = 'warm');
            setNewTheme(theme);
        }
    },[weather, setNewTheme]);

    // useEffect(()=>{
    //     if(weather && weather.main !== undefined){
    //         const {main:{temp}} = weather;
    //         let theme;
    //         switch (true){
    //             case temp + ZERO_TEMPERATURE > 16:
    //                 mainContainerTheme = styles.warm;
    //                 theme = 'warm';
    //                 break;
    //             case temp + ZERO_TEMPERATURE <= 0:
    //                 mainContainerTheme = styles.cold;
    //                 theme = 'cold';
    //                 break;
    //             default:
    //                 theme = 'normal';
    //         }
    //         setNewTheme(theme);
    //     }
    // },[weather]);

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