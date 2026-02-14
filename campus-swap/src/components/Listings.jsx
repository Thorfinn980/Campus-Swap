import { MapPin, Clock, Star } from 'lucide-react'

// Sample listings data
const listingsData = [
  {
    id: 1,
    title: 'Introduction to Calculus - 4th Edition',
    price: 45,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    condition: 'Good',
    seller: {
      name: 'Sarah Jones',
      avatar: 'https://i.pravatar.cc/150?img=25',
      rating: 4.8
    },
    location: 'State University',
    timeAgo: '2h ago',
    category: 'textbooks'
  },
  {
    id: 2,
    title: 'MacBook Air M1 2020',
    price: 650,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
    condition: 'Like New',
    seller: {
      name: 'Mike Ross',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 4.5
    },
    location: 'State University',
    timeAgo: '5h ago',
    category: 'electronics'
  },
  {
    id: 3,
    title: 'Sony Headphones',
    price: 180,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop',
    condition: 'Fair',
    seller: {
      name: 'Alex Student',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5
    },
    location: 'State University',
    timeAgo: '2d ago',
    category: 'electronics'
  }
]

function Listings({ category, searchQuery, priceRange, sortBy }) {
  // Filter listings
  let filteredListings = listingsData.filter(listing => {
    const matchesCategory = category === 'all' || listing.category === category
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesMinPrice = !priceRange.min || listing.price >= Number(priceRange.min)
    const matchesMaxPrice = !priceRange.max || listing.price <= Number(priceRange.max)
    
    return matchesCategory && matchesSearch && matchesMinPrice && matchesMaxPrice
  })

  // Sort listings
  filteredListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'popular':
        return b.seller.rating - a.seller.rating
      default: // newest
        return 0
    }
  })

  return (
    <section className="listings-section">
      {/* Header */}
      <div className="section-header">
        <h2 className="section-title">Recent Listings</h2>
        <span className="results-count">{filteredListings.length} results</span>
      </div>

      {/* Grid */}
      <div className="listings-grid">
        {filteredListings.map(listing => (
          <div key={listing.id} className="listing-card">
            {/* Image */}
            <div className="listing-image-container">
              <img src={listing.image} alt={listing.title} className="listing-image" />
              <span className="condition-badge">{listing.condition}</span>
            </div>

            {/* Content */}
            <div className="listing-content">
              <h3 className="listing-title">{listing.title}</h3>
              <div className="listing-price">${listing.price}</div>

              {/* Seller Info */}
              <div className="listing-meta">
                <div className="seller-info">
                  <img 
                    src={listing.seller.avatar} 
                    alt={listing.seller.name} 
                    className="seller-avatar"
                  />
                  <span className="seller-name">{listing.seller.name}</span>
                </div>
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  {listing.seller.rating}
                </div>
              </div>

              {/* Footer */}
              <div className="listing-footer">
                <div className="location">
                  <MapPin size={14} />
                  {listing.location}
                </div>
                <div className="time">
                  <Clock size={14} />
                  {listing.timeAgo}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Listings
