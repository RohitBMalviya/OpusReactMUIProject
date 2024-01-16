import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const Pages = ["Overview", "Pages", "Template"];
  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ background: "transparent" }}>
          <Toolbar
            sx={{ justifyContent: { xs: "space-between", md: "space-around" } }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
              }}
            >
              <img src="" alt="" />
              <Typography>Opus</Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "50%",
                justifyContent: "space-around",
              }}
            >
              {Pages.map((items, index) => (
                <Stack key={index}>
                  <Typography>{items}</Typography>
                </Stack>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button sx={{ color: "white" }}>Contact Us</Button>
            </Box>
            <MenuIcon sx={{ display: { md: "none" } }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
