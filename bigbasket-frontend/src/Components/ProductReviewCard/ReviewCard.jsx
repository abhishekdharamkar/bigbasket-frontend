import React from 'react'
import "./ReviewCard.css";
import { useSelector ,useDispatch} from 'react-redux';
import { removeFromCart } from '../../Redux/Action/Action';
const ReviewCard = () => {
  const dispatch = useDispatch();

  
  const product= useSelector(
    (state) => state.updatingCart?.cartItems 
  );
 
console.log("pllp",product)

  // const product = useSelector(
  //   (state) => state.updateCart.cartItems
  // );


  const handleClick = ( id) => {
    console.log(id,"review");
   dispatch( removeFromCart(id) )
  //   dispatch({
  //     type: 'REMOVE_FROM_BASKET',
  //     id: id,
  // })
    console.log(id,"review");
  };

  // if(product!=null){
      

  if(product!=null){
      
product.map(product=>{
    
  })

  // {filteredProducts_Data?.map((el) => {
  //   return <div key={el._id}>
  //      <ProductCard  data={el} />
       
  //   </div>
  // })}
  return (
    <div>
      {product?.map((product,index) => {
        return(
    <div className="review-card">
      
      <div className="image-review-box">
        <img src={product.url} width="65px" alt="veg-img" />
      </div>
      <div className='name-brand-review'>
        <p className='name-brand'>Fresho</p>
        <p className='name-brand'>{product.name}</p>
        <p style={{fontSize:"10px", margin:"5px 0px 0px 0px"}}>1 X {product.price}</p>
      </div>
      <div className="qty-box">
        <p>{product.qty}</p>
      </div> 
      <div className="final-price-box">
        <p>Rs {product.price*product.qty}</p>
        <span onClick={event => handleClick(index)}>&#10060;</span>
      </div>
    </div>
    )})}
    </div>
  )

  // }

  }

}

export default ReviewCard;