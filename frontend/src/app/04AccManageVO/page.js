"use client";  

import React, { useState } from 'react';
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
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';


const users = [
  {
    id: 1,
    firstName: 'Zeo',
    lastName: 'Dongallo',
    email: 'zeodongallo@gmail.com',
    phone: '09123456789',
    isActive: true,
  },
  {
    id: 2,
    firstName: 'Nicole Kate',
    lastName: 'Jumao-as',
    email: 'jumaoasolivya@gmail.com',
    phone: '09122535344',
    isActive: true,
  },
  {
    id: 3,
    firstName: 'Jhade',
    lastName: 'Sedillo',
    email: 'sedillojhade28@gmail.com',
    phone: '09465757578',
    isActive: true,
  },
  {
    id: 4,
    firstName: 'Mike',
    lastName: 'Soroño',
    email: 'soronojohnmike@gmail.com',
    phone: '09723534945',
    isActive: true,
  },
  {
    id: 5,
    firstName: 'Aubriana',
    lastName: 'Tugano',
    email: 'aubrianagaillejkufc@gmail.com',
    phone: '09624819578',
    isActive: false,
  },
];

function AccManageVO() {
  const [searchQuery, setSearchQuery] = useState('');

  
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 8, mb: 2 }}>
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

        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#424242' }}>
                <TableCell sx={{ color: 'white' }}>VehicleOwnerID</TableCell>
                <TableCell sx={{ color: 'white' }}>First Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Email</TableCell>
                <TableCell sx={{ color: 'white' }}>Phone Number</TableCell>
                <TableCell sx={{ color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon sx={{ color: '#1e88e5' }} />
                    </IconButton>
                    <IconButton>
                      {user.isActive ? (
                        <CheckCircleIcon sx={{ color: '#43a047' }} />
                      ) : (
                        <BlockIcon sx={{ color: '#e53935' }} />
                      )}
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{ color: '#e53935' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default AccManageVO;
