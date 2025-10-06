import React from "react";
import { Check } from "lucide-react";

const BusinessTools = () => {
  const features = [
    { id: 1, text: "Prebuilt KYC & Onboarding" },
    { id: 2, text: "Account Creation & Management" },
    { id: 3, text: "Real-Time Budget Adjustments" },
    { id: 4, text: "White-Label UI kits (Cross-channel)" },
    { id: 5, text: "Modular Savings & Loans Engine" },
    { id: 6, text: "Compliant Resolution (DRS)" },
    { id: 7, text: "Audit & Monitoring Tools" },
    { id: 8, text: "Subscription & Feature Gating" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <p style={styles.label}>BUSINESS TOOLS</p>
        <h1 style={styles.title}>
          Smart Tools, <span style={styles.titleHighlight}>Real Impact</span>
        </h1>
        <p style={styles.subtitle}>
          No more jumping between apps or guessing where your money went.
          <br />
          Our tools are built to simplify your finances and deliver results you
          can actually feel.
        </p>

        <div style={styles.grid}>
          <div style={styles.illustrationWrapper}>
            <div style={styles.illustrationCard}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Dashboard illustration"
                style={styles.dashboardImage}
              />
              <img
                src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=80&fit=crop"
                alt="Floating icon 1"
                style={{ ...styles.floatingIcon, ...styles.icon1 }}
              />
              <img
                src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=80&h=80&fit=crop"
                alt="Floating icon 2"
                style={{ ...styles.floatingIcon, ...styles.icon2 }}
              />
              <img
                src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=100&h=100&fit=crop"
                alt="Rocket"
                style={styles.rocketImage}
              />
            </div>
          </div>

          <div style={styles.featuresSection}>
            <h2 style={styles.featuresTitle}>What You Get</h2>
            <div style={styles.featuresGrid}>
              {features.map(feature => (
                <div key={feature.id} style={styles.featureItem}>
                  <div style={styles.checkWrapper}>
                    <Check size={18} style={styles.checkIcon} />
                  </div>
                  <span style={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .floating-animation-1 {
          animation: float 3s ease-in-out infinite;
        }
        .floating-animation-2 {
          animation: float 3s ease-in-out infinite 1s;
        }
        .floating-animation-3 {
          animation: float 4s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#ffffff",
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
  },
  content: {
    maxWidth: "1200px",
    width: "100%"
  },
  label: {
    textAlign: "center",
    color: "#22c55e",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "2px",
    marginBottom: "16px"
  },
  title: {
    textAlign: "center",
    fontSize: "48px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "16px",
    letterSpacing: "-1px"
  },
  titleHighlight: {
    color: "#6366f1"
  },
  subtitle: {
    textAlign: "center",
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.7",
    marginBottom: "60px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center"
  },
  illustrationWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  illustrationCard: {
    position: "relative",
    width: "100%",
    maxWidth: "450px",
    height: "400px",
    background: "linear-gradient(135deg, #fef3c7 0%, #fef9e7 100%)",
    borderRadius: "24px",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
  },
  dashboardImage: {
    width: "90%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
    transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)"
  },
  floatingIcon: {
    position: "absolute",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)"
  },
  icon1: {
    top: "60px",
    left: "20px",
    animation: "float 3s ease-in-out infinite"
  },
  icon2: {
    top: "80px",
    right: "20px",
    animation: "float 3s ease-in-out infinite 1s"
  },
  rocketImage: {
    position: "absolute",
    bottom: "20px",
    left: "30px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    animation: "float 4s ease-in-out infinite 0.5s",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)"
  },
  featuresSection: {
    background: "#ffffff"
  },
  featuresTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "32px"
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px 24px"
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 0"
  },
  checkWrapper: {
    width: "28px",
    height: "28px",
    background: "#22c55e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  checkIcon: {
    color: "#ffffff"
  },
  featureText: {
    fontSize: "15px",
    color: "#333333",
    fontWeight: "500",
    lineHeight: "1.5"
  }
};

export default BusinessTools;
