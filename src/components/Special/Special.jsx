import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><strong>{angti}</strong></p>
        </div>
    );
};

export default Special;