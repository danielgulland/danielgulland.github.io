import React from "react";

const Home = () => {
  return (
    <main>

      <div class="clock-counter">
        <p>
          LATEST DEALS
          <br></br>
          DON'T WAIT!
        </p>
        <div class= "tick"  data-value="1234" data-did-init="setupFlip">
          <div data-repeat="true" aria-hidden="true">
            <span data-view="flip"></span>
          </div>
        </div>
      </div>

      <h1>Trending right now</h1>
      <p>expanding cards for popular collections</p>

      <h1>Best Selling Shirts</h1>

    </main>
  );
};

export default Home;
