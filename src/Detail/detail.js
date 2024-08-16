import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from "../Store/cartSlice"; // Adjust the path as needed

const db = getFirestore();

export default function Detail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { adId } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const onBack = () => {
    navigate(-1);
  };

  async function getProductById(id) {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.error("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      throw error;
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${adId}`);
        const product = await getProductById(adId);
        console.log("Fetched product:", product);
        setProduct(product);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProduct();
  }, [adId]);

  const handleAddToCart = () => {
    if (product) {
      console.log('Adding to cart:', product);
      dispatch(addItemToCart(product));
    }
  };

  const handleRemoveFromCart = (id) => {
    console.log('Removing from cart:', id); // Debugging: Verify ID
    dispatch(removeItemFromCart({ id })); // Ensure correct payload
  };

  // Debugging to ensure component is re-rendering with updated cart items
  useEffect(() => {
    console.log('Cart items updated:', cartItems); // Ensure this logs correctly on item removal
  }, [cartItems]);

  return (
    <div>
      <button onClick={onBack} className="back">
        Back
      </button>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width={100} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      ) : (
        <div>No Product Details Available!</div>
      )}

      {/* Cart Box */}
      <div className="cart-box">
        <h3>Cart</h3>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price}
                <button onClick={() => handleRemoveFromCart(item.id)} className="remove-from-cart">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
}
