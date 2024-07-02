import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/hrmanager/Home";
import Pendingleaves from "./pages/hrmanager/Pendingleaves";
import History from "./pages/hrmanager/History";
import Leavedetails from "./pages/hrmanager/Leavedetails";
import { Userdetails } from "./pages/hrmanager/Userdetails";
import Leave from "./pages/hrmanager/Leave";
import Leavetype from "./pages/hrmanager/Leavetype";
import RequestLeave from "./pages/user/RequestLeave";
import UserHistory from "./pages/shared/UserHistory";
import UserPendingLeave from "./pages/shared/UserpendingLeaves";
import UserHome from "./pages/user/Home"
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendingleaves" element={<Pendingleaves />} />
        <Route path="/history" element={<History />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/leavedetails" element={<Leavedetails />} />
        <Route path="/laevetype" element={<Leavetype />} />
        <Route path="/leave/:leaveId" element={<Leave />} />

        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/requestleave" element={<RequestLeave/>}/>
        <Route path="/user/userpendingleaves" element={<UserPendingLeave/>}/>
        <Route path="/user/UserHistory" element={<UserHistory/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
