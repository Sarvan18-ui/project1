import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>
          
          <div className={styles.brand}>
            <h3 className={styles.logo}>ShopEase</h3>
            <p className={styles.tagline}>
              Your one-stop online shopping destination
            </p>
          </div>
          <div className={styles.columns}>

            <div className={styles.column}>
              <h4>Customer Service</h4>
              <p>Help Center</p>
              <p>Returns</p>
              <p>Shipping Info</p>
              <p>Track Order</p>
            </div>

            <div className={styles.column}>
              <h4>Quick Links</h4>
              <p>About Us</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>

            <div className={styles.column}>
              <h4>Categories</h4>
              <p>Electronics</p>
              <p>Fashion</p>
              <p>Home & Kitchen</p>
              <p>Beauty</p>
            </div>

          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 ShopEase. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
