import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const userData = {
  userName: "Riyaz",
  email: "Riyaz@gmail.com",
  password: "1234",
  role: "user",
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Record<string, string>>({
    email: "",
    password: "",
    userName: "",
    role: "",
  });
  const auth = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (formData.email && formData.password) {
      auth.login(userData);
      navigate("/");
    }
  };

  return (
    <div className="h-[95%] bg-gray-400">
      <h4>Welcome to login</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-[20px] border-2 border-blue-400 rounded w-1/2 text-black"
      >
        <>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            name="userName"
            value={formData.userName}
            type="text"
            onChange={handleChange}
          />
        </>
        <>
          <label htmlFor="email" title="Email">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            type="text"
            onChange={handleChange}
          />
        </>
        <>
          <label htmlFor="role" title="Role">
            Role
          </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value={"user"}>User</option>
            <option value={"admin"}>Admin</option>
          </select>
        </>
        <>
          <label htmlFor="password" title="Password">
            Password
          </label>
          <input
            id="password"
            name="password"
            value={formData.password}
            type="password"
            onChange={handleChange}
          />
        </>
        <button type="submit">Submit</button>
      </form>
      {/* <button
        onClick={() => {
          navigate("/");
          auth.login(userData);
        }}
        className="border-cyan-500 border-2 p-1 px-2 text-cyan-500 font-semibold rounded"
      >
        Login
      </button> */}
    </div>
  );
};

export default Login;
