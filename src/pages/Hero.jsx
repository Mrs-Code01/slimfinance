import React, { useState, useEffect } from "react";

export default function SlimFinanceLanding() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["future", "growth", "success", "wealth", "freedom"];

  const toggleDropdown = dropdown => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    topBanner: {
      backgroundColor: "#fff",
      padding: "20px 40px",
      textAlign: "center",
      fontSize: "14px",
      color: "#333",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    readMore: {
      color: "#6B7FFF",
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "14px"
    },
    header: {
      padding: "20px 40px",
      display: "flex",
      justifyContent: "center"
    },
    nav: {
      backgroundColor: "white",
      borderRadius: "50px",
      padding: "14px 40px",
      display: "flex",
      alignItems: "center",
      gap: "48px",
      boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
      position: "relative"
    },
    navItem: {
      position: "relative",
      cursor: "pointer",
      fontSize: "15px",
      color: "#333",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      userSelect: "none"
    },
    arrow: {
      display: "inline-block",
      transition: "transform 0.3s ease",
      fontSize: "12px"
    },
    arrowRotated: {
      transform: "rotate(180deg)"
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "12px",
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "20px",
      minWidth: "320px",
      boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
      zIndex: 1000
    },
    dropdownWide: {
      minWidth: "640px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0"
    },
    dropdownItem: {
      padding: "14px 16px",
      borderRadius: "8px",
      marginBottom: "4px",
      cursor: "pointer",
      transition: "background 0.2s",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px"
    },
    dropdownIcon: {
      fontSize: "20px",
      marginTop: "2px"
    },
    dropdownText: {
      flex: 1
    },
    dropdownTitle: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "2px"
    },
    dropdownSubtitle: {
      fontSize: "13px",
      color: "#666"
    },
    joinButton: {
      backgroundColor: "#6B7FFF",
      color: "white",
      border: "none",
      borderRadius: "50px",
      padding: "12px 32px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      marginLeft: "auto"
    },
    hero: {
      textAlign: "center",
      padding: "100px 20px",
      color: "white",
      position: "relative"
    },
    heroTitle: {
      fontSize: "54px",
      fontWeight: "700",
      margin: "0 auto",
      lineHeight: "1.2",
      marginTop: "34px",
      maxWidth: "900px"
    },
    greenWord: {
      display: "inline-block",
      color: "white",
      padding: "8px 5px",
      position: "relative",
      overflow: "hidden",
      width: "215px",
      textAlign: "center",
      height: "65px",
      verticalAlign: "middle",
      top: "-15px"
    },
    wordWrapper: {
      position: "absolute",
      width: "100%",
      left: 0
    },
    heroSubtitle: {
      fontSize: "18px",
      marginBottom: "32px",
      maxWidth: "650px",
      margin: "0 auto 32px",
      lineHeight: "1.6",
      color: "#fff"
    },
    ctaButton: {
      backgroundColor: "#6B7FFF",
      color: "white",
      border: "none",
      borderRadius: "50px",
      padding: "16px 40px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "20px"
    },
    floatingBadge: {
      position: "absolute",
      backgroundColor: "white",
      padding: "10px 24px",
      borderRadius: "50px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
      boxShadow: "0 2px 15px rgba(0,0,0,0.2)"
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            10% {
              transform: translateY(0);
              opacity: 1;
            }
            90% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
          
          .animated-word {
            animation: slideUp 3s ease-in-out;
          }
        `}
      </style>

      <div style={styles.topBanner}>
        <span>Check out our latest updates today! 🎉👍</span>
        <a href="#" style={styles.readMore}>
          Read more →
        </a>
      </div>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.navItem} onClick={() => toggleDropdown("whySlim")}>
            Why Slim?{" "}
            <span
              style={{
                ...styles.arrow,
                ...(activeDropdown === "whySlim" ? styles.arrowRotated : {})
              }}
            >
              ▼
            </span>
            {activeDropdown === "whySlim" && (
              <div style={styles.dropdown}>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>🔐</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>Identity Management</div>
                    <div style={styles.dropdownSubtitle}>
                      KYB / KYC Verification
                    </div>
                  </div>
                </div>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>💳</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>
                      Payments (Local & transfer users)
                    </div>
                  </div>
                </div>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>👤</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>Account Management</div>
                  </div>
                </div>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>⚖️</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>
                      Compliance (Coming soon)
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            style={styles.navItem}
            onClick={() => toggleDropdown("solutions")}
          >
            Solutions{" "}
            <span
              style={{
                ...styles.arrow,
                ...(activeDropdown === "solutions" ? styles.arrowRotated : {})
              }}
            >
              ▼
            </span>
            {activeDropdown === "solutions" && (
              <div style={{ ...styles.dropdown, ...styles.dropdownWide }}>
                <div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>🎯</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>Savings</div>
                    </div>
                  </div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>🎨</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>White Label UI Kit</div>
                    </div>
                  </div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>💼</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>
                        Loans (Origination, Decisioning, Management and
                        Collection)
                      </div>
                    </div>
                  </div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>💰</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>
                        Investment Products
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>📊</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>
                        Financial Analytics
                      </div>
                    </div>
                  </div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>🔄</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>
                        Transaction Management
                      </div>
                    </div>
                  </div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>🏦</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>
                        Banking Infrastructure
                      </div>
                    </div>
                  </div>
                  <div style={styles.dropdownItem}>
                    <span style={styles.dropdownIcon}>🌐</span>
                    <div style={styles.dropdownText}>
                      <div style={styles.dropdownTitle}>
                        Cross-border Payments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            style={styles.navItem}
            onClick={() => toggleDropdown("developer")}
          >
            Developer{" "}
            <span
              style={{
                ...styles.arrow,
                ...(activeDropdown === "developer" ? styles.arrowRotated : {})
              }}
            >
              ▼
            </span>
            {activeDropdown === "developer" && (
              <div style={styles.dropdown}>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>📚</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>Documentation</div>
                  </div>
                </div>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>🔑</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>API Reference</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            style={styles.navItem}
            onClick={() => toggleDropdown("resources")}
          >
            Resources{" "}
            <span
              style={{
                ...styles.arrow,
                ...(activeDropdown === "resources" ? styles.arrowRotated : {})
              }}
            >
              ▼
            </span>
            {activeDropdown === "resources" && (
              <div style={styles.dropdown}>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>📖</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>Blog</div>
                  </div>
                </div>
                <div style={styles.dropdownItem}>
                  <span style={styles.dropdownIcon}>❓</span>
                  <div style={styles.dropdownText}>
                    <div style={styles.dropdownTitle}>Help Center</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button style={styles.joinButton}>Join Our Waitlist</button>
        </nav>
      </header>

      <div style={styles.hero}>
        <div style={{ ...styles.floatingBadge, top: "60px", left: "80px" }}>
          Savings
        </div>
        <div style={{ ...styles.floatingBadge, top: "180px", left: "120px" }}>
          Transaction
        </div>
        <div style={{ ...styles.floatingBadge, top: "100px", right: "80px" }}>
          Loan
        </div>
        <div style={{ ...styles.floatingBadge, top: "220px", right: "120px" }}>
          Transfers
        </div>

        <h1 style={styles.heroTitle}>
          Take control of your{" "}
          <span style={styles.greenWord}>
            <span
              key={currentWord}
              className="animated-word"
              style={styles.wordWrapper}
            >
              {words[currentWord]}
            </span>
          </span>
          <br />
          smart, simple, secure.
        </h1>
        <p style={styles.heroSubtitle}>
          Slim Finance provides the infrastructure that empowers businesses to
          launch and
          <br />
          scale financial services fast.
        </p>
        <button style={styles.ctaButton}>Join Our Waitlist</button>
      </div>
    </div>
  );
}
