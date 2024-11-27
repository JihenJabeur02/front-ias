import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const AboutUsPage = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  width: 100%;
`;

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: white;
  background-color: white;
  width: 98%;
  border: black solid;
  border-radius: 10px;
  margin: 20px;
  height: 50px;
  position: fixed;
  top: 0px;
  left: 2px;
  margin-left: 10px;
`;

const NavbarLeft = styled.div`
  margin-right: 40px;
`;

const NavbarRight = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 100px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`;

const PageContent = styled.main`
  padding-left: 50px;
  background-color: white;
  position: fixed;
  top: 100px;
  left: 0px;
  right: 0px;
`;

const BackButton = styled.div`
  a {
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const PageFooter = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

const ContactButton = styled.button`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 45%;
  padding-right: 45%;
  background-color: rgb(78, 146, 78);
  color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  bottom: 10px;
  left: 30px;
`;

const Input = styled.input`
  width: 50%;
  border: 5px;
`;

const Para1 = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-left: 50px;
`;

const Para2 = styled.div`
  display: flex;
  padding-left: 50px;
`;

const Zone1 = styled.input`
  width: 90%;
  border: 1px solid;
  margin-left: 80px;
  height: 110px;
`;

const Zone2 = styled.input`
  width: 90%;
  height: 110px;
  border: 10px solid;
  border-color: black;
  margin-left: 105px;
`;

const App = () => {
  return (
    <AboutUsPage>
      <Header/>
      <PageContent>
        <BackButton>
          <a href="/">←</a>
      
        </BackButton>
        <h1>About Us</h1>
        <Para1>
          <p>Describe the transport operation</p>
          <Zone1 type="text" placeholder="Entrez votre texte ici" />
        </Para1>
        <Para2>
          <p>Describe the energy operation</p>
          <Zone2 type="text" placeholder="Entrez votre texte ici" />
        </Para2>
        <PageFooter>
          <ContactButton>Contact Us</ContactButton>
        </PageFooter>
      </PageContent>
    </AboutUsPage>
  );
};

export default App;
