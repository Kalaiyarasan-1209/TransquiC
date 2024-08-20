import { Paper, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';

function EventForm() {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventName, setEventName] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Event Type: ${eventType}, Event Name: ${eventName}, City: ${city}, Date: ${date}`);
  };

  return (
    <div style={{backgroundImage:`url()`,backgroundSize:'cover'}}>
      <h1 style={{textAlign:"center", textSizeAdjust:'10px'}}><br/><b>Welcome to Event Management</b><br /></h1>
      <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
        <Paper style={{ padding:20, height:'70vh', width:'20%', margin:"20px auto", backgroundColor: 'rgba(200, 200, 200, 0.5)', justifyContent:'center', textAlign:'center', border: '2px solid black' }}>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <FormControl sx={{ minWidth: 225 }}>
              <InputLabel>Event Type</InputLabel>
              <Select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Public Events">Public Events</MenuItem>
                <MenuItem value="Private Events">Private Events</MenuItem>
                <MenuItem value="Corporate events">Corporate events</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl sx={{ minWidth: 225 }}>
              <InputLabel>Event Name</InputLabel>
              <Select value={eventName} onChange={(e) => setEventName(e.target.value)}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Event">Event</MenuItem>
                <MenuItem value="Branding">Branding</MenuItem>
                <MenuItem value="Exhibition">Exhibition</MenuItem>
                <MenuItem value="Promotion">Promotion</MenuItem>
                <MenuItem value="Road Show">Road Show</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl sx={{ minWidth: 225 }}>
              <InputLabel>City</InputLabel>
              <Select value={city} onChange={(e) => setCity(e.target.value)}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <br />
            <Box display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default EventForm;