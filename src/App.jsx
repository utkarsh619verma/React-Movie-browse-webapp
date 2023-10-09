import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home";
import { AuthContextProvider } from "./context/AuthContext";
import { Login } from "./components/pages/login";
import { Signup } from "./components/pages/signup";
import { Account } from "./components/pages/accounts";
import { ProtectedRoute } from "./components/protectedroute";

export function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
