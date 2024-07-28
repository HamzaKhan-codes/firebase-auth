import { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()

    const signUp = async () => {
        try{
            const userInfo = { email, password, name, age };
            await register(userInfo)
            alert('Successfully Registered')
            navigate('/')
        }  catch (e) {
            alert(e.message)
        }
    }  

    return <div >
        <h2>SignUp</h2>
        <hr />
        <div className="signup">
            <input  placeholder="Email" type="email" className="input" onChange={e => setEmail(e.target.value)} /><br></br>
            <input placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} /><br></br>
            <input placeholder="Full Name" type="text" className="input" onChange={e => setName(e.target.value)} /><br></br>
            <input placeholder="Age" type="number" className="input" onChange={e => setAge(e.target.value)} /><br></br>
        </div>
       

        <button className="reg" onClick={() => signUp() }>Register</button>
    </div>
}