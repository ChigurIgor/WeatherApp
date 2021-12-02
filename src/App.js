import ReactWeather from 'react-open-weather';
import {useOpenWeather} from "react-open-weather/src/js/providers/openweather";
import 'dayjs/locale/de';
import dayjs from 'dayjs';
import {useState, useEffect} from "react";
import axios from "axios";

const App = () => {

    const params = {
        appid: 'f2bc9f4f53d43099962546ce7af56be0',
        // q: 'London',
        lang: 'en',
          lat: '32.109333',
          lon: '34.855499',
        unit: 'metric', // values are (metric, standard, imperial)

    };
    // const endpoint = '//api.openweathermap.org/data/2.5/weather';
    // const endpoint = '//api.openweathermap.org/data/2.5/onecall';
    //
    //  axios.get(endpoint, {params})
    //     .then(res => {console.log(res)})
    //     .catch(e => console.log(e))






    // const { data, isLoading, errorMessage } = useOpenWeather({
    //   key: 'f2bc9f4f53d43099962546ce7af56be0',
    //   lat: '32.109333',
    //   lon: '34.855499',
    //   lang: 'en',
    //   unit: 'metric', // values are (metric, standard, imperial)
    //   showForecast: true
    // });
    // const locationLabel = "Tel Aviv"
    // dayjs.locale('de');


    // const customStyles = {
    //   fontFamily:  'Helvetica, sans-serif',
    //   gradientStart:  '#0181C2',
    //   gradientMid:  '#04A7F9',
    //   gradientEnd:  '#4BC4F7',
    //   locationFontColor:  '#FFF',
    //   todayTempFontColor:  '#FFF',
    //   todayDateFontColor:  '#B5DEF4',
    //   todayRangeFontColor:  '#B5DEF4',
    //   todayDescFontColor:  '#B5DEF4',
    //   todayInfoFontColor:  '#B5DEF4',
    //   todayIconColor:  '#FFF',
    //   forecastBackgroundColor:  '#FFF',
    //   forecastSeparatorColor:  '#DDD',
    //   forecastDateColor:  '#777',
    //   forecastDescColor:  '#777',
    //   forecastRangeColor:  '#777',
    //   forecastIconColor:  '#4BC4F7',
    // };

    return (
        <div className="App">
            {/*<ReactWeather*/}
            {/*    // theme={customStyles}*/}
            {/*    isLoading={isLoading}*/}
            {/*    errorMessage={errorMessage}*/}
            {/*    data={data}*/}
            {/*    lang="en"*/}
            {/*    locationLabel={locationLabel}*/}
            {/*    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}*/}
            {/*    showForecast*/}
            {/*/>*/}
            <p>dfgfd</p>
        </div>
    );
}

export default App;
