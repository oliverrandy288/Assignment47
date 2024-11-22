import React, { Component, useState } from 'react';

// Task 1: UserProfile Class Component
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Alex' };
    // Binding the method to 'this'
    this.changeName = this.changeName.bind(this);
  }

  // Corrected method to update state using setState
  changeName() {
    this.setState({ name: 'Charlie' });
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

// Task 2: MoviesList Functional Component
const MoviesList = () => {
  // Initialize state with a list of movies
  const [movies, setMovies] = useState([
    { title: 'The Dark Knight', genre: 'Action', description: 'A dark and thrilling superhero movie.' },
    { title: 'Inception', genre: 'Sci-Fi', description: 'A mind-bending heist film.' },
    { title: 'Forrest Gump', genre: 'Drama', description: 'A heartwarming story of a unique man.' }
  ]);
  const [showGenre, setShowGenre] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('Action');

  // Toggle additional details for a movie
  const toggleDetails = (index) => {
    const newMovies = [...movies];
    newMovies[index].showDetails = !newMovies[index].showDetails;
    setMovies(newMovies);
  };

  // Remove a movie from the list
  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  // Toggle view between all movies and a specific genre
  const toggleView = () => {
    setShowGenre(!showGenre);
  };

  return (
    <div>
      {/* Button to toggle view */}
      <button onClick={toggleView}>
        {showGenre ? 'Show All Movies' : `Show ${selectedGenre} Movies`}
      </button>

      <ul>
        {movies
          .filter((movie) => (showGenre ? movie.genre === selectedGenre : true))
          .map((movie, index) => (
            <li key={index}>
              <h3 onClick={() => toggleDetails(index)}>{movie.title}</h3>
              {movie.showDetails && <p>{movie.description}</p>}
              <button onClick={() => removeMovie(index)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

// Main App Component to render both UserProfile and MoviesList
function App() {
  return (
    <div className="App">
      <UserProfile />
      <MoviesList />
    </div>
  );
}

export default App;
