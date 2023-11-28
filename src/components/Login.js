import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth/operation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.form);
    dispatch(
      login({
        email,
        password,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} className="row g-3">
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
          Zaloguj
        </button>
      </div>
    </form>
  );
}
