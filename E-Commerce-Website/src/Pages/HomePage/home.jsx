// src/Pages/Home/Home.jsx
import React from "react";
import styles from "./Home.module.css";
import heroPoster from "../../assets/hero-poster.jpg"; // ensure path is correct
import bannerImg from "../../assets/banner.jpg";
import fashionImg from "../../assets/fashion.jpg";
import gadgetsImg from "../../assets/gadgets.jpg";
import homeImg from "../../assets/home.jpg";
// import lottieShop from "../../assets/lottie-shopping.json"; // optional
// import { Player } from "lottie-react"; // optional
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>ShopEase — Your VIP Shopping Experience</h1>
          <p className={styles.subtitle}>
            Premium products, trusted service and lightning-fast delivery. Shop like a VIP.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href="/products">Shop Now</a>
            <a className={styles.btnGhost} href="#whyus">Why Us?</a>
          </div>

          <div className={styles.badges}>
            <div className={styles.badge}>Free Shipping</div>
            <div className={styles.badge}>Secure Payment</div>
            <div className={styles.badge}>7-Day Returns</div>
          </div>
        </div>

        <div className={styles.heroRight}>
          {/* hero image fallback */}
          <div className={styles.heroCard}>
            <img src={heroPoster} alt="Hero Poster" className={styles.heroImg} />
            {/* <Player autoplay loop src={lottieShop} className={styles.lottie} />  */}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className={styles.bannerSection}>
        <img src={bannerImg} alt="Banner" className={styles.bannerImg} />
      </section>

      {/* CATEGORIES */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Explore Categories</h2>
        <div className={styles.grid}>

          <div className={styles.catCard}>
            <img src={fashionImg} alt="Fashion" className={styles.catMedia} />
            <div className={styles.catLabel}>Fashion</div>
          </div>

          <div className={styles.catCard}>
            <img src={gadgetsImg} alt="Gadgets" className={styles.catMedia} />
            <div className={styles.catLabel}>Gadgets</div>
          </div>

          <div className={styles.catCard}>
            <img src={homeImg} alt="Home & Living" className={styles.catMedia} />
            <div className={styles.catLabel}>Home & Living</div>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className={styles.whyUs}>
        <h2 className={styles.sectionTitle}>Why Customers Trust Us</h2>
        <div className={styles.reasons}>
          <div className={styles.reasonCard}>
            <h3>Quality Checked</h3>
            <p>Every product passes multi-step quality checks.</p>
          </div>
          <div className={styles.reasonCard}>
            <h3>Fast Delivery</h3>
            <p>Average delivery time under 48 hours in major cities.</p>
          </div>
          <div className={styles.reasonCard}>
            <h3>Support 24/7</h3>
            <p>Live chat and quick response for issues & returns.</p>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className={styles.finalCta}>
        <div className={styles.finalCard}>
          <h3>Ready to elevate your shopping?</h3>
          <p>Latest drops — limited stock. Shop today.</p>
          <Link to="/Product" className={styles.btnPrimary}>
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
