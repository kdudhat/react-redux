import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCream from "./components/HooksIceCream";
import User from "./components/User";

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
        <User />
      </div>
    </Provider>
  );
}

export default App;
