import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="text-center">
      <h2 className="rounded-sm bg-blue-300 p-4 m-5 text-center">Login</h2>
      <input
        className="bg-green-400 mx-2 p-1.5"
        type="text"
        value={username}
        placeholder="password"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="bg-green-400 mx-2 p-1.5"
        type="text"
        value={password}
        placeholder="username"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="rounded-sm bg-gray-500 p-1.5" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
