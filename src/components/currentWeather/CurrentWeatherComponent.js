import {ZERO_TEMPERATURE} from "../../redux/constants";
import iconSun from "../../assets/icons/weatherIcons/sun.png";
import iconClouds from "../../assets/icons/weatherIcons/clouds.png";
import iconRain from "../../assets/icons/weatherIcons/rain.png";
import iconThunder from "../../assets/icons/weatherIcons/thunder.png";
import iconFog from "../../assets/icons/weatherIcons/fog.png";
import iconSnow from "../../assets/icons/weatherIcons/snow.png";
import arrow from "../../assets/icons/arrow.png";
import compass from "../../assets/icons/compass.png";
import addToFavourite from "../../assets/icons/addToFavourite.png";
import addedToFavourite from "../../assets/icons/addedToFavourite.png";
import {useEffect, useState} from "react";
import {getForecast, getWeather, getWeatherInCurrentLocation} from "../../redux/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentLocation} from "../../redux/actions/locationActions";
import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import ForecastHourlyComponent from "./forecastHourly/ForecastHourlyComponent";
import ForecastDailyComponent from "./forecastDaily/ForecastDailyComponent";

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

    const iconWeather = (weather) => {
        let link = "";
        switch (weather.main){
            case 'Clear':
                link = iconSun
                break;
            case 'Clouds':
                link = iconClouds
                break;
            case 'Rain':
                (weather.description === "moderate rain") ?
                    link = iconRain
                    :
                    link = iconThunder
                break;
            case 'Fog':
                link = iconFog
                break;
            case 'Haze':
                link = iconFog
                break;
            case 'Snow':
                link = iconSnow
                break;
            default:
                link = iconSun
                break;
        }
        return (<div className='imageWeather'>
            <img className='iconWeather' src={link} alt='iconWeather'/>
        </div>)
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
                            {Math.round((weather.main.temp_min + ZERO_TEMPERATURE))}&#176;npm start  {Math.round((weather.main.temp_max + ZERO_TEMPERATURE))}&#176;
                        </div>
                    </div>
                    <div className="weather">
                        {weather.weather[0].main}
                    </div>
                    <div className="windBox">
                        <div className="windShadowWrapper">
                            <div className="windDirection">
                                <img className='iconWind shadow'  style={{transform: 'rotate('+(weather.wind.deg+90) +'deg)'}} src={arrow} alt='arrow'/>
                            </div>
                            <div className="windCompass">
                                <img className='iconCompass shadow'  src={compass} alt='compass'/>
                            </div>
                        </div>
                        <div className="windWrapper">

                            <div className="windDirection">
                                <img className='iconWind'  style={{transform: 'rotate('+(weather.wind.deg+90) +'deg)'}} src={arrow} alt='arrow'/>
                            </div>

                            <div className="windCompass">
                                <img className='iconCompass'  src={compass} alt='compass'/>
                            </div>
                            <div className="windTitle">
                                <p>{Math.round(weather.wind.speed)}m/s</p>
                            </div>
                        </div>
                    </div>
                </div>
                {iconWeather(weather.weather[0])}
                {forecast !== undefined && forecast.hourly !== undefined &&
                    <ForecastHourlyComponent forecast={forecast}/>
                }
                {forecast !== undefined && forecast.daily !== undefined &&
                    <ForecastDailyComponent forecast={forecast}/>
                }

            </>
            }
        </main>
        </div>
    )
}
export default CurrentWeatherComponent;