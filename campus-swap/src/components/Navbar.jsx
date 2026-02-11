import React, { useState } from "react";
import "./Navbar.css";

export function Navbar({ onSellClick, onHomeClick, onSearch, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo" onClick={onHomeClick}>
          <span className="navbar__logo-text">CampusSwap</span>
        </div>

        {/* Search */}
        <div className="navbar__search">
          <div className="navbar__search-wrapper">
            <input
              type="text"
              className="navbar__search-input"
              placeholder="Search textbooks, electronics, furniture..."
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <button className="navbar__sell-btn" onClick={onSellClick}>
            Sell Item
          </button>

          <div className="navbar__user">
            <button
              className="navbar__user-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar__user-name">Account</span>
              <div className="navbar__avatar">👤</div>
            </button>

              {isMenuOpen && (
                <div
                  className="navbar__dropdown"
                >
                  <div className="navbar__dropdown-section">
                    <button
                      className="navbar__dropdown-item"
                      onClick={() => {
                        onNavigate && onNavigate("my-listings");
                        setIsMenuOpen(false);
                      }}
                    >
                      📋 My Listings
                    </button>
                    <button
                      className="navbar__dropdown-item"
                      onClick={() => {
                        onNavigate && onNavigate("orders");
                        setIsMenuOpen(false);
                      }}
                    >
                      🛒 My Orders
                    </button>
                    <button
                      className="navbar__dropdown-item"
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
