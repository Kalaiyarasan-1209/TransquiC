import React from "react";
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {
  Typography,useMediaQuery,useTheme,Button
} from "@mui/material";
import { Box } from "@mui/system";
const destinations = [
  {
    id: 1,
    name: 'Chennai',
    image:'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Mumbai',
    label:'Book Now',

    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-1.jpg',
  },
  {
    id: 3,
    name: 'Bangalore',
    label:'Book Now',

    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-2.jpg',
  },
  {
    id: 4,
    name: 'Pondicherry',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-3.jpg',
  },
  {
    id: 5,
    name: 'Gujarat',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-7.jpg',
  },
  {
    id: 6,
    name: 'Rajasthan',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-17-495x400.jpg',
  },
  {
    id: 7,
    name: 'Delhi',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-16.jpg',
  },
  {
    id: 8,
    name: 'Ranchi',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-5.jpg',
  },
  {
    id: 9,
    name: 'Goa',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-11-845x684.jpg',
  },
  {
    id: 10,
    name: 'Kolkata',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-15-845x684.jpg',
  },
  {
    id: 11,
    name: 'Hyderabad',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-9-495x400.jpg',
  },
  {
    id: 12,
    name: 'Punjab',
    image: 'https://gliderevents.com/wp-content/uploads/2023/09/Glider-Events-16.jpg',
  }
];
const Gallery = () => {
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
                                    width:'120%',
                                  height:'30vh'
                                     }}>
                                        GALLERY</h3>
                                    </div>
                                    <div className="aaa" 
     style={{
         color: 'rgb(0, 0, 0)',
         fontStyle: 'oblique',
         fontSize: '50px',
         display: 'flex',
         justifyContent: 'center'
     }}>
    <b>CABS ALL OVER INDIA..!</b>
</div>

    <React.Fragment>
      <Container>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 600 }}>
              <CardMedia
                component="img"
                height="150"
                image={destination.image}
                alt={destination.name}
                style={{width:'250px'}}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}<br></br>
                </Typography>
                  <Link to="/ServicePage">
                  <Button variant="contained">Visit</Button>
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
export default Gallery;