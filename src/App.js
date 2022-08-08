import { 
  ChakraProvider, 
  extendTheme, 
} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DesktopNav from './DesktopNav';
import Home from './Home';
import Work from './Work';
import Design from './Design';
import About from './About';

const theme = extendTheme({
  fonts: {
    heading: `'Fjalla One', sans-serif`,
  },
  colors: {
    brand: {
      100: "#2c211b",

    },
  },
  styles: {
    global: {
      body: {
        color: '#2c211b',
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <DesktopNav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="work" element={<Work />}/>
          <Route path="design" element={<Design />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
