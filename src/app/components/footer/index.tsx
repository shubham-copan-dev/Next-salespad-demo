import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "20px", // Adjust margin as needed
    backgroundColor: "#f0f0f0", // Background color
    padding: "20px 0", // Padding for better visibility
    fontSize: "14px", // Adjust font size as needed
  };

  const poweredByStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: "#333", // Text color
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <p>
          Powered by <span style={poweredByStyle}>SalesBoost</span> &copy;
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
