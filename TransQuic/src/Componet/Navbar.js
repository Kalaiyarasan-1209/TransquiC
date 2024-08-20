import React, { useState } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from './Home';
import Service from './Service';
import Loginpage from './Login';
import Register from './Register';
import Gallery from './Gallery';
import AboutUs from './About';
import ProfilePage from './Profile';
import EventForm from './Event';
import EventForm11 from './Event1';
import Booking from './Booking';
import TermsOfUsePage from './TermsOfUsePage';
import PaperCategories from './BookingSelection';
import GeocodeAndDistance from './GeoCode';

const Navbar2 = () => {
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const [isHoveredGallery, setIsHoveredGallery] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);

  const buttonStyle = (isHovered) => ({
    fontSize: '1.3rem',
    textTransform: 'none',
    marginRight: '20px',
    color: isHovered ? 'white' : 'black',
    backgroundColor: isHovered ? 'black' : 'transparent',
    transition: 'all 0.3s ease-in-out',
  });

  return (
    <div className='top' style={{background:'gray'}}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
        <IconButton edge="start" color="black" aria-label="logo">
            <Link to='/HomePage' style={{ textDecoration: 'none' }}>
              <img src="https://th.bing.com/th/id/OIG3.YSbYbQLVeszC8XOjMEzZ?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="logo" style={{ width: '40px', height: '40px' }} />
            </Link>
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to='/HomePage' style={{ textDecoration: 'none', color: 'black' }}>TransQuic</Link>
          </Typography>
          <Button color="inherit" style={buttonStyle(isHoveredServices)} onMouseEnter={() => setIsHoveredServices(true)} onMouseLeave={() => setIsHoveredServices(false)}>
            <Link to='/ServicePage' style={{ textDecoration: 'none', color: isHoveredServices ? 'white' : 'black' }}>Services</Link>
          </Button>
          <Button color="inherit" style={buttonStyle(isHoveredGallery)} onMouseEnter={() => setIsHoveredGallery(true)} onMouseLeave={() => setIsHoveredGallery(false)}>
            <Link to='/GalleryPage' style={{ textDecoration: 'none', color: isHoveredGallery ? 'white' : 'black' }}>Gallery</Link>
          </Button>
          <Button color="inherit" style={buttonStyle(isHoveredAbout)} onMouseEnter={() => setIsHoveredAbout(true)} onMouseLeave={() => setIsHoveredAbout(false)}>
            <Link to='/AboutPage' style={{ textDecoration: 'none', color: isHoveredAbout ? 'white' : 'black' }}>About</Link>
          </Button>
          {/* <Button color="inherit" style={buttonStyle(isHoveredLogin)} onMouseEnter={() => setIsHoveredLogin(true)} onMouseLeave={() => setIsHoveredLogin(false)}>
            <Link to='/SignInPage' style={{ textDecoration: 'none', color: isHoveredLogin ? 'white' : 'black' }}>Login</Link>
          </Button> */}
          <IconButton edge="end" color="inherit">
            <Link to='/Profile' style={{ textDecoration: 'none', color: 'black', fontSize: '2rem' }}>
              <AccountCircleIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route exact path='/HomePage' element={<Home />} />
        <Route exact path='/SigninPage' element={<Loginpage />} />
        <Route exact path='/SignUpPage' element={<Register />} />
        <Route exact path='/ServicePage' element={<Booking />} />
        <Route exact path='/GalleryPage' element={<Gallery />} />
        <Route exact path='/AboutPage' element={<TermsOfUsePage />} />
        <Route exact path='/Profile' element={<ProfilePage />} />
        <Route exact path='/BookingSelection' element={<PaperCategories/>} />
        <Route exact path='/Map' element={<GeocodeAndDistance />} />
        <Route path='/' element={<Navigate to='/SignInPage' replace />} />
      </Routes>
    </div>
  );
};

export default Navbar2;
