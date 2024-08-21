import React, { useState } from "react";
import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        fullname,
        email,
        password,
      });

      dispatch({ type: "REGISTER", payload: response.data });
      console.log("User registered successfully:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Registration error:", error.response.data.message);
        alert(`Error: ${error.response.data.message}`);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  };

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
      className="absolute z-10 w-full h-screen top-0 left-0 bg-zinc-900 backdrop-blur-lg text-white "
    >
      <div className="bg-opacity-90 text-white p-6 rounded-lg flex justify-center items-center my-32">
        {/* <h1>{state.message}</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="description"
            >
              Full Name
            </label>
            <input
              id="description"
              name="description"
              type="text"
              className="shadow appearance-none w-96 border-zinc-600 border rounded bg-transparent py-2 px-3 text-white leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="filesize"
            >
              Email
            </label>
            <input
              id="filesize"
              name="filesize"
              type="text"
              className="shadow appearance-none w-96 border-zinc-600 border rounded py-2 bg-transparent px-3 text-white leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="tagTitle"
            >
              Password
            </label>
            <input
              id="tagTitle"
              name="tagTitle"
              type="text"
              className="shadow appearance-none w-96 border-zinc-600 border rounded bg-transparent py-2 px-3 text-white leading-tight focus:border-2 focus:outline-none focus:border-zinc-400"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-slate-100 hover:bg-slate-300 text-black font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
