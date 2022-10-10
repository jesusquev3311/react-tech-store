import { Header } from "./components/header/Header";
import { Outlet } from "react-router-dom";
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
