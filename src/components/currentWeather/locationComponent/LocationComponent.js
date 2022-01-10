import styles from './styles.module.css';
import addToFavourite from "../../../assets/icons/addToFavourite.png";
import addedToFavourite from "../../../assets/icons/addedToFavourite.png";
import {useLocalStorage} from "../../../hooks/LocalStorageHooks";

const LocationComponent = ({weather}) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);

    const addToFavourites = (city, country) => {
        !favourites.some(item => item.city === city && item.country === country) &&
        setFavourites([...favourites, {city:city, country: country}])
    }

    return (
        <>
            {weather !== undefined &&
                <div className={styles.locationBox}>
                    <div className={styles.location}>{weather.name},{weather.sys.country}
                        {!favourites.some(item => item.city === weather.name && item.country === weather.sys.country) ?
                            <img
                                className={styles.iconAdd}
                                src={addToFavourite}
                                alt='add'
                                onClick={() => addToFavourites(weather.name, weather.sys.country)}
                                title="Add this city to favourites"
                            />
                            :
                            <img
                                className={styles.iconAdd}
                                src={addedToFavourite}
                                alt='added'
                                title="Already Added to favourites"
                            />
                        }
                    </div>
                    <div className={styles.date}>{new Date(weather.dt*1000).toLocaleDateString()}</div>
                </div>
            }
        </>
    )
}
export default LocationComponent;