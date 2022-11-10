
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Routers from "./components/Router/Routers";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="app">
      {/*<Navbar />*/}
      <Dashboard />
      <Routers />
    </div>
  );
}

export default App;
