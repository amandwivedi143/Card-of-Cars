function Card({data}) {
  // Color mapping for dynamic accents - colorful vibrant palette on white
  const getColorAccent = (color) => {
    const colorMap = {
      'Blue': { primary: '#0066ff', secondary: '#3399ff', gradient: 'linear-gradient(135deg, #0066ff 0%, #0033cc 100%)' },
      'Yellow': { primary: '#ffcc00', secondary: '#ffdd33', gradient: 'linear-gradient(135deg, #ffcc00 0%, #ff9900 100%)' },
      'Red': { primary: '#ff3333', secondary: '#ff6666', gradient: 'linear-gradient(135deg, #ff3333 0%, #cc0000 100%)' },
      'Silver': { primary: '#666666', secondary: '#999999', gradient: 'linear-gradient(135deg, #666666 0%, #333333 100%)' },
      'Orange': { primary: '#ff6600', secondary: '#ff8833', gradient: 'linear-gradient(135deg, #ff6600 0%, #cc4400 100%)' },
      'Black': { primary: '#000000', secondary: '#333333', gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)' },
      'Green': { primary: '#00cc66', secondary: '#33ff99', gradient: 'linear-gradient(135deg, #00cc66 0%, #009933 100%)' },
      'White': { primary: '#cccccc', secondary: '#ffffff', gradient: 'linear-gradient(135deg, #cccccc 0%, #999999 100%)' },
      'Grey': { primary: '#666666', secondary: '#999999', gradient: 'linear-gradient(135deg, #666666 0%, #333333 100%)' },
      'Dark Green': { primary: '#006633', secondary: '#009966', gradient: 'linear-gradient(135deg, #006633 0%, #003322 100%)' },
      'Gold': { primary: '#ffcc00', secondary: '#ffdd33', gradient: 'linear-gradient(135deg, #ffcc00 0%, #cc9900 100%)' }
    };
    
    return colorMap[color] || { 
      primary: '#000000', 
      secondary: '#333333', 
      gradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)' 
    };
  };

  // Mature, sophisticated button colors
  const getButtonColor = (color) => {
    const buttonColorMap = {
      'Blue': { gradient: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e3a8a 100%)', shadow: 'rgba(30, 64, 175, 0.4)' },
      'Yellow': { gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%)', shadow: 'rgba(217, 119, 6, 0.4)' },
      'Red': { gradient: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)', shadow: 'rgba(220, 38, 38, 0.4)' },
      'Silver': { gradient: 'linear-gradient(135deg, #475569 0%, #334155 50%, #1e293b 100%)', shadow: 'rgba(71, 85, 105, 0.4)' },
      'Orange': { gradient: 'linear-gradient(135deg, #ea580c 0%, #c2410c 50%, #9a3412 100%)', shadow: 'rgba(234, 88, 12, 0.4)' },
      'Black': { gradient: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%)', shadow: 'rgba(31, 41, 55, 0.4)' },
      'Green': { gradient: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)', shadow: 'rgba(5, 150, 105, 0.4)' },
      'White': { gradient: 'linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%)', shadow: 'rgba(100, 116, 139, 0.4)' },
      'Grey': { gradient: 'linear-gradient(135deg, #4b5563 0%, #374151 50%, #1f2937 100%)', shadow: 'rgba(75, 85, 99, 0.4)' },
      'Dark Green': { gradient: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)', shadow: 'rgba(6, 95, 70, 0.4)' },
      'Gold': { gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%)', shadow: 'rgba(217, 119, 6, 0.4)' }
    };
    
    return buttonColorMap[color] || { 
      gradient: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%)',
      shadow: 'rgba(31, 41, 55, 0.4)'
    };
  };

  const accent = getColorAccent(data.color);
  const buttonColor = getButtonColor(data.color);

  return (
    <div className="card" style={{ '--accent-primary': accent.primary, '--accent-secondary': accent.secondary }}>
      <div className="card-accent-bar" style={{ background: accent.gradient }}></div>

      <div className="card-image-container">
        <img
          src={data.image}
          alt={data.name}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop';
          }}
          loading="lazy"
        />
      </div>

      <div className="specification">
        <ul>
          <li style={{ borderLeftColor: accent.primary }}>Max Speed: {data.maxSpeed}</li>
          <li style={{ borderLeftColor: accent.primary }}>Torque: {data.torque}</li>
          <li style={{ borderLeftColor: accent.primary }}>
            <span style={{ color: accent.primary, fontWeight: '600' }}>Color:</span> {data.color}
          </li>
        </ul>
      </div>

      <div className="name">
        <h1 style={{ background: accent.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {data.name}
        </h1>
        <p>{data.slogan}</p>
      </div>
     <div className="btn"> 
        <a href={data.website} target="_blank" rel="noopener noreferrer">
          <button className="my-btn" style={{ background: buttonColor.gradient, boxShadow: `0 6px 20px ${buttonColor.shadow}, 0 0 0 1px rgba(0, 0, 0, 0.1) inset` }}>
            Visit Website
          </button>
        </a>
     </div>

    </div>
  );
}

export default Card;
