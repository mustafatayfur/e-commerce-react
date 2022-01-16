import './App.css';
import styled from 'styled-components'

import { Home, SingleProduct, Cart, Checkout, Error, About,Products,PrivateRoute } from './pages';

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
      
        <Home/>
    </Router>
  );
}

export default App;
