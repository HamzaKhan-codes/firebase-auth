import { useState } from "react";
import { addProduct } from "../../config/firebase";

export default function addProduct(){
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState()

    const onSubmit = async () => {
        try{
            await addProduct ({title, description, price, image})
            alert("Produts added successfully")
        }
        catch(e){
            alert(e.message)
        }
    }

    return <div>
        <h2>Add Product form</h2>

        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <br/>
        <button onClick={onSubmit}>Submit</button>
    </div>
}