import { useState } from "react";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }



  return (
    <ThemeProvider theme={theme}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: darkMode 
          ? 'radiogradient(circle, #1e3aBa, #111B27)' 
          : 'radiogradient(circle, #baecf9, #f0f9ff)',

        }}
      >
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
