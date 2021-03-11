import { Route, Switch } from 'react-router';

import AlbumPage from './components/AlbumPage/AlbumPage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import PhotoDetailsPage from './components/PhotoDetailsPage/PhotoDetailsPage';
import PhotosPage from './components/PhotosPage/PhotosPage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Layout'>
        <Switch>
          <Route exact path='/' component={PhotosPage} />
          <Route path='/photo/:id' component={PhotoDetailsPage} />
          <Route path='/album/:id' component={AlbumPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
