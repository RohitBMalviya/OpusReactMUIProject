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
          height: "600px",
          justifyContent: "center",
        }}
      >
        <Box
          display={{ xs: "contents", md: "flex" }}
          justifyContent={"space-around"}
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
              letterSpacing: "1.5px",
              margin: 1,
              mt: 5,
            }}
          >
            Ways to work with us
          </Typography>
          <Button variant="contained" sx={{ mt: 5 }}>
            Get Started
          </Button>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          sx={{ justifyContent: "center" }}
          width={"100%"}
        >
          {Blog.map((items, index) => (
            <Grid key={index}>
              <Box ml={20}>
                <img
                  src={items.image}
                  alt={items.title}
                  style={{ width: "50%", marginLeft: "5%" }}
                />

                <Typography
                  width={"100%"}
                  sx={{
                    color: " #FFF",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "20 px" /* 200% */,
                    letterSpacing: "1.5px",
                    margin: 1,
                  }}
                >
                  {items.header}
                </Typography>
                <Typography
                  width={"50%"}
                  sx={{
                    color: " #B6BCCE",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "25px" /* 200% */,
                    letterSpacing: "1.5px",
                    margin: 1,
                  }}
                >
                  {items.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default Section5;
