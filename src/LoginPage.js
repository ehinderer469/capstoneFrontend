import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch("http://localhost:5092/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        // Handle the login response
        console.log("Login response:", result);
        if (result.success) {
          onLogin(username);
          navigate("/dashboard");
          console.log("Login successful!");
        } else {
          alert("Invalid credentials");
          console.log("Login failed. Please try again.");
        }
      })
      .catch(error => console.log("Error:", error));
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
