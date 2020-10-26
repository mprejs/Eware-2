import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tutorial from './components/Tutorial';
import Play from './components/Play';
import Load from './components/Load';
import NotFound from './components/NotFound';

import './styles/App.scss'

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Tutorial' component={Tutorial} />
          <Route path='/Play' component={Play} />
          <Route path='/Load' component={Load} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
