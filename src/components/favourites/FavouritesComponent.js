import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import FavouritesItem from "./favouritesItem/FavouritesItem";
import styles from './styles.module.css'
// import { useCallback } from 'react';

const FavouritesComponent = () => {

    const [favourites, setFavourites] = useLocalStorage('favourites', [])
    console.log(favourites);
    const deleteItem = (city, country) => {
        const newArr = favourites.filter(e => (e.city !== city && e.country !== country));
        setFavourites(newArr);
        console.log(newArr);
    }

    // const onItemClick  = useCallback(() => {
    //     console.log('Clicked!');
    // }, []);

    const renderList = (arr) => {
        return (
            <div>
                {arr.map(item => <div key={item.city+"/"+item.country}>
                    <FavouritesItem
                        city={item.city}
                        country = {item.country}
                        // deleteFunction ={() => deleteItem}
                        onItemClick={deleteItem}
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