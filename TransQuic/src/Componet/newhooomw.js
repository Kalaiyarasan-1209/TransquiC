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
import Footer from "./new Footer";

const Header333 = () => {
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


  const paperStyle={padding:20, height:'100vh', width:'80%', margin:"20px auto",  backgroundColor: 'rgba(255, 255, 255, 0.9)',};
  const paperStyle1={padding:20, height:'60vh', width:'80%', margin:"20px auto",  backgroundColor: 'rgba(255, 255, 255, 0.9)',};





  return (
    <div className="hi">

    <Paper style={paperStyle}>
      <div className="para" >
        <br /><br />
       
        <h1 style={{textAlign:"center"}}><b>Welcome to Event Management</b><br /></h1>
        <h3 style={{textAlign:"start", margin:'100px'}}>Event management is a comprehensive process that involves the planning, coordination, and execution of various types of events. It requires a deep understanding of the brand, its target audience, and the concept of the event. The event manager is responsible for all creative, technical, and logistical aspects, including budgeting, scheduling, site selection, obtaining necessary permits, coordinating transportation and parking, arranging speakers or entertainers, decor, security, catering, and liaising with third-party vendors. They also need to have emergency plans in place. The rapidly changing environment, extensive knowledge required, and the complexities involved make event management one of the most stressful career paths. Despite these challenges, successful event management can lead to memorable experiences for attendees and significant brand exposure for companies. It's a dynamic field that requires adaptability, creativity, and strong organizational skills. Whether it's a small private gathering or a large public event, effective event management is key to ensuring a smooth and successful event.</h3>
          
      </div>
      <br /><br />
    </Paper>
    <br/>
    <br/>
    <br/>
    <br/>
    <Paper style={paperStyle1}>

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>PRIVATE EVENTS</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Private events are typically intimate affairs that involve close friends and family. They can range from weddings, anniversaries, and birthday parties to baby showers and retirement parties. The event manager’s role in these events is crucial as they ensure the event reflects the host’s personal style and taste. They handle everything from venue selection and decor to catering and entertainment, creating a memorable experience for the attendees.</p>
    </div>
  </div>
  <div>
  <img
    src="https://images.pexels.com/photos/5778892/pexels-photo-5778892.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Event"
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
<Paper style={paperStyle1}>

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
    <div>
  <img
    src="https://images.pexels.com/photos/7697338/pexels-photo-7697338.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Event"
    style={{ height: "400px", borderRadius: "15px" }}
    />
</div>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>PUBLIC EVENTS</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Public events are large-scale events such as concerts, festivals, parades, or sporting events that are open to the general public. They require extensive planning and coordination to ensure safety and enjoyment for all attendees. These events often serve to bring communities together, celebrate culture, or raise awareness for causes. The event manager’s role involves liaising with local authorities for permits, coordinating with vendors, managing security, and ensuring smooth execution of the event.</p>
    </div>
  </div>
</Grid>
    </Paper>
<br/><br/>
<Paper style={paperStyle1}>

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>CORPORATE EVENTS</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Corporate events are business-related events like product launches, conferences, team-building activities, or company milestones celebrations. They aim to promote a company’s brand, foster networking, or celebrate achievements. The event manager ensures these events are executed with a high level of professionalism. They handle everything from venue selection, arranging for speakers or entertainers, to coordinating with third-party vendors. Attention to detail is key in these events to reflect the company’s image positively.</p>
    </div>
  </div>
  <div>
  <img
    src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Event"
    style={{ height: "400px", borderRadius: "15px" }}
    />
</div>
</Grid>
    </Paper>
      {/* <Container>
        <br></br>
        <br></br>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px', borderRadius: 5 }}>
          {destinations.map((destination) => (
            <Grid item key={destination.id}>
              <Card
                style={{
                  maxWidth: 350,
                  transform: event === destination.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={() => handleCardEnter(destination.id)}
                onMouseLeave={handleCardLeave}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.name}
                />
                <CardContent style={{ height: "200px", overflow: "hidden", maxWidth: '300' }}>
  <Typography variant="h6">{destination.name}</Typography>
  <Typography variant="body2" style={{ whiteSpace: 'normal' }}>
    {destination.text}
  </Typography>
  <Link to="/sig">
    <Button variant="contained">{destination.label}</Button>
  </Link>
</CardContent>


              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <br/>
      <br/>
      <br/>
      <br/>
<Footer/>
    </div>
  );
};
export default Header333;
