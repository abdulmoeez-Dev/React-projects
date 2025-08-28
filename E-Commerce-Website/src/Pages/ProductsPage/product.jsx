import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import styles from "./Product.module.css"; 

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>All Products</h1>

      <div className={styles.grid}>
        {products.map((obj) => {
          const { id, title, price, image } = obj;
          return (
            <div key={id} className={styles.card}>
              <img src={image} alt={title} className={styles.productImg} />

              <div className={styles.cardBody}>
                <h2 className={styles.title}>
                  <Link to={`/product/${id}`} className={styles.link}>
                    {title.length > 40 ? title.slice(0, 40) + "..." : title}
                  </Link>
                </h2>
                <p className={styles.price}>${price}</p>

                {/* View Details Button as Link */}
                <Link to={`/product/${id}`}>
                  <button className={styles.btn}>View Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
