import React from "react";

const Account = () => {
  return (
    <main>
      {/*</main><main class="main-content js-focus-hidden" id="MainContent" role="main" tabindex="-1" style="margin-top: 67px;">*/}
      <div class="page-width">
        <div class="section-header text-center">
          <h1>My Account</h1>
          <a href="/account/logout" id="customer_logout_link">Log out</a>
        </div>
        <div class="grid myaccount">
          <div class="grid__item myaccount__order-history">
            <h3>Order History</h3>
            <table class="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Fulfillment Status</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th data-label="Order" scope="row">
                    <a href="https://www.shirtpunch.com/account/orders/1dd5fbbecdffe9981beb722d1a99fb64" class="btn btn--secondary btn--small" aria-label="Order number #SPS7952">#SPS7952</a>
                  </th>
                  <td data-label="Date"><time datetime="2021-04-06T23:02:01Z">April 6, 2021</time></td>
                  <td data-label="Payment Status">Paid</td>
                  <td data-label="Fulfillment Status">Fulfilled</td>
                  <td data-label="Total">$36.50</td>
                </tr>
                <tr>
                  <th data-label="Order" scope="row">
                    <a href="https://www.shirtpunch.com/account/orders/bef48ad89b83ba53144dd8d43383dc06" class="btn btn--secondary btn--small" aria-label="Order number #SPS7931">#SPS7931</a>
                  </th>
                  <td data-label="Date"><time datetime="2021-04-06T20:06:07Z">April 6, 2021</time></td>
                  <td data-label="Payment Status">Refunded</td>
                  <td data-label="Fulfillment Status">Unfulfilled</td>
                  <td data-label="Total">$21.50</td>
                </tr>
                <tr>
                  <th data-label="Order" scope="row">
                    <a href="https://www.shirtpunch.com/account/orders/21d6f8379666353b4f521391161d1f18" class="btn btn--secondary btn--small" aria-label="Order number #SPS7927">#SPS7927</a>
                  </th>
                  <td data-label="Date"><time datetime="2021-04-06T19:43:17Z">April 6, 2021</time></td>
                  <td data-label="Payment Status">Refunded</td>
                  <td data-label="Fulfillment Status">Unfulfilled</td>
                  <td data-label="Total">$21.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="grid__item myaccount__account-details">
            <h3>Account Details</h3>
            <p>Nickolaus Marshall-Eminger<br/>1622 HUSANA DR<br/>San Luis Obispo CA 93405<br/>United States</p>
            <p><a href="/account/addresses" class="">View Addresses (1)</a></p>
          </div>
        </div>
        <div class="grid notes">
          <div class="note-container">
            <p><em>NOTE:</em> As you know, we have recently transitioned to a new platform. Here you will only see orders placed on the new platform. To request information about orders made on our previous platform, please send an email to <a href="mailto:info@shirtpunch.com" target="_blank" rel="noreferrer noopener" aria-describedby="a11y-new-window-external-message">info@shirtpunch.com</a> with your order number or shipping address. Thank you so much for your patience and feedback through this transition.</p>
          </div> 
        </div> 
      </div>
    </main>
  );
};

export default Account;