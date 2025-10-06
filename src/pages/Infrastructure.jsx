import React from "react";
import { Sparkles, Rocket, TrendingUp, Settings } from "lucide-react";

export default function Infrastructure() {
  const styles = {
    section: {
      backgroundColor: "#1e3a5f",
      padding: "80px 40px",
      color: "#ffffff"
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto"
    },
    header: {
      textAlign: "center",
      marginBottom: "60px"
    },
    heading: {
      fontSize: "48px",
      fontWeight: "700",
      margin: "0 0 20px 0",
      lineHeight: "1.2"
    },
    subtitle: {
      fontSize: "16px",
      color: "#d1d5db",
      lineHeight: "1.6",
      maxWidth: "800px",
      margin: "0 auto"
    },
    cardsContainer: {
      display: "flex",
      gap: "24px",
      marginTop: "40px",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "32px 24px",
      color: "#1a1a1a",
      transition: "transform 0.3s ease, boxShadow 0.3s ease",
      cursor: "pointer",
      flex: "1 1 calc(25% - 24px)",
      minWidth: "250px",
      maxWidth: "280px"
    },
    iconWrapper: {
      width: "56px",
      height: "56px",
      backgroundColor: "#d1fae5",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px"
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: "700",
      margin: "0 0 16px 0",
      color: "#1a1a1a"
    },
    cardDescription: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.6",
      margin: 0
    }
  };

  const cards = [
    {
      icon: <Sparkles size={28} color="#10B981" />,
      title: "Dream",
      description:
        "With pre-built financial modules (KYC, Accounts, Transfers, Savings, Loans) and microservices for all needs — there's no need to start from scratch or rebuilding the basics."
    },
    {
      icon: <Rocket size={28} color="#10B981" />,
      title: "Launch",
      description:
        "Slim Finance converts to essential rails like NIBSS, Mono, Paystack, etc., so your product can work from anywhere — no licenses required."
    },
    {
      icon: <TrendingUp size={28} color="#10B981" />,
      title: "Scale",
      description:
        "Handle thousands to millions with microservices built on serverless, kubernetes, fault-tolerant, and ready-for-regulatory needs. All while running smooth and fast."
    },
    {
      icon: <Settings size={28} color="#10B981" />,
      title: "Orchestrate",
      description:
        "From workflows to banking — either ideal interfaces, omni-channel logic, feature gates, and no-code config for seamless control over your financial product business."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.heading}>
            Your Infrastructure, Finally Making Sense
          </h2>
          <p style={styles.subtitle}>
            We built Slim Finance to remove the mess of fragmented services,
            tangled APIs, and hard-coded workflows. Now, launching and scaling
            financial products feels as intuitive as flipping a switch.
          </p>
        </div>

        <div style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                transform:
                  hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 12px 24px rgba(0, 0, 0, 0.15)"
                    : "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={styles.iconWrapper}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
