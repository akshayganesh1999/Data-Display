import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return (
    <>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">Countries</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cnt/:name' element={<Country/>}/>
      </Routes>
    </>
  )
}

export default App
