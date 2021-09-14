import windIcon from "../assets/icons/wi-windy.svg";
import humidityIcon from "../assets/icons/wi-humidity.svg";
import pressureIcon from "../assets/icons/wi-barometer.svg";

const CurrentWeather = (props) => {
  let { weatherData } = props;
  return (
    <div>
      <div className="main-temp">
        <h1>{parseInt(weatherData.current.temp)}</h1>
        <p>{weatherData.current.weather[0].description}</p>
      </div>
      <div id="misc-data-row" className="row">
        <div className="col">
          <img src={pressureIcon} alt="" />
          <p>{weatherData.current.pressure} hPa</p>
        </div>
        <div className="col">
          <img src={humidityIcon} alt="" />
          <p>{weatherData.current.humidity} %</p>
        </div>
        <div className="col">
          <img src={windIcon} alt="" />
          <p>{parseInt(weatherData.current.wind_speed)}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
