
// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';
// export default function InfoBox() {

//     const INIT_URL = "https://images.unsplash.com/photo-1743485532768-9a5e07a2f666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
    
//     const HOT_URL ="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=";
//     const COLD_URL ="https://media.istockphoto.com/id/2198312033/photo/scenic-view-of-snowcapped-mountains-against-sky.jpg?s=612x612&w=0&k=20&c=CTcNGKUWp307A6IVD_NV9wzUGrwQuhxaolrgVh4T6Lg=";
//     const RAINY_URL ="https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.jpg?s=612x612&w=0&k=20&c=Sr0Afvr_zrI3eC9UKly9F0JxiOQRMDtpwHuwjATnlkM=";

//     const info ={
//         city: 'Dehli',
//         country: 'India',
//         humidity: 50,
//         pressure: 1000,
//         temperature: 30,
//         temperature_max: 35,
//         temperature_min: 25,
//         weather: 'Sunny',
//         wind: 10,
        
//     }
//     return(
//         <div className="infoBox">
//             <h2>Weather Info - {info.weather}</h2>
//             <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={info.humidity > 80 ? RAINY_URL : info.temperature > 20 ? HOT_URL : COLD_URL }
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}, {info.country}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}  component= {'span'}>
//           <p>Temperature = {info.temperature}&deg;C</p>
//           <p>Humidity = {info.humidity}</p>
//           <p>Temperature Max = {info.temperature_max}&deg;C</p>
//           <p>Temperature Min = {info.temperature_min}&deg;C</p>
//           <p>The Weather can be descrived as {info.weather} and wind {" "} {info.wind} </p>
          


//         </Typography>
//       </CardContent>
     
//     </Card>
            
//         </div>

//     );
// }





import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
  const HOT_URL ="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=";
  const COLD_URL ="https://media.istockphoto.com/id/2198312033/photo/scenic-view-of-snowcapped-mountains-against-sky.jpg?s=612x612&w=0&k=20&c=CTcNGKUWp307A6IVD_NV9wzUGrwQuhxaolrgVh4T6Lg=";
  const RAINY_URL ="https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.jpg?s=612x612&w=0&k=20&c=Sr0Afvr_zrI3eC9UKly9F0JxiOQRMDtpwHuwjATnlkM=";

  return (
    <div className="infoBox">
      <h2>Weather Info - {info.weather}</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAINY_URL : info.temperature > 20 ? HOT_URL : COLD_URL}
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}, {info.country}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={'span'}>
            <p>Temperature = {info.temperature}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Temperature Max = {info.temperature_max}&deg;C</p>
            <p>Temperature Min = {info.temperature_min}&deg;C</p>
            <p>Weather: {info.weather} | Wind: {info.wind}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


