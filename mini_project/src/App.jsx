// import SearchBox from "./searchBox";
// import InfoBox from "./infoBox";

// function App() {


//   return (
  
//     <>
//       <SearchBox />
//       <InfoBox />
    
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";

function App() {
  // You can initialize with default values or null.
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <>
      {/* Pass setWeatherInfo as updateInfo */}
      <SearchBox updateInfo={setWeatherInfo} />
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <p style={{ textAlign: 'center' }}>Search for a city to see the weather info.</p>
      )}
    </>
  );
}

export default App;
