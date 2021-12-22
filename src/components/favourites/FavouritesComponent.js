import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import FavouritesItem from "./favouritesItem/FavouritesItem";
import styles from './styles.module.css'

const FavouritesComponent = () => {

    const [favourites, setFavourites] = useLocalStorage('favourites', [])
    console.log(favourites);

    const renderList = (arr) => {
        return (
            <div>
                {arr.map(item => <div key={item.city+"/"+item.country}>
                    <FavouritesItem city={item.city} country = {item.country}/>
                </div>)}
            </div>
        )
    }

    return(
                <div className={styles.mainContainer}>
                    <h3 className={styles.title}>Favourites</h3>
                    <div className={styles.listcontainer}>
                        {renderList(favourites)}
                    </div>
                </div>
    )
}

export default FavouritesComponent;