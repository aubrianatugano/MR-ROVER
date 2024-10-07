"use client";

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Box,
  Button,
  Paper,
  Grid
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DeleteIcon from '@mui/icons-material/Delete';


const booking = {
  id: 1,
  startDate: '09-09-2024',
  endDate: '09-11-2024',
  startTime: '1:00 pm',
  endTime: '1:00 pm',
  vehicle: 'Car',
  model: 'Toyota Wigo',
  typeOfService: 'Round Trip',
  driver: 'Juan Masipag',
  client: 'Zeo Dongallo',
  status: 'Confirmed',  
};

function BookingDetails() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'white' }}>
      
      <Drawer
        variant="permanent"
        sx={{
          width: 80,
          [`& .MuiDrawer-paper`]: {
            width: 80,
            boxSizing: 'border-box',
            backgroundColor: '#000000',
            color: 'white',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <SpeedIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <BookIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <InsertDriveFileIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <ChatIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: 'white' }}>
              <ExitToAppIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#c4d9ee' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/assets/MR-LOGO.jpg" alt="MR. ROVER Logo" style={{ height: '40px', marginRight: '16px' }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
                MR. ROVER
              </Typography>
            </Box>

            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ color: 'black', marginRight: '10px' }}>
                ADMIN
              </Typography>
              <IconButton color="inherit">
                <Avatar alt="Admin" src="/assets/admin-avatar.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        
        <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
          <Paper sx={{ width: '80%', padding: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom>
              BookingID {booking.id}
            </Typography>

            <Grid container spacing={2}>
              
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  
                  <Grid item xs={6}>
                    <TextField
                      label="Start Date"
                      value={booking.startDate}
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="End Date"
                      value={booking.endDate}
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>

                  
                  <Grid item xs={6}>
                    <TextField
                      label="Start Time"
                      value={booking.startTime}
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="End Time"
                      value={booking.endTime}
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>

                  
                  <Grid item xs={6}>
                    <TextField
                      label="Vehicle"
                      value={booking.vehicle}
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Model"
                      value={booking.model}
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              
              <Grid item xs={12} md={6}>
                
                <TextField
                  label="Type of Service"
                  value={booking.typeOfService}
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: '100%', mb: 2 }}
                  InputProps={{ readOnly: true }}
                />

                
                <TextField
                  label="Driver"
                  value={booking.driver}
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: '100%', mb: 2 }}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  label="Client"
                  value={booking.client}
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: '100%', mb: 2 }}
                  InputProps={{ readOnly: true }}
                />

                
                <TextField
                  label="Booking Status"
                  value={booking.status}  
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: '100%', mb: 2 }}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: 'none', mr: 2, width: '150px' }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                sx={{ textTransform: 'none', mr: 2, width: '150px' }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="inherit"
                sx={{ textTransform: 'none', width: '150px' }}
              >
                Cancel
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default BookingDetails;
