import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homePage";
import MovieDetails from "./Pages/MovieDetailsPages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WatchList from "./Pages/WatchList/watchList";
import Header from "./Components/Layout/Header/header";
import Footer from "./Components/Layout/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isSignedIn, setisSignedIn] = useState(
    localStorage.getItem("token") !== null
  );

  const setSelectedM = (movie) => {
    setSelectedMovie(movie);
  };

  const [watchList, setwatchList] = useState([]);
  const addWatchList = (movie) => {
    const newWL = [...watchList, movie];
    setwatchList(newWL);

    // saveToLocalStorage(newWL);
  };
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const clearSearchbarInput = () => {
  //   document.getElementsByClassName("search")[0].value = "";
  // };

  const Content = () => {
    const isSearching = input.length > 0 ? true : false;
    return isSearching ? (
      <Search
        input={input}
        setSelectedMovie={setSelectedMovie}
        setInput={setInput}
      />
    ) : (
      <MovieDetails
        setSelectedMovie={setSelectedM}
        selectedMovie={selectedMovie}
        addWatchList={() => addWatchList(selectedMovie)}
      />
    );
  };

  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  // };

  // useEffect(() => {
  //   const movieFavourites = JSON.parse(
  //     localStorage.getItem("react-movie-app-favourites")
  //   );
  //   setwatchList(movieFavourites);
  // }, []);

  // auth_service
  //   .register(
  //     "ingrid_test1",
  //     "ingrid_1_username",
  //     "ingrid_test1@testing.com",
  //     "0123456789"
  //   )
  //   .then((result) => {
  //     setMessage(result);
  //   });
  // console.log(data_service.getPublicMovie("drama"));
  // console.log(watchList);
  return (
    <Router>
      <div className="App">
        <Header
          setInput={setInput}
          isSignedIn={isSignedIn}
          setisSignedIn={setisSignedIn}
          searchBar={
            <div className="searchbar">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search"
                  value={input}
                  onChange={handleChange}
                />
              </form>
            </div>
          }
        />
        <Switch>
          <Route path="/" exact>
            <HomePage
              setSelectedMovie={setSelectedM}
              input={input}
              setInput={setInput}
            />
          </Route>
          <Route path="/movie-details">
            <Content
              lengthSearch={input.length}
              input={input}
              setSelectedMovie={setSelectedMovie}
            />
          </Route>
          <Route path="/watch-list">
            <WatchList watchList={watchList} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
