"use client"; 

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  InputAdornment,
  Box,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';


const bookings = [
  {
    id: 1,
    startDate: '09-09-2024',
    endDate: '09-11-2024',
    startTime: '1:00 pm',
    endTime: '1:00 pm',
    vehicle: 'Car',
    model: 'Toyota Wigo',
  },
];

function GenerateReport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(true); 

  
  const filteredBookings = bookings.filter((booking) =>
    `${booking.id} ${booking.vehicle} ${booking.model}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  
  const handleClose = () => setOpenModal(false);

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

        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 10, mb: 3 }}>
          
          <Button
            variant="contained"
            sx={{ backgroundColor: '#424242', color: 'white' }}
            onClick={() => setOpenModal(true)} 
          >
            GENERATE REPORT
          </Button>

          
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: '#f3f3f3', width: '250px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#424242' }}>
                  <TableCell sx={{ color: 'white' }}>historyID</TableCell>
                  <TableCell sx={{ color: 'white' }}>Start Date</TableCell>
                  <TableCell sx={{ color: 'white' }}>End Date</TableCell>
                  <TableCell sx={{ color: 'white' }}>Start Time</TableCell>
                  <TableCell sx={{ color: 'white' }}>End Time</TableCell>
                  <TableCell sx={{ color: 'white' }}>Vehicle</TableCell>
                  <TableCell sx={{ color: 'white' }}>Model</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.startDate}</TableCell>
                    <TableCell>{booking.endDate}</TableCell>
                    <TableCell>{booking.startTime}</TableCell>
                    <TableCell>{booking.endTime}</TableCell>
                    <TableCell>{booking.vehicle}</TableCell>
                    <TableCell>{booking.model}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        
        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paper
              sx={{
                position: 'relative',
                padding: 4,
                width: '300px',
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            >
              
              <IconButton
                onClick={handleClose}
                sx={{ position: 'absolute', top: '8px', right: '8px', color: 'black' }}
              >
                <CloseIcon />
              </IconButton>

              <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Report Option
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{ mb: 2, backgroundColor: '#000000', color: 'white' }}
              >
                RIDE HISTORY REPORT
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#000000', color: 'white' }}
              >
                REVENUE REPORT
              </Button>
            </Paper>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

export default GenerateReport;
