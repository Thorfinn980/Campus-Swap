import { X, MapPin, Clock, Star, MessageCircle, ShoppingBag, Heart, Share2, Flag } from 'lucide-react'
import './ItemDetailModal.css'

function ItemDetailModal({ item, onClose }) {
  if (!item) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-grid">
          {/* Left Side - Image */}
          <div className="modal-image-section">
            <img src={item.image} alt={item.title} className="modal-image" />
            <span className="modal-condition-badge">{item.condition}</span>
          </div>

          {/* Right Side - Details */}
          <div className="modal-details">
            {/* Category Badge */}
            <div className="modal-badges">
              <span className="modal-category-badge">{item.category}</span>
              <span className="modal-condition-badge-small">{item.condition}</span>
            </div>

            {/* Title */}
            <h2 className="modal-title">{item.title}</h2>

            {/* Price */}
            <div className="modal-price">${item.price}</div>

            {/* Seller Info */}
            <div className="modal-seller">
              <img 
                src={item.seller.avatar} 
                alt={item.seller.name} 
                className="modal-seller-avatar"
              />
              <div className="modal-seller-info">
                <div className="modal-seller-name">{item.seller.name}</div>
                <div className="modal-seller-meta">
                  <MapPin size={14} />
                  {item.location}
                  <span className="modal-seller-rating">
                    {item.seller.rating} <Star size={14} fill="currentColor" />
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="modal-description">
              <h3>Description</h3>
              <p>Barely used, battery health 98%.</p>
            </div>

            {/* Posted Time & Verification */}
            <div className="modal-meta">
              <div className="modal-meta-item">
                <Clock size={16} />
                Posted {item.timeAgo}
              </div>
              <div className="modal-meta-item modal-verified">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                </svg>
                Identity Verified
              </div>
            </div>

            {/* Action Buttons */}
            <div className="modal-actions">
              <button className="modal-btn modal-btn-message">
                <MessageCircle size={20} />
                Message
              </button>
              <button className="modal-btn modal-btn-buy">
                <ShoppingBag size={20} />
                Buy Now
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="modal-secondary-actions">
              <button className="modal-secondary-btn">
                <Heart size={18} />
                Save
              </button>
              <button className="modal-secondary-btn">
                <Share2 size={18} />
                Share
              </button>
              <button className="modal-secondary-btn modal-report">
                <Flag size={18} />
                Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailModal
