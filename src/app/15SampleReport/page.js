"use client"; 

import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function SampleReport() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f3f3f3' }}>
      
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

      
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: 'rgba(200, 200, 200, 0.5)' }}>
        
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
            mt: 10,
            mb: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Paper
            sx={{
              width: '80%',
              padding: 4,
              backgroundColor: 'white',
              borderRadius: 2,
              position: 'relative',
            }}
          >
            
            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#424242',
                color: 'white',
              }}
            >
              DOWNLOAD REPORT
            </Button>

            
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
            >
              Revenue Report
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
              No. B-1, 2I, Jalan Prima Saujana 2/1A, Taman Prima Saujana, 43000 Kajang, Selangor
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              <b>MR. ROVER BOOKING</b><br />
              DATE & TIME: 19/06/2023 &nbsp;&nbsp; 21:59:28<br />
              TERMINAL#: T001<br />
              SHIFT CODE: 202306191<br />
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              <b>COLLECTION DETAILS</b><br />
              CASH: ( 25 ) &nbsp;&nbsp;&nbsp;&nbsp; 529.90<br />
              ONLINE: ( 40 ) &nbsp;&nbsp;&nbsp;&nbsp; 203.00<br />
              PAY WAVE: ( 16 ) &nbsp;&nbsp;&nbsp;&nbsp; 367.10<br />
            </Typography>

            
            <hr />

            <Typography variant="body1" sx={{ mb: 3 }}>
              <b>** TOTAL **</b>&nbsp;&nbsp;&nbsp;&nbsp; 1,100.00<br />
            </Typography>

            
            <Typography variant="body1">
              <b>SUMMARY ANALYSIS</b><br />
              DEPT&nbsp;&nbsp;&nbsp;&nbsp;QTY&nbsp;&nbsp;&nbsp;&nbsp;AMT<br />
              FOOD&nbsp;&nbsp;&nbsp;&nbsp;(20)&nbsp;&nbsp;&nbsp;&nbsp; 500.00<br />
              BEVERAGES&nbsp;&nbsp;&nbsp;&nbsp;(10)&nbsp;&nbsp;&nbsp;&nbsp; 300.00<br />
              OTHERS&nbsp;&nbsp;&nbsp;&nbsp;(5)&nbsp;&nbsp;&nbsp;&nbsp; 300.00<br />
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default SampleReport;
