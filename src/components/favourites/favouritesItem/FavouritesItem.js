import styles from './styles.module.css'
const FavouritesItem = props =>{
    const {city, country, deleteItem, selectItem} = props;

    return(
        <div className={styles.itemWrapper}>
            <span className={styles.cityName}>{city}/<span className={styles.countryName}>{country}</span>
            </span>
            <div className={styles.btn}
                 // onClick={() => {props.deleteItem(city, country)}}
                 onClick={() => selectItem(city, country)}
            >Select</div>
            <div className={styles.btn}
                // onClick={() => {props.deleteItem(city, country)}}
                 onClick={() => deleteItem(city, country)}
            >Delete</div>
        </div>
    )
}

export default FavouritesItem;
