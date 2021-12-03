import 'dayjs/locale/de';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getForcast, getWeather} from "./redux/actions/weatherActions";


const App = () => {
    const dispatch = useDispatch();
    const {weather} = useSelector(state => state.weatherStore);
    const {error} = useSelector(state => state.errorsStore);

    console.log(weather);
    console.log(error);
    // const endpoint = '//api.openweathermap.org/data/2.5/weather';
    // const endpoint = '//api.openweathermap.org/data/2.5/onecall';

    useEffect(() => {
        dispatch(
            getWeather("Tel Aviv")
        )
        }
    ,[dispatch]);
    useEffect(() => {
            dispatch(
            getForcast(weather)
        )
    }, [dispatch, weather])


    return (
        <div className="App">

            <p>dfgfd</p>
        </div>
    );
}

export default App;
