import 'dayjs/locale/de';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getForecast, getWeather} from "./redux/actions/weatherActions";
import {ZERO_TEMPERATURE} from "./redux/constants";
import iconSun from "./assets/weatherIcons/sun.png";
import iconClouds from "./assets/weatherIcons/clouds.png";
import iconRain from "./assets/weatherIcons/rain.png";
import iconThunder from "./assets/weatherIcons/thunder.png";
import iconFog from "./assets/weatherIcons/fog.png";
import iconSnow from "./assets/weatherIcons/snow.png";

const App = () => {
    const dispatch = useDispatch();
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {error} = useSelector(state => state.errorsStore);
    const [city, setCity] = useState('');

    console.log(weather);
    console.log(forecast);
    console.log(error);
    // const endpoint = '//api.openweathermap.org/data/2.5/weather';
    // const endpoint = '//api.openweathermap.org/data/2.5/onecall';

    // useEffect(() => {
    //     dispatch(
    //         getWeather("Tel Aviv")
    //     )
    //     },[dispatch]);
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

                    </div>)
                }
            </div>
        )
    }

    const forecastDaily = (forecast) => {
        let daily = forecast.daily;

        return (
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
                            {/*{item.weather[0].main}*/}
                            {iconWeather(item.weather[0])}
                        </div>
                    </div>)
                }
            </div>
        )
    }
    return (
        <div className={
            weather !== undefined && weather.main !== undefined
                ?
                  (weather.main.temp + ZERO_TEMPERATURE) <= 0 ? 'App cold': (
                    (weather.main.temp + ZERO_TEMPERATURE) >16 ? 'App warm':'App'
                  )
                  :
                 'App'
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
                    <div className="location">{weather.name},{weather.sys.country}</div>
                    <div className="date">{new Date(weather.dt*1000).toLocaleDateString()}</div>
                </div>
                <div className="weatherBox">
                    <div className="temp">
                        {Math.round((weather.main.temp + ZERO_TEMPERATURE))}&#176;
                    </div>
                    <div className="weather">
                        {weather.weather[0].main}
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
    );
}

export default App;
