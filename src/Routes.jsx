import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Registration from "./pages/registration/Registration";
export default function MyRoutes() {
  return (
    <>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieSecure={window.location.hostname}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireAuth loginPath={"/login"}>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/registration" element= {<Registration />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
