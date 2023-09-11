import { AuthProvider } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import FindTeam from "./pages/find-team/FindTeam";
import Home from "./pages/home/Home";
import LeaderbordTeams from "./pages/leaderbordTeams/LeaderbordTeams";
import LeaderbordUsers from "./pages/leaderbordUsers/LeaderbordUsers";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
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
            <Route path="/register" element={<Register />} />
            <Route path="/LeaderbordTeams" element={<LeaderbordTeams />} />
            <Route path="/LeaderbordUsers" element={<LeaderbordUsers />} />
            <Route path="/find-team" element={<FindTeam />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
