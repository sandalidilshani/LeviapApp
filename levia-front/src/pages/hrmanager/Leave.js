import {
  Box,
  Card,
  CardContent,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../../components/hrmanager/Layout";
import Leavedetails from "./Leavedetails";
import LeaveCard from "../../components/shared/leaveCountCard";
import PeopleIcon from "@mui/icons-material/People";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile(props) {
  const [userdetails, setUserDetails] = useState({});
  const { leaveId } = useParams();
  console.log(leaveId);

  useEffect(() => {
    const fetchLeaveDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3009/plazeruser/getleavedetails/${leaveId}`
        );
        console.log(res.data.userName);
        setUserDetails(res.data);
        console.log(userdetails.userFName);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLeaveDetails();
  }, [leaveId]); // Dependency array with leaveId to avoid infinite loop

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flex: "2",
            p: 2,
            flexDirection: "column",
            width: "40%",
          }}
        >
          <Box sx={{ display: "flex", p: 2 }}>
            <Card sx={{ width: "100%", backgroundColor: "#dceff9" }}>
              <CardContent>
                <Stack direction="column" spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        height: "80px",
                        width: "80px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">{userdetails.userFName} {userdetails.userLName}</Typography>
                      <Typography variant="h7">{userdetails.active}</Typography>
                      <Typography variant="body1">
                        {userdetails.gender}
                      </Typography>
                      <Typography variant="body1">
                        {userdetails.role}
                      </Typography>
                      <Typography variant="body1">
                        {userdetails.active}
                      </Typography>
                      <Typography variant="body1">{userdetails.DoB}</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="column" alignItems="start" pl="40px">
                    <Typography variant="subtitle1">
                      {userdetails.Email}
                    </Typography>
                    <Typography variant="subtitle1">
                      {userdetails.phone}
                    </Typography>
                    <Typography variant="subtitle1">
                      {userdetails.AddressL1} {userdetails.AddressL2}{" "}
                    </Typography>
                    <Typography variant="subtitle1">
                      {userdetails.gitlink}
                    </Typography>
                    <Typography variant="subtitle1">
                      {userdetails.skills}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, p: 2 }}>
            <LeaveCard
              sx={{ width: "200px" }}
              cardcolor="#1782aa"
              title="PENDING LEAVES:"
              count="89"
              cardavatar={<ResetTvIcon />}
            />
            <LeaveCard
              sx={{ width: "200px" }}
              cardcolor="green"
              title="AVAILABLE LEAVES:"
              count="89"
              cardavatar={<ResetTvIcon />}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", gap: 2, p: 2, pt: 0 }}
          >
            <LeaveCard
              sx={{ width: "200px" }}
              cardcolor="red"
              title="REJECT LEAVES:"
              count="89"
              cardavatar={<ResetTvIcon />}
            />
            <LeaveCard
              sx={{ width: "200px" }}
              cardcolor="#1782aa"
              title="TOTAL LEAVES:"
              count="89"
              cardavatar={<ResetTvIcon />}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "3",
            width: "60%",
          }}
        >
          <Leavedetails />
        </Box>
      </Box>
    </Layout>
  );
}
