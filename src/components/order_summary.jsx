import React from "react";
import illustration from "./images/illustration-hero.svg";
import music from "./images/icon-music.svg";

function OrderSummary() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="card">
                <img src={illustration} className="card-img-top" alt="illustration"/>
                <div className="card-body text-center">
                    <h5 className="card-title">Order Summary</h5>
                      <p className="card-text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                  </div>
                  
                  <div class="plan-container">
                    <i><img src={music} alt="" className="musicicon mx-3"/></i>
                    <div class="plan-text-container">
                        <div class="plan">Annual Plan</div>
                        <div class="price">$59.99/year</div>
                    </div>
                    <a href="/" className="link">Change</a>
                  </div>
                  <button>Proceed to Payment</button>
                  <div class="change-order">Cancel Order</div>
            </div>      
        </div>
    </div>
  );
};

export default OrderSummary;