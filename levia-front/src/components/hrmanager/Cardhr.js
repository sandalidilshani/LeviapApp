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

export default function Cardhr({ cardcolor, title, count, pagelink, cardavatar,sx }) {
  return (
    <Card sx={ sx }>
      <CardContent>
        <Stack spacing={3}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={1}
          >
            <Stack spacing={1}>
              <Typography variant="overline" color="initial">
                {title}
              </Typography>
              <Typography variant="h4" color="initial">
                {count}
              </Typography>
            </Stack>
            <Avatar
              sx={{ backgroundColor: cardcolor, height: "56px", width: "56px" }}
            >
              {cardavatar}
            </Avatar>
          </Stack>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <Button variant="outlined" component={Link} to={pagelink}>View More</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
