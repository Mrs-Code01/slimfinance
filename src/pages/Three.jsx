import { useState } from "react";

export default function Three() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Platform Benefits", "Integration", "Customization"];

  const content = {
    0: {
      title: "Platform Benefits",
      description:
        "Slim Finance lets you build financial products your way — no bloated tools or rigid systems. Start with just the essentials: savings, transfers, loans, or KYC. Then activate more features as you scale.",
      subtitle:
        "Every module is fully independent, so you can move fast, stay lean, and keep your tech stack clean.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    },
    1: {
      title: "Integration",
      description:
        "Seamlessly connect with your existing infrastructure. Our API-first approach ensures smooth integration with minimal effort.",
      subtitle:
        "Connect once, deploy everywhere. Our modular architecture adapts to your needs.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    },
    2: {
      title: "Customization",
      description:
        "Tailor every aspect to match your brand and business requirements. From UI to workflows, make it yours.",
      subtitle:
        "Full control over user experience and business logic. White-label ready.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.mainTitle}>
          Everything Works Together.
          <br />
          Effortlessly
        </h1>
        <p style={styles.subtitle}>
          Slim Finance is more than just tools — it's a fully connected system
          designed to
          <br />
          simplify your financial workflow from end to end.
        </p>
      </div>

      <div style={styles.card}>
        <div style={styles.tabContainer}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                ...styles.tab,
                ...(activeTab === index ? styles.activeTab : styles.inactiveTab)
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.leftContent}>
            <h2 style={styles.contentTitle}>{content[activeTab].title}</h2>
            <p style={styles.contentDescription}>
              {content[activeTab].description}
            </p>
            <p style={styles.contentSubtitle}>{content[activeTab].subtitle}</p>
          </div>

          <div style={styles.rightContent}>
            <div style={styles.mockup}>
              <div style={styles.mockupHeader}>
                <div style={styles.mockupDot}></div>
                <div style={styles.mockupDot}></div>
                <div style={styles.mockupDot}></div>
              </div>
              <div style={styles.mockupContent}>
                <img
                  src={content[activeTab].image}
                  alt="Dashboard Analytics"
                  style={styles.dashboardImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    backgroundColor: "#ffffff"
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px"
  },
  mainTitle: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "20px",
    lineHeight: "1.2"
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.6"
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: "20px",
    padding: "40px",
    minHeight: "450px"
  },
  tabContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "40px"
  },
  tab: {
    padding: "12px 28px",
    border: "none",
    borderRadius: "25px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  activeTab: {
    backgroundColor: "#5cb85c",
    color: "#ffffff"
  },
  inactiveTab: {
    backgroundColor: "transparent",
    color: "#666"
  },
  contentContainer: {
    display: "flex",
    gap: "60px",
    alignItems: "center"
  },
  leftContent: {
    flex: "1",
    maxWidth: "450px"
  },
  contentTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "20px"
  },
  contentDescription: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.7",
    marginBottom: "20px"
  },
  contentSubtitle: {
    fontSize: "15px",
    color: "#666",
    lineHeight: "1.6"
  },
  rightContent: {
    flex: "1"
  },
  mockup: {
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    border: "2px solid #e0e0e0"
  },
  mockupHeader: {
    display: "flex",
    gap: "8px",
    marginBottom: "20px"
  },
  mockupDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#d0d0d0"
  },
  mockupContent: {
    position: "relative",
    height: "300px",
    overflow: "hidden",
    borderRadius: "10px"
  },
  dashboardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px"
  }
};
