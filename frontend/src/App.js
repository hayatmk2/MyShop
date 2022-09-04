import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen';

// arrow functions
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main claseName='py-3'>
        <Container>
          <Routes>
            <Route path= '/' element= {<HomeScreen/>}exact />
            <Route path='/product/:id' element={<ProductScreen/>} />
          </Routes>    
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
