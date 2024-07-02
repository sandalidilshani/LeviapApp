import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/hrmanager/Layout";
import { Box, Button, Container, useMediaQuery } from "@mui/material";
import LeaveCard from "../../components/hrmanager/Cardhr";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [pendingLeavesCount, setpendingLeavesCount] = useState(null);
  const [leaveTypeCount, setleaveTypeCount] = useState(null);
  const [plazeruserCount, setplazeruserCount] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3009/leaverequest/pendingleavescount`)
      .then((response) => {
        console.log(response.data);
        setpendingLeavesCount(response.data);
      });

    axios.get(`http://localhost:3009/plazeruser/usercount`).then((response) => {
      console.log(response.data);
      setplazeruserCount(response.data);
    });
    axios.get(`http://localhost:3009/leavetype/count`).then((response) => {
      console.log(response.data);
      setleaveTypeCount(response.data);
    });
  });
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "row" : "row",
          padding: "50px 22px 47px 8px",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <LeaveCard
           sx={{width : "260px"}}
            cardcolor="purple"
            title="PENDING LEAVES:"
            count={pendingLeavesCount}
            pagelink="/pendingleaves"
            cardavatar={<ResetTvIcon />}
          />
          <LeaveCard
           sx={{width : "260px"}}
            cardcolor="green"
            title="PENDING LEAVES:"
            count="5"
            pagelink="/userdetails"
            cardavatar={<QuestionAnswerIcon />}
          />
          <LeaveCard
           sx={{width : "260px"}}
            cardcolor="orange"
            title="Total Users:"
            count={plazeruserCount}
            pagelink="/userdetails"
            cardavatar={<PeopleIcon />}
          />
          <LeaveCard
            sx={{width : "260px"}}
            cardcolor="blue"
            title="Leave Type:"
            count={leaveTypeCount}
            pagelink="/laevetype"
            cardavatar={<FormatIndentDecreaseIcon />}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: "1",
          mb: isSmallScreen ? 2 : 0,
          justifyContent: "space-around",
        }}
      >
        hi
      </Box>
    </Layout>
  );
}
