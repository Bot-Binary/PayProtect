import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import PayNow from "../Modal/PayNow";
import AddMoney from "../Modal/AddMoney";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Options</h3>
        <PayNow />
        <br />
        <AddMoney />
        {/* <Updates /> */}
        
      </div>
      <div>
        {/* <h3>Customer Review</h3> */}
        {/* <CustomerReview /> */}
      </div>
    </div>
  );
};

export default RightSide;
