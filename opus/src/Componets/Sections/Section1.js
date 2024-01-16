import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Section1() {
  const Logo = [
    {
      Logo: "url",
    },
    {
      Logo: "url",
    },
    {
      Logo: "url",
    },
    {
      Logo: "url",
    },
  ];
  const Info = [
    {
      info: "99.95%",
      desc: "Accuracy Rate",
      order: "in fulfilling orders",
    },
    {
      info: "5,000+",
      desc: "Ecommerce businesses",
      order: "partner with Opus",
    },
    {
      info: "99.96%",
      desc: "Of orders ship on time",
      order: "within SLA",
    },
    {
      info: "#1",
      desc: "Best Fulfillment Technology",
      order: "by AdWeek’s Retail Awards",
    },
  ];
  return (
    <>
      <Box sx={{ background: "darkblue", height: "600px" }}>Section1</Box>
      <Box>
        <Typography>
          Trusted and loved by the world<sup>'</sup>s best teams
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }}>
          {Logo.map((items, index) => (
            <Grid key={index}>
              <img src={items.Logo} alt="logo" />
            </Grid>
          ))}
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }}>
          {Info.map((items, index) => (
            <Grid key={index}>
              <Typography>{items.info}</Typography>
              <Typography>{items.desc}</Typography>
              <Typography>{items.order}</Typography>
            </Grid>
          ))}
        </Stack>
      </Box>
      <Box sx={{ background: "black" }}>Divider</Box>
    </>
  );
}

export default Section1;
