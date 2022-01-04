import styles from './styles.module.css';
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
    const changeHandler = (event) => {
        setCity(event.target.value);
    }

    return(
        <div className={styles.searchBox}>
            <input
                type="text"
                className={styles.searchBar}
                placeholder="Search..."
                name = "city"
                value={city}
                onChange={changeHandler}
                onKeyPress={(event) => {
                    (event.key === "Enter" && city !== '' && city !== undefined) && getWeatherInCity(city)
                    }
                }
            />
        </div>
    )
}
export default SearchComponent;