import { useState } from "react";
import { Hero } from "./components/hero";
import { Navbar } from "./components/Navbar";
import { MyListings } from "./components/myListings";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  //  demo - replace with real data later
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

      {activePage === "home" && <Hero />}
      
      {activePage === "myListings" && (
        <MyListings
          currentUser={currentUser}
          products={products}
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
}

export default App;
