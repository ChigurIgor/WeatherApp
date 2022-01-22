import {itemWrapper,
    cityName,
    countryName,
    btn
} from './styles.module.css'
const FavouritesItem = ({city, country, deleteItem, selectItem} )=>{

    return(
        <div className={itemWrapper}>
            <span className={cityName}>{city}/<span className={countryName}>{country}</span>
            </span>
            <div className={btn}
                 onClick={() => selectItem(city, country)}
            >Select</div>
            <div className={btn}
                 onClick={() => deleteItem(city, country)}
            >Delete</div>
        </div>
    )
}

export default FavouritesItem;
