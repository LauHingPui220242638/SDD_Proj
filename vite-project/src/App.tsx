import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";



function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]

  return <div>
    <Button text="Click!!" color="primary"></Button>
    <br/>
    <Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={(item)=>{console.log(item)}}/>
    </Alert>
    <ListGroup items={items} heading="Cities" onSelectItem={(item)=>{console.log(item);
    }}/>
  
  </div>
}

export default App; 