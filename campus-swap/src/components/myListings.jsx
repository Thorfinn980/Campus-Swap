import React from "react";
import "./myListings.css";


export function MyListings({ currentUser, products, deleteProduct }) {
  const myListings = currentUser
    ? products.filter((p) => p.sellerId === currentUser.id)
    : [];

  if (myListings.length === 0) {
    return (
      <div className="my_listings">
        <div className="my_listings_container">
          <h2 className="my_listings_title">My Listings</h2>
          <div className="my_listings_empty">
            You haven&apos;t listed any items yet.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my_listings">
      <div className="my_listings_container">
        <h2 className="my_listings_title">My Listings</h2>

        <div className="my_listings_grid">
          {myListings.map((product) => (
            <div key={product.id} className="my_listings_card-wrap">
              {/* productCard here*/}
              <div
                style={{
                  background: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "50px 16px 16px 16px",
                }}
              >
                <div style={{ fontWeight: 700, color: "#111827" }}>
                  {product.title}
                </div>
                <div style={{ color: "#6b7280", marginTop: 6 }}>
                  ${product.price}
                </div>
              </div>

              <div className="my_listings_actions">
                <button
                  className="my_listings_icon-btn my_listings_icon-btn_delete"
                  onClick={() => deleteProduct(product.id)}
                  aria-label="Delete listing"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>

              <div className="my_listings_status" title="Listing status">
                {(product.status || "active").replaceAll("_", " ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}