import React from "react";
import Tick from '@pqina/flip';

console.log(Tick);

function setupFlip(tick) {
 
  Tick.helper.interval(function() {

      tick.value++;

      // Set `aria-label` attribute which screenreaders will read instead of HTML content
      tick.root.setAttribute('aria-label', tick.value);

  }, 1000);
}

const DailyDeals = () => {
  return (
    <main>
      <h1>Daily Deals</h1>
      <div class="clock-counter">
        <p>
          These deals are 
          <br></br>
          gone forever in
        </p>
        <div class= "tick"  data-value="1234" data-did-init="setupFlip">
          <div data-repeat="true" aria-hidden="true">
            <span data-view="flip"></span>
          </div>
        </div>
      </div>
      <h2>List of deals</h2>
    </main>
  );
};

export default DailyDeals;
