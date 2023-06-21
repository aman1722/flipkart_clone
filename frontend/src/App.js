



// components import -------->
import Header from "./components/header/Header"
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Box style={{ marginTop : 54 }}>
        <Home />
      </Box>
    </ContextProvider>
  );
}

export default App;
