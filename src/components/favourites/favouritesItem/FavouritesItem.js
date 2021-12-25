import styles from './styles.module.css'
import {useLocalStorage} from "../../../redux/hooks/LocalStorageHooks";
const FavouritesItem = props =>{
    const {city, country, onItemClick} = props;

    return(
        <div className={styles.itemWrapper}>
            <span className={styles.cityName}>{city}</span>
            <span className={styles.countryName}>{country}</span>
            <div className={styles.btn}
                 // onClick={() => {props.deleteItem(city, country)}}
                 onClick={onItemClick(city, country)}
            >Delete</div>
        </div>
    )
}

export default FavouritesItem;
