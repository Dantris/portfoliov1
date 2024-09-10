import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Container id="about" style={{ padding: "50px 0", textAlign: "center" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm Adrian, a passionate full-stack web developer with a keen
          interest in crafting highly responsive, scalable, and dynamic web and
          mobile applications. My journey in web development began with a
          curiosity about how the web works, which quickly turned into a
          full-fledged passion for building software that not only looks great
          but also performs well.
        </Typography>
        <Typography variant="body1" paragraph>
          I have experience in a variety of technologies that allow me to create
          end-to-end solutions, both for the web and mobile platforms. As a
          developer, I focus on delivering clean, maintainable code that can
          scale with growing business needs.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Technologies I Work With:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Frontend Development:</strong> React.js, HTML5, CSS3,
          JavaScript, Material UI, Redux, Responsive Design
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Backend Development:</strong> Node.js, Express.js, RESTful
          APIs, Authentication, Authorization
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Mobile Development:</strong> Flutter, React Native
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Database Management:</strong> MongoDB, MySQL, PostgreSQL
        </Typography>
        <Typography variant="body1" paragraph>
          I enjoy problem-solving and am always eager to learn and adopt the
          latest technologies. My goal is to create software solutions that are
          user-friendly, efficient, and reliable.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
