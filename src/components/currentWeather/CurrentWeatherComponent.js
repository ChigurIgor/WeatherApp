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
import {Button} from "react-bootstrap";
import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";

const CurrentWeatherComponent = () => {
    const dispatch = useDispatch();
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {location,selectedCity} = useSelector(state => state.locationStore);
    // const {error} = useSelector(state => state.errorsStore);
    const [city, setCity] = useState('');
    const [disableForecastHourly, setDisableForecastHourly] = useState(true);
    const [disableForecastDaily, setDisableForecastDaily] = useState(true);
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

    const forecastHourly = (forecast) => {
        let hourly = forecast.hourly.slice(0, 24);
        return (
            <div className= 'forecastHourlyWrapper'>
                <Button className='btn' onClick={() => setDisableForecastHourly(!disableForecastHourly)}>
                    {disableForecastHourly ? ' Hourly Forecast' : 'Hide Hourly'}
                </Button>
                {!disableForecastHourly &&
                <div className="forecastHourly">
                    {hourly.map(item =>
                        <div className='forecastHourlyItemBox' key = {item.dt}>
                            <div className="forecastHourlyTime">
                                {new Date(item.dt*1000).getHours()}:00
                            </div>
                            <div className='forecastHourlyTemp'>
                                {Math.round((item.temp+ZERO_TEMPERATURE))}&#176;
                            </div>
                            <div className='forecastHourlyWeather'>
                                {/*{item.weather[0].main}*/}
                                {iconWeather(item.weather[0])}
                            </div>
                            <div className='forecastHourlyWind'>
                                <img className='iconWind'  style={{transform: 'rotate('+(item.wind_deg+90) +'deg)'}} src={arrow} alt='arrow'/>
                            </div>
                            <div className="windTitle">
                                <p>{Math.round(item.wind_speed)}m/s</p>
                            </div>
                        </div>)

                    }

                </div>

                }
            </div>
    )
}

    const forecastDaily = (forecast) => {
        let daily = forecast.daily;

        return (
            <div className= 'forecastDailyWrapper'>
                <Button className='btn' onClick={() => setDisableForecastDaily(!disableForecastDaily)}>
                    {disableForecastDaily ? 'Daily Forecast' : 'Hide Daily'}
                </Button>
                {!disableForecastDaily &&
                <div className="forecastDaily">
                    {daily.map(item =>
                        <div className='forecastDailyItemBox' key = {item.dt}>
                            <div className="forecastDailyTime">
                                {new Date(item.dt*1000).getDate()}.{new Date(item.dt*1000).getMonth()}
                            </div>
                            <div className='forecastDailyTemp'>
                                {Math.round((item.temp.night+ZERO_TEMPERATURE))}&#176;  {Math.round((item.temp.day+ZERO_TEMPERATURE))}&#176;
                            </div>
                            <div className='forecastDailyWeather'>
                                {iconWeather(item.weather[0])}
                            </div>
                    </div>)
                }
            </div>
                }
            </div>
        )
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
                            {Math.round((weather.main.temp_min + ZERO_TEMPERATURE))}&#176; - {Math.round((weather.main.temp_max + ZERO_TEMPERATURE))}&#176;
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
                <>
                    {forecastHourly(forecast)}
                </>
                }
                {forecast !== undefined && forecast.daily !== undefined &&
                <>
                    {forecastDaily(forecast)}
                </>
                }

            </>
            }
        </main>
        </div>
    )
}
export default CurrentWeatherComponent;