import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";
import TrangChu from "./pages/TrangChu/TrangChu";
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import FilmsManager from "./pages/Admin/FilmsManager.js/FilmsManager";
import UserManager from "./pages/Admin/UsersManager/UserManager";
import Booking from "./pages/Booking/Booking";
import ChiTietRap from "./pages/ChiTietRap/ChiTietRap";
import SignUp from "./pages/SignUp/SignUp";
import AddUser from "./pages/Admin/UsersManager/AddUser";
import AddLichChieu from "./pages/Admin/FilmsManager.js/AddLichChieu";
import QlPhim from "./pages/Admin/FilmsManager.js/FilmsManager";
import "./scss/main.scss";
import "../node_modules/react-modal-video/scss/modal-video.scss";
function App() {
  return (
    <BrowserRouter>
      {/* <Home abc="123"/> */}
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/singup" component={SignUp} />
        <HomeTemplate exact path="/profile" Component={Profile} />

        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        <HomeTemplate exact path="/profile" Component={Profile} />
        <HomeTemplate
          exact
          path="/chitietrap/:id"
          Component={ChiTietRap}
        ></HomeTemplate>
        <HomeTemplate exact path="/trangchu" Component={TrangChu} />
        {/* <AdminTemplate exact path='/admin/films' Component={FilmsManager} /> */}
        <AdminTemplate exact path="/admin/films" Component={FilmsManager} />

        <AdminTemplate exact path="/admin/AddUser" Component={AddUser} />

        {/* <AdminTemplate exact path='/admin/users' Component={UserManager} /> */}
        <AdminTemplate
          exact
          path="/admin/users"
          Component={UserManager}
        ></AdminTemplate>
        <AdminTemplate
          exact
          path="/admin/films/:id"
          Component={AddLichChieu}
        ></AdminTemplate>
        <HomeTemplate
          exact
          path="/booking/:maLichChieu"
          Component={Booking}
        ></HomeTemplate>
        {/* <Route exact path='/booking/:maLichChieu' render={(propsRoute)=>{
            return <Booking {...propsRoute} />
        }}/> */}

        <HomeTemplate exact path="/" Component={Home} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
