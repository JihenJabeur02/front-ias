import React from 'react';
import logo from './logo.svg';

function App() {
  const data = [
    { industryName: 'Industry 1', industryId: 111, industryCode: 'indus1', industryLocation: 'Location 1' },
    { industryName: 'Industry 2', industryId: 222, industryCode: 'indus2', industryLocation: 'Location 2' },
    { industryName: 'Industry 3', industryId: 333, industryCode: 'indus3', industryLocation: 'Location 3' },
    { industryName: 'Industry 4', industryId: 444, industryCode: 'indus4', industryLocation: 'Location 4' },
    { industryName: 'Industry 5', industryId: 555, industryCode: 'indus5', industryLocation: 'Location 5' },
  ];

  const styles = {
    app: {
      textAlign: 'center',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: '#fff',
      padding: '20px',
      position: 'center',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'white',
      backgroundColor: 'white',
      width: '98%',
      border: 'black solid',
      borderRadius: '10px',
      margin: '20px',
      height: '50px',
      position: 'fixed',
      top: '0px',
      left: '2px',
      marginLeft: '10px',
    },
    navbarLeft: {
      marginRight: '40px',
    },
    navbarLeftImg: {
      height: '150px',
      width: '150px',
      paddingTop: '15px',
    },
    navbarRight: {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
    },
    navbarRightLi: {
      marginRight: '100px',
      fontWeight: 'bold',
    },
    navbarRightA: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    backButton: {
      textDecoration: 'none',
      color: '#000000',
      fontSize: '20px',
      marginBottom: '20px',
      textAlign: 'left',
      marginTop: '250px',
    },
    profileImage: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: '#ccc',
      marginBottom: '20px',
      marginTop: '100px',
      textAlign: 'center',
      marginLeft: '46%',
      display: 'flex',
    },
    searchBar: {
      display: 'flex',
      paddingBottom: '20px',
      paddingTop: '20px',
      paddingRight: '45%',
      paddingLeft: '45%',
      borderRadius: '50px',
    },
    searchBarInput: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRight: 'none',
    },
    searchBarButton: {
      padding: '10px',
      border: '1px solid #ddd',
      borderLeft: 'none',
      backgroundColor: '#fff',
      cursor: 'pointer',
      color: '#333',
    },
    linedTable: {
      borderCollapse: 'collapse',
      width: '100%',
      border: '1px solid #000',
      backgroundColor: '#f0d993',
    },
    linedTableThTd: {
      border: '1px solid #000',
      padding: '8px',
      textAlign: 'left',
      backgroundColor: '#f0d993',
    },
    contactUsButton: {
      paddingBottom: '20px',
      paddingTop: '20px',
      paddingRight: '45%',
      paddingLeft: '45%',
      backgroundColor: '#008241',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '50px',
      position: 'fixed',
      bottom: '10px',
      left: '30px',
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img src="./logo.png" alt="IndoCon Logo" style={styles.navbarLeftImg} />
        </div>
        <div style={styles.navbarRight}>
          <ul>
            <li style={styles.navbarRightLi}><a href="/" style={styles.navbarRightA}>HOME</a></li>
            <li style={styles.navbarRightLi}><a href="/about" style={styles.navbarRightA}>About Us</a></li>
            <li style={styles.navbarRightLi}><a href="/subscribe" style={styles.navbarRightA}>Subscribe</a></li>
            <li style={styles.navbarRightLi}>
              <a href="/profile">
                <img src="./profile.png" alt="Profile" />
              </a>
            </li>
            <li style={styles.navbarRightLi}>
              <a href="/notifications">
                <img src="./notification.png" alt="Notifications" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main style={{ padding: '20px' }}>
        <a href="/" style={styles.backButton}>←</a>
        <div style={styles.profileImage}></div>
        <h2>Industries</h2>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Search......................................." style={styles.searchBarInput} />
          <button style={styles.searchBarButton}><i className="fa fa-search"></i><img src='./search.png' alt="search icon" /></button>
        </div>

        <table style={styles.linedTable}>
          <thead>
            <tr>
              <th style={styles.linedTableThTd}>Industryname</th>
              <th style={styles.linedTableThTd}>Industryid</th>
              <th style={styles.linedTableThTd}>IndustryCode</th>
              <th style={styles.linedTableThTd}>IndustryLocation</th>
              <th style={styles.linedTableThTd}>Products</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={styles.linedTableThTd}>{item.industryName}</td>
                <td style={styles.linedTableThTd}>{item.industryId}</td>
                <td style={styles.linedTableThTd}>{item.industryCode}</td>
                <td style={styles.linedTableThTd}>{item.industryLocation}</td>
                <td style={styles.linedTableThTd}><button>Products</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <button style={styles.contactUsButton}>Contact Us</button>
      </footer>
    </div>
  );
}

export default App;
