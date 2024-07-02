import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/user/Layout";
import { Box, useMediaQuery } from "@mui/material";
import LeaveCard from "../../components/hrmanager/Cardhr";
import LeaveCountCard from "../../components/shared/leaveCountCard"
import { useTheme } from "@mui/material/styles";
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
            pagelink="/user/userpendingleaves"
            cardavatar={<ResetTvIcon />}
          />
          <LeaveCard
           sx={{width : "260px"}}
            cardcolor="green"
            title=" LEAVES History"
            count="5"
            pagelink="/user/home"
            cardavatar={<QuestionAnswerIcon />}
          />
          <LeaveCountCard
           sx={{width : "16rem"}}
            cardcolor="orange"
            title="Available Leaves:"
            count='67'
            cardavatar={<PeopleIcon />}
          />
          <LeaveCountCard
            sx={{width : '16rem'}}
            cardcolor="blue"
            title="Total Leaves"
            count={leaveTypeCount}
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
