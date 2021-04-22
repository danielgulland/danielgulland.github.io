import React from "react";

const OrderDetails = () => {
    return (
        <main>
        {/*<main class="main-content js-focus-hidden" id="MainContent" role="main" tabindex="-1" style="margin-top: 67px;">*/}
      	    <div class="page-width">
                <div class="section-header text-center">
                    <h1>My Account</h1>
                    <p><a href="/account">Return to Account Details</a></p>
                </div>
                <div class="grid myaccount">
                    <div class="grid__item myaccount__order-history">
                    <h3>Order #SPS7952</h3>
                    <p>Placed on <time datetime="2021-04-06T23:02:01Z">April 6, 2021 at 7:02 pm</time></p>
                    <table class="order-table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">SKU</th>
                                <th class="text-right" scope="col">Price</th>
                                <th class="text-right" scope="col">Quantity</th>
                                <th class="text-right" scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="9740809044035">
                                <td class="order-table__product" scope="row" data-label="Product">
                                    <div>
                                        <a href="/products/heart-on-fire" title="">Heart On Fire - T-Shirts, Unisex / 3XL / Black</a>
                                    </div>
                                    <div class="note">Fulfilled <time datetime="2021-04-16T15:26:36Z">April 16, 2021</time>
                                        <div>
                                            <a href="https://webtrack.dhlglobalmail.com/?trackingnumber=SP13714501148739" target="_blank" rel="noreferrer noopener" aria-describedby="a11y-new-window-external-message">
                                                Track shipment
                                            </a>
                                            <div>
                                                DHL eCommerce #SP13714501148739 
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="SKU"></td>
                                <td class="text-right" data-label="Price">
                                    <dl>
                                        <dt>
                                            <span class="visually-hidden">Regular price</span>
                                        </dt>
                                        <dd>$15.00</dd>
                                    </dl>
                                </td>
                                <td class="text-right" data-label="Quantity">1</td>
                                <td class="text-right" data-label="Total">$15.00</td>
                            </tr>
                            <tr id="9740809076803">
                                <td class="order-table__product" scope="row" data-label="Product">
                                    <div>
                                        <a href="/products/nature-spirit" title="">Nature Spirit - T-Shirts, Unisex / 2XL / Black</a>
                                    </div>
                                    <div class="note">Fulfilled <time datetime="2021-04-16T15:26:36Z">April 16, 2021</time>
                                        <div>
                                            <a href="https://webtrack.dhlglobalmail.com/?trackingnumber=SP13714501148739" target="_blank" rel="noreferrer noopener" aria-describedby="a11y-new-window-external-message">
                                                Track shipment
                                            </a>
                                            <div>
                                                DHL eCommerce #SP13714501148739 
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="SKU"></td>
                                <td class="text-right" data-label="Price">
                                    <dl>
                                        <dt>
                                            <span class="visually-hidden">Regular price</span>
                                        </dt>
                                        <dd>
                                            $15.00
                                        </dd>
                                    </dl>
                                </td>
                                <td class="text-right" data-label="Quantity">1</td>
                                <td class="text-right" data-label="Total">$15.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td class="small--hide" scope="row" colspan="4">Subtotal</td>
                                <td class="text-right subtotal-price" data-label="Subtotal">$30.00</td>
                            </tr>
                            <tr>
                                <td class="small--hide" scope="row" colspan="4">Shipping (Standard)</td>
                                <td class="text-right shipping-price" data-label="Shipping (Standard)">$6.50</td>
                            </tr>
                            <tr>
                                <th class="small--hide" scope="row" colspan="4">Total</th>
                                <td class="text-right order-total-price" data-label="Total">$36.50 USD</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="grid__item myaccount__account-details">
                    <h3>Billing Address</h3>
                    <p><strong>Payment Status:</strong> Paid</p>
                    <p>Nickolaus Marshall-Eminger<br/>1612 LIMA DR<br/>San Luis Obispo CA 93405<br/>United States</p>
                    <h3>Shipping Address</h3>
                    <p><strong>Fulfillment Status:</strong> Fulfilled</p>
                    <p>Nickolaus Marshall-Eminger<br/>1612 LIMA DR<br/>San Luis Obispo CA 93405<br/>United States</p>
                </div>
            </div>
        </div>
    </main>      
    );
};

export default OrderDetails;