import 'dayjs/locale/de';

import NavbarComponent from "./components/navbar/NavbarComponent";
import {
    Route,
    Switch,
} from "react-router-dom"
import FavouritesComponent from "./components/favourites/FavouritesComponent";
import CurrentWeatherComponent from "./components/currentWeather/CurrentWeatherComponent";

const App = () => {

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
