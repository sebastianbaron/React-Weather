import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/MainScreen.css";
import searchButton from "../assets/Search.svg";
import Search from "../components/Search.js";
/* import { Container, Row, Col } from "react-bootstrap"; */
import { CSSTransition } from "react-transition-group";
import ForecastItem from "../components/ForecastItem";
import CurrentWeather from "../components/CurrentWeather.js";

const MainScreen = (props) => {
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [displaySearchBox, setDisplaySearchBox] = useState(false);

  let {
    location,
    setLocation,
    weatherData,
    setWeatherData,
    primitiveWeatherData,
    setPrimitiveWeatherData,
  } = props;

  const LocationText = (props) => {
    let { primitiveWeatherData } = props;
    return (
      <div>
        {primitiveWeatherData.name}, {primitiveWeatherData.sys.country}
      </div>
    );
  };
  const SearchBox = () => {
    return (
      <div>
        <label htmlFor="searchBox"></label>
        <input placeholder="Enter location..." id="searchBox" type="text" />
      </div>
    );
  };

  const setDate = () => {
    let now = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${now.getDate()}, ${months[now.getMonth()]}`;
  };

  return (
    <main>
      {weatherLoaded ? (
        <div className="container-fluid container-main">
          <div className="top-bar">
            <div className="top-date-location">
              <div id="title-1" className="col">
                {setDate()}
              </div>
              <div id="title-2" className="search-box col">
                <CSSTransition
                  in={displaySearchBox}
                  timeout={300}
                  unmountOnExit
                  onEnter={() => ""}
                  onExited={() => setDisplaySearchBox(false)}
                  classNames="searchBox-transition"
                >
                  <SearchBox />
                </CSSTransition>
              </div>

              <div id="title-3" className="col">
                <img
                  className="img-30"
                  src={searchButton}
                  alt=""
                  onClick={() => setDisplaySearchBox(!displaySearchBox)}
                />
              </div>
            </div>

            <div className="top-date-location">
              <LocationText primitiveWeatherData={primitiveWeatherData} />
            </div>
          </div>
          <CurrentWeather weatherData={weatherData} />
          <div className="main-forecast container-fluid">
            {weatherData.daily &&
              weatherData.daily
                .filter((daily, idx) => idx < 6)
                .map((daily) => <ForecastItem key={daily.id} daily={daily} />)}
          </div>
        </div>
      ) : (
        <Search
          location={location}
          setLocation={setLocation}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          setPrimitiveWeatherData={setPrimitiveWeatherData}
          setWeatherLoaded={setWeatherLoaded}
        />
      )}
    </main>
  );
};

export default MainScreen;
