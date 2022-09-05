import logo from "./logo.svg";
import { Provider } from "react-redux";
import { configStore } from "./State/configStore";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const myStore = configStore();
  return (
    <div className="App">
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
