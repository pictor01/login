import React from "react";
import "./PaulAAlba.css";

const PaulAAlba = () => (
  <div className="gold-shop-container">
    {/* Header Section */}
    <header className="gold-shop-header">
      <h1 className="gold-shop-title">Paul A Alba Gold Shop</h1>
    </header>

    {/* Product Showcase Section */}
    <div className="gold-products">
      {/* Product 1 */}
      <div className="gold-product">
        <img src="https://example.com/gold-necklace.jpg" alt="Gold Necklace" />
        <h2 className="gold-product-title">Gold Necklace</h2>
        <p className="gold-product-price">$1,200</p>
      </div>

      {/* Product 2 */}
      <div className="gold-product">
        <img src="https://example.com/gold-ring.jpg" alt="Gold Ring" />
        <h2 className="gold-product-title">Gold Ring</h2>
        <p className="gold-product-price">$800</p>
      </div>

      {/* Product 3 */}
      <div className="gold-product">
        <img src="https://example.com/gold-bracelet.jpg" alt="Gold Bracelet" />
        <h2 className="gold-product-title">Gold Bracelet</h2>
        <p className="gold-product-price">$1,000</p>
      </div>
    </div>
  </div>
);

export default PaulAAlba;
