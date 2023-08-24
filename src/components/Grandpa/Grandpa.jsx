import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h2>Grand pa</h2>
            <p>has money: ${money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/* 
 1. Create context and export
 2.Create a provider and pass a value
 3. use useContext to receive the value
 */