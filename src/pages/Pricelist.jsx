import React from 'react';
import { Check } from 'lucide-react';

const Pricelist = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      price: '0',
      period: '/Month',
      description: 'For individuals and startups just getting started',
      buttonText: 'Get Started',
      buttonClass: 'btn-outline',
      includes: 'Whats included',
      popular: false,
      features: [
        'Fintech Product (e.g. Savings or Wallets)',
        'Basic Dashboard & Analytics',
        'Email Notifications',
        'Slack Teams Customization or Templates',
        'Business Support',
        'Basic Office Administration'
      ]
    },
    {
      id: 2,
      name: 'Pro',
      price: '300',
      period: '/Month',
      description: 'For growing teams and small businesses',
      buttonText: 'Get Started',
      buttonClass: 'btn-white',
      includes: 'All Starter Features and...',
      popular: true,
      badge: 'Best choice',
      features: [
        'Advanced Analytics Dashboard',
        'Branch Design if approved',
        'Expanded Mobile/Mobile & Mobile App',
        'Ledger/SubLedger & Management',
        'Up to 500 Customers',
        'White Channel Customization for MyProduct',
        'Fraud Detection & Prevention',
        'Workflows, policies and Process/custom',
        'Multi-Office/Branch deployment'
      ]
    },
    {
      id: 3,
      name: 'Business',
      price: '600',
      period: '/Month',
      description: 'For large teams and more advanced needs',
      buttonText: 'Get Started',
      buttonClass: 'btn-outline',
      includes: 'All Pro features and...',
      popular: false,
      features: [
        'Full Dashboard and Analytics',
        'Branch Setups/Unlimited',
        'Fraud Detection/Lock',
        'Unlimited customers',
        'Real-Time Agent Customization (All API interaction)',
        'Mobile Customization (Both web/android app)',
        'Premium Support 24/7',
        'Unlimited Black/Office Access',
        'Rapid Onboarding (unlimited & Formal Management)'
      ]
    },
    {
      id: 4,
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations and enterprises',
      buttonText: 'Get Started',
      buttonClass: 'btn-outline',
      includes: 'All features in Business and More...',
      popular: false,
      features: [
        'Full Dashboard and Analytics',
        'Report/Data/Unlimited',
        'All Payment Products',
        'Custom integrations/EFTI/CIBS',
        'Custom Onyx channels setup',
        'API Party Integrations',
        '24/7 support across channels',
        'International Branch Setup'
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Transparent Pricing</h1>
        <p style={styles.subtitle}>
          Slim finance provides flexible pricing for all your infrastructure, 
          banking as a service, ledger suite,<br />
          channels, tools, development services, Back office features, Value added services, special<br />
          integrations, Platform service pricing, support, advisory, compliance.
        </p>

        <div style={styles.cards}>
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              style={{
                ...styles.card,
                ...(plan.popular ? styles.cardPopular : {})
              }}
            >
              {plan.badge && (
                <div style={styles.badge}>{plan.badge}</div>
              )}
              
              <div style={styles.header}>
                <h3 style={{
                  ...styles.planName,
                  ...(plan.popular ? styles.planNamePopular : {})
                }}>{plan.name}</h3>
                <div style={styles.price}>
                  <span style={{
                    ...styles.currency,
                    ...(plan.popular ? styles.textWhite : {})
                  }}>?</span>
                  <span style={{
                    ...styles.amount,
                    ...(plan.popular ? styles.textWhite : {})
                  }}>{plan.price}</span>
                  <span style={{
                    ...styles.period,
                    ...(plan.popular ? styles.periodWhite : {})
                  }}>{plan.period}</span>
                </div>
                <p style={{
                  ...styles.description,
                  ...(plan.popular ? styles.descriptionWhite : {})
                }}>{plan.description}</p>
              </div>

              <button style={{
                ...styles.button,
                ...(plan.buttonClass === 'btn-white' ? styles.btnWhite : styles.btnOutline)
              }}>
                {plan.buttonText}
              </button>

              <div style={styles.featuresSection}>
                <p style={{
                  ...styles.featuresHeader,
                  ...(plan.popular ? styles.textWhite : {})
                }}>{plan.includes}</p>
                <ul style={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={styles.featureItem}>
                      <Check 
                        size={16} 
                        style={{
                          ...styles.checkIcon,
                          ...(plan.popular ? styles.checkWhite : {})
                        }} 
                      />
                      <span style={{
                        ...styles.featureText,
                        ...(plan.popular ? styles.textWhite : {})
                      }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f9fafb',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
  },
  content: {
    maxWidth: '1400px',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '16px',
    letterSpacing: '-1px'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#666666',
    lineHeight: '1.7',
    marginBottom: '60px'
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    marginBottom: '40px'
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '32px 24px',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column'
  },
  cardPopular: {
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    border: 'none'
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
    color: '#ffffff',
    padding: '6px 20px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  header: {
    marginBottom: '24px'
  },
  planName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#4f46e5',
    marginBottom: '16px',
    textTransform: 'capitalize'
  },
  planNamePopular: {
    color: '#ffffff'
  },
  price: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '12px'
  },
  currency: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333333'
  },
  amount: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#1a1a1a',
    lineHeight: '1'
  },
  period: {
    fontSize: '16px',
    color: '#666666',
    marginLeft: '4px'
  },
  periodWhite: {
    color: 'rgba(255, 255, 255, 0.8)'
  },
  description: {
    fontSize: '13px',
    color: '#666666',
    lineHeight: '1.5'
  },
  descriptionWhite: {
    color: 'rgba(255, 255, 255, 0.9)'
  },
  button: {
    width: '100%',
    padding: '14px 24px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '28px'
  },
  btnOutline: {
    background: 'transparent',
    border: '2px solid #4f46e5',
    color: '#4f46e5'
  },
  btnWhite: {
    background: '#ffffff',
    border: '2px solid #ffffff',
    color: '#4f46e5'
  },
  featuresSection: {
    flex: 1
  },
  featuresHeader: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e7eb'
  },
  featuresList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: 0,
    margin: 0
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px'
  },
  featureText: {
    fontSize: '13px',
    color: '#555555',
    lineHeight: '1.5'
  },
  checkIcon: {
    flexShrink: 0,
    color: '#4f46e5',
    marginTop: '2px'
  },
  checkWhite: {
    color: '#ffffff'
  },
  textWhite: {
    color: '#ffffff'
  }
};

export default Pricelist;