import { Box } from "@mui/material"; 
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
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
import CloseIcon from "@mui/icons-material/Close";

function AccountCreation() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        position: "relative",
        backgroundColor: "#e0e0e0", 
      }}
    >
      
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

      
      <Box component="main" sx={{ flexGrow: 1, position: "relative" }}>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "relative",
          }}
        >
          <Paper
            sx={{
              width: "30%", 
              padding: 4,
              backgroundColor: "white", 
              borderRadius: 2,
              boxShadow: 3,
              position: "absolute", 
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", 
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

            
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar
                sx={{ width: 60, height: 60, mr: 2 }}
                src="/path-to-profile-pic"
                alt="Profile Picture"
              />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Juan Masipag
                </Typography>
                <Typography variant="body1">juanmasipag@gmail.com</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Name
              </Typography>
              <Typography variant="body1">Juan Masipag</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Email account
              </Typography>
              <Typography variant="body1">juanmasipag@gmail.com</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Mobile number
              </Typography>
              <Typography variant="body1">09012345678</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Location
              </Typography>
              <Typography variant="body1">Looc, Mandaue City</Typography>
            </Box>

            
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button variant="contained" color="primary" sx={{ minWidth: 120 }}>
                Create Account
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default AccountCreation;
