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
  Box,
  TextField,
  Typography,
  Avatar,
  InputAdornment,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SendIcon from '@mui/icons-material/Send';


const messages = [
  { id: 1, user: 'Zeo Dongallo', message: 'Can you tell me more about MR. ROVER ?', date: '06-08-2024', sentByUser: true },
  { id: 2, user: 'Admin', message: 'Sure, I can help you with that.', date: '06-08-2024', sentByUser: false },
  { id: 3, user: 'Zeo Dongallo', message: 'What services do you offer?', date: '06-08-2024', sentByUser: true },
  { id: 4, user: 'Admin', message: 'We offer vehicle management, history tracking, and more!', date: '06-08-2024', sentByUser: false },
  { id: 5, user: 'Zeo Dongallo', message: 'How do I sign up for vehicle management?', date: '06-08-2024', sentByUser: true },
  { id: 6, user: 'Admin', message: 'You can sign up through our website or mobile app by clicking the "Sign Up" button.', date: '06-08-2024', sentByUser: false },
  { id: 7, user: 'Zeo Dongallo', message: 'Is there a fee for the service?', date: '06-08-2024', sentByUser: true },
  { id: 8, user: 'Admin', message: 'There is a basic free plan, and we offer premium features for a small monthly fee.', date: '06-08-2024', sentByUser: false },
  { id: 9, user: 'Zeo Dongallo', message: 'What are the premium features?', date: '06-08-2024', sentByUser: true },
  { id: 10, user: 'Admin', message: 'Premium features include advanced vehicle tracking, priority customer support, and detailed history reports.', date: '06-08-2024', sentByUser: false },
];

function CustomerService() {
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSendMessage = () => {
    if (messageText) {
      
      setMessageText('');
    }
  };

  const handleMessageClick = (msg) => {
    setSelectedMessage(msg);
    alert(`You clicked on message: "${msg.message}" by ${msg.user}`);
  };

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

        
        <Box sx={{ mt: 10, display: 'flex', flexDirection: 'row', height: '80vh', border: '1px solid #f3f3f3' }}>
          

          <Box
            sx={{
              width: '30%',
              backgroundColor: '#f7f7f7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{ m: 2 }}
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

            
            <Paper sx={{ flexGrow: 1, overflow: 'auto' }}>
              {messages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{ p: 2, borderBottom: '1px solid #e0e0e0', cursor: 'pointer' }}
                  onClick={() => handleMessageClick(msg)}
                >
                  <Typography variant="subtitle1">
                    {msg.user}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#888' }}>
                    {msg.date || 'N/A'}
                  </Typography>
                  <Typography variant="body2">{msg.message}</Typography>
                </Box>
              ))}
            </Paper>
          </Box>

          
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', backgroundColor: '#fafafa' }}>
              {messages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.sentByUser ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                  onClick={() => handleMessageClick(msg)}
                  style={{ cursor: 'pointer' }}
                >
                  <Box
                    sx={{
                      backgroundColor: msg.sentByUser ? '#1565c0' : '#e0e0e0',
                      color: msg.sentByUser ? 'white' : 'black',
                      p: 1.5,
                      borderRadius: '16px',
                      maxWidth: '60%',
                    }}
                  >
                    <Typography variant="body2">{msg.message}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            
            <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton color="primary" onClick={handleSendMessage}>
                      <SendIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerService;
