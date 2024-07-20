import { useState } from "react";
import { register } from "../../config/firebase";

export default function Register() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return <div>
        <h2>SignUp</h2>
        <input placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} /><br></br>
        <input placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} /><br></br>

        <button className="reg" onClick={() => register(email, password) }>Register</button>
    </div>
}