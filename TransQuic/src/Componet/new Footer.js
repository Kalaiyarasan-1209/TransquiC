Cimport React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'lightgrey', color: "black", textAlign: "center",justifyContent:'center', width: "100%",margin:'0 auto'}}>
        <div class="social-icons" style={{ }}>
      <Typography variant="h6" align="center" >
        <br/>
          For more Information Contact us..!!! 
        </Typography>
        <a href="https://instagram.com/kings__3127?igshid=MzNlNGNkZWQ4Mg=="><InstagramIcon style={{ height: "50px", width: "70px",  color:"darkpink" }}/></a>
        <a href="https://www.bing.com/ck/a?!&&p=67f6c602c644a556JmltdHM9MTcwMDQzODQwMCZpZ3VpZD0xOTUwNDkyOS1lZTIxLTZiNzUtM2Y3Mi01YjUzZWY5MzZhMjcmaW5zaWQ9NTIxMw&ptn=3&ver=2&hsh=3&fclid=19504929-ee21-6b75-3f72-5b53ef936a27&psq=facebook&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLw&ntb=1"><FacebookIcon style={{ height: "50px", width: "70px",  color:"blue" }} /></a>
        <a href="https://www.bing.com/ck/a?!&&p=b8ba64783fec7b11JmltdHM9MTcwMDQzODQwMCZpZ3VpZD0xOTUwNDkyOS1lZTIxLTZiNzUtM2Y3Mi01YjUzZWY5MzZhMjcmaW5zaWQ9NTIwNg&ptn=3&ver=2&hsh=3&fclid=19504929-ee21-6b75-3f72-5b53ef936a27&psq=twitter&u=a1aHR0cHM6Ly90d2l0dGVyLmNvbS8_bGFuZz1lbi1pbg&ntb=1"><TwitterIcon style={{ height: "50px", width: "70px",  color:"aqua" }}/></a>
        <a href="https://www.bing.com/ck/a?!&&p=5982b4fba0ad5db3JmltdHM9MTcwMDQzODQwMCZpZ3VpZD0xOTUwNDkyOS1lZTIxLTZiNzUtM2Y3Mi01YjUzZWY5MzZhMjcmaW5zaWQ9NTIxNQ&ptn=3&ver=2&hsh=3&fclid=19504929-ee21-6b75-3f72-5b53ef936a27&psq=youtube&u=a1aHR0cDovL2luLnlvdXR1YmUuY29tLw&ntb=1"><YouTubeIcon style={{ height: "50px", width: "70px",  color:"red" }}/></a>
        <a href="https://www.bing.com/ck/a?!&&p=51ab54ed8538d51cJmltdHM9MTcwMDQzODQwMCZpZ3VpZD0xOTUwNDkyOS1lZTIxLTZiNzUtM2Y3Mi01YjUzZWY5MzZhMjcmaW5zaWQ9NTIyMQ&ptn=3&ver=2&hsh=3&fclid=19504929-ee21-6b75-3f72-5b53ef936a27&psq=whatsapp&u=a1aHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tLw&ntb=1"><WhatsAppIcon style={{ height: "50px", width: "70px",  color:"green" }} /></a>
        <a href="https://www.bing.com/ck/a?!&&p=1769eaae37c33f20JmltdHM9MTcwMDQzODQwMCZpZ3VpZD0xOTUwNDkyOS1lZTIxLTZiNzUtM2Y3Mi01YjUzZWY5MzZhMjcmaW5zaWQ9NTIxMA&ptn=3&ver=2&hsh=3&fclid=19504929-ee21-6b75-3f72-5b53ef936a27&psq=linkedin&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2xvZ2lu&ntb=1"><LinkedInIcon style={{ height: "50px", width: "70px",  color:"blue" }}/></a>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between",textAlign:'start' }}>
        <div>
          <h3>Contact Us</h3>
          <p>SKCET,Coimbatore.</p>
          <p>(123) 456-7890</p>
          <a href="#" style={{ color: "black" }}>Request a Demo</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="/ServicePage" style={{ color: "black" }}>Events</a><br/>
          <a href="/ServicePage" style={{ color: "black" }}>Branding</a><br/>
          <a href="/ServicePage" style={{ color: "black" }}>Exhibition</a><br/>
          <a href="/ServicePage" style={{ color: "black" }}>Promotion</a><br/>
          <a href="/ServicePage" style={{ color: "black" }}>Road Show</a><br/>
          <a href="/ServicePage" style={{ color: "black" }}>and more</a><br/>
        </div>
        <div>
          <h3>Gallery</h3>
          <a href="/GalleryPage" style={{ color: "black" }}>Chennai</a><br/>
          <a href="/GalleryPage" style={{ color: "black" }}>Bangalore</a><br/>
          <a href="/GalleryPage" style={{ color: "black" }}>Delhi</a><br/>
          <a href="/GalleryPage" style={{ color: "black" }}>Goa</a><br/>
          <a href="/GalleryPage" style={{ color: "black" }}>Allahabad</a><br/>
          <a href="/GalleryPage" style={{ color: "black" }}>and more</a><br/>
          
       
        </div>
        <div>
          <h3>Follow Us On</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Facebook</a><br/>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Twitter</a><br/>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>LinkedIn</a>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "20px" }}>© 2020 Your Company Name. All rights reserved. | <a href="#" style={{ color: "black" }}>Legal</a> | <a href="#" style={{ color: "black" }}>Privacy Policy</a> | <a href="#" style={{ color: "black" }}>Terms of Use</a> | <a href="#" style={{ color: "black" }}>Accessibility</a> | <a href="#" style={{ color: "black" }}>Sitemap</a> | <a href="#" style={{ color: "black" }}>US (English)</a></p>
    </div>
  );
};

export default Footer;
