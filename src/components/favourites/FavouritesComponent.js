import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import FavouritesItem from "./favouritesItem/FavouritesItem";
import styles from './styles.module.css'
import {setSelectedCity} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import {goToMainPage} from "../../redux/actions/navigationActions";
import {useContext} from "react";
import {ThemeContext} from "../../ThemeProvider";
import classNames from "classnames";
// import { useCallback } from 'react';

const FavouritesComponent = () => {
    const dispatch = useDispatch();
    const [favourites, setFavourites] = useLocalStorage('favourites', [])
    const {theme, setNewTheme} = useContext(ThemeContext)
    let mainContainerTheme = '';
    if(theme === 'cold') {
        mainContainerTheme = styles.cold;
    }
    if(theme === 'warm') {
        mainContainerTheme = styles.warm;
    }
    const deleteItem = (city, country) => {
        const newArr = favourites.filter(e => !(e.city === city && e.country === country));
        setFavourites(newArr);
        console.log(newArr);
    }

    const selectItem = (city, country) => {
        dispatch(setSelectedCity(city));
        goToMainPage();
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
        <div className={classNames([styles.mainContainer,mainContainerTheme])}>
            <h3 className={styles.title}>Favourites</h3>
            {favourites !== undefined && favourites.length > 0 ?
                <div className={styles.listContainer}>
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