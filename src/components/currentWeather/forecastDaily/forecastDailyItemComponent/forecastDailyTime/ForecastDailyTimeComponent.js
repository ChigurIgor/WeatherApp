const ForecastDailyTimeComponent = ({dt}) => {
    return(
        <div className="forecastDailyTime">
            {new Date(dt * 1000).getDate()}/
            {new Date(dt * 1000).getMonth() + 1}/
            {new Date(dt * 1000).getFullYear()}
        </div>
    )
}
export default ForecastDailyTimeComponent;