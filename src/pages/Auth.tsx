import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface IAuth {
  email: string;
  password: string;
}

enum AuthMode {
  signin = "Sign In",
  signup = "Sign Up",
}

const Auth = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [mode, setMode] = useState<AuthMode>(AuthMode.signin);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onSignUp = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    setLoading(false);
  };

  const onSignIn = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    setLoading(false);
  };

  return (
    <div
      className="m-auto d-flex flex-column gap-2 p-5 justify-content-center mt-5"
      style={{ maxWidth: "40rem" }}
    >
      <div>
        {mode === AuthMode.signin ? (
          <small className="my-5">
            New user?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => !loading && setMode(AuthMode.signup)}
              className="text-primary"
            >
              Sign up
            </span>
          </small>
        ) : (
          <small className="my-5">
            Already have an account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => !loading && setMode(AuthMode.signin)}
            >
              Sign in
            </span>
          </small>
        )}
      </div>
      <Form.Control
        placeholder="Enter email"
        aria-label="Enter Email"
        aria-describedby="basic-addon1"
        type="email"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <Form.Control
        placeholder="Password"
        aria-label="Enter password"
        aria-describedby="basic-addon1"
        value={data.password}
        name="password"
        type="password"
        onChange={handleChange}
      />
      {mode === AuthMode.signin ? (
        <Button onClick={onSignIn}>
          {loading ? "Please wait..." : AuthMode.signin}
        </Button>
      ) : (
        <Button
          onClick={onSignUp}
          disabled={Object.values(data).some((value) => !value) || loading}
        >
          {loading ? "Please wait..." : AuthMode.signup}
        </Button>
      )}
    </div>
  );
};

export default Auth;
