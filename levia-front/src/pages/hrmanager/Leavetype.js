import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../../components/hrmanager/Layout";
import Searchbar from "../../components/hrmanager/Searchbar";
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Typography,
  Pagination,
  TextField,
  Grid,
} from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function History() {
  const theme = useTheme();
  const [leaverequest, setLeaverequest] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const leavesPerPage = 10;
  const [newLeaveType, setNewLeaveType] = React.useState("");
  const [newLeaveTypeId, setNewLeaveTypeId] = React.useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3009/leaverequest/allleaveshistory`)
      .then((response) => {
        console.log(response.data);
        setLeaverequest(response.data);
      });
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastLeave = currentPage * leavesPerPage;
  const indexOfFirstLeave = indexOfLastLeave - leavesPerPage;
  const currentLeaves = leaverequest.slice(indexOfFirstLeave, indexOfLastLeave);

  const handleLeaveRequestEdit = (leaveId) => {
    console.log(`Editing leave request with ID ${leaveId}`);
  };

  const handleAddLeaveType = () => {
    console.log("Adding new leave type:", newLeaveType, newLeaveTypeId);
    // Add logic to handle adding a new leave type
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>
         
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              p: "10px",
            }}
          >
            <Box
              sx={{
                flex: 2,
                p: "10px",
              }}
            >
              
              <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Leave Id </StyledTableCell>
                      <StyledTableCell>Leave Type </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentLeaves.map((request) => (
                      <StyledTableRow key={request.leaveId}>
                        <TableCell component="th" scope="row">
                          {request.plazeruserid.ufname +
                            " " +
                            request.plazeruserid.ulname}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {request.leaveId}
                        </TableCell>
                        
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Pagination
                count={Math.ceil(leaverequest.length / leavesPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 2,
                p: "10px",
                justifyContent:'space-around'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#0288D1",
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: "26px",
                  letterSpacing: "0.46px",
                  p: "10px",
                }}
              >
                Add New Leave Type
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Leave Type"
                    variant="outlined"
                    fullWidth
                    value={newLeaveType}
                    onChange={(e) => setNewLeaveType(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Leave Type ID"
                    variant="outlined"
                    fullWidth
                    value={newLeaveTypeId}
                    onChange={(e) => setNewLeaveTypeId(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddLeaveType}
                    fullWidth
                  >
                    Add Leave Type
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
