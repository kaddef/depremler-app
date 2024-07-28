import { useState, useEffect } from "react";
import { getLocation, useFetch } from "./utils.js";
import Loading from "./components/Loading/Loading.jsx";
import QuakeCard from "./components/QuakeCard/QuakeCard.jsx";
import Info from "./components/Info/Info.jsx";
import Error from "./components/Error/Error.jsx";
import "./App.css";

function App() {
  const [location, setLocation] = useState(undefined);
  const [authorized, setAuthorized] = useState(false);
  const [quakeDatas, loading, error] = useFetch("http://localhost:3000/today");

  useEffect(() => {
    getLocation(setLocation, setAuthorized);
  }, []);

  if (loading) {
    return <Loading/>;
  }
  
  if(error) {
    return <Error>{error}</Error>
  }

  return (
    <div className="wrapper">
      <Info/>
      {quakeDatas.map((quakeData, index) => (
        <QuakeCard
          key={index}
          magnitude={quakeData.magnitude}
          location={quakeData.location}
          depth={quakeData.depth}
          time={`${quakeData.date} ${quakeData.time}`}
          quakeCoord={{latitude: quakeData.latitude, longitude: quakeData.longitude}}
          userLoc = {location}
          authorized = {authorized}
        />
      ))}
    </div>
  );
}

export default App;
