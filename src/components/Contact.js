import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Container id="contact" style={{ padding: "50px 0", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out to me via LinkedIn!
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/adrian-dever-1068b8295/" // Replace with your LinkedIn profile URL
          target="_blank"
          startIcon={<LinkedInIcon />} // Adds LinkedIn icon
          size="large"
        >
          Connect on LinkedIn
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
