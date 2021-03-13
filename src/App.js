import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCream from "./components/HooksIceCream";

function App() {
  return (
    //provider is simply connect our redux store to out react application
    //with store props
    <Provider store={store}>
      <div className="App">
        {/* this is react-redux without hooks */}
        <CakeContainer />
        <HooksCakeContainer />
        <HooksIceCream />
      </div>
    </Provider>
  );
}

export default App;
