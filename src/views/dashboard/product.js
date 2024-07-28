import { useState } from "react";
import { addProduct } from "../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddProduct(){
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState()
    const navigate = useNavigate()

    const onSubmit = async () => {
        try{
            console.log('Submitting product:', { title, description, price, image });
            await addProduct({ title, description, price, image });
            alert("Product added successfully");
            navigate('/')
            
        }
        catch(e){
            alert(e.message)
        }
    }

    return <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <h2>Add Product form</h2>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <br/>
        <button className="btn" onClick={onSubmit}>Submit</button>
    </div>
}