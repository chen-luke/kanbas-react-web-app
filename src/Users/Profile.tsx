import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
    const [profile, setProfile] = useState({
        username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });

    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (error) {
            console.log(error);
            navigate("/Kanbas/Account/Signin")
        }

    };

    const save = async () => {
        await client.updateUser(profile);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };



    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="">
            <h1>Profile</h1>
            {profile && (
                <div className="d-flex flex-column gap-2 mt-4">
                    <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">Users
                    </Link>
                    <input className="form-control" placeholder="Username" value={profile.username} onChange={(e) =>
                        setProfile({ ...profile, username: e.target.value })} />
                    <input className="form-control" placeholder="Password" value={profile.password} onChange={(e) =>
                        setProfile({ ...profile, password: e.target.value })} />
                    <input className="form-control" placeholder="First Name" value={profile.firstName} onChange={(e) =>
                        setProfile({ ...profile, firstName: e.target.value })} />
                    <input className="form-control" placeholder="Last Name" value={profile.lastName} onChange={(e) =>
                        setProfile({ ...profile, lastName: e.target.value })} />
                    <input className="form-control" value={profile.dob} type="date" onChange={(e) =>
                        setProfile({ ...profile, dob: e.target.value })} />
                    <input className="form-control" type="email" placeholder="Enter Email" value={profile.email} onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })} />
                    <select className="form-select" onChange={(e) =>
                        setProfile({ ...profile, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
