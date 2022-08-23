import { useSelector } from "react-redux";
import ReviewCard from "../../Components/ProductReviewCard/ReviewCard";
import ReviewCheckout from "../../Components/ReviewCheckout/ReviewCheckout";
import "./Checkout.css"
function Checkout() {
    const count = useSelector(
        (state) => state.updatingCart?.cartItems
      );
   
    return(
        <div>
            <h1 className="text-center mt-2 bg-success">Checkout</h1>
        <div className="bucket-item-review2">
        
      
          <div className="container bucket-item-container2">
          {count.length == 0 ?
            <p>Your basket is empty. Start shopping now!</p>
         
          :
          <ReviewCard />
         
        }
         </div>
        <ReviewCheckout />
      </div>
      </div>
    );
}export default Checkout;