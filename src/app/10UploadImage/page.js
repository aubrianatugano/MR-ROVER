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
  Button,
  TextField,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close'; 

function UploadImage() {
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

      
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 10, 
            boxShadow: 3,
            borderRadius: 2,
            padding: 4,
            backgroundColor: '#ffffff',
            width: '80%',
            maxWidth: '600px', 
            margin: 'auto',
          }}
        >
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }}>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Upload Photo
            </Typography>
            <IconButton sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <UploadFileIcon sx={{ fontSize: 50, color: 'black', mb: 2 }} />

          
          <Box
            sx={{
              border: '2px dashed gray', 
              borderRadius: 2,
              padding: 4,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
              minHeight: '100px', 
            }}
          >
            <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
              Drag & drop or browse to upload an image
            </Typography>
          </Box>

          
          <Button variant="contained" component="span" sx={{ mb: 2 }}>
            Browse
          </Button>

          
          <TextField
            fullWidth
            label="Import Image from URL"
            variant="outlined"
            size="small"
            defaultValue="https://example.com/image.jpg" 
            sx={{ backgroundColor: '#f3f3f3', mb: 2 }}
            InputProps={{
              readOnly: true, 
            }}
          />
          
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Button variant="outlined" color="error" sx={{ marginRight: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Done
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UploadImage;