import React ,{useContext} from 'react';
import { ContextItem } from './Context';
import PropTypes from "prop-types";

const Yourcomponent = (props) => {
    const {title,id}=props;
    const itemContext = useContext(ContextItem)
    return (
        <div>
            <ul >
                <li key={id} className='list'>
                    <input type='checkbox' 
                    value={title} 
                    name='checkbox' 
                    id={id}
                    onChange={(e) => itemContext.getCheckItem(e)} 
                />
                <label>{title}</label>
                </li>
            </ul>
        </div>
    );
}
Yourcomponent.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
};
export default Yourcomponent;
