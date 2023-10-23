import React from "react";
import "./RightSide.css";
import PayNow from "../Modal/PayNow";
import AddMoney from "../Modal/AddMoney";

const RightSide = () => {
    // const [modalOpen, setModalOpen] = React.useState(true);
    // const handleClickModalOpen = (e) => {
    //     // setIsQrOpened(true);
    //     setModalOpen(true);
    // };

    return (
        <div className="RightSide">
            <div>
                <h3>Options</h3>
                <PayNow/>
                <AddMoney />
                {/* <Updates /> */}

            </div>
            {/* <div>
                {/* <h3>Customer Review</h3> */}
                {/* <CustomerReview /> 
            </div> */}
        </div>
    );
};

export default RightSide;
