import React, { useState } from "react";
import axios from "axios";

import RegisterForm from "./RegisterForm";
import "./App.css";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const register = async () => {
  //   try {
  //     const result = await axios.post("http://localhost:3001/register", {
  //       username,
  //       password,
  //     });
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const login = async () => {
  //   try {
  //     const result = await axios.post("http://localhost:3001/login", {
  //       username,
  //       password,
  //     });
  //     console.log("Token:", result.data.token);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default App;
