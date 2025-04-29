// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import './searchBox.css';

// export default function SearchBox() {
//     const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
//     const API_KEY = '9773c80d44271c4a111045a7dd8130cd';

//     let getWeather = async (city) => {
//         const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
//         console.log(data);
//         const result = {
            
//             city: data.name,
//             country: data.sys.country,
//             temperature: data.main.temp,
           
       
//             temperature_min: data.main.temp_min,
//             temperature_max: data.main.temp_max,
//             humidity: data.main.humidity,
//             wind: data.wind.speed,
//             pressure: data.main.pressure,
//             weather: data.weather[0].main.description,
//         };
//         // console.log(result);
//         updateInfo(result);
        
//     }
//   const [city, setCity] = useState('');

//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(city);
//     setCity('');
//     getWeather(city);
//   };

//   return (
//     <div className='searchBox'>
//       <h3>Search for the Weather</h3>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="City"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <Button variant="contained" color="primary" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }


import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';

export default function SearchBox({ updateInfo }) {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '9773c80d44271c4a111045a7dd8130cd';

  let getWeather = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      const result = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        temperature_min: data.main.temp_min,
        temperature_max: data.main.temp_max,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        weather: data.weather[0].main,  // use the main weather type here
      };
      console.log(result);

      // This is where we update the parent's state:
      updateInfo(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    // Only execute the API call if a city is provided
    if (city.trim()) {
      getWeather(city);
    }
    setCity('');
  };

  return (
    <div className='searchBox'>
      <h3>Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
