import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import "./Navbar.css";

export function Navbar({ onSellClick, onHomeClick, onSearch, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_container">
        {/* Logo with Icon */}
        <div className="navbar_logo" onClick={onHomeClick}>
          <div className="navbar_logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/>
              <rect x="8" y="8" width="8" height="8" rx="1" fill="white"/>
            </svg>
          </div>
          <span className="navbar_logo-text">CampusSwap</span>
        </div>

        {/* Search */}
        <div className="navbar_search">
          <div className="navbar_search-wrapper">
            <Search className="navbar_search-icon" size={18} />
            <input
              type="text"
              className="navbar_search-input"
              placeholder="Search textbooks, electronics, furniture..."
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="navbar_actions">
          <button className="navbar_sell-btn" onClick={onSellClick}>
            <Plus size={18} />
            Sell Item
          </button>

          <div className="navbar_user">
            <button
              className="navbar_user-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar_user-name">Alex Student</span>
              <img 
                src="https://i.pravatar.cc/150?img=33" 
                alt="User" 
                className="navbar_avatar"
              />
            </button>

            {isMenuOpen && (
              <div className="navbar_dropdown">
                <div className="navbar_dropdown-section">
                  <button
                    className="navbar_dropdown-item"
                    onClick={() => {
                      onNavigate && onNavigate("myListings");
                      setIsMenuOpen(false);
                    }}
                  >
                    📋 My Listings
                  </button>
                  
                  <button
                    className="navbar_dropdown-item"
                    onClick={() => {
                      onNavigate && onNavigate("orders");
                      setIsMenuOpen(false);
                    }}
                  >
                    🛒 My Orders
                  </button>
                  
                  <button
                    className="navbar_dropdown-item"
                    onClick={() => {
                      onNavigate && onNavigate("messages");
                      setIsMenuOpen(false);
                    }}
                  >
                    💬 Messages
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
