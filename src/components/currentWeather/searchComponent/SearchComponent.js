import {
    searchBox,
    searchBar
} from './styles.module.css';
import {useState} from "react";
import {getWeather} from "../../../redux/actions/weatherActions";
import {useDispatch} from "react-redux";

const SearchComponent = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const getWeatherInCity = (city) => {
        dispatch(
            getWeather(city, setCity)
        )
    }
    const changeHandler = ({target:{value} = {} }) => {
        setCity(value);
    }

    return(
        <div className={searchBox}>
            <input
                type="text"
                className={searchBar}
                placeholder="Search..."
                name = "city"
                value={city}
                onChange={changeHandler}
                onKeyPress={({key}) => {
                    (key === "Enter" && city ) && getWeatherInCity(city)
                    }
                }
            />
        </div>
    )
}
export default SearchComponent;