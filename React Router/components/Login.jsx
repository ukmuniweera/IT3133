import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const[user, setUser] = useState({username: '', password:''});

    const[message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleForm=(e)=>{
        const{name, value} = e.target;
        setUser((prev)=>({
            ...prev,
            [name]: value
        }))
    };

    const handleValidate=()=>{
        if (!user.username && !user.password) {
            setMessage("Require Username and Password");
            return false;
        }
        setMessage("");
        return true;
    };

    const handleLogin=()=>{
        if (!handleValidate()) return;
        if (user.username === "admin" && user.password === "pass123") {
            navigate('/dashboard');
            setUser({username: '', password:''});
        } else {
            setMessage("Invalid Username or Password");
            setUser({username: '', password:''});
        }

    };

  return (
    <div>
        <h1>Welcome to Login</h1>
        <h4 style={{color: "red"}}>{message}</h4>
        <table>
            <tr>
                <td>Username:</td>
                <td>
                    <input 
                    type="text" 
                    name="username"
                    value={user.username}
                    onChange={handleForm}
                    />
                </td>
            </tr>
            <tr>
                <td>Password:</td>
                <td>
                    <input 
                    type="password" 
                    name="password"
                    value={user.password}
                    onChange={handleForm}
                    />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button onClick={handleLogin}>Login</button>
                </td>
            </tr>
        </table>
    </div>
  );
}
