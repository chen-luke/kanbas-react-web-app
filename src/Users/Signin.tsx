import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import Signup from "./Singup";

export default function Signin() {
    const [credentials, setCredential] = useState<User>({ 
        _id: "", 
        username: "", 
        password: "", 
        role: "USER",
        firstName: "", 
        lastName: "",
    })
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile")}
    
    return(
        <div className="">
            <h1>Signin</h1>
            <input  className="form-control mt-3" placeholder="Username" value={credentials.username} 
            onChange={(e) => {setCredential({...credentials, username: e.target.value})}} />

            <input  className="form-control mt-2" placeholder="Password" value={credentials.password} 
            onChange={(e) => {setCredential({...credentials, password: e.target.value})}} />

            <button className="btn btn-primary w-100 mt-2"  onClick={signin}>Signin</button>
            <br />
            <br />
            <Signup />
        </div>
    );
}