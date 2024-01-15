import { Box } from "@mui/material";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import Section1 from "./Componets/Sections/Section1.js";
import Section2 from "./Componets/Sections/Section2.js";
import Section3 from "./Componets/Sections/Section3.js";
import Section4 from "./Componets/Sections/Section3.js";
import Section5 from "./Componets/Sections/Section3.js";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </Box>
    </>
  );
}

export default App;
