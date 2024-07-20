import { useState } from "react";
import { login } from "../../config/firebase";

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return <div>
        <h2>Login</h2>
        <input placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} /><br></br>
        <input placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} /><br></br>

        <button className="reg" onClick={() => login(email, password) }>Sign In</button>
    </div>
}