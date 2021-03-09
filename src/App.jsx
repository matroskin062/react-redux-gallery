import { Route } from 'react-router';
import './App.css';
import Album from './components/Album/Album';
import Header from './components/Header/Header';
import PhotoDetails from './components/PhotoDetails/PhotoDetails';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Layout'>
        <Route exact path='/' component={Photos} />
        <Route path='/photo/:id' component={PhotoDetails} />
        <Route path='/album/:id' component={Album} />
      </div>
    </div>
  );
}

export default App;
