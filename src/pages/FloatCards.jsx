import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../css/FloatCards.css";

const FloatCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const cards = [
    {
      badge: "THE FRUSTRATED PROFESSIONAL",
      title: "Built for finance professionals",
      description:
        "Launch your savings product, digital wallet, or lending platform with our financial infrastructure. Focus on strategy, not backend code.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
    },
    {
      badge: "THE STRATEGIC THINKER",
      title: "Built for teams who see finance as strategy, not just accounting",
      description:
        "Empower your finance team with tools that enable strategic decision-making and forward-thinking analysis at scale.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
    },
    {
      badge: "THE INNOVATIVE DRIVER",
      title: "Built for forward-thinking innovators",
      description:
        "Drive innovation with cutting-edge financial technology. Stay ahead of the curve with our advanced API and automation capabilities.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop"
    },
    {
      badge: "THE GROWTH CATALYST",
      title: "Built to scale with your ambitions",
      description:
        "From startup to enterprise, our platform grows with you. Handle millions of transactions with ease and confidence.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop"
    }
  ];

  return (
    <>
      <div className="app">
        <div className="hero">
          <p>WHO WE ARE (WHAT WE BUILD FOR)</p>
          <h1>Built for people who understands finance</h1>
        </div>

        <div ref={container} className="scroll-container">
          {cards.map((card, i) => {
            const targetScale = 1 - (cards.length - i) * 0.02;
            const range = [i * 0.25, 1];
            const scale = useTransform(scrollYProgress, range, [
              1,
              targetScale
            ]);
            const opacity = useTransform(scrollYProgress, range, [1, 0.98]);

            return (
              <div key={i} className="card-container">
                <motion.div
                  className="card"
                  style={{
                    scale: scale,
                    opacity: opacity,
                    top: `calc(${i * 25}px)`
                  }}
                >
                  <div className="card-left">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-image"
                    />
                  </div>
                  <div className="card-right">
                    <div className="card-badge">{card.badge}</div>
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-description">{card.description}</p>
                    <button className="card-button">Learn More</button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FloatCards;
