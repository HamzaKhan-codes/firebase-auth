import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default function Detail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { adId } = useParams();
  // console.log('params', params)

  const onBack = () => {
    navigate(-1);
  };

  async function getProductById(id) {
    const docRef = doc(db, "products", id);
    const docSnap = getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${adId}`);
        const product = await getProductById(adId);
        console.log('Fetched product:', product);
        setProduct(product);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      } 
    };

    fetchProduct();
  }, [adId]);


  return (
    <div>
      <button onClick={onBack} className="back">
        Back
      </button>
      <h1>Detail</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width={100} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ) : (
        <div>Loading product details...</div>
      )}
    </div>
  );
}
