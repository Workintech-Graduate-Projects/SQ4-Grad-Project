import logo from "./logo.svg";
import "./App.css";
import CreditScoreCalculator from "./components/calculating/calculate";
import TypeFormFetcher from "./components/fetTypeFrom";

function App() {
  return (
    <div className="App">
      <TypeFormFetcher />
      <CreditScoreCalculator />
    </div>
  );
}

export default App;
