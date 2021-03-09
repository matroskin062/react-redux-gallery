import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/' component={Photos} />
    </div>
  );
}

export default App;
