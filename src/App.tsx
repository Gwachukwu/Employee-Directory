import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { Button } from "react-bootstrap";
import { auth } from "./utils/firebase";
import { signOut } from "firebase/auth";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onSignOut = () => {
    localStorage.clear();
    navigate("/auth");
    signOut(auth);
  };

  return (
    <>
      <div className="px-2 py-3 border-bottom bg-secondary d-flex justify-content-between align-center">
        <p className="text-white fw-bold">Employee Directory</p>
        {pathname !== "/auth" && <Button onClick={onSignOut}>Sign Out</Button>}
      </div>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
