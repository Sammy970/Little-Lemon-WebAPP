import './App.css';
import Header from "./Components/Header";
import Homepage from "./Components/Homepage"
import Specials from "./Components/Specials"

function App() {
  return (
    <>
      {/* Header + Navbar */}
      <Header />
      {/* Hero Page */}
      <Homepage />
      {/* Specials Page */}
      <Specials />
    </>
  );
}

export default App;
