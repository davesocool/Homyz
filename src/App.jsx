import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/value/Value";
import Contacts from "./components/Contacts/Contacts";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contacts />
      <GetStarted />
    </div>
  );
}

export default App;
