import {useLocalStorage} from "../../hooks/LocalStorageHooks";
import FavouritesItem from "./favouritesItem/FavouritesItem";
import {
    cold,
    warm,
    mainContainer,
    title,
    listContainer,
    listPlaceholder
} from './styles.module.css'
import {setSelectedCity} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import {goToMainPage} from "../../redux/actions/navigationActions";
import {useContext} from "react";
import {ThemeContext} from "../../ThemeProvider";
import classNames from "classnames";

const FavouritesComponent = () => {
    const dispatch = useDispatch();
    const [favourites, setFavourites] = useLocalStorage('favourites', [])
    const {theme} = useContext(ThemeContext)

    let mainContainerTheme = (theme === 'cold') ?
        (cold) : (theme === 'warm') ?
            (warm) : ('');

    const deleteItem = (cityToDelete, countryToDelete) => {
        const newArr = favourites.filter(({city, country}) => !(city === cityToDelete && country === countryToDelete));
        setFavourites(newArr);
    }

    const selectItem = (city) => {
        dispatch(setSelectedCity(city));
        goToMainPage();
    }

    const renderList = (arr) => {
        return (
            <div>
                {arr.map(({city, country}) => <div key = {city+"/"+country}>
                    <FavouritesItem
                        city = {city}
                        country = {country}
                        deleteItem = {deleteItem}
                        selectItem = {selectItem}
                    />
                </div>)}
            </div>
        )
    }

    return(
        <div className={classNames([mainContainer,mainContainerTheme])}>
            <h3 className={title}>Favourites</h3>
            {favourites && favourites.length > 0 ?
                <div className={listContainer}>
                    {renderList(favourites)}
                </div>
                :
                <div className={listPlaceholder}>
                    <p>There are no saved cities yet</p>
                </div>
            }
        </div>
    )
}

export default FavouritesComponent;