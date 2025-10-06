"use client";
import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const ModernFinance = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const observerRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "Streamline Customer Onboarding",
      description:
        "Get customers verified and onboarded in minutes with automated KYC and document validation. Our intelligent verification reduces manual review time by 80%. Fast, secure, and seamless.",
      points: [
        "Automated document verification",
        "Digital identity",
        "Bank - level security"
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Enable Seamless Money Movement",
      description:
        "Facilitate instant transfers and payments across multiple channels with our real-time infrastructure. Built for speed, security, and reliability at scale.",
      points: [
        "Instant transfers",
        "Multi-channel support",
        "Real-time processing"
      ],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Analytics Dashboard",
      description:
        "Make data-driven decisions with comprehensive analytics and reporting tools. Track performance, identify trends, and optimize your financial operations.",
      points: ["Real-time insights", "Custom reports", "Predictive analytics"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Secure Payment Processing",
      description:
        "Process payments with enterprise-grade security and compliance. Our platform ensures every transaction is protected with advanced encryption and fraud detection.",
      points: ["PCI DSS compliant", "Fraud detection", "Multi-layer security"],
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, options);

    // Observe ALL sections including the first one
    sectionsRef.current.forEach(section => {
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div style={styles.financeContainer}>
      <div style={styles.financeHeader}>
        <h1 style={styles.mainTitle}>
          Built for <span style={styles.titleHighlight}>Modern Finance</span>
        </h1>
        <p style={styles.subtitle}>
          Transform your financial services with powerful capabilities that work
          seamlessly
          <br />
          together
        </p>
      </div>

      <div style={styles.financeContent}>
        <div style={styles.featuresLeft}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={el => (sectionsRef.current[index] = el)}
              style={{
                ...styles.featureSection,
                opacity: activeSection === index ? 1 : 0.3
              }}
            >
              <h2 style={styles.featureTitle}>{feature.title}</h2>
              <p style={styles.featureDescription}>{feature.description}</p>

              <ul style={styles.featurePoints}>
                {feature.points.map((point, idx) => (
                  <li key={idx} style={styles.pointItem}>
                    <div style={styles.checkCircle}>
                      <Check size={16} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button style={styles.contactButton}>Contact Us</button>
            </div>
          ))}
        </div>

        <div style={styles.featuresRight}>
          <div style={styles.stickyImageContainer}>
            <div key={activeSection} style={styles.imageWrapper}>
              <img
                src={features[activeSection].image}
                alt={features[activeSection].title}
                style={styles.featureImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  financeContainer: {
    background: "#f9fafb",
    padding: "80px 20px 120px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
  },
  financeHeader: {
    width: "80%",
    margin: "0 auto 100px",
    textAlign: "center"
  },
  mainTitle: {
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
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.7"
  },
  financeContent: {
    width: "80%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "100px",
    alignItems: "start"
  },
  featuresLeft: {
    display: "flex",
    flexDirection: "column"
  },
  featureSection: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 0",
    transition: "opacity 0.6s ease"
  },
  featureTitle: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "20px",
    lineHeight: "1.2"
  },
  featureDescription: {
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.8",
    marginBottom: "32px"
  },
  featurePoints: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    margin: "0 0 36px 0",
    padding: "0"
  },
  pointItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "16px",
    color: "#333333",
    fontWeight: "500"
  },
  checkCircle: {
    width: "32px",
    height: "32px",
    background: "#22c55e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    color: "#ffffff"
  },
  contactButton: {
    padding: "16px 40px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
    alignSelf: "flex-start"
  },
  featuresRight: {
    position: "relative",
    height: "100%"
  },
  stickyImageContainer: {
    position: "sticky",
    top: "90px",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeInScale 0.7s ease-out"
  },
  featureImage: {
    width: "100%",
    height: "100%",
    maxWidth: "550px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
  }
};

// Add keyframe animation via style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(30px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);

export default ModernFinance;
