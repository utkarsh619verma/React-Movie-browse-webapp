import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { user, signup } = UserAuth();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className=" hidden sm:block absolute w-full h-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 absolute top-0 left-0 w-full h-full "></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75  text-white ">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold capitalize">sign up</h1>
              <form
                onSubmit={handlesubmit}
                className="flex flex-col w-full py-4"
              >
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="email"
                />
                <input
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="password"
                />
                <button className="bg-red-600 py-3 my-6  rounde font-bold">
                  sign up
                </button>
                <div className="flex justify-between text-gray-600 text-sm ">
                  <p>
                    <input className="mr-2" type="checkbox" name="" id="" />
                    Remember Me?
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login"> Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
