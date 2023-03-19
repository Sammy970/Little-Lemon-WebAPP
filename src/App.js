import './App.css';
import Homepage from "./Components/Homepage"
import Card from "./Components/Card"

function App() {
  return (
    <>
      <Homepage /> <br /> <br /> <br /> <br />
      
      <Card
        image={require("../src/Assets/images/lemon_dessert.jpg")}
        title="Lemon Desert"
        price="$12.00"
        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
      />
    </>
  );
}

export default App;
