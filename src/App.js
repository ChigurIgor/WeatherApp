import 'dayjs/locale/de';
import NavbarComponent from "./components/navbar/NavbarComponent";
import {
    Route,
    Switch, useHistory,
} from "react-router-dom"
import FavouritesComponent from "./components/favourites/FavouritesComponent";
import CurrentWeatherComponent from "./components/currentWeather/CurrentWeatherComponent";
import React, {useContext} from "react";
import {ThemeContext} from "./ThemeProvider";

export let globalHistory;

const App = () => {
    globalHistory = useHistory();
    const { theme, toggle, dark } = useContext(ThemeContext)
    console.log(theme);
    console.log(dark);
    return (
            <div className='App'>
                <NavbarComponent/>
                <Switch >
                    <Route path="/" exact component={CurrentWeatherComponent}/>
                    <Route path="/favourites" component={FavouritesComponent} />
                </Switch >
            </div>
    );
}

export default App;
