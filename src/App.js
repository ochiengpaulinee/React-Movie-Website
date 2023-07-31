import GetMovies from './components/GetMovies';
import './App.css';
import Navigation from './components/GetMovies/Navigation';
import Categories from './components/GetMovies/Categories';


function App() {
  return (
    <div>
      <Navigation/>
      {/* <Categories/> */}
      <GetMovies/>
    </div>
  );
}

export default App;
