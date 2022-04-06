import React, { useContext }  from 'react';
import { ContextItem } from './Context';


const Selecteditems = () => {
    const checkedContextItem = useContext(ContextItem)
    return (
        <div>
            <ul>
            {checkedContextItem.checkedInfoItem.map(item => {return <li className='flex'>{item}</li>;})}
            </ul>
        </div>
    );
}

export default Selecteditems;
