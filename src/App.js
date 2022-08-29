import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import Movie from './pages/movieDetails/movie';
import MovieList from './components/movieList/movieList';
function App()  {
  return (
   
    <div className="App">
      <Router basename="/IMDB_clone" >
        <Header />
        <Routes>
          <Route path="/IMDB_clone" element={<Home />}></Route>
          <Route path ="movie/:id" element = {<Movie />}></Route>
          <Route path ="movies/:type" element = {<MovieList />}></Route>
          <Route path ="/*" element = {<Home />}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
