import React from 'react';

// Inline CSS within the JavaScript file
const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f4f4f9',
    padding: '20px',
    position: 'relative',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: '10px 20px',
    borderRadius: '12px',
    border: '2px solid #ccc',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '120px',
    marginRight: '10px',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    padding: '8px 16px',
    margin: '0 10px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  active: {
    color: '#008241',
  },
  navLinkHover: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  title: {
    backgroundColor: '#e0e0e0',
    border: '2px solid #ccc',
    padding: '5px 20px',
    borderRadius: '18px',
    marginBottom: '20px',
    display: 'inline-block',
  },
  footer: {
    marginTop: '15px',
    padding: '5px',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    borderRadius: '18px',
    border: '2px solid #ccc',
    fontSize: '18px',
    marginLeft: '200px',
    marginRight: '200px',
  },
  contactButton: {
    backgroundColor: '#008241',
    border: 'none',
    padding: '10px 20px',
    fontSize: '20px',
    borderRadius: '25px',
    cursor: 'pointer',
  },
  contactButtonHover: {
    backgroundColor: '#006b34',
  },
  batteryList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  batteryCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '240px',
    textAlign: 'left',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  batteryCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  batteryCardTitle: {
    color: '#333',
    fontSize: '1.4em',
    marginBottom: '30px',
  },
  batteryCardText: {
    color: '#555',
    margin: '8px 0',
    fontSize: '1em',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  button: {
    backgroundColor: '#008241',
    border: 'none',
    color: 'white',
    padding: '12px 24px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#006b34',
    transform: 'translateY(-2px)',
  },
  backButton: {
    position: 'absolute',
    top: '190px',
    left: '40px',
    backgroundColor: '#ffffff',
    border: '2px solid #000000',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  backButtonBefore: {
    content: "''",
    display: 'block',
    width: '10px',
    height: '10px',
    borderTop: '2px solid #000000',
    borderLeft: '2px solid #000000',
    transform: 'rotate(-45deg)',
  },
  backButtonHover: {
    backgroundColor: '#f0f0f0',
  },
};

// Sample battery data
const batteries = [
  { type: 'Lithium-Ion', power: 100, price: 1500, industry: 'Automobile' },
  { type: 'Nickel-Metal Hydride', power: 80, price: 1200, industry: 'Électronique' },
  { type: 'Plomb-Acide', power: 50, price: 600, industry: 'Énergie Solaire' },
  { type: 'Lithium-Polymère', power: 120, price: 1800, industry: 'Aéronautique' },
  { type: 'Sodium-Soufre', power: 90, price: 1350, industry: 'Stockage Stationnaire' },
  { type: 'Nickel-Cadmium', power: 70, price: 1050, industry: 'Équipement Médical' },
  { type: 'Zinc-Air', power: 60, price: 900, industry: 'Appareils Auditifs' },
  { type: 'Nickel-Zinc', power: 110, price: 1650, industry: 'Véhicules Électriques' },
];

// Battery Card Component
const BatteryCard = ({ battery }) => {
  return (
    <div style={styles.batteryCard}>
      <h3 style={styles.batteryCardTitle}>{battery.type}</h3>
      <p style={styles.batteryCardText}>Power: {battery.power} kWh</p>
      <p style={styles.batteryCardText}>Price: ${battery.price}</p>
      <p style={styles.batteryCardText}>Industry: {battery.industry}</p>
    </div>
  );
};

const App = () => {
  return (
    <div style={styles.app}>
      <header>
        <button style={styles.backButton}></button>
        <nav style={styles.navbar}>
          <div style={styles.logo}>
            <img src="logo.png" alt="logo" style={styles.logoImg} />
          </div>
          <div style={styles.navLinks}>
            <a href="#" style={styles.navLink} className="active">
              Home
            </a>
            <a href="#" style={styles.navLink}>
              About Us
            </a>
            <a href="#" style={styles.navLink}>
              Subscribe
            </a>
            <a href="#" style={styles.navLink}>
              Profile
            </a>
            <a href="#" style={styles.navLink}>
              ?
            </a>
          </div>
        </nav>
      </header>
      <main>
        <h1 style={styles.title}>Energy Transaction</h1>
        <div style={styles.batteryList}>
          {batteries.map((battery, index) => (
            <BatteryCard key={index} battery={battery} />
          ))}
        </div>
      </main>
      <footer style={styles.footer}>
        <button style={styles.contactButton}>Contact Us</button>
      </footer>
    </div>
  );
};

export default App;
