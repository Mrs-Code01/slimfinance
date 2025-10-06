import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("authentication");
  const [openQuestion, setOpenQuestion] = useState(null);

  const tabs = [
    { id: "authentication", label: "Authentication" },
    { id: "onboarding", label: "Onboarding & KYC" },
    { id: "accounts", label: "Accounts" }
  ];

  const faqData = {
    authentication: {
      title: "Authentication & Access",
      count: 2,
      questions: [
        {
          id: 1,
          question: "What type of authentication does Slim Finance support?",
          answer:
            "Slim Finance supports multiple authentication methods including OAuth 2.0, API keys, and biometric authentication for enhanced security."
        },
        {
          id: 2,
          question: "Can I set multi role access control?",
          answer:
            "Yes, Slim Finance provides comprehensive role-based access control (RBAC) allowing you to define multiple roles with specific permissions and assign them to users."
        }
      ]
    },
    onboarding: {
      title: "Onboarding & KYC",
      count: 3,
      questions: [
        {
          id: 3,
          question: "What documents are required for KYC verification?",
          answer:
            "For KYC verification, you need to provide a valid government-issued ID (passport, driver's license, or national ID), proof of address (utility bill or bank statement), and a selfie for identity verification."
        },
        {
          id: 4,
          question: "How long does the onboarding process take?",
          answer:
            "The onboarding process typically takes 5-10 minutes to complete. KYC verification is usually processed within 24-48 hours, though it may be faster depending on document quality and verification load."
        },
        {
          id: 5,
          question: "Can I start using the platform before KYC approval?",
          answer:
            "You can access limited features with a basic account, but full platform functionality including transactions and withdrawals requires completed KYC verification."
        }
      ]
    },
    accounts: {
      title: "Accounts",
      count: 4,
      questions: [
        {
          id: 6,
          question: "What types of accounts does Slim Finance offer?",
          answer:
            "Slim Finance offers various account types including Personal Accounts, Business Accounts, Corporate Accounts, and Developer Accounts, each tailored to specific needs and use cases."
        },
        {
          id: 7,
          question: "Can I have multiple accounts?",
          answer:
            "Yes, you can create and manage multiple accounts under one login. This is particularly useful for separating personal and business finances or managing different projects."
        },
        {
          id: 8,
          question: "How do I upgrade my account?",
          answer:
            "You can upgrade your account by navigating to Account Settings, selecting the desired plan, and completing the upgrade process. Some upgrades may require additional verification."
        },
        {
          id: 9,
          question: "Are there any fees for maintaining an account?",
          answer:
            "Basic accounts are free with no maintenance fees. Premium and business accounts may have monthly fees but offer enhanced features, higher limits, and priority support."
        }
      ]
    }
  };

  const toggleQuestion = id => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Frequently Asked Questions</h1>
        <p style={styles.subtitle}>
          Get answers to common questions about Slim Finance's features,
          integrations, and capabilities.
        </p>

        <div style={styles.tabsContainer}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              style={{
                ...styles.tabButton,
                ...(activeTab === tab.id ? styles.tabButtonActive : {})
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={styles.faqSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>{faqData[activeTab].title}</h2>
            <div style={styles.questionCount}>{faqData[activeTab].count}</div>
          </div>

          <div style={styles.questionsList}>
            {faqData[activeTab].questions.map(item => (
              <div key={item.id} style={styles.questionItem}>
                <button
                  style={styles.questionButton}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <span style={styles.questionText}>{item.question}</span>
                  <ChevronDown
                    style={{
                      ...styles.chevronIcon,
                      transform:
                        openQuestion === item.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)"
                    }}
                    size={20}
                  />
                </button>
                {openQuestion === item.id && (
                  <div style={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button style={styles.viewMoreBtn}>View More</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0a1628 0%, #1a2744 100%)",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
  },
  content: {
    maxWidth: "800px",
    width: "100%"
  },
  title: {
    fontSize: "42px",
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.5px"
  },
  subtitle: {
    fontSize: "16px",
    color: "#a0aec0",
    textAlign: "center",
    marginBottom: "48px",
    lineHeight: "1.6"
  },
  tabsContainer: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "48px",
    flexWrap: "wrap"
  },
  tabButton: {
    padding: "12px 28px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    background: "rgba(255, 255, 255, 0.08)",
    color: "#a0aec0"
  },
  tabButtonActive: {
    background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
    color: "#ffffff",
    border: "1px solid transparent",
    boxShadow: "0 4px 16px rgba(74, 222, 128, 0.3)"
  },
  faqSection: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "40px",
    backdropFilter: "blur(10px)"
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px"
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#ffffff",
    letterSpacing: "-0.3px"
  },
  questionCount: {
    width: "32px",
    height: "32px",
    background: "#4ade80",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "600",
    color: "#ffffff"
  },
  questionsList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  questionItem: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "all 0.3s ease"
  },
  questionButton: {
    width: "100%",
    padding: "18px 24px",
    background: "none",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    color: "#e2e8f0",
    fontSize: "15px",
    fontWeight: "500",
    textAlign: "left",
    transition: "color 0.2s ease"
  },
  questionText: {
    flex: 1,
    lineHeight: "1.5"
  },
  chevronIcon: {
    color: "#a0aec0",
    transition: "transform 0.3s ease",
    flexShrink: 0,
    marginLeft: "16px"
  },
  answerContent: {
    padding: "0 24px 24px 24px",
    color: "#cbd5e0",
    fontSize: "14px",
    lineHeight: "1.7"
  },
  viewMoreBtn: {
    display: "block",
    margin: "0 auto",
    padding: "14px 48px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(99, 102, 241, 0.3)"
  }
};

export default Faq;
