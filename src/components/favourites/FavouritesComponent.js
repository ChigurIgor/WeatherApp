import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import FavouritesItem from "./favouritesItem/FavouritesItem";
import styles from './styles.module.css'
import {setSelectedCity} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import {goToMain} from "../../redux/actions/navigationActions";
// import { useCallback } from 'react';

const FavouritesComponent = () => {
    const dispatch = useDispatch();
    const [favourites, setFavourites] = useLocalStorage('favourites', [])

    const deleteItem = (city, country) => {
        const newArr = favourites.filter(e => (e.city !== city && e.country !== country));
        setFavourites(newArr);
        console.log(newArr);
    }

    const selectItem = (city, country) => {
        dispatch(setSelectedCity(city));
        goToMain();
    }

    const renderList = (arr) => {
        return (
            <div>
                {arr.map(item => <div key={item.city+"/"+item.country}>
                    <FavouritesItem
                        city={item.city}
                        country = {item.country}
                        deleteItem={deleteItem}
                        selectItem={selectItem}
                    />
                </div>)}
            </div>
        )
    }

    return(
                <div className={styles.mainContainer}>
                    <h3 className={styles.title}>Favourites</h3>
                    {favourites !== undefined && favourites.length > 0 ?
                    <div className={styles.listcontainer}>
                    {renderList(favourites)}
                        </div>
                        :
                        <div className={styles.listPlaceholder}>
                            <p>There are no saved cities yet</p>
                        </div>
                    }
                </div>
    )
}

export default FavouritesComponent;