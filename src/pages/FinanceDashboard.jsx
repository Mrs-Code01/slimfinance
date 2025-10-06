import React from "react";

export default function FinanceDashboard() {
  const styles = {
    section: {
      backgroundColor: "#1e3a5f",
      padding: "80px 40px 120px",
      color: "#ffffff",
      position: "relative",
      overflow: "hidden"
    },
    backgroundPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.05,
      backgroundImage:
        "radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.1) 100%)",
      pointerEvents: "none"
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    },
    header: {
      textAlign: "center",
      marginBottom: "50px"
    },
    heading: {
      fontSize: "48px",
      fontWeight: "700",
      margin: "0 0 30px 0",
      lineHeight: "1.3"
    },
    subtitle: {
      fontSize: "18px",
      color: "#d1d5db",
      lineHeight: "1.7",
      maxWidth: "750px",
      margin: "0 auto 40px"
    },
    ctaButton: {
      backgroundColor: "#4F46E5",
      color: "#ffffff",
      padding: "14px 40px",
      fontSize: "16px",
      fontWeight: "600",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 16px rgba(79, 70, 229, 0.4)"
    },
    dashboardPreview: {
      marginTop: "60px",
      position: "relative"
    },
    dashboardContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "30px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      display: "flex",
      gap: "30px"
    },
    sidebar: {
      width: "200px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    sidebarItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 16px",
      borderRadius: "8px",
      fontSize: "14px",
      color: "#666",
      cursor: "pointer",
      transition: "all 0.2s"
    },
    sidebarItemActive: {
      backgroundColor: "#f3f4f6",
      color: "#1a1a1a",
      fontWeight: "600"
    },
    mainContent: {
      flex: 1
    },
    contentHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px"
    },
    contentTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#1a1a1a",
      margin: 0
    },
    cardsRow: {
      display: "flex",
      gap: "20px",
      marginBottom: "30px"
    },
    creditCard: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "16px",
      padding: "24px",
      color: "#ffffff",
      minWidth: "240px"
    },
    cardLabel: {
      fontSize: "12px",
      opacity: 0.9,
      marginBottom: "8px"
    },
    cardName: {
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "20px"
    },
    cardNumber: {
      fontSize: "16px",
      letterSpacing: "2px",
      marginBottom: "16px"
    },
    cardFooter: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "12px"
    },
    balanceCard: {
      backgroundColor: "#f9fafb",
      borderRadius: "16px",
      padding: "24px",
      flex: 1
    },
    balanceAmount: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginTop: "8px"
    },
    transactionList: {
      backgroundColor: "#f9fafb",
      borderRadius: "16px",
      padding: "20px",
      marginBottom: "20px"
    },
    transactionItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid #e5e7eb"
    },
    transactionInfo: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    transactionIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px"
    },
    transactionDetails: {
      display: "flex",
      flexDirection: "column"
    },
    transactionName: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#1a1a1a"
    },
    transactionDate: {
      fontSize: "12px",
      color: "#9ca3af"
    },
    transactionAmount: {
      fontSize: "14px",
      fontWeight: "600"
    },
    chartsRow: {
      display: "flex",
      gap: "20px"
    },
    chartCard: {
      backgroundColor: "#f9fafb",
      borderRadius: "16px",
      padding: "20px",
      flex: 1
    },
    chartTitle: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#1a1a1a",
      marginBottom: "20px"
    },
    barChart: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around",
      height: "120px",
      gap: "8px"
    },
    barGroup: {
      display: "flex",
      gap: "4px",
      alignItems: "flex-end"
    },
    bar: {
      width: "12px",
      borderRadius: "4px 4px 0 0"
    },
    pieChart: {
      width: "140px",
      height: "140px",
      margin: "0 auto",
      position: "relative"
    }
  };

  const [hoveredButton, setHoveredButton] = React.useState(false);

  return (
    <section style={styles.section}>
      <div style={styles.backgroundPattern}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.heading}>
            For Those Who Want More Than Just
            <br />A Spreadsheet
          </h2>
          <p style={styles.subtitle}>
            You don't need to be a finance geek to stay on top of your money.
            <br />
            Slim Finance gives you clean visuals, smart suggestions, and total
            control all without a single formula.
          </p>
          <button
            style={{
              ...styles.ctaButton,
              backgroundColor: hoveredButton ? "#4338CA" : "#4F46E5",
              transform: hoveredButton ? "translateY(-2px)" : "translateY(0)"
            }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            Join Our Waitlist
          </button>
        </div>

        <div style={styles.dashboardPreview}>
          <img
            src="/images/dashboard.png"
            alt="Financial Dashboard"
            style={{
              width: "100%",
              maxWidth: "900px",
              margin: "0 auto",
              display: "block",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
