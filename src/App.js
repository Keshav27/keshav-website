import "./App.css";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Journey from "./Components/journey";
import Photo from "./Components/photo";
import Aboutme from "./Components/aboutme";
import Connect from "./Components/connect";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Journey />
      {/* <Photo /> */}
      <Aboutme />
      <Connect />
      
    </div>
  );
}

export default App;
