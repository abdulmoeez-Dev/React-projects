import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams(); // url se id le raha
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("Error fetching product:", error.message);
    }
  };

  if (!product) {
    return <h2 className={styles.loading}>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p className={styles.description}>{product.description}</p>
      <h3 className={styles.price}>Price: ${product.price}</h3>
      <p className={styles.category}>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
