import {
    locationBox,
    location,
    iconAdd,
    date
} from './styles.module.css';
import addToFavourite from "../../../assets/icons/addToFavourite.png";
import addedToFavourite from "../../../assets/icons/addedToFavourite.png";
import {useLocalStorage} from "../../../hooks/LocalStorageHooks";

const LocationComponent = ({weather}) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);

    const addToFavourites = (cityToAdd, countryToAdd) => {
        !favourites.some(({city, country}) => city === cityToAdd && country === countryToAdd) &&
        setFavourites([...favourites, {city:cityToAdd, country: countryToAdd}])
    }

    return (
        <>
            {weather &&
                <div className={locationBox}>
                    <div className={location}>{weather.name},{weather.sys.country}
                        {!favourites.some(({city, country}) => city === weather.name && country === weather.sys.country) ?
                            <img
                                className={iconAdd}
                                src={addToFavourite}
                                alt='add'
                                onClick={() => addToFavourites(weather.name, weather.sys.country)}
                                title="Add this city to favourites"
                            />
                            :
                            <img
                                className={iconAdd}
                                src={addedToFavourite}
                                alt='added'
                                title="Already Added to favourites"
                            />
                        }
                    </div>
                    <div className={date}>{new Date(weather.dt*1000).toLocaleDateString()}</div>
                </div>
            }
        </>
    )
}
export default LocationComponent;