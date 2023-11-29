import { Elements } from "@stripe/react-stripe-js";
import Sectiontitle from "../Shared/Sectiontitle/Sectiontitle";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";


const Payment = () => {

    const stripepromise =loadStripe("pk_test_51OHZ1rBpdEpAfWOO36Yhmj2PNf7jjvfD6wsZGKxmQkVglul4MclaserK9E1zEzQmnjVhGBG3Q9V2XUaT1dqHwSYe00RnYRLj5o")
    return (
        <div>
            <Sectiontitle heading={"Please pay to eat"} subheading={"Pay your Cash"}></Sectiontitle>

            <Elements stripe={stripepromise}>

                <Checkout></Checkout>

           </Elements>
            
        </div>
    );
};

export default Payment;