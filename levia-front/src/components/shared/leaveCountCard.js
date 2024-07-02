import {
    CardContent,
    Stack,
    Typography,
    Card,
    Avatar,
    Button,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  
  export default function Cardhr({
    cardcolor,
    title,
    count,
    pagelink,
    cardavatar,
    sx,
  }) {
    // Default styles for the card
    const defaultStyles = {
      width: 300,  // Default width
      height: 180, // Default height
    };
  
    return (
      <Card sx={{ ...defaultStyles, ...sx }}>
        <CardContent>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          >
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {title}
              </Typography>
              <Typography variant="h3" color="initial">
                {count}
              </Typography>
            </Stack>
            <Avatar
              sx={{ backgroundColor: cardcolor, height: "56px", width: "56px" }}
            >
              {cardavatar}
            </Avatar>
          </Stack>
        </CardContent>
      </Card>
    );
  }
  