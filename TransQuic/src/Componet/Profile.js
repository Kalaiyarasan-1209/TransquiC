import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import { Container, Grid, Card, CardContent, Typography, Button, Box, Avatar, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Profile() {
  const { emailAuth } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [orderData, setOrderData] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/login/${emailAuth}`);
        setProfileData(response.data);
      } catch (error) {
        setError("Error fetching the data");
        console.error("Error fetching the data", error);
      }
    };

    fetchProfileData();
  }, [emailAuth]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/bookings/${emailAuth}`);
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching the order data", error);
      }
    };

    fetchOrderData();
  }, [emailAuth]);

  const handleNext = () => {
    if (orderData.length > 1) {
      setIsSwiping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % orderData.length);
        setIsSwiping(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (orderData.length > 1) {
      setIsSwiping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + orderData.length) % orderData.length);
        setIsSwiping(false);
      }, 300);
    }
  };

  const handleTouchStart = (e) => {
    setIsSwiping(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isSwiping) {
      const currentX = e.touches[0].clientX;
      const difference = startX - currentX;

      if (difference > 50) {
        handleNext();
        setIsSwiping(false);
      } else if (difference < -50) {
        handlePrev();
        setIsSwiping(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  if (!emailAuth || error) {
    return (
      <Box sx={{ backgroundColor: '#9de2f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item md={9} lg={7} xl={5} sx={{ mt: 5 }}>
              <Card sx={{ borderRadius: '15px' }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ mb: 3 }}>Please Log In</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    You need to log in to view your profile.
                  </Typography>
                  <Link to='/SignInPage' style={{ textDecoration: 'none' }}>
                    <Button variant="contained">Go to Log In</Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ backgroundColor: 'lightgray', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item md={9} lg={7} xl={5} sx={{ mt: 5 }}>
            <Card sx={{ borderRadius: '15px' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>Profile</Typography>
                <Box display="flex" textAlign="black">
                  <Box flexShrink={0}>
                    <Avatar sx={{ width: 180, height: 180, borderRadius: '10px', bgcolor: 'grey' }}>
                      <PersonIcon sx={{ fontSize: 100, color: 'white' }} />
                    </Avatar>
                  </Box>
                  <Box flexGrow={1} ml={3}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>FirstName:</strong> {profileData.firstName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      <strong>LastName:</strong> {profileData.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      <strong>Email:</strong> {emailAuth}
                    </Typography>
                    <Box display="flex" pt={1} mt={3}>
                      <Button variant="outlined" sx={{ flexGrow: 1, mr: 1 }}>EDIT</Button>
                      <Link to='/SignInPage' style={{ textDecoration: 'none', flexGrow: 1 }}>
                        <Button variant="contained" sx={{ flexGrow: 1 }}>
                          LOGOUT
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>

                {/* Recent Bookings Section with Swipe Functionality */}
                <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>Recent Orders</Typography>
                {orderData.length > 0 && (
                  <Box
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    sx={{ position: 'relative', overflow: 'hidden' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                     
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    >
                      {orderData.map((order, index) => (
                        <Card
                          key={index}
                          sx={{
                            minWidth: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '10px',
                            boxShadow: 2,
                          }}
                        >
                          <CardContent>
                            <Typography component="h2" variant="h6">
                              Booking ID: {order.bookingId}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                              Pickup Date: {order.pickupDate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                              Pickup Location: {order.fromLocation}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                              Drop-off Location: {order.toLocation}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                              Amount: Rs.{order.cost}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </Box>
                    <IconButton
                      onClick={handlePrev}
                      sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
                      disabled={orderData.length <= 1}
                    >
                      <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                      disabled={orderData.length <= 1}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>
                )}
                <Link color="primary" to="/orders" sx={{ mt: 3 }}>
                  See more orders
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </Box>
  );
}
