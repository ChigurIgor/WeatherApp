import styles from './styles.module.css'
const FavouritesItem = props =>{
    const {city, country} = props;

    return(
        <div className={styles.itemWrapper}>
            <span className={styles.cityName}>{city}</span>
            <span className={styles.countryName}>{country}</span>
            <div className={styles.btn}>Delete</div>
        </div>
    )
}

export default FavouritesItem;
