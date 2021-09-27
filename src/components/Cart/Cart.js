import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    // console.log(props)
    let total = 0;
    for (const element of cart) {
        total = total + element.hireRate;
    }
    return (
        <div>
            <h3>Total hired designer: {cart.length}</h3>;
            <h4>Total cost:{total.toFixed(2)}</h4>
            <h1>Designers you hire:</h1>
            {
                cart.map(item => <div key={item.id}>
                    <p>{item.name}</p>
                </div>)
            }
        </div>
    );
};

export default Cart;