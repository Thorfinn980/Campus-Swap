import React, { useState } from "react";
import "./Navbar.css";

export function Navbar({ onSellClick, onHomeClick, onSearch, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_container">
        {/* Logo */}
        <div className="navbar_logo" onClick={onHomeClick}>
          <span className="navbar_logo_text">Campus Swap</span>
        </div>

        {/* Search */}
        <div className="navbar_search">
          <div className="navbar_search_wrapper">
            <input
              type="text"
              className="navbar_search_input"
              placeholder="Search textbooks, electronics, furniture..."
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="navbar_actions">
          <button className="navbar_sell_btn" onClick={onSellClick}>
            Sell Item
          </button>

          <div className="navbar_user">
            <button
              className="navbar_user_btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar_user_name">Account</span>
              <div className="navbar_avatar">👤</div>
            </button>

              {isMenuOpen && (
                <div
                  className="navbar_dropdown"
                >
                  <div className="navbar_dropdown_section">
                    <button
                      className="navbar_dropdown_item"
                      onClick={() => {
                        onNavigate && onNavigate("myListings");
                        setIsMenuOpen(false);
                      }}
                    >
                      📋 My Listings
                    </button>
                    
                    <button
                      className="navbar_dropdown_item"
                      onClick={() => {
                        onNavigate && onNavigate("orders");
                        setIsMenuOpen(false);
                      }}
                    >
                      🛒 My Orders
                    </button>
                    <button
                      className="navbar_dropdown_item"
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
