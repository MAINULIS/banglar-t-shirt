import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2 className={ cart.length ===1 ? 'red' : 'blue'}>Order summery: {cart.length}</h2>
            <p className={`bold  ${cart.length ===3 ? 'green' : 'purple'}`}>Something</p>
            {
                cart.length < 3 ? <span>please buy more</span> : <span>Thanks</span>
            }
           {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza</p>
            }
            {
                cart.length !==5 || <h3>Opps :)</h3>
            }
        </div>
    );
};

export default Cart;

/*@ CONDITIONAL RENDERING
  1. use if or if-else: to set a variable that will contain an element or component
  2.Ternary Operator: condition? 'for true' : 'false'
  3.Logical &&: if the condition is true then the next thing will be displayed
  4. Logical || : if the condition is false then the next thing will displayed

 */

  /* * CONDITIONAL CSS CLASS
    1. use ternary
    2. ternary inside template string
  * */