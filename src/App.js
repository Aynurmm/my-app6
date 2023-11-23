
import './App.css'

import {useState, useEffect} from 'react'

function App() {
  const [item,setItem] = useState({
    itemName: "",
 
  })


  const [searchMyData, setSearchMyData] = useState("")



const searchData = (e) =>{
  setSearchMyData(e.target.value.toLowerCase())

}






  const [employeetData, setEmployeetData] = useState([])
  useEffect(()=>{
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
    .then(res=>res.json())
    .then(data=>{
      setEmployeetData(data)
    })
  },[])
  return (
    <div className='App'>

    <input type='text' placeholder='Search...' onChange={searchData}/>


    {
     employeetData.filter(e => e.name.toLowerCase().includes(searchMyData)).map((a,b)=>(
        <div key={b}>
        <h1>{a.name}</h1>
      </div>
      ))
    }


   </div>
   
  );
}

export default App;
