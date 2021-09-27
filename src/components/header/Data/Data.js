import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Hire from '../../Hire/Hire';
import './Data.css';

const Data = () => {
    const [designers, setDesigners] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDesigners(data));
    }, []);

    const addhandler = (designer) => {
        const newCart = [...cart, designer];
        setCart(newCart);
    }
    return (
        <div>
            <div className='format2'>
                <div className="format">
                    {
                        designers.map(designer => <Hire
                            key={designer.phone}
                            data={designer}
                            addhandler={addhandler}
                        ></Hire>
                        )
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Data;