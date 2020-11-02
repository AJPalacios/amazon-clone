import React from "react";
import "./Home.css";
import Product from "../Product";
import { ClipButton } from 'clip-storybook';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product 
            id="12321341"
            title="The lean startup" 
            price={29.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg" 
            rating={5}
          />
          <Product 
            id="12321341"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black " 
            price={158.00} 
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg" 
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product 
            id="12321341"
            title="VANKYO LEISURE 3 Mini Projector, 1080P and 170'' Display Supported, Portable Movie Projector with 40,000 Hrs LED Lamp Life, Compatible with TV Stick, PS4, HDMI, VGA, TF, AV and USB" 
            price={93.66} 
            image="https://images-na.ssl-images-amazon.com/images/I/61qarCEnHGL._AC_SL1001_.jpg" 
            rating={5}
          />
          <Product 
            id="12321341"
            title="Echo Dot (3rd Gen) - Smart Speaker with Alexa - Maroon" 
            price={35.21} 
            image="https://m.media-amazon.com/images/I/61V25P7mlyL._AC_UL640_QL65_.jpg" 
            rating={5}
          />
          <Product
            id="12321341" 
            title="NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision, 3GB RAM, 2x USB, Works with Alexa" 
            price={189.00} 
            image="https://images-na.ssl-images-amazon.com/images/I/61rowppY2TL._AC_SL1500_.jpg" 
            rating={5}
          />
          
        </div>
        <div className="home_row">
          <Product 
            id="12321341"
            title="SAMSUNG Electronics UN32M4500BFXZA 720P Smart LED TV, 32 (2018), 17.3 x 28.9 x 3.1" 
            price={148.00} 
            image="https://images-na.ssl-images-amazon.com/images/I/91%2BtRvBTNkL._AC_SL1500_.jpg" 
            rating={5}
          />
        </div>
        <ClipButton color="primary" variant="contained">Test</ClipButton>
      </div>
    </div>
  );
}

export default Home;
