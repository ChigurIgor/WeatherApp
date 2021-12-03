import 'dayjs/locale/de';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getForecast, getWeather} from "./redux/actions/weatherActions";
import {ZERO_TEMPERATURE} from "./redux/constants";


const App = () => {
    const dispatch = useDispatch();
    const {weather, forecast} = useSelector(state => state.weatherStore);
    const {error} = useSelector(state => state.errorsStore);
    const [inputs, setInputs] = useState({
        city: ""
    });

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
            getWeather(city)
        )
    }

    const changeHandler = (event) => {
        setInputs(state => ({...state, [event.target.name]: event.target.value}));
    }

    return (
        <div className="App">
            <input type="text" placeholder="Search" name = "city" value={inputs.city} onChange={changeHandler} />
            <button
                    onClick={() => getWeatherInCity(inputs.city)}
            >
                Search
            </button>

            {weather.main !== undefined
                &&
                <p>Temperature: {(weather.main.temp + ZERO_TEMPERATURE).toFixed(1)}&#176;</p>
            }
        </div>
    );
}

export default App;
