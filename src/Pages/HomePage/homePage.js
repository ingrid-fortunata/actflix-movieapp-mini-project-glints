import React from "react";
import Jumbotron from "../../Components/Jumbotron";
import Movies from "../../Components/Movies2";
import Search from "../../Components/Search/Search";
import "../HomePage/homePage.css";

const HomePage = (props) => {
  // const [input, setInput] = useState("");

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // const clearSearchbarInput = () => {
  //   document.getElementsByClassName("search")[0].value = "";
  // };

  const Content = (props) => {
    const isSearching = props.lengthSearch > 0 ? true : false;
    return isSearching ? (
      <Search
        input={props.input}
        setSelectedMovie={props.setSelectedMovie}
        setInput={props.setInput}
      />
    ) : (
      <Movies setSelectedMovie={props.setSelectedMovie} />
    );
  };

  return (
    <div>
      {/* <Header
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
      /> */}
      {(props.input.length > 0 ? false : true) ? <Jumbotron /> : null}
      <Content
        lengthSearch={props.input.length}
        input={props.input}
        setSelectedMovie={props.setSelectedMovie}
        setInput={props.setInput}
      />
      {/* <Movies setSelectedMovie={props.setSelectedMovie} />
      <Search
        input={input}
        setSelectedMovie={props.setSelectedMovie}
        clearSearchbarInput={clearSearchbarInput}
      /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
