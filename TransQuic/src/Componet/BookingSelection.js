import React from "react";
import { useTheme, useMediaQuery, Container, Grid, Card, CardMedia, CardContent, Button, Typography, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { useAuth } from './AuthContext'; // Import useAuth to access context
import './BookingSelection.css';
import axios from "axios";

// Define paper categories
const paperCategories = [
  {
    id: 1,
    name: 'ECONOMY',
    image: 'https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/2837faa4-77b8-4865-a60f-069cabdb3200/w=187,dpr=1.5',
    passengerOptions: [1, 2, 3, 4, 6, 7]
  },
  {
    id: 2,
    name: 'STANDARD',
    image: 'https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/34c16f51-a36a-425c-a888-c7d64e97b900/w=187,dpr=1.5',
    passengerOptions: [1, 2, 3, 4, 6, 7]
  },
  {
    id: 3,
    name: 'PREMIUM',
    image: 'https://imagedelivery.net/IwZOeeGEmDj8EVSTRphTwA/d56982a7-35dc-47ff-81d7-a80841319a00/w=187,dpr=1.5',
    passengerOptions: [1, 2, 3, 4, 6, 7]
  }
];

const PaperCategory = ({ name, image, passengerOptions }) => {
  const { distance, time, price, emailAuth,bookingDetails } = useAuth(); // Access context values
  const [passengers, setPassengers] = React.useState('');

  const handlePassengersChange = (event) => {
    setPassengers(event.target.value);
  };

  // Calculate cost based on category name
  const calculateCost = () => {
    switch (name) {
      case 'ECONOMY':
        return price * 1;
      case 'STANDARD':
        return price * 1.7;
      case 'PREMIUM':
        return price * 2.3;
      default:
        return price;
    }
  };

  // Save values in constants
  const categoryName = name;
  const travellingTime = time;
  const travelDistance = distance;
  const cost = calculateCost().toFixed(2);

  // Handle Book Now button click
  const handleBookNowClick = async() => {
    if (bookingDetails) {
      console.log({
        email: emailAuth,
        from: bookingDetails.from,
        to: bookingDetails.to,
        cost,
        categoryName,
        date: bookingDetails.pickupDate,
        time: bookingDetails.pickupTime,
        option: bookingDetails.selectedOption,
        passengers
      });
      const response = await axios.post("http://localhost:8080/booking", {
        
   
          email:emailAuth,
          categoryName:categoryName,
          cost:cost,
          pickupDate:bookingDetails.pickupDate,
          pickupTime:bookingDetails.pickupTime,
          fromLocation:bookingDetails.from,
          toLocation: bookingDetails.to,
          optionsString:bookingDetails.selectedOption
      
      

      });
    } else {
      console.error("Booking details are undefined.");
    }
  };

  return (
    <Card style={{ maxWidth: 500, transition: 'transform 0.3s ease-in-out' }} className="paper-card">
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`${categoryName} paper`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {categoryName}
        </Typography>
        <br />
        {travellingTime && (
          <Typography variant="body2" color="textSecondary">
            Travelling Time: {travellingTime} min
          </Typography>
        )}
        {travelDistance && (
          <Typography variant="body2" color="textSecondary">
            Distance: {travelDistance} km
          </Typography>
        )}
        {(!travellingTime || !travelDistance) && (
          <Typography variant="body2" color="textSecondary">
            If you use more time than you mentioned, the cost may increase
          </Typography>
        )}
        <br/>
        <Typography variant="body2" color="textSecondary">
          <h4>Cost: Rs.{cost}</h4>
        </Typography>
        <br />
        <FormControl fullWidth>
          <InputLabel id="passengers-label">No. of Passengers</InputLabel>
          <Select
            labelId="passengers-label"
            value={passengers}
            onChange={handlePassengersChange}
          >
            {passengerOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <Button variant="contained" onClick={handleBookNowClick}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

const PaperCategories = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { bookingDetails } = useAuth(); // Access bookingDetails from context

  return (
    <div>
      <Box sx={{ backgroundImage: `url("https://img.freepik.com/free-vector/cartoon-street-food-festival-background_52683-81510.jpg?w=1380&t=st=1700668657~exp=1700669257~hmac=59930b3ae8cd74416799d9317a7467a97fbee1d83a24778f0558fe35dc48b40a")` }}>
      </Box>
      <Container>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px', borderRadius: 5 }}>
          {paperCategories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={4}>
              <PaperCategory
                name={category.name}
                image={category.image}
                passengerOptions={category.passengerOptions}
                bookingDetails={bookingDetails}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default PaperCategories;
