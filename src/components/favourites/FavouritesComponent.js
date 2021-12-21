import {useLocalStorage} from "../../redux/hooks/LocalStorageHooks";
import FavouritesItem from "./favouritesItem/FavouritesItem";

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
            <div className="FavouritesComponent">
                <h3>Favourites</h3>
                {renderList(favourites)}
            </div>
    )
}

export default FavouritesComponent;