import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../config/firebase";

export default function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const goToRegister = () => {
    navigate('/register');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  const goToDetail = (item) => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div>
      <div className="sign-btn">
        <button className="btn" onClick={goToRegister}>Sign Up Page</button>
        <button className="btn" onClick={goToLogin}>Login Page</button>
      </div>
      <h1>Dashboard</h1>
      <hr />
      <button onClick={() => navigate('/product')} className="btn">Add Product</button>
      
      <div className="product-container">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => goToDetail(item)}
            className="product-card"
          >
            <img src={item.image} width={200} alt="" />
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}