import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
} from "@mui/material";

const profileImageUrl = "/image/ad.jpeg"; // Path from the public folder

const LandingPage = () => {
  return (
    <Container maxWidth="lg" style={{ padding: "100px 0" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left side with text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom align="left">
            Hello, I'm Adrian Dever
          </Typography>
          <Typography variant="h5" gutterBottom align="left">
            A passionate full-stack developer.
          </Typography>
          <Box mt={4} display="flex" justifyContent="left">
            <Button variant="contained" color="primary" href="#projects">
              See My Projects
            </Button>
          </Box>
        </Grid>

        {/* Right side with circular image */}
        <Grid item xs={12} md={6} container justifyContent="center">
          <Avatar
            alt="Your Name"
            src={profileImageUrl}
            sx={{ width: 250, height: 250 }} // Adjust the size of the circle here
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
