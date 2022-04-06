import React ,{useEffect ,useState} from 'react';
import YourComponent from './YourComponent';
const Allitem = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch("https://61f6a88e2e1d7e0017fd6e96.mockapi.io/myUrl")
        .then(res => res.json())
        .then(result => setdata(result))
    },[])
    return (
        <>
            {data.map((item) =><YourComponent id={item.id} title={item.title}/>)}
        </>
    );
}

export default Allitem;
