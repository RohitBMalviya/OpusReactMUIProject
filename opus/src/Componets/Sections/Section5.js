import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../Componets/Images/Image1.png";

function Section5() {
  const Article = [
    {
      image: Image,
      title: "Image",
      header: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
      button: "Read Article",
    },
    {
      image: Image,
      title: "Image",
      header: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
      button: "Read Article",
    },
    {
      image: Image,
      title: "Image",
      header: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
      button: "Read Article",
    },
  ];
  return (
    <>
      <Box margin={5}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: " #061237",
              fontFamily: "Inter",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "56px" /* 200% */,
              letterSpacing: "1.5px",

              margin: 1,
              marginLeft: 10,
            }}
          >
            Resources
          </Typography>
          <Button variant="contained" size="small" sx={{ marginRight: 50 }}>
            Get Started
          </Button>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          margin={4}
          justifyContent={"space-around"}
        >
          {Article.map((items, index) => (
            <Grid key={index}>
              <img
                src={items.image}
                alt={items.title}
                style={{ margin: 2, width: "60%", height: "50%" }}
              />
              <Typography
                sx={{
                  color: " #061237",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "25px" /* 200% */,
                  letterSpacing: "1.5px",

                  width: "60%",
                }}
              >
                {items.header}
              </Typography>
              <Typography
                sx={{
                  color: " #37456C",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "20px" /* 200% */,
                  letterSpacing: "1.5px",

                  width: "50%",
                }}
              >
                {items.desc}
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{ color: "rgba(247, 249, 252, 1)", marginTop: 5 }}
              >
                {items.button}
              </Button>
            </Grid>
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default Section5;
