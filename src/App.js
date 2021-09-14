import React, { useState } from "react";
import SplashScreen from "./views/SplashScreen";
import MainScreen from "./views/MainScreen";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [primitiveWeatherData, setPrimitiveWeatherData] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      {loading ? (
        <SplashScreen setLoading={setLoading} />
      ) : (
        <MainScreen
          location={location}
          setLocation={setLocation}
          setLoading={setLoading}
          primitiveWeatherData={primitiveWeatherData}
          setPrimitiveWeatherData={setPrimitiveWeatherData}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
      )}
    </div>
  );
}

export default App;
