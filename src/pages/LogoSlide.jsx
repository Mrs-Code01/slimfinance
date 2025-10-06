import React from "react";

export default function LogoSlide() {
  const styles = {
    container: {
      width: "100%",
      backgroundColor: "#ffffff",
      padding: "40px 0",
      overflow: "hidden"
    },
    heading: {
      textAlign: "center",
      fontSize: "14px",
      color: "#666",
      marginBottom: "30px",
      fontWeight: "400",
      letterSpacing: "0.3px"
    },
    sliderWrapper: {
      position: "relative",
      width: "100%",
      overflow: "hidden"
    },
    sliderTrack: {
      display: "flex",
      width: "fit-content",
      animation: "scroll 20s linear infinite"
    },
    logoItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 60px",
      flexShrink: 0
    },
    logo: {
      height: "50px",
      width: "120px",
      objectFit: "contain",
      // filter: "grayscale(100%)",
      // opacity: 0.7,
      transition: "all 0.3s ease"
    }
  };

  const logos = [
    {
      name: "Mainstreet",
      url: "/images/logo1.png"
    },
    {
      name: "MARS",
      url: "/images/logo2.png"
    },
    {
      name: "GTI",
      url: "/images/logo3.png"
    },
    {
      name: "Nativeland",
      url: "/images/logo4.png"
    },
    {
      name: "Slim Pay",
      url: "/images/logo5.png"
    },
    {
      name: "AGRIC",
      url: "/images/logo6.png"
    }
  ];

  const styleSheet = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .logo-item:hover img {
      transform: scale(1.05);
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <div style={styles.container}>
        <p style={styles.heading}>
          We are powering the world's leading team, from next generation start
          ups to business enterprises
        </p>

        <div style={styles.sliderWrapper}>
          <div style={styles.sliderTrack}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="logo-item"
                style={styles.logoItem}
              >
                <img src={logo.url} alt={logo.name} style={styles.logo} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="logo-item"
                style={styles.logoItem}
              >
                <img src={logo.url} alt={logo.name} style={styles.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
