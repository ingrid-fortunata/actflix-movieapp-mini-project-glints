import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
// import Footer from "../../Components/Layout/Footer/Footer";
// import Header from "../../Components/Layout/Header/header";
import Overview from "../../Pages/MovieDetailsPages/Overview/Overview";
import "./index.css";

import CommentBox from "./Review/CommentBox";
import Characters from "./Characters/Characters";

export default function MovieDetails(props) {
  //so can be start from upper page
  window.scrollTo(0, 0);

  const [show_1, setShow1] = useState(true);
  const [show_2, setShow2] = useState(false);
  const [show_3, setShow3] = useState(false);

  // console.log(props.selectedMovie.title);

  return (
    <div className="details">
      <Banner
        selectedMovie={props.selectedMovie}
        addWatchList={props.addWatchList}
      />
      <span>
        <button
          onClick={() => {
            setShow1(true);
            setShow2(false);
            setShow3(false);
          }}
          style={{ backgroundColor: show_1 ? "#fe024e" : "" }}
        >
          Overview
        </button>
        <button
          onClick={() => {
            setShow1(false);
            setShow2(true);
            setShow3(false);
          }}
          style={{ backgroundColor: show_2 ? "#fe024e" : "" }}
        >
          Characters
        </button>
        <button
          onClick={() => {
            setShow1(false);
            setShow2(false);
            setShow3(true);
          }}
          style={{ backgroundColor: show_3 ? "#fe024e" : "" }}
        >
          Review
        </button>
      </span>

      <div
        className="div_OverView"
        style={{ display: show_1 ? "block" : "none" }}
      >
        <Overview selectedMovie={props.selectedMovie} />
      </div>
      <div
        className="div_Characters"
        style={{ display: show_2 ? "block" : "none" }}
      >
        <Characters selectedMovie={props.selectedMovie} />
      </div>
      <div
        className="div_Reviews"
        style={{ display: show_3 ? "block" : "none" }}
      >
        <CommentBox selectedMovie={props.selectedMovie} />
      </div>
      {/* <Footer /> */}
    </div>
  );

  // const selectedMovie = props.selectedMovie;
  // const [input, setInput] = useState("");

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const clearSearchbarInput = () => {
  //   setInput("");
  // };

  // if (input.length === 0) {
  //   return (
  //     <div className="details">
  //       <Header
  //         searchBar={
  //           <div className="searchbar">
  //             <form action="" onSubmit={handleSubmit}>
  //               <input
  //                 type="text"
  //                 placeholder="Search..."
  //                 className="search"
  //                 value={input}
  //                 onChange={handleChange}
  //               />
  //             </form>
  //           </div>
  //         }
  //       />
  //       <Banner
  //         selectedMovie={selectedMovie}
  //         addWatchList={props.addWatchList}
  //       />
  //       <span>
  //         <button
  //           onClick={() => {
  //             setShow1(true);
  //             setShow2(false);
  //             setShow3(false);
  //           }}
  //           style={{ backgroundColor: show_1 ? "#EB507F" : "" }}
  //         >
  //           OverView
  //         </button>
  //         <button
  //           onClick={() => {
  //             setShow1(false);
  //             setShow2(true);
  //             setShow3(false);
  //           }}
  //           style={{ backgroundColor: show_2 ? "#EB507F" : "" }}
  //         >
  //           Characters
  //         </button>
  //         <button
  //           onClick={() => {
  //             setShow1(false);
  //             setShow2(false);
  //             setShow3(true);
  //           }}
  //           style={{ backgroundColor: show_3 ? "#EB507F" : "" }}
  //         >
  //           Review
  //         </button>
  //       </span>

  //       <div
  //         className="div_OverView"
  //         style={{ display: show_1 ? "block" : "none" }}
  //       >
  //         <Overview selectedMovie={selectedMovie} />
  //       </div>
  //       <div
  //         className="div_Characters"
  //         style={{ display: show_2 ? "block" : "none" }}
  //       >
  //         <Characters selectedMovie={selectedMovie} />
  //       </div>
  //       <div
  //         className="div_Reviews"
  //         style={{ display: show_3 ? "block" : "none" }}
  //       >
  //         <CommentBox selectedMovie={selectedMovie} />
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Header
  //         searchBar={
  //           <div className="searchbar">
  //             <form action="" onSubmit={handleSubmit}>
  //               <input
  //                 type="text"
  //                 placeholder="Search..."
  //                 className="search"
  //                 value={input}
  //                 onChange={handleChange}
  //               />
  //             </form>
  //           </div>
  //         }
  //       />
  //       <Search
  //         input={input}
  //         setSelectedMovie={props.setSelectedMovie}
  //         clearSearchbarInput={clearSearchbarInput}
  //       />

  //       {/* <Footer /> */}
  //     </div>
  //   );
  // }
}
