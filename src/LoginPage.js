import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";

const users = [
    {
        username: "user1",
        password: "password",
    },
    {
        username: "user2",
        password: "password",
    },
];

function LoginPage({ onLogin }) { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            onLogin(username); 
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
