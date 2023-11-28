import { useDispatch } from "react-redux";
import { register } from "../redux/reducers/auth/operation";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.form);
    dispatch(
      register({
        name: username,
        email,
        password,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success">
            Zarejestruj
          </button>
        </div>
      </form>
    </div>
  );
}
