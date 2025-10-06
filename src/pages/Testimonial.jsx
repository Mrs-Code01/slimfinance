import React from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text:
        "\"Slim Finance gave us the infrastructure we'd been missing. Setting up savings products and managing user wallets became seamless. We finally feel like we're operating at the level of a tier-one bank — without the headache.\"",
      name: "Oloroton Peter",
      company: "Acme NFR",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      text:
        "\"Slim Finance gave us the infrastructure we'd been missing. Setting up savings products and managing user wallets became seamless. We finally feel like we're operating at the level of a tier-one bank — without the headache.\"",
      name: "Oloroton Peter",
      company: "Acme NFR",
      image: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 3,
      text:
        '"The platform has revolutionized how we handle financial operations. The API integration was smooth and the support team was incredible throughout the process."',
      name: "Sarah Johnson",
      company: "FinTech Pro",
      image: "https://i.pravatar.cc/150?img=45"
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <p style={styles.label}>TESTIMONIALS</p>
        <h1 style={styles.title}>What Our Users Are Saying</h1>
        <p style={styles.subtitle}>
          See how businesses are transforming their financial operations with
          Slim
          <br />
          Finance infrastructure and building better products faster
        </p>

        <div style={styles.carousel}>
          <div style={styles.track}>
            {testimonials.map(testimonial => (
              <div key={`first-${testimonial.id}`} style={styles.card}>
                <p style={styles.text}>{testimonial.text}</p>

                <div style={styles.footer}>
                  <div style={styles.userInfo}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={styles.avatar}
                    />
                    <div style={styles.userDetails}>
                      <p style={styles.userName}>{testimonial.name}</p>
                      <p style={styles.userCompany}>{testimonial.company}</p>
                    </div>
                  </div>

                  <div style={styles.rating}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        size={16}
                        fill="#ff8c00"
                        color="#ff8c00"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {testimonials.map(testimonial => (
              <div key={`second-${testimonial.id}`} style={styles.card}>
                <p style={styles.text}>{testimonial.text}</p>

                <div style={styles.footer}>
                  <div style={styles.userInfo}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={styles.avatar}
                    />
                    <div style={styles.userDetails}>
                      <p style={styles.userName}>{testimonial.name}</p>
                      <p style={styles.userCompany}>{testimonial.company}</p>
                    </div>
                  </div>

                  <div style={styles.rating}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        size={16}
                        fill="#ff8c00"
                        color="#ff8c00"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
    maxWidth: "1400px",
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
  subtitle: {
    textAlign: "center",
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.6",
    marginBottom: "60px"
  },
  carousel: {
    position: "relative",
    overflow: "hidden",
    padding: "20px 0",
    width: "100%"
  },
  track: {
    display: "flex",
    gap: "24px",
    animation: "scroll 20s linear infinite",
    width: "max-content"
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "32px",
    flexShrink: 0,
    width: "450px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#333333",
    marginBottom: "28px",
    minHeight: "120px"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    borderTop: "1px solid #f3f4f6"
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  userName: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1a1a1a",
    margin: 0
  },
  userCompany: {
    fontSize: "13px",
    color: "#666666",
    margin: 0
  },
  rating: {
    display: "flex",
    gap: "4px"
  }
};

export default Testimonial;
