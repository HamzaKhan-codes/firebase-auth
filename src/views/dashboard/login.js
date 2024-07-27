import { useState } from "react";
import { login } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

const signIn = async () => {
    try{
        await login(email,password)
        alert('Successfully Logged In')
        navigate('/')
    }  catch (e) {
        alert(e.message)
    }
}  

 

    return <div>
        <h2>Login</h2>
        <input placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} /><br></br>
        <input placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} /><br></br>

        <button className="reg" onClick={() => login() }>Sign In</button>
    </div>
}