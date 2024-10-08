import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashbord from "./components/Dashbord";
import Main from "./admin/Main";
import MainUser from "./user/main/Main";
import Ticket from "./admin/ticket/Ticket";
import SideBar from "./components/SideBar";
import Flights from "./admin/Flight/Flights";
import Reservation from "./admin/reservation/Reservation";
import Vehicles from "./admin/vihcel/Vehicles";
import { useEffect } from "react";
import axios from 'axios';
import Users from "./admin/users/Users";
import FlightsUser from "./user/flights/Flights";
import TicketBooking from "./user/reservations/TicketBooking";
import Seats from "./user/reservations/Seats";
import { Roles } from "./utils/Roles";
import {RequireAuthAdmin , RequireAuthUser } from "./components/RequireAuth";

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route>
                <Route index path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />}/>
                <Route path="/sign-up" element={<SignUp />}/>
              </Route> 
              <Route element={<RequireAuthUser />}>
                <Route path="/main" element={<MainUser />}/>
                <Route path="/flights" element={<FlightsUser />}/>
                <Route path="/flights/ticket-booking/:id" element={<TicketBooking />}/>
                <Route path="/flights/ticket-booking/:id/seats/:vehicleId" element={<Seats />}/>
              </Route> 
              <Route element={<RequireAuthAdmin />}>
                <Route path="/dashbord" element={<SideBar />}>
                  <Route path="/dashbord" element={<Main />} />
                  <Route path="/dashbord/ticket" element={<Ticket />} />
                  <Route path="/dashbord/flights" element={<Flights />} />
                  <Route path="/dashbord/reservation" element={<Reservation />} />
                  <Route path="/dashbord/vehicles" element={<Vehicles />} />
                  <Route path="/dashbord/users" element={<Users />} />
                </Route>
              </Route>
               
              <Route path="*" element={<div>pages Not Found</div>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


const PublicElement = ({children}) =>{
  return <>{children}</>
}
const UserElement = ({children}) =>{
  return <>{children}</>
}
const AdminElement = ({children}) =>{
  return <>{children}</>
}
