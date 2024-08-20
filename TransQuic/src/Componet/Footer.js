import React from 'react';
import { Container, Grid, Typography, Link, Box, Divider } from '@mui/material';
import TrustpilotIcon from '@mui/icons-material/Star'; // Example icon, replace with actual Trustpilot logo
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', p: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>TransQuiC</Typography>
            <Typography variant="body2">Customer service 24/7</Typography>
            <Link href="https://www.google.com/search?q=Start+a+chat" color="inherit" underline="hover">Start a chat</Link>
            <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Typography variant="body2">INDIA</Typography>
            <Typography variant="body2"><Link href="tel:+919294163724" color="inherit" underline="hover">TAMIL NADU</Link> +91 9294163724</Typography>
            <Typography variant="body2"><Link href="tel:+919622693528" color="inherit" underline="hover">KARNATAKA</Link> +91 9622693528</Typography>
            <Typography variant="body2"><Link href="tel:+919656546440" color="inherit" underline="hover">GUJARAT</Link> +91 9656546440</Typography>
            {/* <Typography variant="body2">OCEANIA - 24/7</Typography> */}
            <Typography variant="body2"><Link href="tel:+919300297730" color="inherit" underline="hover">DELHI</Link> +91 9300297730</Typography>
            {/* <Typography variant="body2">EUROPE - 24/7</Typography> */}
            <Typography variant="body2"><Link href="tel:+919045869665" color="inherit" underline="hover">RAJASTHAN</Link>+91 9045869665</Typography>
            <Typography variant="body2"><Link href="tel:+919694505426" color="inherit" underline="hover">MAHARASHTRA</Link> +91 9694505426</Typography>
            <Typography variant="body2">GENERAL INFO <Link href="mailto:info@transfeero.com" color="inherit" underline="hover">info@transquic.com</Link></Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Top Airports</Typography>
            {["Chennai International Airport", "Indira Gandhi International Airport", "Kempegowda International Airport", "Chhatrapati Shivaji Maharaj International Airport", "Netaji Subhas Chandra Bose International Airport", "Rajiv Gandhi International Airport", "Cochin International Airport", "Mangalore International Airport", "Birsa Munda International Airport", "Surat International Airport", "Sheikh ul-Alam International Airport", "Pune International Airport ", "Trivandrum International Airport", "Calicut International Airport", "Dabolim Airport"].map((airport, index) => (
              <Typography variant="body2" key={index}>
                <Link href={`https://www.google.com/search?q=${encodeURIComponent(airport)}`} color="inherit" underline="hover">{airport}</Link>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>TransQuiC Services</Typography>
            {["Airport Transfers", "City rides", "Hourly Service", "Business Solutions", "Help Centre", "Travel Blog", "Onemile™"].map((service, index) => (
              <Typography variant="body2" key={index}>
                <Link href={`https://www.google.com/search?q=${encodeURIComponent(service)}`} color="inherit" underline="hover">{service}</Link>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            {["Terms & Conditions", "For Travel Agencies", "Become a partner", "Partner login", "Instagram", "Your Privacy Choices"].map((company, index) => (
              <Typography variant="body2" key={index}>
                <Link href={`https://www.google.com/search?q=${encodeURIComponent(company)}`} color="inherit" underline="hover">{company}</Link>
              </Typography>
            ))}
            <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Typography variant="h6" gutterBottom>Language</Typography>
            <Link href="https://www.google.com/search?q=Select+Language" color="inherit" underline="hover">
              <LanguageIcon fontSize="small" /> Select Language
            </Link>
            <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Typography variant="h6" gutterBottom>Why us?</Typography>
            {["Quick reservation", "Professional Drivers", "No hidden fees"].map((whyUs, index) => (
              <Typography variant="body2" key={index}>
                <Link href={`https://www.google.com/search?q=${encodeURIComponent(whyUs)}`} color="inherit" underline="hover">{whyUs}</Link>
              </Typography>
            ))}
            <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <TrustpilotIcon sx={{ color: 'green', mr: 1 }} />
              <Typography variant="body2">Trustpilot</Typography>
            </Box>
            <Typography variant="body2" sx={{ ml: 4 }}>TrustScore 4.8 | 13,000 reviews</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} Transfeero. All rights reserved.
            </Typography>
          </Grid>
          {/* <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="path/to/visa.png" alt="Visa" style={{ marginRight: '10px', height: '24px' }} />
              <img src="path/to/mastercard.png" alt="Mastercard" style={{ marginRight: '10px', height: '24px' }} />
              <img src="path/to/amex.png" alt="Amex" style={{ marginRight: '10px', height: '24px' }} />
              <img src="path/to/paypal.png" alt="PayPal" style={{ marginRight: '10px', height: '24px' }} />
              <img src="path/to/applepay.png" alt="Apple Pay" style={{ marginRight: '10px', height: '24px' }} />
              <img src="path/to/googlepay.png" alt="Google Pay" style={{ marginRight: '10px', height: '24px' }} />
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
