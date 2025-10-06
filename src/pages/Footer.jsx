import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Facebook, ChevronDown } from 'lucide-react';

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ name: 'Nigeria', flag: '🇳🇬' });

  const countries = [
    { name: 'Nigeria', flag: 'https://flagcdn.com/w40/ng.png' },
    { name: 'Ghana', flag: 'https://flagcdn.com/w40/gh.png' },
    { name: 'Kenya', flag: 'https://flagcdn.com/w40/ke.png' },
    { name: 'South Africa', flag: 'https://flagcdn.com/w40/za.png' },
    { name: 'Egypt', flag: 'https://flagcdn.com/w40/eg.png' },
    { name: 'United States', flag: 'https://flagcdn.com/w40/us.png' },
    { name: 'United Kingdom', flag: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };
  const styles = {
    footer: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    topSection: {
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #4a5f7f 100%)',
      padding: '60px 80px',
      position: 'relative',
      overflow: 'hidden',
    },
    backgroundPattern: {
      position: 'absolute',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '50%',
      height: '100%',
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      opacity: '0.4',
    },
    mapOverlay: {
      position: 'absolute',
      right: '100px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '300px',
      opacity: '0.05',
      color: '#fff',
      fontWeight: 'bold',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '60px',
      position: 'relative',
      zIndex: '1',
      marginBottom: '30px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    columnTitle: {
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
    },
    link: {
      color: '#b8c5d6',
      fontSize: '14px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    contactInfo: {
      position: 'relative',
      zIndex: '1',
      marginBottom: '30px',
    },
    contactTitle: {
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: '500',
      marginBottom: '8px',
    },
    contactText: {
      color: '#b8c5d6',
      fontSize: '14px',
      lineHeight: '1.6',
    },
    countrySelector: {
      position: 'relative',
      display: 'inline-block',
      marginTop: '12px',
    },
    countrySelectorButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '6px',
      background: 'rgba(255,255,255,0.05)',
      color: '#ffffff',
      fontSize: '14px',
      cursor: 'pointer',
      minWidth: '150px',
      justifyContent: 'space-between',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      marginTop: '4px',
      background: '#ffffff',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '6px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      minWidth: '180px',
      maxHeight: '250px',
      overflowY: 'auto',
      zIndex: '1000',
    },
    dropdownItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 16px',
      cursor: 'pointer',
      color: '#2c3e50',
      fontSize: '14px',
      transition: 'background 0.2s ease',
    },
    flag: {
      width: '24px',
      height: '16px',
      objectFit: 'cover',
      borderRadius: '2px',
    },
    socialContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      position: 'relative',
      zIndex: '1',
      marginTop: '20px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    bottomSection: {
      background: '#ffffff',
      padding: '40px 80px',
      textAlign: 'center',
    },
    copyright: {
      color: '#2c3e50',
      fontSize: '13px',
      fontWeight: '500',
      marginBottom: '20px',
    },
    disclaimer: {
      color: '#5a6c7d',
      fontSize: '12px',
      lineHeight: '1.8',
      maxWidth: '900px',
      margin: '0 auto',
    },
    linkInline: {
      color: '#3498db',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.backgroundPattern}></div>
        <div style={styles.mapOverlay}>...</div>
        
        <div style={styles.contentGrid}>
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Solutions</h3>
            <a style={styles.link} href="#">Financial Infrastructure</a>
            <a style={styles.link} href="#">Loan Origination & Management</a>
            <a style={styles.link} href="#">Market & Payment Products</a>
            <a style={styles.link} href="#">HR & Payroll Tools</a>
            <a style={styles.link} href="#">Business Operations Dashboard</a>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Company</h3>
            <a style={styles.link} href="#">About Us</a>
            <a style={styles.link} href="#">Blog/Insight</a>
            <a style={styles.link} href="#">Careers</a>
            <a style={styles.link} href="#">Contact Us</a>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Resources</h3>
            <a style={styles.link} href="#">API Documentation</a>
            <a style={styles.link} href="#">Developer Hub</a>
            <a style={styles.link} href="#">System Status</a>
            <a style={styles.link} href="#">Help Center</a>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Legal</h3>
            <a style={styles.link} href="#">Terms & Conditions</a>
            <a style={styles.link} href="#">Privacy & Policy</a>
            <a style={styles.link} href="#">Legal & Compliance</a>
            <a style={styles.link} href="#">Dispute Resolution Policy</a>
          </div>
        </div>

        <div style={styles.contactInfo}>
          <p style={styles.contactTitle}>For more Information</p>
          <p style={styles.contactText}>
            support@sliimfinance.io<br />
            +234 809 123 4567<br />
            Lagos, Nigeria 🇳🇬
          </p>
          <div style={styles.countrySelector}>
            <div 
              style={styles.countrySelectorButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src={selectedCountry.flag} alt={selectedCountry.name} style={styles.flag} />
              <span>{selectedCountry.name}</span>
              <ChevronDown size={16} />
            </div>
            {isDropdownOpen && (
              <div style={styles.dropdown}>
                {countries.map((country, index) => (
                  <div
                    key={index}
                    style={styles.dropdownItem}
                    onClick={() => handleCountrySelect(country)}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f5f7fa'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <img src={country.flag} alt={country.name} style={styles.flag} />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={styles.socialContainer}>
          <div style={styles.socialIcon}>
            <Linkedin size={20} color="#2c3e50" />
          </div>
          <div style={styles.socialIcon}>
            <Facebook size={20} color="#2c3e50" />
          </div>
          <div style={styles.socialIcon}>
            <Youtube size={20} color="#2c3e50" />
          </div>
          <div style={styles.socialIcon}>
            <Twitter size={20} color="#2c3e50" />
          </div>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <p style={styles.copyright}>© Sliim Finance 2025</p>
        <p style={styles.disclaimer}>
          At Sliim Finance, we're simplifying the future of digital finance through smart technology and user-first design. Our platform is built to help individuals and businesses take control of their finances with powerful tools, insights and resources, all in seamless experiences.<br />
          We prioritize data privacy, financial security, and compliance, implementing advanced encryption and robust security protocols to ensure your information is always protected.<br />
          Read more about our <span style={styles.linkInline}>Terms and Policies</span> for full details on how we operate securely and transparently.
        </p>
      </div>
    </footer>
  );
} 