import './App.css';
import ReactApp from "./modules/ReactApp";
import AngularApp from './modules/AngularApp';
import {ReactComponent as ReactLogo} from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div className="main-app">
        <h1>Main Application in</h1>
        <ReactLogo className="react-logo"/>
      </div>
      <div className="content">
        <ReactApp></ReactApp>
        <AngularApp></AngularApp>
      </div>
    </div>
  );
}

export default App;
