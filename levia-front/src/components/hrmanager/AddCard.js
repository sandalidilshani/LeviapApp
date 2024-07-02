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
import AddIcon from "@mui/icons-material/Add";

export default function AddCard({

  title,
  pagelink,
  cardavatar,
  desc,
  
}) {
  return (
    <Button variant="contained" component={Link} to={pagelink} >

    <Card sx={{ width: "256px" }}>
      <CardContent>
        <Stack
          spacing={2}
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Avatar
            sx={{ backgroundColor: "#2196F3", height: "56px", width: "56px" }}
          >
            {cardavatar}
          </Avatar>
          <Stack spacing={1} sx={{ textAlign: "left" }}>
            <Typography variant="h6" color="initial">
              {title}
            </Typography>
            <Typography variant="overline" color="initial">
              {desc}
            </Typography>
            
          </Stack>
        </Stack>
      </CardContent>
    </Card>
    </Button>

  );
}
