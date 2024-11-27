import React from 'react';

const CartPage = () => {
  // Inline CSS styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
      height: '40px',
      marginRight: '10px',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    activeLink: {
      color: '#00b300',
    },
    cartContainer: {
      padding: '20px',
      textAlign: 'center',
    },
    cartIcon: {
      backgroundColor: '#d3d3d3',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      margin: '20px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
    },
    tableContainer: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    table: {
      borderCollapse: 'collapse',
      width: '80%',
    },
    tableHeader: {
      backgroundColor: '#f2c7a6',
      padding: '10px',
      border: '1px solid #dddddd',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #dddddd',
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#98da98',
      padding: '10px 20px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    cartStatusButton: {
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '15px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    indStatusButton: {
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '15px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    backButton: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      cursor: 'pointer',
      fontSize: '24px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <img src="logo.png" alt="Logo" style={styles.logoImage} />
          <span>Your Slogan Here</span>
        </div>
        <nav>
          <ul style={styles.navLinks}>
            <li style={{ ...styles.navItem, ...styles.activeLink }}>HOME</li>
            <li style={styles.navItem}>About Us</li>
            <li style={styles.navItem}>Subscribe</li>
          </ul>
        </nav>
        <div>
          <span>Profile Icon</span>
        </div>
      </header>

      {/* Back Button */}
      <div style={styles.backButton}>&larr;</div>

      {/* Cart Section */}
      <div style={styles.cartContainer}>
        <div style={styles.cartIcon}>
          <span>Cart</span>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>CartId</th>
                <th style={styles.tableHeader}>Road</th>
                <th style={styles.tableHeader}>DepartureDate</th>
                <th style={styles.tableHeader}>Arrival Date</th>
                <th style={styles.tableHeader}>CartStatus</th>
                <th style={styles.tableHeader}>IndStatus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>001</td>
                <td style={styles.tableCell}>Main Road</td>
                <td style={styles.tableCell}>01/01/2024</td>
                <td style={styles.tableCell}>02/01/2024</td>
                <td style={styles.tableCell}>
                  <button style={styles.cartStatusButton}>on the way / Stop</button>
                </td>
                <td style={styles.tableCell}>
                  <button style={styles.indStatusButton}>Requester / FullFiller</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Us Button */}
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Contact Us</button>
      </div>
    </div>
  );
};

export default CartPage;
