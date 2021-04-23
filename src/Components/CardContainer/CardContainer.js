import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { Loader } from './Loader';
import { createGlobalStyle } from 'styled-components';
import Cards from './Cards.js'

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: sans-serif;
  }
`;
 
const WrapperImages = styled.section`
    margin:20px;
    column-count:5;
    column-gap:10px;
    margin-top:100px;
  
  
`;

function CardContainer() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    

    axios
      .get(`https://api.unsplash.com/photos/random/?client_id=1s66VOFUtXIMpv2wdZB1mvStoViN96EnBy2Sef1hobc&count=20`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map(image => (
            <Cards url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default CardContainer;