import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        padding: "20px",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Adrian Dever. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
