import React from "react";
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {
  Button,Typography,useMediaQuery,useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
const destinations = [
  {
    id: 1,
    name: 'EVENTS',
    label:'Book Now',
    image:'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'BRANDING',
    label:'Book Now',

    image: 'https://cdn.pixabay.com/photo/2017/02/28/16/57/coffee-2106341_1280.jpg',
  },
  {
    id: 3,
    name: 'EXHIBITION',
    label:'Book Now',

    image: 'https://images.pexels.com/photos/1267258/pexels-photo-1267258.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'PROMOTION',
    label:'Book Now',
    image: 'https://cdn.pixabay.com/photo/2018/12/10/21/09/store-3867742_1280.jpg',
  },
  {
    id: 5,
    name: 'ROAD SHOW',
    label:'Book Now',
    image: 'https://img.freepik.com/free-vector/cartoon-street-food-festival-background_52683-81510.jpg?w=1380&t=st=1700668657~exp=1700669257~hmac=59930b3ae8cd74416799d9317a7467a97fbee1d83a24778f0558fe35dc48b40a',
  }
];
const Service = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <div className="hi">
      
       
       <div className="abt">
           <h3 style={{padding:'0px',marginTop:'0px',backgroundImage:`url(https://images.pexels.com/photos/9829615/pexels-photo-9829615.jpeg?auto=compress&cs=tinysrgb&w=600)`,
       alignItems: 'center',
       fontSize: '60px',
      
       display: 'flex',
       backgroundSize: 'cover',
       width:'100%',
     height:'30vh'
        }}>
           SERVICES:-</h3>
       </div>
       <div className="aaa" 
style={{
color: 'rgb(0, 0, 0)',
fontStyle: 'oblique',
fontSize: '50px',
display: 'flex',
justifyContent: 'center'
}}>
<b>Unforgettable Experiences, One Event at a Time...!</b>
</div>
    <Box sx={{backgroundImage: `url("https://img.freepik.com/free-vector/cartoon-street-food-festival-background_52683-81510.jpg?w=1380&t=st=1700668657~exp=1700669257~hmac=59930b3ae8cd74416799d9317a7467a97fbee1d83a24778f0558fe35dc48b40a")`}}>
      </Box>
    <React.Fragment>
      <Container>
      
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}<br></br>
                </Typography>
                  <Link to="/Event">
                  <Button variant="contained">{destination.label}</Button>
              </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </React.Fragment><br/><br/>
    <div>
    </div>
    </div>
  );
};
export default Service;