// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/front_end/appbar/Navbar";
import { Categories } from "./Components/front_end/body/categoriesContainer/Categories";
import Vegetables from "./Components/front_end/body/vegetable/Vegetables";
// import Login from "./Components/front_end/login/Login";
import { Routes, Route } from "react-router-dom";

import LoginButton from "./Components/front_end/login/Login";
import LogoutButton from "./Components/front_end/logout/Logout";
import Profile from "./Components/front_end/profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Fruits } from "./Components/front_end/body/fruits/Fruits";
import { Spices } from "./Components/front_end/body/spices/Spices";
import Home from "./Components/front_end/body/Home/Home";
import { Checkout } from "./Components/front_end/Checkout";
import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Components/front_end/Payments";
const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="App">
      <NavBar />
      <Categories />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vegetable" element={<Vegetables />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="spices" element={<Spices />} />
        <Route path="Login" element={<LoginButton />} />
        <Route path="Logout" element={<LogoutButton />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Home />} />
        <Route path="/payment" element={<Payment stripe={promise} />} />
        {/* <Route path="checkout" element={< />} /> */}
      </Routes>

      {/* 
 <LoginButton />
      <LogoutButton />
      <Profile /> */}
      {/* <Route path="/vegetable">
          <Vegetables />
        </Route> */}
    </div>
  );
}

export default App;
