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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EditIcon from '@mui/icons-material/Edit';

function AdminProfile() {
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

      
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <AppBar
          position="fixed"
          sx={{ zIndex: 1201, backgroundColor: '#c4d9ee', width: '100%' }}
        >
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

        
        <Box sx={{ flex: 1, padding: 4, marginTop: '64px', marginLeft: '80px', display: 'flex', justifyContent: 'center' }}>
          <Paper elevation={0} sx={{ padding: 3, width: '100%', maxWidth: '800px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
              <Avatar
                src="/assets/SB-LOGO.jpg"
                alt="Profile"
                sx={{ width: 150, height: 150, mr: 3 }}
              />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Zeo Dongallo
                </Typography>
                <Typography>zeodongallo@gmail.com</Typography>
                <Typography>09123456789</Typography>
                <Typography>z.dongallo</Typography>
                <Typography>01234</Typography>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </Box>
            </Box>

            
            <TableContainer component={Paper} sx={{ backgroundColor: '#f0f0f0', boxShadow: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="bold">Admin</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">First Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">Last Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">Account Created</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">Last Logged in</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">Status</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Zeo</TableCell>
                    <TableCell>Dongallo</TableCell>
                    <TableCell>10/21/23 09:45 PM</TableCell>
                    <TableCell>09/24/24 10:17 PM</TableCell>
                    <TableCell>
                      <Avatar sx={{ backgroundColor: 'green', width: 24, height: 24 }} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminProfile;