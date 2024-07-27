import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { adId } = useParams();
  // console.log('params', params)

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${adId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [adId]);

  return (
    <div>
      <button onClick={onBack} className="back">Back</button>
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
