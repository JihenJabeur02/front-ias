import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// App Component
function App() {
  const [data,setData]=useState({})
  
  const add=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/industries/add',data).then(r=>
      window.location='http://localhost:3000/login'
      // navigate('/login')
    ).catch(err=>console.log(err))
  }
  const handleChange=(e)=>{
    const {value,name}=e.target
    setData((prev)=>{return{
      ...prev,
      [name]:value
    }})
  }
  return (
    <div className="App" style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>IndioCon</div>
        <nav>
          <ul style={styles.nav}>
            <li><a href="/" style={styles.navItem}>HOME</a></li>
            <li><a href="/about" style={styles.navItem}>About Us</a></li>
            <li><a href="/subscribe" style={styles.navItem}>Subscribe</a></li>
            <li><a href="/profile" style={styles.navItem}>👤</a></li>
          </ul>
        </nav>
      </header>
      <main style={styles.main}>
        <div style={styles.formContainer}>
          <h2>Sign In</h2>
          <form>
            <label>
              IndustryName:
              <input 
              onChange={(e)=>handleChange(e)}
              type="text" name="IndustryName" placeholder="Enter industry name" style={styles.input} />
            </label>
           
            <label>
              IndustryCode:
              <input 
              onChange={(e)=>handleChange(e)}
              
              type="text" name="IndustryCode" placeholder="Enter industry code" style={styles.input} />
            </label>
            <label>
              Email:
              <input 
              onChange={(e)=>handleChange(e)}
              
              type="text" name="Email" placeholder="Enter email" style={styles.input} />
            </label>
            <label>
              Password:
              <input
              onChange={(e)=>handleChange(e)}
               type="password" name="Password" placeholder="Enter password" style={styles.input} />
            </label>
            <button 
            onClick={(e)=>{add(e);}}
            style={styles.submitBtn}>Submit</button>
          </form>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </main>
      <footer style={styles.footer}>
        <p>© 2024 IndioCon. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Inline styles object
const styles = {
  app: {
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
  },
  logo: { fontSize: '24px', fontWeight: 'bold' },
  nav: { display: 'flex', listStyle: 'none' },
  navItem: {
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  },
  main: { padding: '20px' },
  formContainer: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: "#cc4545",
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  contactBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: "#008241",
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  footer: { textAlign: 'center', padding: '10px', backgroundColor: '#f5f5f5' },
};

// Rendering the app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
