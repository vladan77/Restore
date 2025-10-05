import { DarkMode, LightMode } from "@mui/icons-material";
import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function NavBar({toggleDarkMode, darkMode}: Props) {
  return (
   <AppBar position="fixed">
    <Toolbar>
        <Typography variant="h6" component="div">
            Re-Store
        </Typography>
        <IconButton onClick={toggleDarkMode}>
            {darkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}}/>}
        </IconButton>
    </Toolbar>
   </AppBar>
  )
}