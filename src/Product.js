import React from "react";
import logo from "./logo.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 2px solid #ccc;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const LogoText = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const LogoSmall = styled.small`
  font-size: 12px;
  color: #666;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const HeaderTop = styled.div`
  display: flex;
  gap: 2rem;
`;

const Profile = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const CircleIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const AddButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const ProductTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #f4b183;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const EmptyRow = styled.tr`
  text-align: center;
  font-style: italic;
  color: #999;
`;

const Footer = styled.footer`
  margin-top: 20px;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #34c759;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Logo>
          <img src={logo} width="100rem" alt="Logo" />
        </Logo>
        <HeaderTop>
          <Nav>
            <a href="#">HOME</a>
            <a href="#">About Us</a>
            <a href="#">Subscribe</a>
          </Nav>

          <Profile>
            <button>👤</button>
            <button>❓</button>
          </Profile>
        </HeaderTop>
      </Header>

      {/* Main Content */}
      <main>
        {/* Back Button */}
        <button className="back-button">←</button>

        {/* Title Section */}
        <Title>
          <CircleIcon></CircleIcon>
          <h1>Products</h1>
        </Title>

        {/* Search Section */}
        <SearchBar>
          <SearchInput type="text" placeholder="Search..." />
          <SearchButton>🔍</SearchButton>
          <AddButton>Add</AddButton>
        </SearchBar>

        {/* Table Section */}
        <ProductTable>
          <thead>
            <tr>
              <TableHeader>Productname</TableHeader>
              <TableHeader>Productid</TableHeader>
              <TableHeader>ProductCode</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Buy</TableHeader>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows */}
            {[...Array(3)].map((_, index) => (
              <tr key={index}>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData>
                  <AddButton>+</AddButton>
                </TableData>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      </main>

      {/* Footer Section */}
      <Footer>
        <ContactButton>Contact Us</ContactButton>
      </Footer>
    </Container>
  );
}

export default App;
