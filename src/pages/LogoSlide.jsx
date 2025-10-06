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
      width: "auto",
      objectFit: "contain",
      filter: "grayscale(100%)",
      opacity: 0.7,
      transition: "all 0.3s ease"
    }
  };

  const logos = [
    {
      name: "Mainstreet",
      url: "https://logo.clearbit.com/mainstreet.com"
    },
    {
      name: "MARS",
      url: "https://logo.clearbit.com/mars.com"
    },
    {
      name: "GTI",
      url: "https://logo.clearbit.com/gti.com"
    },
    {
      name: "Nativeland",
      url: "https://logo.clearbit.com/nativeland.com"
    },
    {
      name: "Slim Pay",
      url: "https://logo.clearbit.com/stripe.com"
    },
    {
      name: "AGRIC",
      url: "https://logo.clearbit.com/agriculture.com"
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
      filter: grayscale(0%) !important;
      opacity: 1 !important;
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
