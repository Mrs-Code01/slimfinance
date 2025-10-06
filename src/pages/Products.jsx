import React from "react";
import { Wallet, Send, PiggyBank, Building2 } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: <Wallet size={48} color="#6366f1" />,
      title: "Wallets",
      description:
        "Virtual accounts for storing, sending, receiving funds, transaction history credit/debit, liens etc",
      color: "#e0e7ff"
    },
    {
      icon: <Send size={48} color="#f97316" />,
      title: "Transfer & Payments",
      description:
        "and orchestration for local fund movement using multiple payment methods",
      color: "#ffedd5"
    },
    {
      icon: <PiggyBank size={48} color="#ec4899" />,
      title: "Savings",
      description:
        "Support for fixed, flexible, and goal-based savings schemes",
      color: "#fce7f3"
    },
    {
      icon: <Building2 size={48} color="#14b8a6" />,
      title: "Loans",
      description:
        "Origination, underwriting, disbursement, and repayment orchestration and more",
      color: "#ccfbf1"
    }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>

      <div style={styles.header}>
        <div style={styles.badge}>FINANCIAL PRODUCTS</div>
        <h1 style={styles.title}>Smarter Ways to Build Financial Products</h1>
        <p style={styles.subtitle}>
          Streamline how you create, launch, and manage your financial products
          — from savings and wallets
          <br />
          to loans and compliance — all in one place, without writing code.
        </p>
      </div>

      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <div
              style={{
                ...styles.iconContainer,
                backgroundColor: product.color
              }}
            >
              {product.icon}
            </div>
            <h3 style={styles.cardTitle}>{product.title}</h3>
            <p style={styles.cardDescription}>{product.description}</p>
            <button style={styles.button}>Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    padding: "60px 20px"
  },
  header: {
    textAlign: "center",
    width: "80%",
    margin: "0 auto 80px"
  },
  badge: {
    display: "inline-block",
    color: "#10b981",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    marginBottom: "20px"
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "20px",
    lineHeight: "1.2"
  },
  subtitle: {
    fontSize: "16px",
    color: "#6b7280",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  },
  card: {
    backgroundColor: "#f9fafb",
    borderRadius: "16px",
    padding: "40px 30px",
    textAlign: "left",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    position: "relative"
  },
  iconContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
    textAlign: "left",
    position: "absolute",
    right: "50px"
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "12px",
    marginTop: "170px"
  },
  cardDescription: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "24px",
    minHeight: "60px"
  },
  button: {
    backgroundColor: "#6366f1",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  }
};

// Add hover effect using inline event handlers
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    div[style*="backgroundColor: #f9fafb"]:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    button:hover {
      background-color: #4f46e5 !important;
    }
  `;
  document.head.appendChild(styleSheet);
}
