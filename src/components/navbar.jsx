/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handlelogout = async () => {
    try {
      await logout();
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between p-4 z-10 absolute w-full ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handlelogout}
            className="text-white px-6 py-2 capitalize bg-red-600 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="text-white px-6 py-2 capitalize bg-red-600 rounded cursor-pointer">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
