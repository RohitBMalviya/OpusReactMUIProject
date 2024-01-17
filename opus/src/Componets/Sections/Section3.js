import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import image3 from "../Images/Image3.png";
function Section5() {
  const Blog = [
    {
      image: image3,
      title: "Image",
      header: "Project Management",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.",
    },
    {
      image: image3,
      title: "Image",
      header: "Advanced Analytics",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.",
    },
    {
      image: image3,
      title: "Image",
      header: "Marketing & Dashboard",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          background: "#061237",
          height: "650px",
          justifyContent: "center",
        }}
      >
        <Box
          display={{ xs: "contents", md: "flex" }}
          justifyContent={"space-evenly"}
          mb={4}
        >
          <Typography
            sx={{
              color: " #FFF",
              fontFamily: "Inter",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "56px" /* 200% */,
              letterSpacing: "0.5px",
              margin: 1,
              mt: 5,
              mb: 5,
            }}
          >
            Ways to work with us
          </Typography>
          <Button variant="contained" sx={{ mt: 5, mb: 5, mr: 15 }}>
            Get Started
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            width={"70%"}
          >
            {Blog.map((items, index) => (
              <Grid container key={index}>
                <Box>
                  <img
                    src={items.image}
                    alt={items.title}
                    style={{ width: "80%" }}
                  />

                  <Typography
                    width={"60%"}
                    sx={{
                      color: " #FFF",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "20 px" /* 200% */,
                      letterSpacing: "1.5px",
                    }}
                  >
                    {items.header}
                  </Typography>
                  <Typography
                    width={"90%"}
                    sx={{
                      color: " #B6BCCE",
                      fontFamily: "Inter",
                      fontSize: "11px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "25px" /* 200% */,
                      letterSpacing: "1.0px",
                    }}
                  >
                    {items.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Section5;
