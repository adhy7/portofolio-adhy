import About from "./components/About";
import Expreience from "./components/Expreience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portofolio from "./components/Portofolio";
import SosicalLinks from "./components/SosicalLinks";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <SosicalLinks></SosicalLinks>
      <About></About>
      <Portofolio></Portofolio>
      <Expreience></Expreience>
    </div>
  );
}

export default App;
