import 'dayjs/locale/de';
import NavbarComponent from "./components/navbar/NavbarComponent";
import {
    Route,
    Switch, useHistory,
} from "react-router-dom"
import FavouritesComponent from "./components/favourites/FavouritesComponent";
import CurrentWeatherComponent from "./components/currentWeather/CurrentWeatherComponent";
import React from "react";

export let globalHistory;

const App = () => {
    globalHistory = useHistory();
    return (
            <div className='App'>
                <NavbarComponent/>
                <Switch >
                    <Route path="/" exact component={CurrentWeatherComponent}/>
                    <Route path="/WeatherApp" exact component={CurrentWeatherComponent}/>
                    <Route path="/favourites" component={FavouritesComponent} />
                </Switch >
            </div>
    );
}

export default App;
