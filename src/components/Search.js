const Search = (props) => {
  let {
    location,
    setLocation,
    setWeatherData,
    setWeatherLoaded,
    setPrimitiveWeatherData,
  } = props;

  const query = async (location) => {
    const API_KEY = "e6dbb22d9b4330c64b294f8fbd2dc021";

    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then(function (res) {
        setPrimitiveWeatherData(res);
        return res;
      })
      .then((res) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${res.coord.lat}&lon=${res.coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((res) => setWeatherData(res))
          .then((res) => setWeatherLoaded(true))
      );
  };

  return (
    <div>
      <input type="text" onChange={(e) => setLocation(e.target.value)} />
      <button onClick={() => query(location)}>Search</button>
    </div>
  );
};

export default Search;
