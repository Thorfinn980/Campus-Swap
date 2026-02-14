import React from "react";
import "./MyListings.css";


// export function MyListings() {
//   return (
//     <div className="my_listings">
//       <div className="my_listings_container">
//         <h2 className="my_listings_title">My Listings</h2>
//         <div className="my_listings_empty">
//           My Listings page is rendering ✅
//         </div>
//       </div>
//     </div>
//   );
// }


export function MyListings() {
  const { currentUser, products, deleteProduct } = useStore();

  const myListings = currentUser
    ? products.filter((p) => p.sellerId === currentUser.id)
    : [];

  return (
    <div className="my_listings">
      <div className="my_listings_container">
        <h2 className="my_listings_title">My Listings</h2>

        {myListings.length === 0 ? (
          <div className="my_listings_empty">
            You haven&apos;t listed any items yet.
          </div>
        ) : (
          <div className="my_listings_grid">
            {myListings.map((product) => (
              <div key={product.id} className="my_listings_card_wrap">
                <ProductCard product={product} onClick={() => {}} />

                <div className="my_listings_actions">
                  <button
                    className="my_listings_icon-btn my_listings_icon-btn_delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProduct(product.id);
                    }}
                    aria-label="Delete listing"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="my_listings_status" title="Listing status">
                  {(product.status || "active").replaceAll("_", " ")}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
