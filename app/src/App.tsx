import './App.css';
// import ReactApp from "./modules/ReactApp";
// import AngularApp from './modules/AngularApp';
import {ReactComponent as ReactLogo} from "./logo.svg";
import { Routes, Route } from 'react-router-dom';
import NavBar from './modules/NavBar';
import { Suspense, lazy } from 'react';

const WelcomeComponent = lazy(() => import('./modules/welcome'));
const ReactApp = lazy(() => import('./modules/ReactApp'));
const AngularApp = lazy(() => import('./modules/AngularApp'));

function App() {
  return (
    <div className="App">
      <div className='main-app'>
       <NavBar />
       <div className="content">
        <Suspense fallback={<div className="content">Loading...</div>}>
            <Routes>
              <Route path="/" element={<WelcomeComponent />} />
              <Route path="/react" element={<ReactApp />} />
              <Route path="/angular" element={<AngularApp />} />
            </Routes>
        </Suspense>
       </div>
    </div>
    </div>
  );
}

export default App;
