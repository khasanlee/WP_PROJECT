import "./styles.css";
import Airlines from "./pages/Airlines";
import TitleBar from "./components/TitleBar";
export default function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="container">
        <Airlines />
      </div>
    </div>
  );
}
