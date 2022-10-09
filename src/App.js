import './App.scss';
import { Header } from "./components/header/Header";
import { Products } from './views/Produtcs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
