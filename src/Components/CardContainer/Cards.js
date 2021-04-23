import React from 'react';
import styled from 'styled-components';

const Cards = ({ url, key }) => 
{
  
    const Carditem=styled.div`
      display: inline-block;
      width: 100%;
      border:1px solid red;
      background-color:3FFCC99;
      border-radius:5px;
      margin:2px;
       }
    `

 

    return (
        <Carditem>
        <img src = { url } key = { key } alt = "image"  />
        </Carditem>
    );
};

export default Cards;