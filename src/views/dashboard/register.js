import { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signUp = async () => {
        try{
            await register(email,password)
            alert('Successfully Registered')
            navigate('/')
        }  catch (e) {
            alert(e.message)
        }
    }  

    return <div>
        <h2>SignUp</h2>
        <input placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} /><br></br>
        <input placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} /><br></br>

        <button className="reg" onClick={() => register() }>Register</button>
    </div>
}