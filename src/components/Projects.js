import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const projects = [
  {
    title: "Proshop",
    description: "Proshop is a Demo for a white-label e-commerce platform.",
    image: "/image/proshop.jpeg",
    link: "https://proshop-alzt.onrender.com/",
    github: "https://github.com/Dantris/proshop-demo",
  },
  {
    title: "MyFlix React",
    description:
      "MyFlix is a movie database app built with React incl. Backend.",
    image: "/image/movrea.jpeg",
    link: "https://flourishing-sopapillas-8c4f40.netlify.app/login",
    github: "https://github.com/Dantris/cf-3-myflix",
  },
  {
    title: "MyFlix Angular",
    description:
      "MyFlix is a movie database app built with Angular incl. Backend.",
    image: "/image/movang.jpeg",
    link: "#",
    github: "https://github.com/Dantris/myFlix-Angular-client",
  },
];

const Projects = () => {
  return (
    <Container id="projects" style={{ padding: "50px 0", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" width="100%">
                  <Button size="small" color="primary" href={project.link}>
                    View Project
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" width="100%" mt={1}>
                  <Button
                    size="small"
                    color="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
