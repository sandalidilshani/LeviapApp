import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
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
import { Logout } from "@mui/icons-material"; // Assuming Logout is your sign out icon
import { useEffect } from "react";

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
  const [currentPage, SetCurrentPage] = useState("");

  return (
    <Box
      flex={1}
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
            href="/"
            onClick={() => SetCurrentPage("home")}
          >
            <StyledListItemIcon>
              <AppsIcon />
            </StyledListItemIcon>
            <ListItemText primary="Homepage" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton component="a" href="/pendingleaves">
            <StyledListItemIcon>
              <BackupTableIcon />
            </StyledListItemIcon>
            <ListItemText primary="Pending Leaves" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton component="a" href="/history">
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
            <ListItemText primary="User Details" />
          </StyledListItemButton>
        </ListItem>
        <ListItem>
          <StyledListItemButton component="a" href="/laevetype">
            <StyledListItemIcon>
              <EditIcon />
            </StyledListItemIcon>
            <ListItemText primary="Edit Leaves" />
          </StyledListItemButton>
        </ListItem>
        <Divider color="#2196F3" sx={{ height: 2, width: "100%" }} />{" "}
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
