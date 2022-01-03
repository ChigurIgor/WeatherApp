import {ZERO_TEMPERATURE} from "../../redux/constants";
import addToFavourite from "../../assets/icons/addToFavourite.png";
import addedToFavourite from "../../assets/icons/addedToFavourite.png";
import {useEffect, useState} from "react";
import {getForecast, getWeather, getWeatherInCurrentLocation} from "../../redux/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentLocation} from "../../redux/actions/locationActions";
import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import ForecastHourlyComponent from "./forecastHourly/ForecastHourlyComponent";
import ForecastDailyComponent from "./forecastDaily/ForecastDailyComponent";
import IconWeatherComponent from "../supportCopmonents/iconWeatherComponent/IconWeatherComponent";
import styles from './styles.module.css';
import WindComponent from "./windComponent/WindComponent";

const CurrentWeatherComponent = () => {
    const dispatch = useDispatch();
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {location,selectedCity} = useSelector(state => state.locationStore);
    // const {error} = useSelector(state => state.errorsStore);
    const [city, setCity] = useState('');
    const [favourites, setFavourites] = useLocalStorage("favourites", []);

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

    const getWeatherInCity = (city) => {
        dispatch(
            getWeather(city, setCity)
        )
    }

    const changeHandler = (event) => {
        setCity(event.target.value);
    }


    const addToFavourites = (city, country) => {
        !favourites.some(item => item.city === city && item.country === country) &&
        setFavourites([...favourites, {city:city, country: country}])
    }

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
        <main>
            <div className='searchBox'>
                <input
                    type="text"
                    className='searchBar'
                    placeholder="Search..."
                    name = "city"
                    value={city}
                    onChange={changeHandler}
                    onKeyPress={(event) => {
                        if(event.key !== "Enter") return;
                        getWeatherInCity(city)}}
                />
            </div>
            {weather !== undefined && weather.main !== undefined
            &&
            <>
                <div className="locationBox">
                    <div className="location">{weather.name},{weather.sys.country}
                        {!favourites.some(item => item.city === weather.name && item.country === weather.sys.country) ?
                            <img
                                className='iconAdd'
                                src={addToFavourite}
                                alt='add'
                                onClick={() => addToFavourites(weather.name, weather.sys.country)}
                                title="Add this city to favourites"
                            />
                            :
                            <img
                                className='iconAdd'
                                src={addedToFavourite}
                                alt='added'
                                title="Already Added to favourites"
                            />
                        }


                    </div>
                    <div className="date">{new Date(weather.dt*1000).toLocaleDateString()}</div>
                </div>
                <div className="weatherBox">
                    <div className="tempBox">
                        <div className="temp">
                            {Math.round((weather.main.temp + ZERO_TEMPERATURE))}&#176;
                        </div>
                        <div className="tempDaily">
                            {Math.round((weather.main.temp_min + ZERO_TEMPERATURE))}&#176;  {Math.round((weather.main.temp_max + ZERO_TEMPERATURE))}&#176;
                        </div>
                    </div>
                    <div className="weather">
                        {weather.weather[0].main}
                    </div>
                    <WindComponent weather={weather}/>
                </div>
                    <IconWeatherComponent weather={weather.weather[0]} className={styles.iconWeather}/>
                    <ForecastHourlyComponent forecast={forecast}/>
                    <ForecastDailyComponent forecast={forecast}/>
                    </>
            }
        </main>
        </div>
    )
}
export default CurrentWeatherComponent;