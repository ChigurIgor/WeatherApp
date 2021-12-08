import 'dayjs/locale/de';

import NavbarComponent from "./components/navbar/NavbarComponent";
import {
    Route,
    Routes,
} from "react-router-dom"
import FavouritesComponent from "./components/favourites/FavouritesComponent";
import CurrentWeatherComponent from "./components/currentWeather/CurrentWeatherComponent";

const App = () => {

    return (
        <div className='App'>
            <NavbarComponent/>
            <Routes >
              <Route path="/" element={<CurrentWeatherComponent/>}/>
              <Route path="/favourites" element={<FavouritesComponent/>} />
            </Routes >
        </div>
    );
}

export default App;
