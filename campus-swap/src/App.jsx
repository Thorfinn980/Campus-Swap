import { Hero } from './components/hero'
import { Navbar } from './components/Navbar'
import { MyListings } from './components/myListings';
import "./App.css";
import { useState } from 'react';




function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      <Navbar onNavigate={setActivePage} />
      {activePage === "home" && <Hero />}
      {activePage === "myListing" && <MyListings />}
    </div>
  );
}

export default App
