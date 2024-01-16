import { Box } from "@mui/material";
import Navbar from "./Componets/Navbar.js";
import Footer from "./Componets/Footer.js";

import Section1 from "./Componets/Sections/Section1.js";
import Section2 from "./Componets/Sections/Section2.js";
import Section3 from "./Componets/Sections/Section3.js";
import Section4 from "./Componets/Sections/Section4.js";
import Section5 from "./Componets/Sections/Section5.js";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Box>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
