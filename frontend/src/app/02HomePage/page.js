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
  Box,
  Paper,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function HomePage() {
  return (
    <div className="flex h-screen bg-white">
      
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

      
      <div className="flex-grow p-8 ml-20 bg-white">
        <Toolbar />
        <h4 className="mb-4 text-4xl text-black">Dashboard</h4>

        
        <p className="mb-4 text-black">Saturday, September 7</p>

        
        <Paper className="p-4 shadow-lg">
          <h6 className="text-xl text-black">Juan Masipag</h6>
          <p className="text-black">juanmasipag@gmail.com</p>
          <p className="mt-4 text-black">07-09-2024</p>
        </Paper>

        
        <p className="mt-8 text-center text-gray-500">No more requests to show</p>
      </div>
    </div>
  );
}

export default HomePage;
