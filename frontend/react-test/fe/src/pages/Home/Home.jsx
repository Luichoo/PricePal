import React from "react";
// import "./Home.css";
import "./scripts.js";
function Home() {
  return (
    <div className="bd">

      {/* <header>
        <a href="/" className="logo">
          PricePaw
        </a>
        <ul>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/register">Sign Up</a>
          </li>
        </ul>
      </header> */}

      <div className="banner">
      <p className="centered">PricePal</p>
      <br />
        <h1 className="centered2">
          Your best buddy for comparing prices between sites
        </h1>
        </div>



      <div className="cards">
<div className="card">
  <span style={{ color: "rgb(47, 93, 177)" }}>
    <i className="fas fa-basket-shopping fa-5x"></i>
  </span>
  <div className="cardInfo">
    <h2>WishList</h2>
    <h4>Find what you like and keep track of it</h4>
  </div>
</div>
<div className="card">
  <span style={{ color: "rgb(224, 17, 17)" }}>
    <i className="fas fa-fire fa-5x"></i>
  </span>
  <div className="cardInfo">
    <h2>Popular</h2>
    <h4>See what the prices are on the most searched items</h4>
  </div>
</div>
<div className="card">
  <span style={{ color: "rgb(67, 196, 62)" }}>
    <i className="fas fa-tags fa-5x"></i>
  </span>
  <div className="cardInfo">
    <h2>On Sale!</h2>
    <h4>Check the prices for items currently on sale</h4>
  </div>
</div>

</div>

    </div>
  );
}

export default Home;

