import { useState } from "react";
import { Hero } from "./components/hero";
import { Navbar } from "./components/Navbar";
import { MyListings } from "./components/myListings";
import Categories from "./components/Categories"; 
import Filters from "./components/Filters";       
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  
  // Add these state variables ↓
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('newest');

  const [currentUser] = useState({ id: 1, name: "Account" });
  const [products, setProducts] = useState([
    {
      id: 1,
      sellerId: 1,
      title: "Calculus Textbook",
      price: 35,
      status: "active",
    },
    { id: 2, sellerId: 1, title: "Desk Lamp", price: 10, status: "active" },
    {
      id: 3,
      sellerId: 2,
      title: "Bluetooth Speaker",
      price: 25,
      status: "active",
    },
  ]);

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      <Navbar
        onNavigate={setActivePage}
        onHomeClick={() => setActivePage("home")}
      />

      {/* HOME PAGE */}
      {activePage === "home" && (
        <>
          <Hero />
          
          {/* Categories */}
          <Categories 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Filters */}
          <Filters 
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </>
      )}
      
      {/* MY LISTINGS PAGE - 
      Simon, if you're reading this make sure it works again*/}
      {activePage === "myListings" && (
        <MyListings
          currentUser={currentUser}
          products={products}
          deleteProduct={deleteProduct}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;