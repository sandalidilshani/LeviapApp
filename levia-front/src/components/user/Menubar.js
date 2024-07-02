import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
  Logout,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import AppsIcon from "@mui/icons-material/Apps";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import EditIcon from "@mui/icons-material/Edit";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  height: "15%",
  minWidth: 40,
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#2196F3",
  },
  "&$selected": {
    backgroundColor: "#2196F3",
  },
  "&:active, &:focus": {
    backgroundColor: "#2196F3",
    outline: "none",
  },
  gap: theme.spacing(1),
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "white",
  minWidth: "40px",
}));

const SignOutButton = styled(ListItemButton)(({ theme }) => ({
  color: "white",
  borderColor: "#2196F3",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "20px",
  marginTop: 30,
  padding: theme.spacing(1, 2),
  "&:hover": {
    borderColor: "white",
    backgroundColor: "transparent",
  },
}));

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <Box
      flex={1}
      height={'100vh'}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      bgcolor={"black"}
      color={"white"}
    >
      <Box height="30%">
        <img
          src={logo}
          width="256px"
          height="271px"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <List>
        <ListItem>
          <StyledListItemButton
            component="a"
            href="/user/home"
            onClick={() => setCurrentPage("home")}
          >
            <StyledListItemIcon>
              <AppsIcon />
            </StyledListItemIcon>
            <ListItemText primary="Home" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton
            component="a"
            href="/user/requestleave"
            onClick={() => setCurrentPage("laevetype")}
          >
            <StyledListItemIcon>
              <EditIcon />
            </StyledListItemIcon>
            <ListItemText primary="Request Leave" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton
            component="a"
            href="/user/userpendingleaves"
            onClick={() => setCurrentPage("pendingleaves")}
          >
            <StyledListItemIcon>
              <BackupTableIcon />
            </StyledListItemIcon>
            <ListItemText primary="Pending Leaves" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton
            component="a"
            href="/user/history"
            onClick={() => setCurrentPage("history")}
          >
            <StyledListItemIcon>
              <MarkChatReadIcon />
            </StyledListItemIcon>
            <ListItemText primary="History" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton component="a" href="/userdetails">
            <StyledListItemIcon>
              <Person />
            </StyledListItemIcon>
            <ListItemText primary="My Details" />
          </StyledListItemButton>
        </ListItem>

        <Divider color="#2196F3" sx={{ height: 2, width: "100%" }} />
        <ListItem>
          <SignOutButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="SignOut" />
          </SignOutButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
