import React , { useState } from 'react';
import { ContextItem } from "./Context";
import './assests/App.css';
import Allitem from './AllItem';
import SelectedItems from "./SelectedItems";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [checkedInfoItem , setCheckedInfoItem] = useState([]);

  const getCheckItem = (e) => {
    let List = [...checkedInfoItem]
    if(e.target.checked){
      List = [...checkedInfoItem , e.target.value]
    }else{
      List.splice(checkedInfoItem.indexOf(e.target.value), 1)
    }
    setCheckedInfoItem(List)
  } 

  return (
    <div>
      <ContextItem.Provider value={{checkedInfoItem , getCheckItem}}>
      <div className='flex mt-5'>
          <div className='AllItem'>
            <h2 className="mb-5 h2-AllItem">AllItem</h2>
            <Allitem />
          </div>
          <div  className='SelectedItems'>
            <h2 >SelectedItems</h2>
            <SelectedItems />
          </div>
      </div>
      </ContextItem.Provider>
    </div>
  );
}

export default App;
