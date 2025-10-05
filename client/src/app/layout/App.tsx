import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
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

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Catalog
            products={products}
            addProduct={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
