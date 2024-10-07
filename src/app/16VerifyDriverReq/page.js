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
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BookIcon from "@mui/icons-material/Book";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ChatIcon from "@mui/icons-material/Chat";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CloseIcon from "@mui/icons-material/Close"; 

function DriverVerification() {
  const [image, setImage] = useState("/assets/default-avatar.jpg"); 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
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

      
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f3f3f3" }}>
        
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
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "80%",
              padding: 4,
              backgroundColor: "white",
              borderRadius: 2,
              position: "relative",
              maxHeight: "70vh",
              overflowY: "auto", 
            }}
          >
            
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <CloseIcon />
            </IconButton>

            
            <Box sx={{ display: "flex", mb: 2 }}>
              
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar
                  src={image}
                  alt="Profile Image"
                  sx={{
                    width: 80, 
                    height: 80,
                    marginBottom: 1,
                  }}
                />
                <Button
                  variant="text"
                  component="label"
                  startIcon={<PhotoCameraIcon />}
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    color: "#1976d2",
                    padding: 0,
                    border: "none",
                  }}
                >
                  Upload Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </Button>
              </Box>

              
              <Box sx={{ ml: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  JUAN MASIPAG
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  32, M, Looc, Mandaue City <br />
                  09012345678, juanmasipag@gmail.com
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Driver's License
            </Typography>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              sx={{ mb: 1 }}
            >
              DriversLicenseFRONT.pdf
            </Button>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              sx={{ mb: 1 }}
            >
              DriversLicenseBACK.pdf
            </Button>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Plate Number
            </Typography>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              sx={{ mb: 1 }}
            >
              PLATENUMBER.pdf
            </Button>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Birth Certificate
            </Typography>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              sx={{ mb: 1 }}
            >
              BIRTHCERTIFICATE.pdf
            </Button>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Other ID (Government ID)
            </Typography>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              sx={{ mb: 1 }}
            >
              GOVIDFRONTANDBACK.pdf
            </Button>

            
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end", 
                mt: 3,
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ mr: 2, minWidth: 120 }} 
              >
                DECLINE
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ minWidth: 120 }} 
              >
                ACCEPT
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default DriverVerification;
