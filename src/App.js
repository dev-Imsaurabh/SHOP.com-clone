import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from './pages/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box className="App">

      <Navbar />
      <AllRoutes />
      <Footer />
      
    </Box>
  );
}

export default App;
