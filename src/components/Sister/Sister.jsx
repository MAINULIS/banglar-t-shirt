import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring = useContext(RingContext)
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p><small>grandpa money: ${money}</small></p>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Sister;