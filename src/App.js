import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashbord from "./components/Dashbord";
import Main from "./admin/Main";
import Ticket from "./admin/ticket/Ticket";
import SideBar from "./components/SideBar";
import Flights from "./admin/Flight/Flights";
import Reservation from "./admin/reservation/Reservation";
import Vehicles from "./admin/vihcel/Vehicles";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  >
            <Route index path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
          </Route>
          <Route path="/dashbord" element={<SideBar />}>
            <Route path="/dashbord" element={<Main />} />
            <Route path="/dashbord/ticket" element={<Ticket />} />
            <Route path="/dashbord/flights" element={<Flights />} />
            <Route path="/dashbord/reservation" element={<Reservation />} />
            <Route path="/dashbord/vehicles" element={<Vehicles />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
