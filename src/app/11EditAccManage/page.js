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
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; 
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 

function EditAccManage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [isEditing, setIsEditing] = useState(true); 

  const vehicleOwners = [
    { id: 1, firstName: 'Zeo', lastName: 'Dongallo', email: 'zeodongallo@gmail.com', phone: '09123456789' },
    { id: 2, firstName: 'Nicole Kate', lastName: 'Jumao-as', email: 'jumaaasolivya@gmail.com', phone: '09122535344' },
    { id: 3, firstName: 'Jhade', lastName: 'Sedillo', email: 'sedillojhade28@gmail.com', phone: '09465757578' },
    { id: 4, firstName: 'Mike', lastName: 'Sorono', email: 'soronojhonmike@gmail.com', phone: '09723534945' },
    { id: 5, firstName: 'Aubriana', lastName: 'Tugano', email: 'aubrianagaillejkufc@gmail.com', phone: '09624819578' },
  ];

  const handleDeleteClick = (owner) => {
    setSelectedOwner(owner);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOwner(null);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting user: ${selectedOwner.firstName} ${selectedOwner.lastName}`);
    handleCloseDialog(); 
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'white' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 80,
          '& .MuiDrawer-paper': {
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

        <Box sx={{ mt: 10, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            label=""
            variant="outlined"
            size="small"
            sx={{ width: '300px', backgroundColor: '#f3f3f3' }}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer component={Paper} sx={{ backgroundColor: '#f7f7f7', mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'black' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Vehicle Owner ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>First Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Last Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Phone Number</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleOwners.map((owner, index) => (
                <TableRow key={owner.id}>
                  {isEditing && index === 0 ? (
                    <>
                      <TableCell sx={{ backgroundColor: '#f3f3f3' }}>{owner.id}</TableCell>
                      <TableCell>
                        <TextField defaultValue={owner.firstName} variant="outlined" size="small" />
                      </TableCell>
                      <TableCell>
                        <TextField defaultValue={owner.lastName} variant="outlined" size="small" />
                      </TableCell>
                      <TableCell>
                        <TextField defaultValue={owner.email} variant="outlined" size="small" />
                      </TableCell>
                      <TableCell>
                        <TextField defaultValue={owner.phone} variant="outlined" size="small" />
                      </TableCell>
                      <TableCell>
                        <IconButton sx={{ color: 'lightblue' }} onClick={() => setIsEditing(false)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'green' }}>
                          <PersonIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteClick(owner)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell sx={{ backgroundColor: '#f3f3f3' }}>{owner.id}</TableCell>
                      <TableCell>{owner.firstName}</TableCell>
                      <TableCell>{owner.lastName}</TableCell>
                      <TableCell>{owner.email}</TableCell>
                      <TableCell>{owner.phone}</TableCell>
                      <TableCell>
                        <IconButton sx={{ color: 'blue' }} onClick={() => setIsEditing(index === 0)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'green' }}>
                          <PersonIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteClick(owner)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
            <DeleteOutlineIcon sx={{ color: 'red', marginRight: '8px' }} />
            Confirm Deletion
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {selectedOwner?.firstName} {selectedOwner?.lastName}'s account? This action
              cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default EditAccManage;
