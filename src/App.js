import './App.css';
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from './components'
import { Home, SingleProduct, Cart, Checkout, Error, About,Products,PrivateRoute } from './pages/index';
import { Route, Router, Routes } from 'react-router-dom';

const Button = styled.button`
background: green;
color: white;
`
const Container = styled.div`
background: red;
color: white;
.hero{
  font-size: 8rem;
}
`

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products' element={<Products/>}>
          <Route path='products/:id' element={<SingleProduct/>} />
      </Route>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/private' element={<PrivateRoute/>}/>
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
