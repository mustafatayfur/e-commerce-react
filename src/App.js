import './App.css';
import styled from 'styled-components'

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
    <div className="App">
      <h4>comfy sloth starter</h4>
      <Button>Click me</Button>
      <Container>
        <div>
            <h3>hello world</h3>
        </div>
        <div className="hero">
          hero text
        </div>
      </Container>
    </div>
  );
}

export default App;
