import { AuthProvider } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LeaderbordTeams from "./pages/leaderbordTeams/LeaderbordTeams";
import LeaderbordUsers from "./pages/leaderbordUsers/LeaderbordUsers";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Team from "./pages/team/Team";
import User from "./pages/user/User";

export default function MyRoutes() {
  return (
    <>
      <AuthProvider
        authType="cookie"
        authName="_id"
        cookieSecure={window.location.hostname}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/team" element={<Team />} />
            <Route path="/profile" element={<User />} />
            {/* <Route
              path="/profile"
              element={
                <RequireAuth loginPath={"/login"}>
                  <User />
                </RequireAuth>
              }
            /> */}
            <Route path="/registration" element={<Registration />} />
            <Route path="/LeaderbordTeams" element={<LeaderbordTeams />} />
            <Route path="/LeaderbordUsers" element={<LeaderbordUsers />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
