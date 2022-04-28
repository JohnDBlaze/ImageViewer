import React from 'react';
import { useState,useEffect } from "react";
import axios from 'axios';
import './image.css';

  

const Filess = () => {
    const [cancellation, setcancellation] = useState([]);
  const getCancelMatch = async () => {
    let url = `http://ekycdev.acumengroup.in/touch/upload`;
    const options = {
      method: "GET",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    };
    try {
      const response = await axios(options);
      console.log(response);
      setcancellation(response.data)
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    getCancelMatch();
  }, []);


  return(
  <div>
    <div>
      <img src={cancellation.file_urls[0]} alt=""/>
      <img src={cancellation.file_urls[1]} alt=""/>
      <img src={cancellation.file_urls[2]} alt=""/>
      <img src={cancellation.file_urls[3]} alt=""/>
      <img src={cancellation.file_urls[4]} alt=""/>
      <img src={cancellation.file_urls[5]} alt=""/>
      <img src={cancellation.file_urls[6]} alt=""/>
      <img src={cancellation.file_urls[7]} alt=""/>
      <img src={cancellation.file_urls[8]} alt=""/>
      <img src={cancellation.file_urls[9]} alt=""/>
      </div>
  </div>

)
    }
export default Filess