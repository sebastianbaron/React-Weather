const ForecastItem = (props) => {
  let { daily } = props;
  let day = new Date(daily.dt * 1000);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="sub-forecast d-flex flex-col">
      <span className="col">{days[day.getDay()]}</span>
      <img
        className="col"
        src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}
        alt=""
      />
      <div className="col">
        <span>{parseInt(daily.temp.max)}°</span>
        <span>{parseInt(daily.temp.min)}°</span>
      </div>
    </div>
  );
};

export default ForecastItem;
