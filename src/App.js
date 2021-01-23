import "./App.css";
import XOGrid from "./components/XOGrid";
import "./styles/styles.css";

function App() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/7a/02/94/7a0294e80197244b0ed6248cd606ddec.png)`,
      }}
    >
      <h1 style={{ color: "white", backgroundColor: "#99ccff" }}>XO Game</h1>
      <XOGrid />
    </div>
  );
}

export default App;
