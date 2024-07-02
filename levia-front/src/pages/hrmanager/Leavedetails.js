import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DialpadIcon from "@mui/icons-material/Dialpad";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import EventIcon from "@mui/icons-material/Event";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Leave() {
  const location = useLocation();
  const navigate = useNavigate();
  const leaveid = location.state;

  const [leaveDetails, setLeaveDetails] = useState({
    leaveStart: "2023-06-01",
    leaveEnd: "2023-06-10",
    leaveReason: "Family Emergency",
    leaveType: { type: "Paid Leave" },
    requestDate: "2023-05-25",
  });
  const [leaveStatusUpdate, setLeaveStatusUpdate] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [newStatus, setNewStatus] = useState("");

  const handleUpdateLeaveStatus = (status) => {
    setNewStatus(status);
    setConfirmDialogOpen(true);
  };

  const confirmUpdateLeaveStatus = () => {
    setConfirmDialogOpen(false);
    setLeaveStatusUpdate(true);
    setTimeout(() => {
      alert(`Leave request ${newStatus}d successfully!`);
      setLeaveStatusUpdate(false);
      navigate(-1); // Navigate to the previous page
    }, 1000);
  };

  return (
    <Card sx={{ p: 2, width: "100%", mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Leave Details
        </Typography>
        <Divider color="#2196F3" sx={{ height: 2, width: "100%" }} />{" "}

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton sx={{ mr: 1 }}>
            <DialpadIcon />
          </IconButton>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Leave Id:
            </Typography>
            <Typography variant="body1">89</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton sx={{ mr: 1 }}>
            <CalendarTodayIcon />
          </IconButton>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Start Date:
            </Typography>
            <Typography variant="body1">{leaveDetails.leaveStart}</Typography>
            <Typography variant="body1" fontWeight="bold">
              End Date:
            </Typography>
            <Typography variant="body1">{leaveDetails.leaveEnd}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton sx={{ mr: 1 }}>
            <AdfScannerIcon />
          </IconButton>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Reason:
            </Typography>
            <Typography variant="body1">{leaveDetails.leaveReason}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton sx={{ mr: 1 }}>
            <DescriptionIcon />
          </IconButton>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Type:
            </Typography>
            <Typography variant="body1">
              {leaveDetails.leaveType.type}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton sx={{ mr: 1 }}>
            <AccessTimeIcon />
          </IconButton>
          <Typography variant="body1" fontWeight="bold">
            Request Date:
          </Typography>
          <Typography variant="body1">{leaveDetails.requestDate}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button
            sx={{ width: "200px" ,  border: '2px solid',
            }}
            variant="outlined"
            onClick={() => handleUpdateLeaveStatus("approve")}
            disabled={leaveStatusUpdate}
          >
            Approve
          </Button>
          <Button
           sx={{ width: "200px" }}
            variant="outlined"
            color="error"
            onClick={() => handleUpdateLeaveStatus("reject")}
            disabled={leaveStatusUpdate}
          >
            Reject
          </Button>
        </Box>
      </CardContent>

      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to {newStatus} this leave request?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmUpdateLeaveStatus} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
