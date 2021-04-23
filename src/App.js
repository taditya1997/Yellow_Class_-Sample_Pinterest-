import './App.css';
import React from 'react';
import Header from './Components/Header';
import CardContainer from './Components/CardContainer/CardContainer.js';
import {fetchData} from './Api/Api.js';
import { useEffect, useState } from 'react';
function App() 

{
  const [images,setImages]=useState([])

  useEffect(()=>
  {
   const fetchedData=async()=>
   {
     const getdata= await fetchData();

     setImages(getdata);
   }
   fetchedData();

   console.log(images);

  },[])


  
  return (
    <div className="App">
      <Header/>
      <CardContainer/>
    </div>
  );
}

export default App;
