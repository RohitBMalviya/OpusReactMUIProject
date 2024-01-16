import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import React from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";

function Section2() {
  return (
    <>
      <Box>
        <Stack>
          <Typography>VIDEO TITLE</Typography>
          <Typography>Inform users with video sections</Typography>
          <Box>
            <video src="">Video</video>
          </Box>
          <Typography width={"50%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
            lectus dapibus, a pulvinar mauris aliquam.
          </Typography>
        </Stack>
      </Box>
      <Box display={"flex"}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Grid>
            <Grid>
              <Typography>Make your site better with Opus</Typography>
            </Grid>
            <Grid>
              <Typography width={"50%"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </Typography>
            </Grid>
            <Button>Learn More</Button>
          </Grid>
          <Grid>
            <Box display={"flex"}>
              <IconButton>
                <ArrowOutwardRoundedIcon />
              </IconButton>
              <Box>
                <Typography>Build or Customize a Website in Minutes</Typography>
              </Box>
            </Box>
            <Grid>
              <Box display={"flex"}>
                <IconButton>
                  <ParkRoundedIcon />
                </IconButton>
                <Box>
                  <Typography>Our UI Kit was made for creativity.</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box sx={{ background: "black" }}>Divider</Box>
    </>
  );
}

export default Section2;
