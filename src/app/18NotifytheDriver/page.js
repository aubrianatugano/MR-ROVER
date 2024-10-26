"use client"; 

import React, { useState } from "react";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BookIcon from "@mui/icons-material/Book";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ChatIcon from "@mui/icons-material/Chat";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function DriverVerification() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f3f3f3" }}>
      
      <Drawer
        variant="permanent"
        sx={{
          width: 80,
          [`& .MuiDrawer-paper`]: {
            width: 80,
            boxSizing: "border-box",
            backgroundColor: "#000000",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <SpeedIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <BookIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <InsertDriveFileIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <ChatIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <ExitToAppIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#f3f3f3" }}>
        
        <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#c4d9ee" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/MR-LOGO.jpg"
                alt="MR. ROVER Logo"
                style={{ height: "40px", marginRight: "16px" }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "black" }}>
                MR. ROVER
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ color: "black", marginRight: "10px" }}>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 64px)", 
          }}
        >
          <Paper
            sx={{
              width: "80%",
              padding: 4,
              backgroundColor: "white",
              borderRadius: 2,
              position: "relative",
              overflowY: "auto", 
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Account Management - Notify Driver
            </Typography>

            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
              Notify Driver
            </Button>

            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              maxWidth="xs"
              fullWidth
              PaperProps={{
                sx: { padding: 2, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
              }}
            >
              <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.25rem" }}>
                Notify the Driver?
              </DialogTitle>
              <DialogContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Avatar src="/assets/default-avatar.jpg" sx={{ width: 60, height: 60, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                  Juan Masipag
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mt: 0.5 }}>
                  09012345678, juanmasipag@gmail.com
                </Typography>
              </DialogContent>
              <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button onClick={handleCloseDialog} color="error" variant="contained" sx={{ width: 100, mr: 1 }}>
                  Cancel
                </Button>
                <Button onClick={handleCloseDialog} color="success" variant="contained" sx={{ width: 100 }}>
                  Yes, confirm
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default DriverVerification;
