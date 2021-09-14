import React, { useEffect, useState } from "react";

import "../styles/SplashScreen.css";

const SplashScreen = (props) => {
  const { setLoading } = props;

  const [Weather, setWeather] = useState("");

  return (
    <main>
      <div id="title-div">
        <h1>Welcome to Weathery !</h1>
      </div>
      <div>
        <h3>Loading...</h3>
      </div>
    </main>
  );
};

export default SplashScreen;
