import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  colors,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import './Home.css';
import HomeContent from "./HomeContent";
import Review from "./Review";


const Home = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [event, setEvent] = useState(null); 

  const handleCardEnter = (id) => {
    setEvent(id);
  };

  const handleCardLeave = () => {
    setEvent(null);
  };

  const paperStyle={ padding: 20,
    height: '100vh',
    width: '80%',
    margin: "auto",
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },};
  const paperStyle1={padding:20, height:'60vh', width:'80%', margin:"20px auto",  backgroundColor: 'rgba(255, 255, 255, 0.9)',};

  return (
    <div className="hi">

    <Paper style={paperStyle} 
    // sx={{backgroundImage:'url(https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=800)', backgroundSize: 'cover',
    //         backgroundPosition: 'center',}}
            >
      <div className="para" >
        <br /><br />
       
        <h1 style={{textAlign:"center"}}><b>TransQuiC Cab Booking Service</b><br /></h1>
        <h4 style={{textAlign:"start", margin:'100px'}}>"Our cab booking service is designed with a focus on reliability and ease of use, providing a platform that simplifies the process of booking a cab. Whether you’re in need of a quick ride to the airport, a comfortable car for a night out in the city, or a spacious minivan for a weekend getaway with family or friends, we’ve got a wide range of options to cater to your specific needs.

Our platform operates on a local level, connecting riders with professional drivers in their immediate vicinity. This ensures a quick response time and allows users to reach their destinations in the most efficient manner possible. It’s a system that makes getting from point A to point B easier than ever before.</h4>
          
<Link to="/ServicePage" style={{textDecoration:'none'}}>
  <button className="myButton">Book Your Cab</button>
</Link>

      </div>
      <br /><br />
    </Paper>
    <br/>
    <br/>
    <HomeContent/>
    <br/>
    <br/>
    <Paper style={paperStyle1}
    sx={{
      padding: 20,
      height: '100vh',
      width: '80%',
      margin: "20px auto",
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}>

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>CITY RIDES</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      City rides are perfect for quick trips around town. Whether you're running errands, visiting friends, or exploring the city, our service makes it easy to find a ride. Our drivers know their cities inside and out, so you can be sure you'll arrive at your destination quickly and safely.</p>
    </div>
  </div>
  <div>
  <img
    src="https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/www.transfeero.com/2023/10/clear_price-1.jpg/W=450,dpr=2,fit=cover"
    alt="City Ride"
    style={{ height: "400px", borderRadius: "15px" }}
    />
</div>
</Grid>
<br/>
<br/>
<br/>
<br/>
    </Paper>
<br/><br/>
<Paper style={paperStyle1}
sx={{
  padding: 20,
  height: '100vh',
  width: '80%',
  margin: "20px auto",
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}}>

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
    <div>
  <img
    src="https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/www.transfeero.com/2023/10/pro_driver.jpg/W=450,dpr=2,fit=cover"
    alt="Professional Drivers"
    style={{ height: "400px", borderRadius: "15px" }}
    />
</div>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>PROFESSIONAL DRIVERS</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Our seasoned drivers, boasting local area expertise and savvy traffic insights, guarantee punctual journeys. Travel with peace of mind in the hands of licensed, insured professional chauffeurs.</p>
    </div>
  </div>
</Grid>
    </Paper>
<br/><br/>
<Paper style={paperStyle1}
sx={{
  padding: 20,
  height: '100vh',
  width: '80%',
  margin: "20px auto",
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}}>

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>COMPLEMENTARY WAIT TIME</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
     
Experience seamless travel with our meet-and-greet service, provided with a complimentary one-hour wait time and efficient flight tracking for a stress-free journey. Enjoy the convenience at no extra cost.</p>
    </div>
  </div>
  <div>
  <img
    src="https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/www.transfeero.com/2023/10/flight_traking-1.jpg/W=450,dpr=2,fit=cover"
    alt="Airport Ride"
    style={{ height: "400px", borderRadius: "15px" }}
    />
</div>
</Grid>
    </Paper>
    <br/>
    <br/>
    <br/>
    <br/>
    <Review/>
    </div>
  );
};
export default Home;
